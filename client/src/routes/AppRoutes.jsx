import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

const Home = lazy(() => import("../pages/home/Home"))
const About = lazy(()=> import ("../pages/about/About"))
const Services = lazy(()=> import("../pages/services/Services"))
const Portfolio = lazy(()=> import("../pages/portfolio/Portfolio"))

export const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path= "/about" element={<About/>}/>
        <Route path= "/services" element={<Services/>}/>
        <Route path= "/portfolio" element={<Portfolio/>}/>
    </Routes>
    </BrowserRouter>
  )
}
