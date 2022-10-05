import React, { createElement } from 'react'
import { Avatar, List, Space } from 'antd'
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons'

const BlogItem = ({ item }) => {
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
        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
        <IconText
          icon={MessageOutlined}
          text="2"
          key="list-vertical-message"
        />,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar src={item.avatar} />}
        title={<a href={item.href}>{item.title}</a>}
        description={item.description}
      />
      {item.content}
    </List.Item>
  )
}

export default BlogItem
