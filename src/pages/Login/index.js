import { Typography } from 'antd'
import { Link } from 'react-router-dom'

import LoginForm from './components/LoginForm'
import './styles.css'

const Login = () => {
  const { Title } = Typography

  return (
    <div className="login-container">
      <div className="login-form-container">
        <Title>Sign in</Title>
        <LoginForm />
        <p>
          Don't have an account?{' '}
          <Link to="/auth/registration">Create an account </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
