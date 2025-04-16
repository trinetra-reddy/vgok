
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Replace with actual logic / API call
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 to-white px-4">
      <div className="w-full max-w-md text-center mb-8">
      <Link to="/" className="block w-fit mx-auto mb-8">
        <img
            src={Logo}
            alt="VGOK Logo"
            className="h-30 w-auto hover:opacity-80 transition-opacity duration-300"
        />
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mt-4">Create Your Account</h1>
        <p className="text-gray-600 mt-2">Join VGOK to protect your digital transactions.</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg border border-gray-200"
      >
        <div className="mb-5">
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#13ca82]"
            placeholder="Your name"
          />
        </div>

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
          Sign Up
        </button>

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
