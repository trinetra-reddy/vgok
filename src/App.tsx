import AOS from 'aos';
import 'aos/dist/aos.css'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Token from "./pages/Token";
import NEFT from "./pages/Neft";
import Registration from "./pages/Registration";
import ContactUs from "./pages/ContactUs";
import Header from "./Components/Header";
import Footer from './Components/Footer';
import Tokenomics from './pages/Tokenomics';

function App() {
  AOS.init();
  return (
    <div className="bg-forum-light-gray">
     <Router>
      <Header />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/token" element={<Token />} />
          <Route path="/tokenomics" element={<Tokenomics />} />
          
          <Route path="/neft" element={<NEFT />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </>
      <Footer/>
    </Router>    
    </div>
  );
}

export default App;
