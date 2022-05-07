import React from 'react'
import { BrowserRouter, Route, Routes as DomRoutes } from 'react-router-dom'
import AboutPage from './About'
import HomePage from './home'

function Routes() {
  return (
      <BrowserRouter>
      <DomRoutes>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/' element={<HomePage />} />
      </DomRoutes>
      </BrowserRouter>
  )
}

export default Routes