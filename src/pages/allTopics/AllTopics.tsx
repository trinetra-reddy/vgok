import TopicsSidebar from "./TopicsSidebar";
import TopicsSection from "./TopicsSections";
import { useUserToken } from "@/hooks/useUserToken";
import { useForums } from "@/hooks/useForums";
import { useEffect, useState } from "react";
import { useCategoryWithTopics } from "@/hooks/useCategoriesWithTopics";
import { Forum } from "../admin/ForumPage";
import { Topics } from "@/types";

export interface LatestTopic {
  id: string;
  title: string;
  created_at: string;
}

export interface TopicStats {
  id: string;
  title: string;
  description: string;
  type?: string | null;
  created_at?: string;
  created_by?: string | null;
  total_topics?: number;
  total_users?: number;
  latest_topic?: LatestTopic | null;
  activity?: string;
  subForum?: any;
}

export interface CategoryWithTopics {
  id: string;
  title: string;
  description: string;
  forum_id: string;
  forum: Forum;
  topics: Topics[];
}

const ForumLabPage = () => {
  const token = useUserToken();
  const [selectedCategories, setSelectedCategories] = useState<CategoryWithTopics[]>([]);
  const [selectedForums, setSelectedForums] = useState<TopicStats[]>([]);
  const [activeForum, setActiveForum] = useState<TopicStats | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryWithTopics | null>(null);

  const {
    categories,
    isLoading: isCategoriesLoading
  } = useCategoryWithTopics(token);

  const {
    forums,
    isLoading: isForumsLoading
  } = useForums({ token, limit: 100, withStats: true });

  useEffect(() => {
    if (forums.length > 0 && selectedForums.length === 0) {
      setSelectedForums(forums);
    }
  }, [forums]);

  const filterForum = (selectedForum: TopicStats) => {
    const filteredForums = forums.filter((forum: TopicStats) => forum.title === selectedForum.title);
    setSelectedForums(filteredForums);
    setActiveForum(selectedForum);
    setSelectedCategories([]);
    setActiveCategory(null);
  };

  const filterCategories = (selectedCategory: CategoryWithTopics) => {
    const filteredCategories = categories.filter((category: CategoryWithTopics) => category.title === selectedCategory.title);
    setSelectedCategories(filteredCategories);
    setActiveCategory(selectedCategory);
    setSelectedForums([]);
    setActiveForum(null);
  };

  const isLoading = isCategoriesLoading || isForumsLoading;

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="min-h-screen flex flex-col md:flex-row gap-6">
        {isLoading ? (
          <div className="w-full text-center py-12 text-gray-500 text-lg">Loading forums and categories...</div>
        ) : (
          <>
            <TopicsSidebar
              categories={categories}
              forums={forums}
              onForumSelect={filterForum}
              onCategorySelect={filterCategories}
              activeForumId={activeForum?.id || activeCategory?.id}
            />
            <div className="flex flex-col gap-4 w-full">
              {/* Forums section */}
              {selectedForums.length > 0 && (
                <section className="rounded-md shadow text-white mb-6 w-full">
                  <h2 className="text-lg font-semibold px-4 py-2 bg-blue-950 rounded">Forum</h2>
                  <div className="space-y-4 p-4 text-black bg-white">
                    {selectedForums.map((forum, idx) => (
                      <TopicsSection key={idx} topic={forum} />
                    ))}
                  </div>
                </section>
              )}

              {/* Categories section */}
              {selectedCategories.length > 0 && (
                <section className="rounded-md shadow text-white mb-6 w-full">
                  {selectedCategories.map((category, cIdx) => (
                    <div key={category.id}>
                      <h2 className="text-lg font-semibold px-4 py-2 bg-blue-950 rounded">{category.title}</h2>
                      <div className="space-y-4 p-4 text-black bg-white">
                        {category.topics.map((topic, tIdx) => (
                          <TopicsSection key={`${cIdx}-${tIdx}`} topic={topic} />
                        ))}
                      </div>
                    </div>
                  ))}
                </section>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ForumLabPage;
