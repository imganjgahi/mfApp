import React from 'react'
import { BrowserRouter, Route, Routes as DomRoutes } from 'react-router-dom'
import AboutPage from './About'
import {AdminHomePage} from './AdminHomePage'

function Routes() {
  return (
      <BrowserRouter>
      <DomRoutes>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/' element={<AdminHomePage />} />
      </DomRoutes>
      </BrowserRouter>
  )
}

export default Routes