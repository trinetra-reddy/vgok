import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FaGoogle, FaApple } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const SignUp = () => {
  const [activeTab, setActiveTab] = useState<"email" | "mobile">("email");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    mobile: "",
    otp: "",
    referral: "BIT30K",
    agree: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // API call logic here
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 to-white px-4">
      <div className="w-full max-w-md text-center mb-8">
        <Link to="/" className="block w-fit mx-auto mb-6">
          <img src={Logo} alt="VGOK Logo" className="h-12 w-auto" />
        </Link>
        <h1 className="text-2xl font-bold">You're invited to VGOK!</h1>
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
                ? "text-primary border-b-2 border-primary"
                : "text-gray-400"
            }`}
          >
            Email
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("mobile")}
            className={`px-4 py-2 font-semibold cursor-pointer ${
              activeTab === "mobile"
                ? "text-primary border-b-2 border-primary"
                : "text-gray-400"
            }`}
          >
            Mobile Number
          </button>
        </div>

        {/* Email Signup */}
        {activeTab === "email" && (
          <>
            <div className="mb-4">
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="mb-4 relative">
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
                👁️‍🗨️
              </span>
            </div>

            <div className="mb-4">
              <label className="text-gray-400 text-sm mb-1 block">
                Referral Code (Optional)
              </label>
              <div className="relative">
                <input
                  name="referral"
                  type="text"
                  value={formData.referral}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-400">
                  ✔️
                </span>
              </div>
            </div>
          </>
        )}

        {/* Mobile Signup */}
        {activeTab === "mobile" && (
          <>
            <div className="mb-4">
              <input
                name="mobile"
                type="tel"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="mb-4">
              <input
                name="otp"
                type="text"
                placeholder="Enter OTP"
                value={formData.otp}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </>
        )}

        <label className="flex items-start text-sm text-gray-400 mb-6">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mr-2 mt-1"
          />
         <span> By clicking “Get My Welcome Gifts”, you agree to our <a href="#" className="text-[#e85252] font-semibold hover:underline cursor-pointer">
            Terms of Service
          </a></span>
        </label>
{/* 
        <a href="#" className="text-[#e85252] font-semibold hover:underline cursor-pointer">
            Privacy Policy
          </a> */}
        <button
          type="submit"
          className="w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-teritory transition"
        >
          Get My Welcome Gifts
        </button>

        <div className="text-center my-4 text-sm text-gray-500">Or sign up with</div>

        <div className="flex justify-center gap-4">
          <button className="bg-[#2a2a2a] p-3 rounded-full hover:opacity-80 transition">
            <FaGoogle className="text-white" />
          </button>
          <button className="bg-[#2a2a2a] p-3 rounded-full hover:opacity-80 transition">
            <FaApple className="text-white" />
          </button>
          <button className="bg-[#2a2a2a] p-3 rounded-full hover:opacity-80 transition">
            <FaTelegramPlane className="text-white" />
          </button>
        </div>
        <p className="text-sm text-gray-600 mt-4 text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#e85252] font-semibold hover:underline"
          >
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
