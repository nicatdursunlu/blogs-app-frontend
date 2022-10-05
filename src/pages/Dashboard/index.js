import ProtectedRoute from 'components/ProtectedRoute'

const Dashboard = () => {
  return (
    <ProtectedRoute>
      <h1>Dashboard page</h1>
    </ProtectedRoute>
  )
}

export default Dashboard
