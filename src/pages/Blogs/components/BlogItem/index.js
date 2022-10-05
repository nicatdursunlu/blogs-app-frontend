import React, { createElement } from 'react'
import { Avatar, List, Space, Tag } from 'antd'
import { LikeOutlined, MessageOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const BlogItem = ({ item }) => {
  const MAX_CHAR_COUNT = 300

  const IconText = ({ icon, text }) => (
    <Space>
      {createElement(icon)}
      {text}
    </Space>
  )

  return (
    <List.Item
      key={item.title}
      actions={[
        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
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
