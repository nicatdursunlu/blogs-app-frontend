import React from 'react'
import { Outlet } from 'react-router-dom'
import { Breadcrumb, Layout } from 'antd'

import AppHeader from './AppHeader'
import './styles.css'
const { Content, Footer } = Layout

const AppLayout = () => {
  return (
    <Layout className="app-layout">
      <AppHeader />
      <Content className="app-content">
        <Breadcrumb className="app-breadcrumb">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <main className="site-layout-content">
          <Outlet />
        </main>
      </Content>
      <Footer>Ant Design ©2022 Created by Nijat Dursunlu</Footer>
    </Layout>
  )
}

export default AppLayout
