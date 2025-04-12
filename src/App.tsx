// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Token from "./pages/Token";
import NEFT from "./pages/Neft";
import Registration from "./pages/Registration";
import ContactUs from "./pages/ContactUs";
import Header
 from "./Components/Header";
function App() {

  return (
    <div className="bg-forum-light-gray">
     <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/token" element={<Token />} />
          <Route path="/neft" element={<NEFT />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </div>
    </Router>
      {/* <Router>
        <nav className="p-4 space-x-4">
          <Link to="/">Home</Link>
          <Link to="/token">Token</Link>
          <Link to="/contacts">Contacts</Link>
          <Link to="/careers">Careers</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/token" element={<Token />} />
          <Route path="/contacts" element={<ContactUs />} />
          <Route path="/neft" element={<NEFT />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
