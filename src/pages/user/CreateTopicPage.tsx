
import { Pencil } from "lucide-react";
import { Link } from "react-router-dom";
const CreateTopicPage = () => {
    return (
      <div className="bg-white rounded-xl shadow space-y-6 flex flex-col w-full">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-300 p-2">
          <h2 className="text-lg font-semibold">Topic Form</h2>
          <Link to={'/user/dashboard/mytopics'} className="border border-[#4269c2] text-[#4269c2] px-4 py-2 rounded hover:bg-[#4269c2] hover:text-white text-sm">
            My Topics
          </Link>
        </div>
  
        {/* Form Grid */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 p-3">
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
              <Pencil size={14} />
            </button>
          </div>
  
          {/* Forum + Title */}
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Forum<span className="text-red-500">*</span></label>
              <select className="w-full border border-gray-300 rounded px-3 py-2">
                <option>Select One</option>
                <option>BTC</option>
                <option>ETH</option>
              </select>
            </div>
  
            <div>
              <label className="block text-sm font-medium mb-1">Title<span className="text-red-500">*</span></label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
          </div>
  
          {/* Tags */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Tags<span className="text-red-500">*</span></label>
            <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
  
          {/* Video URL */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Video URL</label>
            <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>
  
          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea rows={6} className="w-full border border-gray-300 rounded px-3 py-2"></textarea>
          </div>
  
          {/* Submit */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-[#4269c2] hover:bg-[#2f55a3] text-white py-2 rounded font-semibold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }

export default CreateTopicPage;