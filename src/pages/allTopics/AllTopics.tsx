import TopicsSidebar from "./TopicsSidebar";
import TopicsSection from "./TopicsSections";
import { useUserToken } from "@/hooks/useUserToken";
import { useCategories } from "@/hooks/useCategories";
import { useForums } from "@/hooks/useForums";
import { useEffect, useState } from "react";

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
  activity?: string
  subForum?: any
}


const ForumLabPage = () => {
  const token = useUserToken();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedForums, setSelectedForums] = useState([]);
  const [activeForum, setActiveForum] = useState<TopicStats | null>(null);
  const {
    categories,
    isLoading: isCategoriesLoading
  } = useCategories({ token, limit: 100, offset: 0 });

  const {
    forums, isLoading,
  } = useForums({ token, limit: 100, withStats: true });

  useEffect(() => {
    setSelectedCategories(categories)
  }, [categories])

  useEffect(() => {
    setSelectedForums(forums)
  }, [forums])

  const filterForum = (selectedForum: TopicStats) => {
    const filteredForums = forums.filter((forum: TopicStats) => {
      return forum.title === selectedForum.title;
    })
    setSelectedForums(filteredForums || []);
    setActiveForum(selectedForum);
  }

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="min-h-screen flex flex-col md:flex-row gap-6 ">
        <TopicsSidebar categories={categories} forums={forums} onForumSelect={filterForum} activeForumId={activeForum?.id}/>
        <section className="rounded-md shadow text-white mb-6 w-full">
          <h2 className="text-lg font-semibold px-4 py-2 bg-blue-950 rounded">Forum</h2>
          <div className="space-y-4 bg-blue-50 p-4 text-black bg-white">
            <div className="w-full">
              {selectedForums.map((forum) =>
                <TopicsSection topic={forum} />)}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ForumLabPage;
