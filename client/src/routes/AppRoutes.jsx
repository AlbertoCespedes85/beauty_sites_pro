import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

const Home = lazy(() => import("../pages/home/Home"))
const About = lazy(()=> import ("../pages/about/About"))
const Services = lazy(()=> import("../pages/services/Services"))
const Portfolio = lazy(()=> import("../pages/portfolio/Portfolio"))
const Contact = lazy(()=> import ("../pages/contacto/Contact"))
const Maintenance = lazy(()=> import ("../pages/maintenance/Maintenance"))

export const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path= "/about" element={<About/>}/>
        <Route path= "/services" element={<Services/>}/>
         <Route path= "/maintenance" element={<Maintenance/>}/>
        <Route path= "/portfolio" element={<Portfolio/>}/>
        <Route path= "/contact" element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  )
}
