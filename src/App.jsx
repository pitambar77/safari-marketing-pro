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
import SmpAwards from "./pages/smpAwards/SmpAwards";
import SmpReviews from "./pages/smpReviews/SmpReviews";
import Home from "./pages/home/Home";
import TanzaniaContact from "./pages/contactUs/TanzaniaContact";
import KenyaContact from "./pages/contactUs/KenyaContact";
import Career from "./pages/careerPage/Career";
import CompanyValues from "./pages/companyValues/CompanyValues";
import CommunityImpact from "./pages/communityImpact/CommunityImpact";
import BlogDetails from "./pages/blogDetails/BlogDetails";
import Blogs from "./pages/blogs/Blogs";
import Marketing360 from "./pages/marketing360/Marketing360";
import SalesTraining from "./pages/salesTraining/SalesTraining";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="web-designing" element={<WebDesign />} />
      <Route path="social-media-marketing" element={<SocialMedia />} />
      <Route path="organic-marketing" element={<OrganicMarketing />} />
      <Route path="content-marketing" element={<ContentMarketing />} />
      <Route path="google-ads" element={<GoogleAdd />} />
      <Route path="crm" element={<Crm />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="awards" element={<SmpAwards />} />
      <Route path="reviews" element={<SmpReviews />} />
      <Route path="tanzania" element={<TanzaniaContact />} />
      <Route path="kenya" element={<KenyaContact />} />
      <Route path="careers" element={<Career />} />
      <Route path="company-values" element={<CompanyValues />} />
      <Route path="community-impact" element={<CommunityImpact />} />
      <Route path="blog-details" element={<BlogDetails />} />
      <Route path="blogs" element={<Blogs />} />
      <Route path="marketing-360" element={<Marketing360 />} />
      <Route path="sales-training" element={<SalesTraining />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
