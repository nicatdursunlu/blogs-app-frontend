import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'lib/axios'
import { setCurrentUser, setLoading } from 'redux/features/usersSlice'

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { loading } = useSelector((state) => state.user)

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        dispatch(setLoading(true))
        const { data } = await axios.get('me')
        if (!data) {
          navigate('/auth/login')
        } else {
          dispatch(setCurrentUser(data))
        }
      } catch (error) {
        navigate('/auth/login')
      } finally {
        dispatch(setLoading(false))
      }
    }

    getUserInfo()
  }, [navigate, dispatch])

  if (loading) {
    return <h1>Authorizing...</h1>
  }

  return children
}

export default ProtectedRoute
