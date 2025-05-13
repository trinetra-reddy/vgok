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
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Topics } from "@/pages/user/MyTopicsPage";


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
  const isEdit = !!formData;

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Topics>();

  useEffect(() => {
    if (open && formData) {
      setValue("title", formData.title);
      setValue("content", formData.content);
      setValue("description", formData.description);
      setValue('status', formData.status)
      setValue('tags', formData.tags)
    } else {
      reset();
    }
  }, [open, formData, reset, setValue]);

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
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-blue-950">
            {isEdit ? "Update Topic" : "Create Topic"}
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-500">
            {isEdit
              ? "Edit the details and click update."
              : "Fill in the details to add a new topic."}
          </DialogDescription>
        </DialogHeader>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3" onSubmit={handleSubmit(onSubmit)}>
          {/* Image Upload */}
          <div className="relative">
            <label className="block text-sm font-medium mb-1">Image</label>
            <img
              src="https://via.placeholder.com/380x315"
              alt="Preview"
              className="rounded border border-gray-300 min-h-[85%]"
            />
            <button type="button" className="absolute bottom-2 right-2 bg-[#4269c2] text-white p-2 rounded-full shadow">
              🖊️
            </button>
          </div>

          {/* Forum + Title */}
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Forum
              </label>
              <select
                {...register("content")}
                className={`w-full border rounded px-3 py-2 ${errors.content ? "border-red-500" : "border-gray-300"}`}
              >
                <option value="">Select One</option>
                <option value="BTC">BTC</option>
                <option value="ETH">ETH</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Title<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                {...register("title", { required: "Title is required" })}
                className={`w-full border rounded px-3 py-2 ${errors.title ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
            </div>
          </div>

          {/* Tags */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Tags<span className="text-red-500">*</span></label>
            <input
              type="text"
              {...register("tags", { required: "Tags are required" })}
              className={`w-full border rounded px-3 py-2 ${errors.tags ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.tags && <p className="text-red-500 text-sm mt-1">{errors.tags.message}</p>}
          </div>

          {/* Video URL */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Video URL</label>
            <input type="text" {...register("video_url")} className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea {...register("description")} rows={6} className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>

          {/* Submit */}
          {type !== 'view' && (
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-[#4269c2] hover:bg-[#2f55a3] text-white py-2 rounded font-semibold"
              >
                Submit
              </button>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};


export default CommonDialog;