const TopicsCard = ({
  title,
  description,
  subForum,
  stats,
  latestTopic,
}: {
  title: string;
  description: string;
  subForum?: string;
  stats: { topics: number; users: number; activity: string };
  latestTopic: string;
}) => (
  <div className="bg-white rounded-md p-4 flex flex-col md:flex-row justify-between gap-4 border">
    <div className="flex-1">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-700 mt-1">{description}</p>
      {subForum && (
        <div className="text-xs text-gray-500 mt-2">
          <strong>Sub Forum:</strong> <span className="text-blue-600">{subForum}</span>
        </div>
      )}
    </div>
    <div className="text-sm min-w-[180px] text-gray-600">
      <div className="flex justify-between">
        <span>Topics</span>
        <span>{stats.topics}</span>
      </div>
      <div className="flex justify-between">
        <span>Users</span>
        <span>{stats.users}</span>
      </div>
      <div className="flex justify-between">
        <span>Activities</span>
        <span>{stats.activity}</span>
      </div>
      <div className="mt-2 text-xs">
        <strong>Latest Topic:</strong>
        <div className="text-gray-800">{latestTopic}</div>
      </div>
    </div>
  </div>
);

export default TopicsCard;
