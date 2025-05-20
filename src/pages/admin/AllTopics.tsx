import { useMemo, useState } from "react";
import PageHeader from "@/global/PageHeader";
import CommonDialog from "@/Components/user/CommonDialog";
import TopicTable from "@/Components/admin/TopicTable";
import { useTopics } from "@/hooks/useTopics";
import { useUserToken } from "@/hooks/useUserToken";
import { useCategories } from "@/hooks/useCategories";
import { createTopic, updateTopic } from "@/services/userService";
import { toast } from "sonner";

const PAGE_SIZE = 10;

const AllTopics = () => {
  const [status, setStatus] = useState("All");
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const token = useUserToken();

  const {
    data: topicData,
    isLoading: isTopicsLoading,
    refetch: refetchTopics,
  } = useTopics(status !== "All" ? status : undefined, PAGE_SIZE, (page - 1) * PAGE_SIZE);

  const {
    categories,
    isLoading: isCategoriesLoading
  } = useCategories({ token, limit: 100, offset: 0 });

  const topics = useMemo(() => Array.isArray(topicData?.data) ? topicData.data : [], [topicData]);

  const filteredTopics = useMemo(() => {
    const q = searchTerm.toLowerCase();
    return topics.filter((topic: any) =>
      topic.title?.toLowerCase().includes(q) ||
      topic.content?.toLowerCase().includes(q)
    );
  }, [topics, searchTerm]);

  const handleSearch = (query: string) => {
    setSearchTerm(query);
  };

  const handleCreate = async (data: any) => {
    if (!token) return;
    try {
      await createTopic(data, token);
      toast.success("Topic created successfully.");
      refetchTopics();
    } catch (error) {
      toast.error("Failed to create topic.");
    }
  };

  const handleUpdate = async (id: string, data: any) => {
    if (!token) return;
    try {
      await updateTopic(id, data, token);
      toast.success("Topic updated successfully.");
      refetchTopics();
    } catch (error) {
      toast.error("Failed to update topic.");
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="All Topics"
        searchPlaceholder="Search by topic"
        onSearch={handleSearch}
        statusValue={status}
        onStatusChange={setStatus}
        onStatusClick={() => refetchTopics()}
        statusOptions={[
          { label: "All", value: "" },
          { label: "Pending", value: "pending" },
          { label: "Approved", value: "approved" },
          { label: "Rejected", value: "rejected" },
        ]}
        createButton={
          <CommonDialog
            categories={categories}
            isCategoryLoading={isCategoriesLoading}
            onCreateOrUpdate={() => refetchTopics()}
            type="add"
            onCreate={handleCreate}
            onUpdate={handleUpdate}
          />
        }
      />

      <TopicTable
        data={filteredTopics}
        loading={isTopicsLoading}
        categories={categories}
        isCategoryLoading={isCategoriesLoading}
        onRefresh={() => refetchTopics()}
        page={page}
        pageSize={PAGE_SIZE}
        totalCount={topics.length}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </div>
  );
};

export default AllTopics;
