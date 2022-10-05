import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List } from 'antd'

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
        <List
          itemLayout="vertical"
          size="large"
          loading={loading}
          dataSource={list}
          renderItem={(item) => <BlogItem item={item} />}
        />
      </div>
    </ProtectedRoute>
  )
}

export default Blogs
