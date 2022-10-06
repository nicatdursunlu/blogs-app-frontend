import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input, List } from 'antd'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons'

import ProtectedRoute from 'components/ProtectedRoute'
import BlogItem from './components/BlogItem'
import { fetchBlogs, setCurrentPage } from 'redux/features/blogsSlice'
import './styles.css'

const LIMIT = 10
const getBlogs = (state) => state.blogs

const Blogs = () => {
  const dispatch = useDispatch()
  const { list, loading, currentPage, total } = useSelector(getBlogs)

  useEffect(() => {
    const params = { page: currentPage, limit: LIMIT }
    dispatch(fetchBlogs(params))
  }, [dispatch, currentPage])

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page))
  }

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
            pagination={{
              onChange: handlePageChange,
              pageSize: LIMIT,
              total,
            }}
            renderItem={(item) => <BlogItem item={item} />}
          />
        </div>
      </div>
    </ProtectedRoute>
  )
}

export default Blogs
