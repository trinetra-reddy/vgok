import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import TagsInput from "@/Components/user/TagsInput";
import RichTextEditor from "@/Components/common/RichTextEditor";

interface Category {
  id: string;
  title: string;
  forum_name?: string;
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
    setValue,
    watch,
  } = useFormContext();

  const isViewOnly = type === "view";

  // Auto-select category if not already selected
  const selectedCategoryId = watch("category_id");

  useEffect(() => {
    if (!selectedCategoryId && categories.length > 0) {
      const first = categories.find((cat) => cat.id === selectedCategoryId);
      if (!first && isEdit) {
        // fallback to the first matching ID from formData if available
        const defaultCat = categories.find((cat) => cat.id === selectedCategoryId);
        if (defaultCat) {
          setValue("category_id", defaultCat.id);
        }
      }
    }
  }, [categories, selectedCategoryId, setValue, isEdit]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3">
      {/* Category Select + Title */}
      
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">
            Select Category <span className="text-red-500">*</span>
          </label>
          <select
            {...register("category_id", { required: true })}
            className={`w-full border rounded px-3 py-2 ${errors.category_id ? "border-red-500" : "border-gray-300"
              }`}
            disabled={isViewOnly || isCategoryLoading}
          >
            <option value="">-- Select Category --</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.title} {cat.forum_name ? `- ${cat.forum_name}` : ""}
              </option>
            ))}
          </select>
          {errors.category_id && !isViewOnly && (
            <p className="text-red-500 text-sm mt-1">Category is required</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
            disabled={isViewOnly}
            className={`w-full border rounded px-3 py-2 ${errors.title ? "border-red-500" : "border-gray-300"
              }`}
          />
          {errors.title && !isViewOnly && typeof errors?.title?.message === "string" && (
            <p className="text-red-500 text-sm mt-1">{errors?.title?.message}</p>
          )}
        </div>
      {/* Tags */}
      <TagsInput name="tags" disabled={isViewOnly} />

      {/* Description */}
      <div className="md:col-span-2">
        <RichTextEditor name="description" defaultValue={""} readOnly={isViewOnly} />
      </div>
       {/* Image Upload */}
      <div className="relative md:col-span-2">
        <label className="block text-sm font-medium mb-1">Image</label>
        <img
          src="https://via.placeholder.com/380x315"
          alt="Preview"
          className="rounded border border-gray-300 min-h-[85%]"
        />
        {!isViewOnly && (
          <button
            type="button"
            className="absolute bottom-2 right-2 bg-[#4269c2] text-white p-2 rounded-full shadow"
          >
            🖊️
          </button>
        )}
      </div>
      {/* Submit */}
      {!isViewOnly && (
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
