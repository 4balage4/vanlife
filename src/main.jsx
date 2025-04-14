import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import {
  Home,
  About,
  Vans,
  VanDetail,
  Dashboard,
  Reviews,
  Income,
  HostVans,
  HostVanDetails,
  HostVanPricing,
  HostVanPhotos,
  HostVanInfo,
} from "./Pages/index.js";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";

import "./server.js";
import { BrowserRouter, Routes, Route } from "react-router";



// might need to use react-router-dom

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />

            {/* this is a layout route for the children route (layout component)*/}
            <Route path="vans/:id" element={<HostVanDetails />}>
           
                <Route index element={<HostVanInfo />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
            </Route>
            </Route>

        </Route>
      </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </StrictMode>
);
