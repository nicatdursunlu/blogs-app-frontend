import { Routes, Route } from 'react-router-dom'

import Blogs from 'pages/Blogs'
import Login from 'pages/Login'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<h1>Hello World</h1>} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/dashboard" element={<h1>Dashboard page</h1>} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </>
  )
}

export default App
