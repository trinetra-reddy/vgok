// className="border border-[#4269c2] text-[#4269c2] px-4 py-2 rounded hover:bg-blue-950 hover:text-white transition-all flex items-center gap-2 min-h-[42px] cursor-pointer"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogTrigger,
  } from "@/components/ui/dialog";
  import { Button } from "@/components/ui/button";
  import { Label } from "@/components/ui/label";
  import { Input } from "@/components/ui/input";
  import { Plus } from "lucide-react";
  import { useForm } from "react-hook-form";
  import { toast } from "sonner";
  import { useEffect, useState } from "react";
  import { createForum, updateForum, ForumData } from "@/services/forumService"; // adjust path

  
  interface CreateOrEditForumModalProps {
    onCreateOrUpdate?: () => void;
    forum?: { id: string; title: string; content: string }; // If present = Edit mode
    trigger?: React.ReactNode;
  }
  
  export const CreateOrEditForumModal = ({
    onCreateOrUpdate,
    forum,
    trigger,
  }: CreateOrEditForumModalProps) => {
    const [open, setOpen] = useState(false);
    const isEdit = !!forum;
  
    const {
      register,
      handleSubmit,
      reset,
      setValue,
      formState: { errors },
    } = useForm<{ title: string; content: string }>();
  
    useEffect(() => {
      if (open && forum) {
        setValue("title", forum.title);
        setValue("content", forum.content);
      } else {
        reset();
      }
    }, [open, forum, reset, setValue]);
  
    const onSubmit = async (data: ForumData) => {
  try {
    if (isEdit && forum?.id) {
      await updateForum(forum.id, data);
      toast.success("Forum updated successfully.");
    } else {
      await createForum(data);
      toast.success("Forum created successfully.");
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
  
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold text-blue-950">
              {isEdit ? "Update Forum" : "Create Forum"}
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-500">
              {isEdit
                ? "Edit the details and click update."
                : "Fill in the details to add a new forum."}
            </DialogDescription>
          </DialogHeader>
  
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-2">
            <div>
              <Label htmlFor="title">Title <span className="text-red-500">*</span></Label>
              <Input
                id="title"
                {...register("title", { required: true })}
                className="mt-1 h-10 border border-gray-300 rounded px-3 text-sm"
              />
              {errors.title && <p className="text-sm text-red-500 mt-1">Title is required.</p>}
            </div>
  
            <div>
              <Label htmlFor="content">Description <span className="text-red-500">*</span></Label>
              <textarea
                id="content"
                {...register("content", { required: true })}
                className="mt-1 min-h-[100px] border border-gray-300 rounded px-3 py-2 text-sm w-full resize-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.content && <p className="text-sm text-red-500 mt-1">Description is required.</p>}
            </div>
  
            <DialogFooter className="mt-4">
              <Button
                type="submit"
                className="w-full bg-blue-950 hover:bg-blue-900 text-white font-semibold text-sm h-11 rounded"
              >
                {isEdit ? "Update" : "Submit"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    );
  };
  