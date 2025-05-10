import { useAuth } from '@/context/AuthContext';
import { Mail, Phone, MapPin, LogOut, Settings, Lock, HelpCircle, FileText, LayoutDashboard } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashboardWrapper = () => {
    const { user } = useAuth();
    const [userData, setUserData] = useState({ ...user });

    useEffect(() => {
        if (user) {
            setUserData({ ...user });
        }
    }, [user]);


    const handleLogout = () => {
        // redirect to login
    };

    return (
        <div className="min-h-screen bg-[#f9f9fb] flex flex-col md:flex-row p-6 gap-6">
            {/* Left Sidebar */}
            <aside className="w-full md:w-1/4 flex flex-col gap-6">
                <div className="bg-[#4269c2] text-white rounded-xl p-6 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-white rounded" />
                    <h2 className="text-lg font-semibold">{userData?.firstName}<br />{userData?.lastName}</h2>

                    <div className="mt-4 space-y-2 text-sm">
                        <div className="flex items-center gap-2 border-b border-dotted border-white border-opacity-30 pb-2">
                            <MapPin size={16} /> {userData?.country || "N/A"}
                        </div>
                        <div className="flex items-center gap-2 border-b border-dotted border-white border-opacity-30 pb-2">
                            <Mail size={16} /> {userData?.email}
                        </div>
                        <div className="flex items-center gap-2 border-b border-dotted border-white border-opacity-30 pb-2">
                            <Phone size={16} /> {userData?.mobile || "N/A"}
                        </div>
                    </div>
                </div>

                <nav className="bg-white rounded-xl shadow p-4 space-y-4">
                    <div className="flex items-center gap-2 font-semibold text-[#4269c2]">
                        <LayoutDashboard size={18} /> Dashboard
                    </div>
                    <Link to="./mytopics" className="flex items-center gap-2 text-gray-600 hover:text-[#4269c2]">
                        <FileText size={18} /> My Topics
                    </Link>
                    <div className="flex items-center gap-2 text-gray-600 hover:text-[#4269c2]">
                        <HelpCircle size={18} /> Support Ticket
                    </div>
                    <Link to="./profile" className="flex items-center gap-2 text-gray-600 hover:text-[#4269c2]">
                        <Settings size={18} /> Profile Setting
                    </Link>
                    <div className="flex items-center gap-2 text-gray-600 hover:text-[#4269c2]">
                        <Lock size={18} /> Change Password
                    </div>
                    <div onClick={handleLogout} className="flex items-center gap-2 text-red-500 cursor-pointer">
                        <LogOut size={18} /> Logout
                    </div>
                </nav>
            </aside>

            <main className="w-full md:w-3/4">
                <Outlet />
            </main>

        </div>
    );
}
export default DashboardWrapper;
