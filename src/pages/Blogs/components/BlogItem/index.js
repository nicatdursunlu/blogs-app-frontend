import React, { createElement } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, Button, List, Space, Tag } from 'antd'
import { LikeOutlined, LikeTwoTone, MessageOutlined } from '@ant-design/icons'

import { toggleBlogLike } from 'redux/features/blogsSlice'
import axios from 'lib/axios'

const BlogItem = ({ item }) => {
  const MAX_CHAR_COUNT = 300
  const dispatch = useDispatch()
  const { currentUser } = useSelector((state) => state.user)

  const IconText = ({ icon, text }) => (
    <Space>
      {createElement(icon)}
      {text}
    </Space>
  )

  const handleLike = async ({ _id }) => {
    dispatch(toggleBlogLike({ blogId: _id, userId: currentUser._id }))
    await axios.put(`blogs/${_id}/like`)
  }

  const isBlogLiked = item.likes.includes(currentUser._id)

  return (
    <List.Item
      key={item.title}
      actions={[
        <Button
          onClick={() => handleLike(item)}
          icon={isBlogLiked ? <LikeTwoTone /> : <LikeOutlined />}
          size="small"
          type="text"
          key="like-button"
        >
          <span style={{ display: 'inline-block', marginLeft: '7px' }}>
            {item.likes.length}
          </span>
        </Button>,
        <IconText
          icon={MessageOutlined}
          text="2"
          key="list-vertical-message"
        />,
      ]}
    >
      <List.Item.Meta
        avatar={
          <Avatar
            src={process.env.REACT_APP_BACKEND_URL + '/' + item.author.image}
          />
        }
        title={<Link to={`/blogs/${item._id}`}>{item.title}</Link>}
        description={item.author.firstName + ' ' + item.author.lastName}
      />
      {item.body.substring(0, MAX_CHAR_COUNT)}...
      <div style={{ marginTop: '15px' }}>
        {item.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </List.Item>
  )
}

export default BlogItem
