import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Input, Select, message } from 'antd'

import axios from 'lib/axios'

const BlogCreate = () => {
  const navigate = useNavigate()
  const [isFormSubmitting, setIsFormSubmitting] = useState(false)

  const onFinish = async (values) => {
    try {
      setIsFormSubmitting(true)
      await axios.post('/blogs', values)
      message.success('Blog created successfully!')
      navigate('/blogs')
    } catch (error) {
      const errorMessage = error.response.data.message
      message.error(errorMessage)
    } finally {
      setIsFormSubmitting(false)
    }
  }

  return (
    <Form onFinish={onFinish} layout="vertical">
      <Form.Item
        name="title"
        label="Title"
        rules={[{ required: true, message: 'Please, enter blog title!' }]}
      >
        <Input placeholder="Enter blog title" />
      </Form.Item>
      <Form.Item
        name="body"
        label="Content"
        rules={[{ required: true, message: 'Please, enter blog content!' }]}
      >
        <Input.TextArea rows={10} placeholder="Enter blog content" />
      </Form.Item>
      <Form.Item name="tags" label="Tags">
        <Select mode="tags" placeholder="Enter tags" />
      </Form.Item>
      <Form.Item>
        <Button loading={isFormSubmitting} htmlType="submit" type="primary">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default BlogCreate
