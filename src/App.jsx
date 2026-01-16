
import React from 'react'
import GoogleAdd from './pages/googleAdd/GoogleAdd'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<GoogleAdd />}>
        {/* <Route index element={<Home />} />
        <Route path="tanzania-destinations" element={<SafariLandingPage />} />
        <Route path="itinenary" element={<Itinenary />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactusPage/>} /> */}
    </Route>
    </>
  )
)
const App = () => (<><RouterProvider router={router}/></>)

export default App