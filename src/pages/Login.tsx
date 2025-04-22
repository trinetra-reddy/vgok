import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Login = () => {
  const [activeTab, setActiveTab] = useState<"email" | "mobile">("email");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    mobile: "",
    otp: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data:", formData);

    if (activeTab === "email") {
      // Login with email/password
    } else {
      // Login with mobile/otp
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 to-white px-4">
      <div className="w-full max-w-md text-center mb-8">
        <Link to="/" className="block w-fit mx-auto mb-6">
          <img
            src={Logo}
            alt="VGOK Logo"
            className="h-28 w-auto hover:opacity-80 transition-opacity duration-300"
          />
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mt-2">Welcome Back</h1>
        <p className="text-gray-600 mt-1">Login to your VGOK account</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg border border-gray-200"
      >
        {/* Tabs */}
        <div className="flex mb-6 border-b border-gray-300">
          <button
            type="button"
            onClick={() => setActiveTab("email")}
            className={`px-4 py-2 font-semibold cursor-pointer ${
              activeTab === "email"
                ? "text-[#13ca82] border-b-2 border-[#13ca82]"
                : "text-gray-500"
            }`}
          >
            Email
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("mobile")}
            className={`px-4 py-2 font-semibold cursor-pointer ${
              activeTab === "mobile"
                ? "text-[#13ca82] border-b-2 border-[#13ca82]"
                : "text-gray-500"
            }`}
          >
            Mobile
          </button>
        </div>

        {activeTab === "email" && (
          <>
            <div className="mb-5">
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#13ca82]"
                placeholder="you@example.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Password</label>
              <input
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#13ca82]"
                placeholder="••••••••"
              />
            </div>
          </>
        )}

        {activeTab === "mobile" && (
          <>
            <div className="mb-5">
              <label className="block text-gray-700 font-semibold mb-2">
                Mobile Number
              </label>
              <input
                name="mobile"
                type="tel"
                required
                value={formData.mobile}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#13ca82]"
                placeholder="Enter mobile number"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">OTP</label>
              <input
                name="otp"
                type="text"
                required
                value={formData.otp}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#13ca82]"
                placeholder="Enter OTP"
              />
            </div>
          </>
        )}

        <button
          type="submit"
          className="w-full py-3 bg-[#13ca82] text-white font-semibold rounded-lg hover:bg-[#10b176] transition"
        >
          Log In
        </button>

        <p className="text-sm text-gray-600 mt-4 text-center">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#e85252] font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
