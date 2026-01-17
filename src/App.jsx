
import React from 'react'
import GoogleAdd from './pages/googleAdd/GoogleAdd'
import WebDesign from './pages/webDesign/WebDesign'
import SocialMedia from './pages/socialMedia/SocialMedia'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './assets/Layout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Layout />}>
        <Route index element={<GoogleAdd />} />
        <Route path='web-designing' element={<WebDesign />} />
        <Route path='social-media-marketing' element={<SocialMedia />} />
    </Route>
    </>
  )
)
const App = () => (<><RouterProvider router={router}/></>)

export default App;

