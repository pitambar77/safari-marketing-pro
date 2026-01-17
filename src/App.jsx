
import React from 'react'
import GoogleAdd from './pages/googleAdd/GoogleAdd'
import WebDesign from './pages/WebDesign/WebDesign'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<GoogleAdd />}>
        <Route path="web-designing" element={<WebDesign />} />
        {/* <Route path="itinenary" element={<Itinenary />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactusPage/>} /> */}
    </Route>
    </>
  )
)
const App = () => (<><RouterProvider router={router}/></>)

export default App