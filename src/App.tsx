import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { Toaster } from "sonner";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Token from "./pages/Token";
import Tokenomics from "./pages/Tokenomics";
import NFT from "./pages/NFT";
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import TokenRoadMap from "./pages/TokenRoadMap";
import NFTWhitepaper from "./pages/NFTWhitepaper";
import Forum from "./pages/Forum";
import { LandingPage } from "./pages/admin/LandingPage";
import { UserLandingPage } from "./pages/user/UserLandingPage";
import AppHeader from "./components/layout/AppHeader";
import PrivateRoute from "./Components/auth/PrivateRoute";
import Unauthorized from "./pages/Unauthorized";
import AuthEffect from "./Components/AuthEffect";

// A wrapper component to apply conditional layout
const AppRoutes = () => {
  const location = useLocation();

  const isAdminOrUserPath =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/user");
  const hideHeaderPaths = ["/login", "/signup"];
  const shouldHidePublicHeader = hideHeaderPaths.includes(location.pathname);

  return (
    <>
      {/* Show AppHeader for admin/user routes */}
      {isAdminOrUserPath && <AppHeader />}

      {/* Show public Header for all other routes except /login and /signup */}
      {!isAdminOrUserPath && !shouldHidePublicHeader && <Header />}

      {/* it will call after the signup with google AuthEffect*/}
      <AuthEffect />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/token" element={<Token />} />
        <Route path="/tokenomics" element={<Tokenomics />} />
        <Route path="/token-roadmap" element={<TokenRoadMap />} />
        <Route path="/nft" element={<NFT />} />
        <Route path="/nft-whitepaper" element={<NFTWhitepaper />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/unauthorized" element={<Unauthorized />} />


        {/* Protected: Admin */}
        <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
          <Route path="/admin/*" element={<LandingPage />} />
        </Route>

        {/* Protected: User */}
        <Route element={<PrivateRoute allowedRoles={["user", "admin"]} />}>
          <Route path="/user/*" element={<UserLandingPage />} />
        </Route>

      </Routes>
      <Footer />
    </>
  );
};

const App = () => {
  AOS.init();
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
        <Toaster position="top-right" richColors />
      </AuthProvider>
    </Router>
  );
};

export default App;
