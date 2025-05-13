import { useApi } from "@/hooks/UseApi";
import { CheckCircle, XCircle, Loader2, List, ArrowRight, Frown } from "lucide-react";
import { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom';
const Dashboard = () => {
    const { request } = useApi();
    const [summary, setSummary] = useState({
        totalTopics: 0,
        pendingTopics: 0,
        approvedTopics: 0,
        rejectedTopics: 0
    });

    useEffect(() => {
        request({
            url: "/posts/dashboard/summary",
            method: "GET",
            onSuccess: (data) => setSummary(data)
        });
    }, []);

    const stats = [
        {
            label: "Total Topic",
            value: summary.totalTopics,
            icon: <List size={20} className="text-blue-500" />,
            border: "border-blue-100",
            text: "text-blue-500",
            arrow: "text-blue-500",
            iconBorder: "border border-blue-500"

        },
        {
            label: "Pending Topic",
            value: summary.pendingTopics,
            icon: <Loader2 size={20} className="text-orange-400" />,
            border: "border-orange-100",
            text: "text-orange-400",
            arrow: "text-orange-400",
            iconBorder: "border border-orange-400"
        },
        {
            label: "Approved Topic",
            value: summary.approvedTopics,
            icon: <CheckCircle size={20} className="text-green-500" />,
            border: "border-green-100",
            text: "text-green-500",
            arrow: "text-green-500",
            iconBorder: "border border-green-500"
        },
        {
            label: "Rejected Topic",
            value: summary.rejectedTopics,
            icon: <XCircle size={20} className="text-red-400" />,
            border: "border-red-100",
            text: "text-red-400",
            arrow: "text-red-400",
            iconBorder: "border border-red-400"
        },
    ];

    return (
        <div className="min-h-screen bg-[#f9f9fb] flex flex-col md:flex-row p-6 gap-6 w-full">
            {/* Right Panel */}
            <main className="flex-1 space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className={`flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border ${stat.border}`}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded bg-opacity-10 ${stat.text} ${stat.iconBorder}`} >
                                    {stat.icon}
                                </div>
                                <div>
                                    <div className="text-xl font-semibold">{stat.value}</div>
                                    <div className="text-sm text-gray-500">{stat.label}</div>
                                </div>
                            </div>
                            <ArrowRight size={18} className={`${stat.arrow} ${stat.iconBorder} rounded-full p-1`} />
                        </div>
                    ))}
                </div>
                {/* Latest Approved Topics Table */}
                <div className="">
                    <div className="py-4 font-bold text-gray-700 border-b">Latest Approved Topics</div>
                    <div className="overflow-x-auto bg-white rounded-xl shadow">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-blue-950 text-white">
                                <tr>
                                    <th className="px-6 py-3">TITLE</th>
                                    <th className="px-6 py-3">SUBCATEGORY</th>
                                    <th className="px-6 py-3">UP - DOWN VOTE</th>
                                    <th className="px-6 py-3">ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-center">
                                    <td colSpan={4} className="py-8 text-gray-400">
                                        {/* Data not found */}
                                        <div className="flex flex-col items-center justify-center text-gray-400">
                                            <Frown size={32} />
                                            <p className="mt-2 text-sm">No data found</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <Outlet />
        </div>
    );
}
export default Dashboard;
