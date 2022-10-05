import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Breadcrumb, Layout } from 'antd'

import AppHeader from './AppHeader'
import breadcrumbs from 'utils/breadcrumbs'
import './styles.css'

const { Content, Footer } = Layout

const AppLayout = () => {
  const location = useLocation()
  const breadcrumbItems = breadcrumbs[location.pathname]

  return (
    <Layout className="app-layout">
      <AppHeader />
      <Content className="app-content">
        <Breadcrumb className="app-breadcrumb">
          {breadcrumbItems.map((item, index) => (
            <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
          ))}
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
