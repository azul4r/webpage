import { useState } from 'react'
import {Routes, Route,} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import Login from './pages/login.jsx'
import Dashboard from './pages/dashboard.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'


function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      } />
    </Routes>
  )
}
export default App
