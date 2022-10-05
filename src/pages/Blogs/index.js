import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input, List } from 'antd'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons'

import ProtectedRoute from 'components/ProtectedRoute'
import BlogItem from './components/BlogItem'
import { fetchBlogs } from 'redux/features/blogsSlice'
import './styles.css'

const Blogs = () => {
  const dispatch = useDispatch()

  const { list, loading } = useSelector((state) => state.blog)

  useEffect(() => {
    dispatch(fetchBlogs())
  }, [dispatch])

  return (
    <ProtectedRoute>
      <div className="blogs-container">
        <div className="blog-actions">
          <Input
            style={{ width: '300px' }}
            placeholder="Search blog"
            prefix={<SearchOutlined />}
          />
          <Link to="/blogs/create">
            <Button type="primary" icon={<PlusOutlined />}>
              Add blog
            </Button>
          </Link>
        </div>
        <div style={{ marginTop: '20px' }}>
          <List
            itemLayout="vertical"
            size="large"
            loading={loading}
            dataSource={list}
            renderItem={(item) => <BlogItem item={item} />}
          />
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default Blogs
