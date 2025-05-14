import { useAuth } from '@/context/AuthContext';
import { Mail, Phone, MapPin, LogOut, Settings, Lock, HelpCircle, FileText, LayoutDashboard } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

const DashboardWrapper = () => {
    const { user, setAuthenticatedUser } = useAuth();
    const [userData, setUserData] = useState({ ...user });
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            setUserData({ ...user });
        }
    }, [user]);


    const handleLogout = () => {
        setAuthenticatedUser(null);
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-[#f9f9fb] flex flex-col md:flex-row p-6 gap-6">
            {/* Left Sidebar */}
            <aside className="w-full md:w-1/4 flex flex-col gap-6">
                <div className="bg-blue-950 text-white rounded-xl p-6 text-center">
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
                    <NavLink to="/user/dashboard" end className={({ isActive }) =>
                        `flex items-center rounded gap-2 text-gray-600 hover:text-[#4269c2] ${isActive ? "bg-blue-950 text-white px-1 py-1" : "text-gray-600"
                        } hover:bg-[#f0f0f0]`
                    }>
                        <LayoutDashboard size={18} /> Dashboard
                    </NavLink>

                    <NavLink to="./mytopics" className={({ isActive }) =>
                        `flex items-center rounded gap-2 text-gray-600 hover:text-[#4269c2] ${isActive ? "bg-blue-950 text-white px-1 py-1" : "text-gray-600"
                        } hover:bg-[#f0f0f0]`
                    }>
                        <FileText size={18} /> My Topics
                    </NavLink>

                    <div className="flex items-center gap-2 text-gray-600 hover:text-[#4269c2]">
                        <HelpCircle size={18} /> Support Ticket
                    </div>
                    <NavLink
                        to="/user/dashboard/profile"
                        className={({ isActive }) =>
                            `flex items-center rounded gap-2 text-gray-600 hover:text-[#4269c2] ${isActive ? "bg-blue-950 text-white px-1 py-1" : "text-gray-600"
                            } hover:bg-[#f0f0f0]`
                        } >
                        <Settings size={18} />Profile Settings
                    </NavLink>
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
