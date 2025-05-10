
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Pencil } from "lucide-react";
import { useApi } from "@/hooks/UseApi";
const CreateTopicPage = () => {
  const navigate = useNavigate();
  const { request, loading } = useApi();

  const [formData, setFormData] = useState({
    image: "",
    forum: "",
    title: "",
    tags: "",
    video_url: "",
    description: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const errs: any = {};
    if (!formData.forum) errs.forum = "Forum is required";
    if (!formData.title.trim()) errs.title = "Title is required";
    if (!formData.tags.trim()) errs.tags = "Tags are required";
    return errs;
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const payload = {
      ...formData,
      tags: [formData?.tags]
    }
    try {
      await request({
        url: "/posts/create",
        method: "POST",
        body: payload,
      });
      navigate("/user/dashboard/mytopics");
    } catch (err: any) {
      console.log(err.message || "Submission failed");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow space-y-6 flex flex-col w-full">
      <div className="flex items-center justify-between border-b border-gray-300 p-2">
        <h2 className="text-lg font-semibold">Topic Form</h2>
        <Link
          to={"/user/dashboard/mytopics"}
          className="border border-[#4269c2] text-[#4269c2] px-4 py-2 rounded hover:bg-[#4269c2] hover:text-white text-sm"
        >
          My Topics
        </Link>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3" onSubmit={handleSubmit}>
        {/* Image Upload (Placeholder) */}
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
            <Pencil size={14} />
          </button>
        </div>

        {/* Forum + Title */}
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Forum<span className="text-red-500">*</span>
            </label>
            <select
              name="forum"
              value={formData.forum}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 ${errors.forum ? "border-red-500" : "border-gray-300"}`}
            >
              <option value="">Select One</option>
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
            </select>
            {errors.forum && <p className="text-red-500 text-sm mt-1">{errors.forum}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Title<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`w-full border rounded px-3 py-2 ${errors.title ? "border-red-500" : "border-gray-300"}`}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>
        </div>

        {/* Tags */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">
            Tags<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className={`w-full border rounded px-3 py-2 ${errors.tags ? "border-red-500" : "border-gray-300"}`}
          />
          {errors.tags && <p className="text-red-500 text-sm mt-1">{errors.tags}</p>}
        </div>

        {/* Video URL */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Video URL</label>
          <input
            type="text"
            name="video_url"
            value={formData.video_url}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            name="description"
            rows={6}
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#4269c2] hover:bg-[#2f55a3] text-white py-2 rounded font-semibold"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTopicPage;