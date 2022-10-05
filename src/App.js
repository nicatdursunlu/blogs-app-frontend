import AppLayout from 'components/AppLayout'
import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

const Blogs = lazy(() => import('pages/Blogs'))
const Login = lazy(() => import('pages/Login'))
const Registration = lazy(() => import('pages/Registration'))
const Dashboard = lazy(() => import('pages/Dashboard'))

function App() {
  return (
    <Suspense fallback={<h1>Loading component...</h1>}>
      <Routes>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/registration" element={<Registration />} />

        <Route path="/" element={<AppLayout />}>
          <Route path="blogs" element={<Blogs />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
