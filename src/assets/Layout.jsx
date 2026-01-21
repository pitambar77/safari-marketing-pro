import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from "../components/Footer";
import Header from "../components/Header";
import SmpDontCharge from '../components/SmpDontCharge';
import ScrollToTop from '../components/ScrollToTop';

const Layout = () => {
  return (
    <>
    <Header />
    <ScrollToTop />
    <Outlet/>
    <SmpDontCharge />
    <Footer/>
    </>
  )
}

export default Layout;