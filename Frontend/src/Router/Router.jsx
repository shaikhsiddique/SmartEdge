import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import AllProjectPage from '../Pages/AllProjectPage'


function Router() {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<AllProjectPage />} />
          
        </Routes>
      
    </BrowserRouter>
  )
}

export default Router
