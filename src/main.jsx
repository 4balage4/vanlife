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
        {/* Route path="/" is the route with the top menu and the footer The layout looks like a link menu on top and a footer. Between them there is the <Outlet/>*/}
          <Route path="/" element={<Layout />}>
            {/* Route path="" index.  this is the main index page, the url looks like = www.myPage.com */}
            <Route index element={<Home />} />
            {/* Route path="about" this is the url www.myPage.com/about */}
            <Route path='about' element={<About />} />
            {/* Route path="vans" this is the url www.myPage.com/vans */}
            <Route path="vans" element={<Vans/>}/>
            {/* Route path="vans/:id" this is a path based on the id of a van. It shows the vanDetail Could be nested route, but they dont share any UI so no need. www.myPage.com/vans/2  */}
            <Route path="vans/:id" element={<VanDetail/>}/>

            {/* There is another route 'host' - it is the same as the previous one, but we want to render a menu here. So we are creating a layout
            which should appear on every page on this route.
            It has the links collection and renders <Outlet/> which will show the nested route
             */}
             <Route path="host" element={<HostLayout/>}>
             {/* nested route, I added it as index, so it will show: www.myPage.com/host */}
              <Route index element={<Dashboard/>}/>
              {/* path="income" or "reviews" will just render: www.myPage.com/host/reviews or income */}
              <Route path="income" element={<Income/>}/>
              <Route path="reviews" element={<Reviews/>}/>
              {/* path="vans" it will have nested routes. This route will render the hostvans component */}
              <Route path="vans" element={<HostVans/>}/>
              {/* the vans/:id not gonna be a nested route for hostvans, because they dont share any UI. The links at the hostVans will lead to the right van.*/}
              {/* www.myPage.com/host/vans/1 */}
                  <Route path="vans/:id" element={<HostVanDetails/>}>
                      {/* www.myPage.com/host/vans/1/... */}
                      <Route index element={<HostVanInfo/>}/>
                      {/* www.myPage.com/host/vans/1/pricing */}
                      <Route path="pricing" element={<HostVanPricing/>}/>
                      {/* www.myPage.com/host/vans/1/photos */}
                      <Route path="photos" element={<HostVanPhotos/>}/>
                   </Route>
              </Route>

          </Route>


        <Route path="*" element={<h1>404 error, page not found or does not exist</h1>} />

      </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </StrictMode>
);
