import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import About from '../src/Pages/About'
import Home from '../src/Pages/Home'
import Menu from './components/Menu'
import Footer from './components/Footer'
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
      </Routes>
        <Footer>@ 2024 #VANLIFE</Footer>
      {/* <App /> */}
    </BrowserRouter>
  </StrictMode>
);
