// src/pages/admin/ForumPage.tsx
const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-sm w-full bg-white rounded-xl shadow-lg p-8 text-center">
        {/* Logo */}
        <img
          src="/vgok-logo.png" // Replace with your actual image path
          alt="VGOK Logo"
          className="w-20 h-20 mx-auto mb-4 rounded-full"
        />

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-900 mb-1">Welcome Back</h2>
        <p className="text-sm text-gray-500 mb-6">Login to your VGOK account</p>

        {/* Email */}
        <div className="mb-4 text-left">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#13ca82]"
          />
        </div>

        {/* Password */}
        <div className="mb-6 text-left">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#13ca82]"
          />
        </div>

        {/* Login Button */}
        <button className="w-full bg-[#13ca82] hover:bg-[#12b67c] text-white py-3 rounded font-semibold transition">
          Log In
        </button>

        {/* Footer */}
        <p className="text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-[#e85252] font-semibold hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
  }
  export default LoginPage
  