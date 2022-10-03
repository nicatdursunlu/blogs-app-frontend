import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const accessToken = localStorage.getItem('accessToken')

  if (!accessToken) {
    return <Navigate to="/auth/login" />
  }

  return children
}

export default ProtectedRoute
