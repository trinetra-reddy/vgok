import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormError from "../FormError";
import { getFieldClass, validateForm } from "./ValidateForm";

const ProfilePage = () => {
    const navigate = useNavigate();
    const { login, user } = useAuth();

    const [formData, setFormData] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        address: "",
        state: "",
        zipcode: "",
        city: "",
        country: "",
        avatar_url: "",
        bio: "",
    });

    // Update formData when user is loaded
    useEffect(() => {
        if (user) {
            setFormData({
                id: user.id,
                firstName: user.firstName || "",
                lastName: user.lastName || "",
                email: user.email || "",
                mobile: user.mobile || "",
                address: user.address || "",
                state: user.state || "",
                zipcode: user.zipcode || "",
                city: user.city || "",
                country: user.country || "",
                avatar_url: user.avatar_url || "",
                bio: user.bio || "",
            });
        }
    }, [user]);

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const rules = {
        firstName: {
            required: true,
        },
        lastName: {
            required: true,
        },
        email: {
            required: false,
            // pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
            patternMessage: "Enter a valid email",
        },
        address: {
            required: true,
        },
        city: {
            required: true,
        },
        state: {
            required: true,
        },
        zipcode: {
            required: true,
        },

    };

    const handleChange = (e: any) => {
        const { name, value, files } = e.target;
        const updated = { ...formData, [name]: value };

        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));

        let error = validateForm(updated, rules, name);
        error = error[name] ? error : { [name]: '' }
        setErrors((prev) => ({ ...prev, ...error }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validateForm(formData, rules);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setErrors({});
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            console.log("Updated Profile Data:", formData);
            updateProfile(formData);
            // Add your API call here
        }
    };

    const updateProfile = async (formData: any) => {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/profile/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });
        const profileData = await res.json();
        if (profileData.data.id) {
            console.log('profile updated');
            login({ ...user,...profileData?.data });
            // redirect to the forum screen
            navigate("/forum")
        }
    }

    return (
        <div className="flex flex-col w-full">
            {/* Profile Form */}
            <main className="flex-1 bg-white rounded-xl shadow  ">
                <h2 className="text-lg font-semibold mb-2 border-b border-gray-300 p-3">Profile Setting</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 pt-2" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-sm font-medium mb-1">First Name<span className="text-red-500">*</span></label>
                        <input type="text" className={`w-full border border-gray-300 rounded px-3 py-2 ${getFieldClass(errors.firstName)}`}
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange} />
                        <FormError message={errors.firstName} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Last Name<span className="text-red-500">*</span></label>
                        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange} />
                        <FormError message={errors.lastName} />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">E-mail Address</label>
                        <input type="email" disabled className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <FormError message={errors.email} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Mobile Number</label>
                        <input type="text" disabled className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                        />
                        <FormError message={errors.mobile} />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Address<span className="text-red-500">*</span></label>
                        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                        <FormError message={errors.address} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">State<span className="text-red-500">*</span></label>
                        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2"
                            name="state"
                            value={formData.state}
                            onChange={handleChange} />
                        <FormError message={errors.state} />

                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Zip Code<span className="text-red-500">*</span></label>
                        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2"
                            name="zipcode"
                            value={formData.zipcode}
                            onChange={handleChange}
                        />
                        <FormError message={errors.zipcode} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">City<span className="text-red-500">*</span></label>
                        <input type="text" className="w-full border border-gray-300 rounded px-3 py-2"
                            name="city"
                            value={formData.city}
                            onChange={handleChange} />
                        <FormError message={errors.city} />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Country</label>
                        <input type="text" disabled className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100"
                            name="country"
                            value={formData.country}
                            onChange={handleChange} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Image</label>
                        <input type="file" className="w-full border border-gray-300 rounded px-3 py-2"
                            name="avatar_url"
                            onChange={handleChange} />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-1">About Yourself</label>
                        <textarea rows={5} className="w-full border border-gray-300 rounded px-3 py-2"
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}></textarea>
                    </div>

                    <div className="md:col-span-2">
                        <button type="submit" className="w-full bg-[#4269c2] hover:bg-[#3256a3] text-white py-3 rounded font-semibold cursor-pointer">
                            Update Profile
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default ProfilePage;