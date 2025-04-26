import AOS from 'aos';
import 'aos/dist/aos.css'
import "./App.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import Token from "./pages/Token";
import Tokenomics from "./pages/Tokenomics";
import NFT from "./pages/NFT";
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import TokenRoadMap from './pages/TokenRoadMap';
import NFTWhitepaper from './pages/NFTWhitepaper';
import Forum from './pages/Forum';

// A wrapper component to apply conditional layout
const AppRoutes = () => {
  const location = useLocation();

  // Add paths where the header should be hidden
  const hideHeaderPaths = ["/signup", "/login"];
  const shouldHideHeader = hideHeaderPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideHeader && <Header />}
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
        <Route path="/forum" element={<Forum/>}/>
      </Routes>
      <Footer />
    </>
  );
};

const App = () => {
  AOS.init();
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
