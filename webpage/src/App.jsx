import { useState } from 'react'
import {Routes, Route,} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import Login from './pages/login.jsx'
import Dashboard from './pages/dashboard.jsx'


function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={
        
          <Dashboard />
        
      } />
    </Routes>
  )
}
export default App
