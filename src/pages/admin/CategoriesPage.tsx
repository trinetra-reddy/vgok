import { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import PageHeader from "@/global/PageHeader";
import { toast } from "sonner";
import { DeleteAlert } from "@/Components/common/DeleteAlert";
import { CreateOrEditCategoryModal } from "@/Components/admin/CreateCategoryModal";
import { formatDate } from "@/utils/index";
import { useUserToken } from "@/hooks/useUserToken";
import { useCategories } from "@/hooks/useCategories";

const CategoriesPage = () => {
  const token = useUserToken();
  const {
    categories,
    isLoading,
    deleteCategory,
    refetchCategories,
  } = useCategories({ token, limit: 100 });

  const [filteredCategories, setFilteredCategories] = useState(categories);

  useEffect(() => {
    setFilteredCategories(categories);
  }, [categories]);

  const handleSearch = (query: string) => {
    const q = query.toLowerCase();
    const results = categories.filter(
      (category: any) =>
        category?.title?.toLowerCase()?.includes(q) ||
        category?.description?.toLowerCase()?.includes(q)
    );
    setFilteredCategories(results);
  };

  const onClickDelete = async (id: string, title: string) => {
    await deleteCategory(id);
    toast.success(`"${title}" has been removed.`);
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="All Categories"
        searchPlaceholder="Search by Category"
        onSearch={handleSearch}
        createButton={
          <CreateOrEditCategoryModal onCreateOrUpdate={refetchCategories} />
        }
      />

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm table-auto">
          <thead className="bg-blue-950 text-white">
            <tr>
              <th className="text-left px-6 py-3 w-1/4">TITLE</th>
              <th className="text-left px-6 py-3 w-1/4">FORUM</th>
              <th className="text-left px-6 py-3 w-auto">DESCRIPTION</th>
              <th className="text-left px-4 py-3">DATE</th>
              <th className="text-left px-6 py-3 whitespace-nowrap w-1/4">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category: any, idx: number) => (
                <tr key={idx} className="border-t">
                  <td className="px-6 py-4 align-top">{category.title}</td>
                  <td className="px-6 py-4 align-top">{category.forum_name}</td>
                  <td className="px-4 py-3 align-top max-w-[300px]">
                    <div className="line-clamp-2 text-sm max-w-full">
                      {(category.description ?? "").length > 120
                        ? category.description?.slice(0, 120) + "..."
                        : category.description || "-"}
                    </div>
                    {(category.description ?? "").length > 120 && (
                      <CreateOrEditCategoryModal
                        category={category}
                        viewOnly
                        trigger={
                          <button className="text-xs text-blue-600 hover:underline mt-1 inline-block">
                            Read more
                          </button>
                        }
                      />
                    )}
                  </td>
                  <td className="px-4 py-3 align-top">
                    {formatDate(category.updated_at || category.created_at)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-wrap gap-2">
                      <CreateOrEditCategoryModal
                        category={category}
                        onCreateOrUpdate={refetchCategories}
                        trigger={
                          <button className="flex items-center gap-2 border border-green-500 text-green-500 px-3 py-1 rounded hover:bg-green-50 text-sm">
                            <Pencil size={16} /> Edit
                          </button>
                        }
                      />
                      <DeleteAlert
                        title="Delete Category?"
                        content="This category will be permanently removed."
                        confirmLabel="Remove"
                        onConfirm={() => onClickDelete(category.id, category.title)}
                        onSuccess={refetchCategories}
                        trigger={
                          <button className="flex items-center gap-2 border border-red-500 text-red-500 px-3 py-1 rounded hover:bg-red-50 text-sm">
                            <Trash2 size={16} /> Delete
                          </button>
                        }
                      />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center text-gray-500 px-6 py-6">
                  {isLoading ? "Loading..." : "No categories found."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoriesPage;
