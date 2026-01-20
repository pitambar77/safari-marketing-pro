import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";

import Layout from "./assets/Layout";

import GoogleAdd from "./pages/googleAdd/GoogleAdd";
import WebDesign from "./pages/WebDesign/WebDesign";
import SocialMedia from "./pages/socialMedia/SocialMedia";
import OrganicMarketing from "./pages/organicMarketing/OrganicMarketing";
import ContentMarketing from "./pages/contentMarketing/ContentMarketing";
import Crm from "./pages/crm/Crm";
import AboutUs from "./pages/aboutUs/AboutUs";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<GoogleAdd />} />
      <Route path="web-designing" element={<WebDesign />} />
      <Route path="social-media-marketing" element={<SocialMedia />} />
      <Route path="organic-marketing" element={<OrganicMarketing />} />
      <Route path="content-marketing" element={<ContentMarketing />} />
      <Route path="crm" element={<Crm />} />
      <Route path="about-us" element={<AboutUs />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
