import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

const Home = lazy(() => import("../pages/home/Home"))
const About = lazy(()=> import ("../pages/about/About"))

export const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path= "/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>
  )
}
