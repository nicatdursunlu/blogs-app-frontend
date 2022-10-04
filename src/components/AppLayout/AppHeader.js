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
      label: 'Dashboard',
      to: 'dashboard',
    },
    {
      label: 'Blogs',
      to: 'blogs',
    },
    {
      label: 'Chat',
      to: 'chat',
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
      <Menu className="app-navigation" theme="dark" mode="horizontal">
        {navigationItems.map((item) => (
          <NavLink key={item.to} to={item.to}>
            <Menu.Item>{item.label}</Menu.Item>
          </NavLink>
        ))}
      </Menu>
      <div className="user-info">
        <Dropdown
          trigger="click"
          overlay={<Menu onClick={handleDropdownClick} items={dropdownItems} />}
        >
          <Typography.Text>
            <Space>
              <Avatar src={imageUrl} />
              {firstName + ' ' + lastName}
              <DownOutlined />
            </Space>
          </Typography.Text>
        </Dropdown>
      </div>
    </Header>
  )
}

export default AppHeader
