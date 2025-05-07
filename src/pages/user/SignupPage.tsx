import { Check, Eye } from "lucide-react";
import { useState } from "react";

// src/pages/admin/ForumPage.tsx
const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-sm w-full text-center">
        <img
          src="/vgok-logo.png" // Replace with actual image path
          alt="VGOK Logo"
          className="w-20 h-20 mx-auto mb-4 rounded-full"
        />
        <h2 className="text-xl font-semibold mb-6">You're invited to VGOK!</h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#13ca82]"
        />

        {/* Password with toggle */}
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full px-4 py-3 pr-10 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#13ca82]"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-500"
          >
            <Eye size={20} />
          </button>
        </div>

        {/* Referral Code */}
        <div className="relative mb-4">
          <label className="text-sm text-gray-400 block text-left mb-1">Referral Code (Optional)</label>
          <input
            type="text"
            defaultValue="BIT30K"
            className="w-full px-4 py-3 pr-8 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#13ca82]"
          />
          <Check size={20} className="absolute right-3 top-10 text-green-500" />
        </div>

        {/* Terms Checkbox */}
        <label className="flex items-start text-sm mb-4 text-left space-x-2">
          <input type="checkbox" defaultChecked className="mt-1 mr-2 text-[#13ca82]" />
          <span>
            By clicking “Get My Welcome Gifts”, you agree to our{" "}
            <a href="#" className="text-[#e85252] font-semibold">
              Terms of Service
            </a>
          </span>
        </label>

        {/* CTA Button */}
        <button className="w-full bg-[#13ca82] hover:bg-[#12b67c] text-white py-3 rounded font-semibold mb-4 transition">
          Get My Welcome Gifts
        </button>

        {/* Divider */}
        <p className="text-sm text-gray-500 mb-4">Or sign up with</p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-4">
          <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
            <img src="/google.svg" alt="Google" className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
            <img src="/apple.svg" alt="Apple" className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100">
            <img src="/telegram.svg" alt="Telegram" className="w-5 h-5" />
          </button>
        </div>

        {/* Already have account */}
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <a href="#" className="text-red-500 font-medium">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignupPage
