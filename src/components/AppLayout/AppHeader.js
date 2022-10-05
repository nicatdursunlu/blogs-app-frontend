import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Avatar, Menu, Layout, Dropdown, Typography, Space } from 'antd'
import { DownOutlined } from '@ant-design/icons'

import axios from 'lib/axios'

const AppHeader = () => {
  const { Header } = Layout

  const navigate = useNavigate()

  const { firstName, lastName, image } = useSelector(
    (state) => state.user.currentUser || {}
  )

  const imageUrl = process.env.REACT_APP_BACKEND_URL + '/' + image

  const navigationItems = [
    {
      key: 'dashboard',
      label: <NavLink to="/dashboard">Dashboard</NavLink>,
    },
    {
      key: 'blogs',
      label: <NavLink to="/blogs">Blogs</NavLink>,
    },
    {
      key: 'chat',
      label: <NavLink to="/chat">Chat</NavLink>,
    },
  ]

  const dropdownItems = [
    {
      key: 'profile',
      label: 'Profile',
    },
    {
      key: 'settings',
      label: 'Settings',
    },
    {
      key: 'logout',
      label: 'Sign Out',
    },
  ]

  const handleDropdownClick = async (event) => {
    if (event.key === 'logout') {
      await axios.post('logout')
      navigate('/auth/login')
    }
  }

  return (
    <Header className="app-header">
      <div className="logo" />
      <Menu
        className="app-navigation"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[window.location.pathname]}
        items={navigationItems}
      />
      <div className="user-info">
        {image && (
          <Dropdown
            trigger="click"
            overlay={
              <Menu onClick={handleDropdownClick} items={dropdownItems} />
            }
          >
            <Typography.Link>
              <Space>
                <Avatar src={imageUrl} />
                {firstName + ' ' + lastName}
                <DownOutlined />
              </Space>
            </Typography.Link>
          </Dropdown>
        )}
      </div>
    </Header>
  )
}

export default AppHeader
