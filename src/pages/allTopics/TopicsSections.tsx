import {
  Users,
  Clock,
  UserCircle,
  MessageSquareText,
} from "lucide-react";

export interface LatestTopic {
  id: string;
  title: string;
  created_at: string;
}

export interface TopicStats {
  id: string;
  title: string;
  description: string;
  total_topics?: number;
  total_users?: number;
  latest_topic?: LatestTopic | null;
  activity?: string;
  subForum?: string;
}

const TopicsSection = ({ topic }: { topic: TopicStats | any }) => {
  return (
    <div className="bg-white p-4 rounded-lg flex flex-col md:flex-row justify-between border border-gray-200 hover:shadow-sm transition mb-4">
      {/* LEFT: Forum Info */}
      <div className="md:w-3/5 pr-4">
        <h2 className="text-lg font-bold text-gray-800 mb-1">{topic.title}</h2>
        <p className="text-sm text-gray-600">{topic.description || "No description provided."}</p>
        {topic?.subForum && (
          <p className="text-sm text-blue-600 mt-2">
            <span className="font-semibold">Sub Forum:</span> {topic?.subForum}
          </p>
        )}
      </div>

      {/* RIGHT: Stats */}
      <div className="md:w-2/5 border-t md:border-t-0 md:border-l border-gray-200 pl-4 mt-4 md:mt-0">
        <div className="flex justify-between mb-4">
          <div className="flex flex-col items-center">
            <MessageSquareText className="text-blue-500 mb-1" size={18} />
            <span>Topics</span>
            <span className="font-semibold text-gray-800">{topic.total_topics || 0}</span>
          </div>
          <div className="flex flex-col items-center">
            <Users className="text-blue-500 mb-1" size={18} />
            <span>Users</span>
            <span className="font-semibold text-gray-800">{topic.total_users || 0}</span>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="text-blue-500 mb-1" size={18} />
            <span>Activity</span>
            <span className="font-semibold text-gray-800">{topic.activity || "--"}</span>
          </div>
        </div>

        {/* Latest Topic */}
        {topic.latest_topic && (
          <div className="border-t pt-3">
            <p className="text-sm text-gray-500 mb-1 font-medium">Latest Topic</p>
            <div className="flex items-start gap-2">
              <UserCircle size={22} className="text-gray-400" />
              <p className="text-sm font-semibold text-gray-800 leading-snug">
                {topic.latest_topic.title}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopicsSection;
