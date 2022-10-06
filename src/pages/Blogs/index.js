import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Input, List } from 'antd'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons'
import debounce from 'lodash.debounce'

import ProtectedRoute from 'components/ProtectedRoute'
import BlogItem from './components/BlogItem'
import { fetchBlogs, setCurrentPage } from 'redux/features/blogsSlice'
import './styles.css'

const LIMIT = 2
const getBlogs = (state) => state.blogs

const Blogs = () => {
  const dispatch = useDispatch()
  const { list, loading, currentPage, total } = useSelector(getBlogs)

  const [q, setQ] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const pageFromURL = searchParams.has('page')
      ? Number(searchParams.get('page'))
      : 1
    dispatch(setCurrentPage(pageFromURL))
    const params = { page: currentPage, limit: LIMIT, q }
    dispatch(fetchBlogs(params))
  }, [dispatch, currentPage, q, searchParams])

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page))
    setSearchParams({ page })
  }

  const handleSearch = debounce((event) => {
    setQ(event.target.value)
  }, 500)

  return (
    <ProtectedRoute>
      <div className="blogs-container">
        <div className="blog-actions">
          <Input
            style={{ width: '300px' }}
            placeholder="Search blog"
            onChange={handleSearch}
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
              current: currentPage,
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
