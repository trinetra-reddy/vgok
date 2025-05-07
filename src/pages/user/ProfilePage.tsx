const ProfilePage = () => {
    return (
        <div>
            {/* Profile Form */}
            <main className="flex-1 bg-white rounded-xl shadow p-6">
                <h2 className="text-lg font-semibold mb-6">Profile Setting</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">First Name<span className="text-red-500">*</span></label>
                        <input type="text" defaultValue="TrinethraReddy" className="w-full border border-gray-300 rounded px-3 py-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Last Name<span className="text-red-500">*</span></label>
                        <input type="text" defaultValue="Alamur" className="w-full border border-gray-300 rounded px-3 py-2" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">E-mail Address</label>
                        <input type="email" defaultValue="trinethraalamur@gmail.com" disabled className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Mobile Number</label>
                        <input type="text" defaultValue="9963789858" disabled className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Address<span className="text-red-500">*</span></label>
                        <input type="text" defaultValue="test" className="w-full border border-gray-300 rounded px-3 py-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">State<span className="text-red-500">*</span></label>
                        <input type="text" defaultValue="Andhra Pradesh" className="w-full border border-gray-300 rounded px-3 py-2" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Zip Code<span className="text-red-500">*</span></label>
                        <input type="text" defaultValue="515002" className="w-full border border-gray-300 rounded px-3 py-2" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">City<span className="text-red-500">*</span></label>
                        <input type="text" defaultValue="Andhrapradesh" className="w-full border border-gray-300 rounded px-3 py-2" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Country</label>
                        <input type="text" defaultValue="India" disabled className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Image</label>
                        <input type="file" className="w-full border border-gray-300 rounded px-3 py-2" />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-1">About Yourself</label>
                        <textarea rows={5} className="w-full border border-gray-300 rounded px-3 py-2"></textarea>
                    </div>

                    <div className="md:col-span-2">
                        <button type="submit" className="w-full bg-[#4269c2] hover:bg-[#3256a3] text-white py-3 rounded font-semibold">
                            Update Profile
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default ProfilePage;