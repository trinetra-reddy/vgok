import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Plus, Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import {
  createCategory,
  updateCategory,
  CategoryData,
} from "@/services/categoryService";
import { Button } from "../ui/button";
import { useAuth } from "@/context/AuthContext";
import { Label } from "../ui/label";
import { useUserToken } from "@/hooks/useUserToken";
import { useLazyForums } from "@/hooks/useLazyForums";


interface CreateOrEditCategoryModalProps {
  onCreateOrUpdate?: () => void;
  category?: {
    id: string;
    title: string;
    description: string;
    forum_id?: string;
  };
  trigger?: React.ReactNode;
  viewOnly?: boolean;
}

interface CategoryFormInputs {
  forum_id: string;
  title: string;
  description: string;
}

export const CreateOrEditCategoryModal = ({
  onCreateOrUpdate,
  category,
  trigger,
  viewOnly,
}: CreateOrEditCategoryModalProps) => {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();
  const token = useUserToken();
  const isEdit = !!category;
  const isViewOnly = viewOnly;

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<CategoryFormInputs>();

  const { forums, isLoading: isForumLoading, refetch, isFetched } = useLazyForums(token);
  
  useEffect(() => {
    if (open && !isFetched && token) {
      // refetch forums data 
      refetch();
    }
  }, [open, token, isFetched, refetch]);
  
  useEffect(() => {
    if (open && category) {
      setValue("title", category.title);
      setValue("description", category.description);
      if (category.forum_id) setValue("forum_id", category.forum_id);
    } else {
      reset();
    }
  }, [open, category, reset, setValue]);

  const onSubmit = async (formData: CategoryFormInputs) => {
    const { title, description, forum_id } = formData;
    const selectedForum = forums.find((f:any) => f.id === forum_id);
    const forum_name = selectedForum?.title || "";
    const payload: CategoryData = {
      title,
      description: description,
      forumId: forum_id,
      forum_name
    };

    try {
      if (user) {
        setIsSubmitting(true);
        if (isEdit && category?.id) {
          await updateCategory(category.id, payload, user.token);
          toast.success("Category updated successfully.");
        } else {
          await createCategory(payload, user.token);
          toast.success("Category created successfully.");
        }
        onCreateOrUpdate?.();
        reset();
        setOpen(false);
      }
    } catch (error) {
      toast.error("Something went wrong.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button
            variant="outline"
            className="flex items-center gap-2 border border-[#4269c2] text-[#4269c2] hover:bg-blue-950 hover:text-white min-h-[42px] cursor-pointer"
          >
            <Plus size={16} /> Create New
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-2xl w-full">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-blue-950">
            {isViewOnly
              ? "View Category"
              : isEdit
              ? "Update Category"
              : "Create Category"}
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500">
            {isEdit
              ? "Edit the details and click update."
              : "Fill in the details to add a new category."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-2">
          {/* Forum Select */}
          <div>
            <Label htmlFor="forum">
              Select Forum <span className="text-red-500">*</span>
            </Label>
            <select
              id="forum"
              {...register("forum_id", { required: true })}
              className="mt-1 h-10 border border-gray-300 rounded px-3 text-sm w-full"
              defaultValue=""
              disabled={isForumLoading || isViewOnly}
            >
              {isForumLoading ? (
                <option>Loading forums...</option>
              ) : (
                <>
                  <option value="" disabled>
                    -- Select a forum --
                  </option>
                  {forums.map((forum: any) => (
                    <option key={forum.id} value={forum.id}>
                      {forum.title}
                    </option>
                  ))}
                </>
              )}
            </select>
            {errors.forum_id && (
              <p className="text-sm text-red-500 mt-1">
                Forum selection is required.
              </p>
            )}
          </div>

          {/* Title Input */}
          <div>
            <Label htmlFor="title">
              Title <span className="text-red-500">*</span>
            </Label>
            <Input
              disabled={isViewOnly}
              id="title"
              {...register("title", { required: true })}
              className="mt-1 h-10 border border-gray-300 rounded px-3 text-sm"
            />
            {!isViewOnly && errors.title && (
              <p className="text-sm text-red-500 mt-1">Title is required.</p>
            )}
          </div>

          {/* Description Input */}
          <div>
            <Label htmlFor="description">
              Description <span className="text-red-500">*</span>
            </Label>
            <textarea
              id="description"
              disabled={isViewOnly}
              {...register("description", { required: true })}
              className="mt-1 min-h-[100px] border border-gray-300 rounded px-3 py-2 text-sm w-full resize-none focus:ring-2 focus:ring-blue-500"
            />
            {!isViewOnly && errors.description && (
              <p className="text-sm text-red-500 mt-1">
                Description is required.
              </p>
            )}
          </div>

          {/* Submit */}
          {!isViewOnly && (
            <DialogFooter className="mt-4">
              <Button
                type="submit"
                className="w-full bg-blue-950 hover:bg-blue-900 text-white font-semibold text-sm h-11 rounded flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                    {isEdit ? "Updating..." : "Submitting..."}
                  </>
                ) : isEdit ? (
                  "Update"
                ) : (
                  "Submit"
                )}
              </Button>
            </DialogFooter>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};
