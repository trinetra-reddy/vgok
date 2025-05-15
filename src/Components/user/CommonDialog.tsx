import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useForm, FormProvider } from "react-hook-form";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Topics } from "@/pages/user/MyTopicsPage";
import CreateOrEditTopicsForm from "@/pages/user/CreateOrEditTopicsForm";
import { useAuth } from "@/context/AuthContext";
import { getAllForums } from "@/services/forumService";
import { Forum } from "@/pages/admin/ForumPage";


interface CreateOrEditTopicsModalProps {
  onCreateOrUpdate?: () => void;
  formData?: Topics; // If present = Edit mode
  trigger?: React.ReactNode;
  onCreate?: (data: Topics) => Promise<any>;
  onUpdate?: (id: string, data: Topics) => Promise<any>;
  type?: string
}

export const CommonDialog = ({
  onCreateOrUpdate,
  formData,
  trigger,
  type,
  onCreate,
  onUpdate
}: CreateOrEditTopicsModalProps) => {
  const [open, setOpen] = useState(false);
  const [forums, setForums] = useState<Forum[]>([]);
  const { user } = useAuth();
  const isEdit = !!formData;
  const {
    reset,
  } = useForm<Topics>();

  const methods = useForm<Topics>({
    defaultValues: {
      title: formData?.title || "",
      content: formData?.content || "",
      description: formData?.description || "",
      status: formData?.status || "pending",
      tags: formData?.tags || "",
      // video_url: formData?.video_url || "",
    },
  });


  useEffect(() => {
    if (open && formData) {
      methods.reset({
        title: formData.title,
        content: formData.content,
        description: formData.description,
        status: formData.status,
        tags: formData.tags,
        video_url: formData.video_url,
      });
    } else {
      methods.reset();
    }
  }, [open, formData, methods, forums]);

  useEffect(() => {
    if (user) {
      fetchForums();
    }
  }, [user]);

  const fetchForums = async () => {
    if (!user?.token) return;

    try {
      const res = await getAllForums(user.token);
      setForums(res.data || []);
    } catch (err) {
      console.error("Failed to fetch forums:", err);
    }
  };

  const onSubmit = async (data: Topics) => {
    console.log('onSubmit')
    try {
      if (isEdit && formData?.id && onUpdate) {
        await onUpdate(formData.id, data); // Call injected handler
      } else {
        if (data && onCreate) {
          await onCreate(data); // Call injected handler
        }

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

      <DialogContent className="sm:max-w-md"
        onInteractOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}>
        {type !== 'view' && (<DialogHeader>
          <DialogTitle className="text-lg font-bold text-blue-950">
            {isEdit ? "Update Topic" : "Create Topic"}
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500">
            {isEdit
              ? "Edit the details and click update."
              : "Fill in the details to add a new topic."}
          </DialogDescription>
        </DialogHeader>
        )}

        <div className="max-h-[80vh] overflow-y-auto pr-2">
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <CreateOrEditTopicsForm isEdit={isEdit} type={type} forum={forums} />
            </form>
          </FormProvider>
        </div>

      </DialogContent>
    </Dialog>
  );
};


export default CommonDialog;