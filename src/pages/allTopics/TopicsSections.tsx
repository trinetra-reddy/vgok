import { UserCircle } from "lucide-react";
import { TopicStats } from "./AllTopics";
const TopicsSection = ({ topic }: { topic: TopicStats }) => {
  console.log('topic', topic)
  return (
    <div className="bg-white p-4 rounded-lg flex flex-col md:flex-row justify-between gap-4 border border-blue-100 mb-4">
      {/* Left: Topic Info (60%) */}
      <div className="w-full md:w-3/5">
        <h2 className="text-lg font-semibold text-gray-800">{topic.title}</h2>
        <p className="text-sm text-gray-700 mt-1">{topic.description}</p>
        {topic.subForum && (
          <p className="text-sm text-gray-600 mt-2">
            <span className="font-medium">Sub Forum:</span>{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">
              {topic.subForum}
            </span>
          </p>
        )}
      </div>
      {/* Right: Stats (40%) */}
      <div className="w-full md:w-2/5 border-t md:border-t-0 md:border-l border-gray-300 md:pl-4 pt-4 md:pt-0">
        <div className="grid grid-cols-3 gap-2 text-sm text-gray-600">
          <div className="flex gap-1 flex-col">
            <div>
              <span className="font-bold">Topics</span></div>
            <div className="font-semibold text-black">{topic.total_topics}</div>
          </div>
          <div className="flex gap-1 flex-col">
            <div><span className="font-bold">Users</span></div>
            <div className="font-semibold text-black">{topic.total_users}</div>
          </div>
          <div className="flex gap-1 flex-col">
            <div><span className="font-bold">Activities</span></div>
            <div className="font-semibold text-black">{topic.activity}</div>
          </div>
        </div>

        {/* Latest Topic */}
        <div className="mt-4 border-t pt-2">
          <p className="text-sm text-gray-500 mb-3 font-medium">Latest Topic</p>
          <div className="flex items-start gap-2">
            <UserCircle size={24} className="text-gray-500" />
            <p className="text-sm font-semibold text-gray-800">
              {topic?.latest_topic?.title}
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default TopicsSection;
