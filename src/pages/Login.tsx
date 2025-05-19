import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { useAuth } from "../context/AuthContext";
import { toast } from "sonner";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { setAuthenticatedUser } = useAuth();

  //  Show toast if session expired
  useEffect(() => {
    if (localStorage.getItem("sessionExpired")) {
      toast.info("Session expired, please log in again.");
      localStorage.removeItem("sessionExpired");
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data?.error?.message || "Login failed");

      const token = data.session.access_token;
      const refreshToken = data.session.refresh_token;

      // temporarily set token to call /me
      setAuthenticatedUser({ ...data.user, id: data.user?.id, email: data.user?.email, token, refreshToken });

      await getProfile(token, refreshToken);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const getProfile = async (token: string, refreshToken: string) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/profile/me`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok && data) {
        setAuthenticatedUser({ ...data, token, refreshToken });

        const redirect = localStorage.getItem("redirectAfterLogin");
        localStorage.removeItem("redirectAfterLogin");

        if (redirect) navigate(redirect);
        else if (data?.role === "admin") navigate("/admin");
        else navigate("/user/dashboard");
      } else {
        navigate("/user/dashboard/profile"); // fallback if profile not complete
      }
    } catch (err) {
      setError("Profile fetch failed");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 to-white px-4">
      <div className="w-full max-w-md text-center mb-8">
        <Link to="/" className="block w-fit mx-auto mb-6">
          <img src={Logo} alt="VGOK Logo" className="h-28 w-auto hover:opacity-80 transition-opacity duration-300" />
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 mt-2">Welcome Back</h1>
        <p className="text-gray-600 mt-1">Login to your VGOK account</p>
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
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
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
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="••••••••"
          />
        </div>

        {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}

        <button
          type="submit"
          className={`w-full py-3 bg-primary text-white font-semibold rounded-lg hover:bg-teritory transition ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Submitting..." : "Login"}
        </button>

        <p className="text-sm text-gray-600 mt-4 text-center">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#e85252] font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
