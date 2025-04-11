import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Home, About, Vans, VanDetail } from "./Pages/index.js";
import Menu from './components/Menu'
import Footer from './components/Footer'
import './server.js'
import { BrowserRouter, Routes, Route, Link } from "react-router";

// might need to use react-router-dom

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
        <Menu/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/vans" element={<Vans />}/>
        <Route path="/vans/:id" element={<VanDetail />}/>
      </Routes>
        <Footer>@ 2024 #VANLIFE</Footer>
      {/* <App /> */}
    </BrowserRouter>
  </StrictMode>
);
