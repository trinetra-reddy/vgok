import { useMemo, useState } from "react";
import PageHeader from "@/global/PageHeader";
import TopicTable from "@/Components/admin/TopicTable";
import CommonDialog from "@/Components/user/CommonDialog";
import { useAuth } from "@/context/AuthContext";
import { useTopics, useTopicMutations } from "@/hooks/useTopics";
import { useCategories } from "@/hooks/useCategories";

const MyTopicsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("All");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const { user } = useAuth();

  const { data, isLoading, refetch } = useTopics(
    status !== "All" ? status : undefined,
    pageSize,
    (page - 1) * pageSize
  );

  const { createTopic, updateTopic, deleteTopic } = useTopicMutations();
  const { categories } = useCategories({ token: user?.token });

  const topics = useMemo(() => Array.isArray(data?.data) ? data.data : [], [data]);

  const filteredTopics = useMemo(() => {
    const q = searchTerm.toLowerCase();
    return topics.filter((t: any) =>
      t.title?.toLowerCase().includes(q) || t.content?.toLowerCase().includes(q)
    );
  }, [topics, searchTerm]);


  const paginatedTopics = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredTopics.slice(start, start + pageSize);
  }, [filteredTopics, page, pageSize]);


  const topicStatusOptions = [
    { label: "All", value: "" },
    { label: "Pending", value: "pending" },
    { label: "Approved", value: "approved" },
    { label: "Rejected", value: "rejected" },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title="My Topics"
        searchPlaceholder="Search by topic"
        onSearch={setSearchTerm}
        statusValue={status}
        onStatusChange={setStatus}
        onStatusClick={() => refetch()}
        statusOptions={topicStatusOptions}
        createButton={
          <CommonDialog
            type="add"
            categories={categories}
            onCreateOrUpdate={() => refetch()}
            onCreate={createTopic}
            onUpdate={(id: string, data: any) => updateTopic({ id, data })}
          />
        }
      />

      <TopicTable
        data={paginatedTopics}
        loading={isLoading}
        onRefresh={() => refetch()}
        page={page}
        pageSize={pageSize}
        totalCount={filteredTopics.length}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
        onDelete={(id: string) => deleteTopic(id).then(refetch)}
        onUpdate={(payload: any) => updateTopic(payload).then(refetch)}
        onCreate={(data: any) => createTopic(data).then(refetch)}
        categories={categories}
        showActions={true}
      />
    </div>
  );
};

export default MyTopicsPage;
