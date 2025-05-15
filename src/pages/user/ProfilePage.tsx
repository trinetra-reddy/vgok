import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import FormError from "../FormError";
import { getFieldClass, validateForm } from "./ValidateForm";
import { supabase } from "@/supabaseClient";
import { getProfile } from "@/services/userService";
import { toast } from "sonner";

const ProfilePage = () => {
    const { setAuthenticatedUser, user } = useAuth();
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState("");
    const [profile, setProfile] = useState(user);

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

    // Update formData when user is loaded
    useEffect(() => {
        if (user && profile) {
            setFormData({
                id: user.id,
                firstName: profile.firstName || "",
                lastName: profile.lastName || "",
                email: profile.email || "",
                mobile: profile.mobile || "",
                address: profile.address || "",
                state: profile.state || "",
                zipcode: profile.zipcode || "",
                city: profile.city || "",
                country: profile.country || "",
                avatar_url: profile.avatar_url || "",
                bio: profile.bio || "",
            });
        }
    }, [profile]);

    useEffect(() => {
        getUserProfile();
    }, [])

    const getUserProfile = async () => {
        if (user?.token) {
            try {
                const profileDetails = await getProfile(user?.token);
                setProfile(profileDetails);
                setPreviewUrl(profileDetails.avatar_url);
            } catch (err) {
                if (err instanceof Error) {
                    toast.error(err.message);
                } else {
                    toast.error("Something went wrong.");
                }
            }
        }
    }
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selected = e.target.files?.[0];
        if (selected) {
            setFile(selected);
            setPreviewUrl(URL.createObjectURL(selected));
        }
    };

    const uploadAvatar = async () => {
        if (!file || !user) return;
        const fileExt = file.name.split('.').pop();
        const fileName = `${user.id}.${fileExt}`;
        const filePath = `${fileName}`;
        const { error: uploadError } = await supabase.storage
            .from("user-profile")
            .upload(filePath, file, { upsert: true });

        if (uploadError) {
            return;
        }

        const { data } = supabase.storage.from("user-profile").getPublicUrl(filePath);
        const avatarUrl = data?.publicUrl;
        return avatarUrl;
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

    const handleSubmit = async (e: React.FormEvent) => {
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
            if (file) {
                const url = await uploadAvatar();
                if (url) {
                    formData.avatar_url = url;
                }
                updateProfile(formData);
            } else {
                updateProfile(formData);
            }
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
            setAuthenticatedUser({ ...user, ...profileData?.data });
            toast.success("Profile updated successfully!");
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
                        <input type="file" accept="image/*" className="w-full border border-gray-300 rounded px-3 py-2"
                            name="avatar_url"
                            onChange={handleFileChange} />
                        {previewUrl && <img src={previewUrl} alt="Preview" className="w-24 h-24 rounded-full mt-2" />}
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