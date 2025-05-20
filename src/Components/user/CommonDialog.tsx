import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { useForm, FormProvider } from "react-hook-form";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Topics } from "@/types/index";
import CreateOrEditTopicsForm from "@/pages/user/CreateOrEditTopicsForm";
import { Category } from "@/types/index";

interface CreateOrEditTopicsModalProps {
  onCreateOrUpdate?: () => void;
  formData?: Topics;
  trigger?: React.ReactNode;
  onCreate?: (data: Topics) => Promise<any>;
  onUpdate?: (id: string, data: Topics) => Promise<any>;
  categories: Category[];
  isCategoryLoading?: boolean;
  type?: string;
}

export const CommonDialog = ({
  onCreateOrUpdate,
  formData,
  trigger,
  type,
  onCreate,
  onUpdate,
  categories,
  isCategoryLoading = false,
}: CreateOrEditTopicsModalProps) => {
  const [open, setOpen] = useState(false);
  const isEdit = !!formData;

  const methods = useForm<Topics>({
    defaultValues: {
      title: formData?.title || "",
      content: formData?.content || "",
      description: formData?.description || "",
      status: formData?.status || "pending",
      tags: formData?.tags || "",
      video_url: formData?.video_url || "",
      category_id: formData?.category_id || "",
    },
  });

  const { reset } = methods;

  useEffect(() => {
    if (open && formData) {
      methods.reset({
        title: formData.title,
        content: formData.content,
        description: formData.description,
        status: formData.status,
        tags: formData.tags,
        video_url: formData.video_url,
        category_id: formData.category_id || "",
      });
    } else {
      methods.reset();
    }
  }, [open, formData, methods]);

  const onSubmit = async (data: Topics) => {
    try {
      const selectedCategory = categories.find(
        (cat) => cat.id === data.category_id
      );

      if (!selectedCategory) {
        toast.error("Invalid category selection.");
        return;
      }

      const enrichedData = {
        ...data,
        forum_id: selectedCategory.forum_id,
        forum_name: selectedCategory.forum_name,
        category_name: selectedCategory.title,
      };

      if (isEdit && formData?.id && onUpdate) {
        await onUpdate(formData.id, enrichedData);
      } else if (onCreate) {
        await onCreate(enrichedData);
      }

      onCreateOrUpdate?.();
      reset();
      setOpen(false);
    } catch (error) {
      toast.error("Something went wrong.");
      console.error(error);
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

      <DialogContent
        className="sm:max-w-2xl w-full"
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-blue-950">
            {type === "view"
              ? "View Topic"
              : isEdit
              ? "Update Topic"
              : "Create Topic"}
          </DialogTitle>
          {type !== "view" && (
            <DialogDescription className="text-sm text-gray-500">
              {isEdit
                ? "Edit the details and click update."
                : "Fill in the details to add a new topic."}
            </DialogDescription>
          )}
        </DialogHeader>

        <div className="max-h-[80vh] overflow-y-auto pr-2">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <CreateOrEditTopicsForm
                isEdit={isEdit}
                type={type}
                categories={categories}
                isCategoryLoading={isCategoryLoading}
              />
            </form>
          </FormProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CommonDialog;
