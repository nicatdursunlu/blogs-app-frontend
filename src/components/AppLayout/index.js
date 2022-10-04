import React from 'react'
import { Breadcrumb, Layout } from 'antd'

import AppHeader from './AppHeader'
import './styles.css'
const { Content, Footer } = Layout

const AppLayout = ({ children }) => {
  return (
    <Layout className="app-layout">
      <AppHeader />
      <Content className="app-content">
        <Breadcrumb className="app-breadcrumb">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <main className="site-layout-content">{children}</main>
      </Content>
      <Footer>Ant Design ©2018 Created by Nijat Dursunlu</Footer>
    </Layout>
  )
}

export default AppLayout
