import { useEffect, useMemo, useState } from "react";
import PageHeader from "@/global/PageHeader";
import { useAuth } from "@/context/AuthContext";
import CommonDialog from "@/Components/user/CommonDialog";
import TopicTable from "@/Components/admin/TopicTable";
import { useTopics } from "@/hooks/useTopics";

const PAGE_SIZE = 10;

const AllTopics = () => {
  const { user } = useAuth();
  const [status, setStatus] = useState("All");
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const topicStatusOptions = [
    { label: "All", value: "" },
    { label: "Pending", value: "pending" },
    { label: "Approved", value: "approved" },
    { label: "Rejected", value: "rejected" },
  ];

  const {
    data,
    isLoading,
    refetch,
  } = useTopics(status !== "All" ? status : undefined, PAGE_SIZE, (page - 1) * PAGE_SIZE);

  const topics = useMemo(() => Array.isArray(data?.data) ? data.data : [], [data]);

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

  return (
    <div className="space-y-6">
      <PageHeader
        title="All Topics"
        searchPlaceholder="Search by topic"
        onSearch={handleSearch}
        statusValue={status}
        onStatusChange={setStatus}
        onStatusClick={() => refetch()}
        statusOptions={topicStatusOptions}
        createButton={
          <CommonDialog
            onCreateOrUpdate={() => refetch()}
            type="add"
            onCreate={async () => Promise.resolve()}
            onUpdate={async () => Promise.resolve()}
          />
        }
      />

      <TopicTable
        data={filteredTopics}
        loading={isLoading}
        onRefresh={() => refetch()}
        page={page}
        pageSize={PAGE_SIZE}
        totalCount={topics.length}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </div>
  );
};

export default AllTopics;
