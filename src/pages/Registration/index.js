import { Typography } from 'antd'
import { Link } from 'react-router-dom'

import RegistrationForm from './components/RegistrationForm'
import './styles.css'

const Registration = () => {
  const { Title } = Typography

  return (
    <div className="login-container">
      <div className="login-form-container">
        <Title>Sign up</Title>
        <RegistrationForm />
        <p>
          Already have an account? <Link to="/auth/login">Sign in </Link>
        </p>
      </div>
    </div>
  )
}

export default Registration
