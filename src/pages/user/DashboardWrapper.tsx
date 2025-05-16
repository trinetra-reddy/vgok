import { useAuth } from '@/context/AuthContext';
import { getProfile } from '@/services/userService';
import { Mail, Phone, MapPin, LogOut, Settings, FileText, LayoutDashboard } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const DashboardWrapper = () => {
    const { user, setAuthenticatedUser } = useAuth();
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        address: "",
        state: "",
        zipcode: "",
        city: "",
        country: "",
        avatar_url: undefined,
        bio: "",
    });
    const navigate = useNavigate();

    useEffect(() => {
        getUserProfile();
    }, [user]);

    const getUserProfile = async () => {
        if (user?.token) {
            try {
                const profileDetails = await getProfile(user?.token);
                const userDetails = { ...user, ...profileDetails };
                setAuthenticatedUser(userDetails);
                setUserData(profileDetails);
            } catch (err) {
                if (err instanceof Error) {
                    toast.error(err.message);
                } else {
                    toast.error("Something went wrong.");
                }
            }
        }
    }

    const handleLogout = () => {
        setAuthenticatedUser(null);
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-[#f9f9fb] flex flex-col md:flex-row p-6 gap-6">
            {/* Left Sidebar */}
            <aside className="w-full md:w-1/4 flex flex-col gap-6">
                <div className="bg-blue-950 text-white rounded-xl p-6 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-white rounded">
                        <img
                            src={userData.avatar_url ?? undefined}
                            alt="Square Logo"
                            className="h-full object-cover bg-white shadow"
                        />
                    </div>
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
                        `flex items-center gap-2 px-3 py-2 rounded transition-colors ${isActive ? "bg-blue-950 text-white" : "text-gray-600 hover:text-[#4269c2] hover:bg-[#f0f0f0]"}`}>
                        <LayoutDashboard size={18} /> Dashboard
                    </NavLink>

                    <NavLink to="./mytopics" className={({ isActive }) =>
                        `flex items-center gap-2 px-3 py-2 rounded transition-colors ${isActive ? "bg-blue-950 text-white" : "text-gray-600 hover:text-[#4269c2] hover:bg-[#f0f0f0]"}`}>
                        <FileText size={18} /> My Topics
                    </NavLink>
                    <NavLink
                        to="/user/dashboard/profile"
                        className={({ isActive }) =>
                        `flex items-center gap-2 px-3 py-2 rounded transition-colors ${isActive ? "bg-blue-950 text-white" : "text-gray-600 hover:text-[#4269c2] hover:bg-[#f0f0f0]"}`}>
                        <Settings size={18} />Profile Settings
                    </NavLink>
                   
                    <div onClick={handleLogout} className="flex items-center gap-2 px-3 py-2 rounded cursor-pointer text-red-500 hover:bg-red-100 hover:text-red-600 transition-colors">
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
