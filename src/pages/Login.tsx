import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    // Add actual login logic here (e.g. call your API or Firebase)
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 to-white px-4">
      <div className="w-full max-w-md text-center mb-8">
      <Link to="/" className="block w-fit mx-auto mb-8">
        <img
            src={Logo}
            alt="VGuarantee Logo"
            className="h-20 w-auto hover:opacity-80 transition-opacity duration-300"
        />
        </Link>        
        <h1 className="text-3xl font-bold text-gray-900 mt-4">Welcome Back</h1>
        <p className="text-gray-600 mt-2">Login to your VGuarantee account</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg border border-gray-200"
      >
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
