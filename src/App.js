import { Routes, Route, Navigate } from 'react-router-dom'

import Blogs from 'pages/Blogs'
import Login from 'pages/Login'
import Registration from 'pages/Registration'
import Dashboard from 'pages/Dashboard'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/registration" element={<Registration />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
