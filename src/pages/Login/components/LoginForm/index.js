import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Input, message } from 'antd'
import { GoogleOutlined, UserOutlined, LockOutlined } from '@ant-design/icons'

import axios from 'lib/axios'

const LoginForm = () => {
  const navigate = useNavigate()
  const [isFormSubmitting, setIsFormSubmitting] = useState(false)

  const onFinish = async (values) => {
    try {
      setIsFormSubmitting(true)
      await axios.post('/login', values)
      navigate('/')
    } catch (error) {
      const errorMessage = error.response.data.message
      message.error(errorMessage)
    } finally {
      setIsFormSubmitting(false)
    }
  }

  return (
    <Form layout="vertical" onFinish={onFinish} autoComplete="off">
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please enter your email!' }]}
      >
        <Input
          placeholder="someone@example.com"
          prefix={<UserOutlined />}
          type="email"
        />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please enter your password!' }]}
      >
        <Input.Password placeholder="Password" prefix={<LockOutlined />} />
      </Form.Item>
      <Form.Item>
        <Button
          loading={isFormSubmitting}
          block
          type="primary"
          htmlType="submit"
        >
          Sign in
        </Button>
      </Form.Item>
      <Form.Item>
        <Button type="primary" danger icon={<GoogleOutlined />} block>
          Sign In With Google
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginForm
