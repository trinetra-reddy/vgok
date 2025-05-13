import { useAuth } from "@/context/AuthContext";
import { getAllForums } from "@/services/forumService";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Forum } from "../admin/ForumPage";

const CreateOrEditTopicsForm = ({ isEdit = false, type }: { isEdit?: boolean; type?: string }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { user } = useAuth();
  const [forums, setForums] = useState<Forum[]>([]);
  const [limit] = useState(10);
  const [offset] = useState(0);

  const fetchForums = async () => {
    if (!user?.token) return;

    try {
      const res = await getAllForums(user.token, limit, offset);
      setForums(res.data || []);
    } catch (err) {
      console.error("Failed to fetch forums:", err);
    }
  };

  useEffect(() => {
    fetchForums();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3">
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
          <label className="block text-sm font-medium mb-1">Forum</label>
          <select
            {...register("content")}
            className={`w-full border rounded px-3 py-2 ${errors.content ? "border-red-500" : "border-gray-300"}`}
          >
            <option value="">Select One</option>
            {forums.map((forum) => (
              <option key={forum.id} value={forum.title}>
                {forum.title}
              </option>
            ))}
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
            {isEdit ? "Update" : "Submit"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateOrEditTopicsForm;
