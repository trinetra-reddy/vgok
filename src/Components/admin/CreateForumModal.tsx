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
import { Button } from "../ui/button";
import { useAuth } from "@/context/AuthContext";
import { Label } from "../ui/label";
import { ForumData, createForum, updateForum } from "@/services/forumService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface CreateOrEditForumModalProps {
  onCreateOrUpdate?: () => void;
  forum?: { id: string; title: string; description: string };
  trigger?: React.ReactNode;
  viewOnly?: boolean;
}

export const CreateOrEditForumModal = ({
  onCreateOrUpdate,
  forum,
  trigger,
  viewOnly = false,
}: CreateOrEditForumModalProps) => {
  const isEdit = !!forum;
  const isViewOnly = viewOnly;
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ForumData>();

  useEffect(() => {
    if (open && forum) {
      setValue("title", forum.title);
      setValue("description", forum.description);
    } else {
      reset();
    }
  }, [open, forum, reset, setValue]);

  const mutation = useMutation({
    mutationFn: async (data: ForumData) => {
      if (!user?.token) throw new Error("Missing token");

      if (isEdit && forum?.id) {
        return updateForum(forum.id, data, user.token);
      } else {
        return createForum(data, user.token);
      }
    },
    onSuccess: () => {
      toast.success(`Forum ${isEdit ? "updated" : "created"} successfully.`);
      queryClient.invalidateQueries({ queryKey: ["forums"] });
      onCreateOrUpdate?.();
      setOpen(false);
    },
    onError: (error: any) => {
      console.error(error);
      toast.error("Something went wrong.");
    },
  });

  const onSubmit = (data: ForumData) => {
    mutation.mutate(data);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger ?? (
          <Button
            variant="outline"
            className="flex items-center gap-2 border border-[#4269c2] text-[#4269c2] hover:bg-blue-950 hover:text-white min-h-[42px] cursor-pointer"
          >
            <Plus size={16} /> Create Forum
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-2xl w-full">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-blue-950">
            {isViewOnly
              ? "View Forum"
              : isEdit
              ? "Update Forum"
              : "Create Forum"}
          </DialogTitle>
          {!isViewOnly && (
            <DialogDescription className="text-sm text-gray-500">
              {isEdit
                ? "Edit the details and click update."
                : "Fill in the details to add a new forum."}
            </DialogDescription>
          )}
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 mt-2"
          autoComplete="off"
        >
          <div>
            <Label htmlFor="title">
              Title <span className="text-red-500">*</span>
            </Label>
            <Input
              id="title"
              {...register("title", { required: true })}
              disabled={isViewOnly}
              className="mt-1 h-10 border border-gray-300 rounded px-3 text-sm bg-white"
            />
            {!isViewOnly && errors.title && (
              <p className="text-sm text-red-500 mt-1">Title is required.</p>
            )}
          </div>

          <div>
            <Label htmlFor="description">
              Description <span className="text-red-500">*</span>
            </Label>
            <textarea
              id="description"
              {...register("description", { required: true })}
              disabled={isViewOnly}
              className="mt-1 min-h-[120px] border border-gray-300 rounded px-3 py-2 text-sm w-full resize-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
            {!isViewOnly && errors.description && (
              <p className="text-sm text-red-500 mt-1">
                Description is required.
              </p>
            )}
          </div>

          {!isViewOnly && (
            <DialogFooter className="mt-4">
              <Button
                type="submit"
                className="w-full bg-blue-950 hover:bg-blue-900 text-white font-semibold text-sm h-11 rounded flex items-center justify-center"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? (
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
