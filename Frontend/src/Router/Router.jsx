import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import AllProjectPage from '../Pages/AllProjectPage'
import About from '../Pages/About'
import Contact from '../Pages/Contact'


function Router() {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<AllProjectPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      
    </BrowserRouter>
  )
}

export default Router
