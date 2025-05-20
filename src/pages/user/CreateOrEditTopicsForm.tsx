import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import TagsInput from "@/Components/user/TagsInput";

interface Category {
  id: string;
  title: string;
}

const CreateOrEditTopicsForm = ({
  isEdit = false,
  type,
  categories = [],
  isCategoryLoading = false,
}: {
  isEdit?: boolean;
  type?: string;
  categories?: Category[];
  isCategoryLoading?: boolean;
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
        <button
          type="button"
          className="absolute bottom-2 right-2 bg-[#4269c2] text-white p-2 rounded-full shadow"
        >
          🖊️
        </button>
      </div>

      {/* Category Select + Title */}
      <div className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Select Category <span className="text-red-500">*</span>
          </label>
          <select
            {...register("category_id", { required: true })}
            className={`w-full border rounded px-3 py-2 ${errors.category_id ? "border-red-500" : "border-gray-300"}`}
            disabled={isCategoryLoading}
          >
            <option value="">-- Select Category --</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.title} - {cat.forum_name}
              </option>
            ))}
          </select>
          {errors.category_id && (
            <p className="text-red-500 text-sm mt-1">Category is required</p>
          )}
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
          {typeof errors.title?.message === "string" && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>
      </div>

      {/* Tags */}
      <TagsInput name="tags" />

      {/* Video URL */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium mb-1">Video URL</label>
        <input
          type="text"
          {...register("video_url")}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      {/* Description */}
      <div className="md:col-span-2">
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          {...register("description")}
          rows={6}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      {/* Submit */}
      {type !== "view" && (
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
