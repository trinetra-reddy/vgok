
import { Layers, MessageCircle, } from "lucide-react";
import { Forum } from "../admin/ForumPage";
import { CategoryWithTopics } from "./AllTopics";

interface TopicsSidebarProps {
    categories: CategoryWithTopics[];
    forums: Forum[];
    onForumSelect: (forum: Forum) => void;
    onCategorySelect: (category: CategoryWithTopics) => void;
    activeForumId?: string | undefined
}
const TopicsSidebar = ({ categories, forums, activeForumId, onForumSelect, onCategorySelect }: TopicsSidebarProps) => {
    return (
        <aside className="w-full md:w-1/4 flex flex-col gap-6">
            <div className="bg-white text-gray-600 hover:text-[#4269c2] rounded-md shadow-md">
                <h3 className="flex items-center gap-2 px-3 py-2 rounded transition-colors bg-blue-950 text-white">Forum</h3>
                <ul className="text-sm">
                    {forums?.map((item: Forum, i: number) => (
                        <>
                            <li
                                key={i}
                                onClick={() => onForumSelect(item)}
                                className={`flex items-center gap-2 px-3 py-2 rounded cursor-pointer transition-colors
                                 ${activeForumId === item.id
                                        ? "bg-[#e1eaff] text-[#4269c2] font-semibold"
                                        : "text-gray-600 hover:text-[#4269c2] hover:bg-[#f0f0f0]"
                                    }`}>
                                <MessageCircle size={16} /> {item.title}
                            </li>
                        </>
                    ))}

                </ul>
            </div>

            <div className="bg-white text-gray-600 hover:text-[#4269c2] rounded-md shadow-md">
                <h3 className="flex items-center gap-2 px-3 py-2 rounded transition-colors bg-blue-950 text-white">Categories</h3>
                <ul className="text-sm">
                    {categories?.map((item: CategoryWithTopics, i: number) => (
                        <li onClick={() => onCategorySelect(item)} key={i}
                            className={`flex items-center gap-2 px-3 py-2 rounded transition-colors text-gray-600 hover:text-[#4269c2] hover:bg-[#f0f0f0] cursor-pointer   ${activeForumId === item.id
                                ? "bg-[#e1eaff] text-[#4269c2] font-semibold"
                                : "text-gray-600 hover:text-[#4269c2] hover:bg-[#f0f0f0]"
                                }`}>
                            <Layers size={16} /> {item.title}
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default TopicsSidebar;
