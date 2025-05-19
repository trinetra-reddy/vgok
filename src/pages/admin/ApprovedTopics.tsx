import { useMemo, useState } from "react";
import PageHeader from "@/global/PageHeader";
import { useAuth } from "@/context/AuthContext";
import TopicTable from "@/Components/admin/TopicTable";
import { useTopics } from "@/hooks/useTopics";

const PAGE_SIZE = 10;

const ApprovedTopics = () => {
  const { user } = useAuth();
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isLoading, refetch } = useTopics("approved", PAGE_SIZE, (page - 1) * PAGE_SIZE);

  const topics = useMemo(() => Array.isArray(data?.data) ? data.data : [], [data]);

  const filteredTopics = useMemo(() => {
    const q = searchTerm.toLowerCase();
    return topics.filter((topic: any) =>
      topic.title?.toLowerCase().includes(q) ||
      topic.content?.toLowerCase().includes(q)
    );
  }, [topics, searchTerm]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Approved Topics"
        searchPlaceholder="Search by topic"
        onSearch={(q) => setSearchTerm(q)}
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

export default ApprovedTopics;
