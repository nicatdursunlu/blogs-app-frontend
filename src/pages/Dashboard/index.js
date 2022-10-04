import AppLayout from 'components/AppLayout'
import ProtectedRoute from 'components/ProtectedRoute'

const Dashboard = () => {
  return (
    <ProtectedRoute>
      <AppLayout>
        <h1>Dashboard page</h1>
      </AppLayout>
    </ProtectedRoute>
  )
}

export default Dashboard
