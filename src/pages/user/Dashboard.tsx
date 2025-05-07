import { Mail, Phone, MapPin, LogOut, Settings, Lock, HelpCircle, FileText, LayoutDashboard } from 'lucide-react';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-[#f9f9fb] flex flex-col md:flex-row p-6 gap-6">
            {/* Left Sidebar */}
            <aside className="w-full md:w-1/4 flex flex-col gap-6">
                <div className="bg-[#4269c2] text-white rounded-xl p-6 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-white rounded-full" />
                    <h2 className="text-lg font-semibold leading-tight">TrinethraReddy<br />Alamur</h2>
                    <div className="mt-4 space-y-2 text-sm">
                        <div className="flex items-center justify-center gap-2">
                            <MapPin size={16} /> India
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <Mail size={16} /> trinethraalamur@gmail.com
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <Phone size={16} /> 9963789858
                        </div>
                    </div>
                </div>

                <nav className="bg-white rounded-xl shadow p-4 space-y-4">
                    <div className="flex items-center gap-2 font-semibold text-[#4269c2]">
                        <LayoutDashboard size={18} /> Dashboard
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-[#4269c2]">
                        <FileText size={18} /> My Topics
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-[#4269c2]">
                        <HelpCircle size={18} /> Support Ticket
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-[#4269c2]">
                        <Settings size={18} /> Profile Setting
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 cursor-pointer hover:text-[#4269c2]">
                        <Lock size={18} /> Change Password
                    </div>
                    <div className="flex items-center gap-2 text-red-500 cursor-pointer">
                        <LogOut size={18} /> Logout
                    </div>
                </nav>
            </aside>

            {/* Right Panel */}
            <main className="flex-1 space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card title="Total Topic" value="1" color="blue" />
                    <Card title="Pending Topic" value="1" color="orange" />
                    <Card title="Approved Topic" value="0" color="green" />
                    <Card title="Rejected Topic" value="0" color="red" />
                </div>

                {/* Latest Approved Topics Table */}
                <div className="bg-white rounded-xl shadow overflow-hidden">
                    <div className="px-6 py-4 font-semibold text-gray-700 border-b">Latest Approved Topics</div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-[#4269c2] text-white">
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
                                        ☠ Data not found
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}


export default Dashboard;

function Card({ title, value, color }: { title: string; value: string; color: string }) {
    const colors: any = {
        blue: 'text-blue-600 bg-blue-100',
        green: 'text-green-600 bg-green-100',
        orange: 'text-orange-600 bg-orange-100',
        red: 'text-red-600 bg-red-100',
    };

    return (
        <div className="bg-white rounded-xl shadow p-4 flex items-center justify-between">
            <div>
                <div className="text-sm text-gray-500">{title}</div>
                <div className="text-2xl font-bold">{value}</div>
            </div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${colors[color]}`}>
                <span className="text-xl">→</span>
            </div>
        </div>
    );
}