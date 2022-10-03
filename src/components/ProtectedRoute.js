import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'lib/axios'

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        setLoading(true)
        const { data } = await axios.get('me')
        if (!data) {
          navigate('/auth/login')
        } else {
          setUser(data)
        }
      } catch (error) {
        navigate('/auth/login')
      } finally {
        setLoading(false)
      }
    }

    getUserInfo()
  }, [navigate])

  if (loading) {
    return <h1>Authorizing...</h1>
  }

  return children
}

export default ProtectedRoute
