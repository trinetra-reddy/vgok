import Logo from "../assets/logo.png";

const Forum = () => {
    const forumCategories = [
        {
            name: "Announcements",
            threads: 9,
            messages: 254,
            latest: {
                title: "GIVEAWAY: Insider Gaming 12 ...",
                time: "Today at 10:00 PM",
                author: "Abel",
            },
        },
        {
            name: "Official News",
            threads: 267,
            messages: "1K",
            latest: {
                title: "The Sims 1 and 2 Re-released B...",
                time: "Today at 6:56 AM",
                author: "Abel",
            },
        },
        {
            name: "Gaming Leaks and Rumors",
            threads: 135,
            messages: 900,
            latest: {
                title: "PlayStation’s Next State of Pla...",
                time: "Today at 3:40 AM",
                author: "peter420",
            },
        },
        {
            name: "General Gaming",
            threads: 100,
            messages: 867,
            latest: {
                title: "In-Game Photography",
                time: "Yesterday at 3:28 PM",
                author: "Abel",
            },
        },
        {
            name: "PlayStation",
            threads: 108,
            messages: "1.1K",
            latest: {
                title: "PlayStation Will Incentive Users...",
                time: "Yesterday at 7:36 PM",
                author: "Captain_F",
            },
        },
        {
            name: "Xbox",
            threads: 33,
            messages: 224,
            latest: {
                title: "Xbox Increases External Storag...",
                time: "Jan 22, 2025",
                author: "YeezyDude",
            },
        },
        {
            name: "Nintendo",
            threads: 26,
            messages: 134,
            latest: {
                title: "GALLERY: A Look At The Ninten...",
                time: "Jan 22, 2025",
                author: "YeezyDude",
            },
        },
    ];

    const forumData = [
        {
            category: "Bitcoin",
            sections: [
                {
                    title: "Bitcoin Discussion",
                    description:
                        "General discussion about the Bitcoin ecosystem that doesn't fit better elsewhere...",
                    moderators: ["hilariousandco"],
                    childBoards: ["Legal", "Press", "Meetups", "Important Announcements"],
                    posts: 2708058,
                    topics: 102670,
                    lastPost: {
                        author: "BIT-BENDER",
                        title: "Re: I (think) solved the...",
                        time: "Today at 01:20:00 PM",
                    },
                },
                {
                    title: "Development & Technical Discussion",
                    description:
                        "Technical discussion about Satoshi’s Bitcoin client and the Bitcoin network in general...",
                    moderators: ["gmaxwell", "achow101"],
                    childBoards: ["Wallet software"],
                    posts: 347823,
                    topics: 26312,
                    lastPost: {
                        author: "Charles-Tim",
                        title: "Re: Problem with phoenix...",
                        time: "Today at 01:24:00 PM",
                    },
                },
                {
                    title: "Mining",
                    description: "Generating bitcoins.",
                    moderators: ["gmaxwell"],
                    childBoards: [
                        "Mining support",
                        "Pools",
                        "Mining software (miners)",
                        "Hardware",
                        "Mining speculation",
                    ],
                    posts: 968081,
                    topics: 27822,
                    lastPost: {
                        author: "-ck",
                        title: "Re: [co YH] solo.ckpool...",
                        time: "Today at 11:57:29 AM",
                    },
                },
                {
                    title: "Bitcoin Technical Support",
                    description:
                        "Questions regarding issues with Bitcoin Core, nodes, the Bitcoin network...",
                    moderators: ["achow101"],
                    posts: 123348,
                    topics: 13463,
                    lastPost: {
                        author: "Cricktor",
                        title: "Re: Fun speed test for a...",
                        time: "Today at 11:04:44 AM",
                    },
                },
                {
                    title: "Project Development",
                    description:
                        "Organization of Bitcoin and related projects, bounty campaigns, advertising etc.",
                    posts: 188165,
                    topics: 16200,
                    lastPost: {
                        author: "algotrader99",
                        title: "Re: Visible Trading Proj...",
                        time: "Today at 10:24:27 AM",
                    },
                },
            ],
        },
    ];

    return (
        <>
            <div className="flex items-center justify-center min-h-[60vh] flex-col">
                <img src={Logo} alt="VGOK" className="h-[200px]" />
                <h1 className="text-5xl text-center my-8  flex item-center justify-center border-b text-primary italic">Coming soon...</h1>
            </div>

            {/* Table design start from here */}
            <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">


                {/* Forum Categories List */}
                <div className="bg-gray-900 text-white rounded-md divide-y divide-gray-700">
                    {/* Main Forum Title */}
                    <div className="bg-gradient-to-r from-black-500 to-purple-800 text-white text-lg font-bold p-1 rounded-md">
                        Main Forum
                    </div>
                    {forumCategories.map((category) => (
                        <div
                            key={category.name}
                            className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 py-3 hover:bg-gray-800 border-b border-purple-500"
                        >
                            <div className="flex items-start gap-4 w-30 md:w-3/4">
                                <div className="text-purple-400 text-2xl">💬</div>
                                <div>
                                    <div className="font-semibold text-lg">{category.name}</div>
                                </div>
                            </div>

                            <div className="w-20 md:w-1/4 text-sm text-gray-300 mt-2 md:mt-0">
                                <div className="text-xs text-gray-400">
                                    Threads
                                </div>
                                <div className="text-xs text-gray-400 text-white">
                                    {category.threads}
                                </div>
                            </div>

                            <div className="w-20 md:w-1/4 text-sm text-gray-300 mt-2 md:mt-0">
                                <div className="text-xs text-gray-400">
                                    Messages
                                </div>
                                <div className="text-xs text-gray-400 text-white">
                                    {category.messages}
                                </div>
                            </div>

                            <div className="w-full md:w-2/4 text-sm text-gray-300 mt-2 md:mt-0">
                                <div className="font-medium text-white">
                                    {category.latest.title}
                                </div>
                                <div className="text-xs text-gray-400">
                                    {category.latest.time} - <span className="text-purple-300">{category.latest.author}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bitcoin Table */}

                <div className="max-w-7xl mx-auto mt-8 border rounded shadow-sm">
                    {forumData.map((category, idx) => (
                        <div key={idx} className="border-b">
                            <div className="bg-[#7093b3] text-white px-4 py-2 font-bold">
                                {category.category}
                            </div>
                            {category.sections.map((section, sIdx) => (
                                <div
                                    key={sIdx}>
                                    <div className="grid grid-cols-[100px_1fr_1fr_100px_1fr] border-t hover:bg-gray-50 ">
                                        {/* forder section */}
                                        <div className="text-sm text-gray-700 flex items-center justify-center bg-[#ecedf3] border-r border-gray-300">
                                            <div className="w-10 h-10 bg-[#7fa0c3] rounded shadow-md flex items-center justify-center">
                                                <div className="w-6 h-1 bg-white rotate-12"></div>
                                            </div>
                                        </div>
                                        {/* Section info */}
                                        <div className="col-span-2 border-r border-gray-300 p-1">
                                            <div className="text-lg font-semibold text-[#7192ac]">
                                                {section.title}
                                            </div>
                                            <p className="text-sm text-gray-600 mt-1">
                                                {section.description}
                                            </p>
                                            <div className="text-xs mt-1 text-gray-500">
                                                Moderators: {(section.moderators || []).join(", ")}
                                            </div>
                                        </div>

                                        {/* Stats */}
                                        <div className="text-xs text-gray-700 border-r border-gray-300 bg-[#ecedf3] p-1 flex items-center justify-center flex-col">
                                            <div>{section.posts.toLocaleString()} Posts</div>
                                            <div>{section.topics.toLocaleString()} Topics</div>
                                        </div>

                                        {/* Last Post */}
                                        <div className="text-sm text-gray-700 p-1">
                                            <div>
                                                <span className="font-semibold">Last post by </span>
                                                <span className="text-[#828ba6]">{section.lastPost.author}</span>
                                            </div>
                                            <div className="italic text-gray-600">{section.lastPost.title}</div>
                                            <div className="text-xs">{section.lastPost.time}</div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 border-t bg-[#e0e1e8] p-1">
                                        <div className="text-xs mt-1 text-[#000]">
                                            Child Boards:{" "}
                                            <span className="font-medium text-[#5a82a7]">
                                                {section.childBoards || [].join(", ")}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}
export default Forum;
