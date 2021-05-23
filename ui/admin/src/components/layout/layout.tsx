import './layout.scss'

import { Layout as AntLayout, Avatar, Button, Divider, Drawer, Menu } from 'antd';
import {
  CalendarOutlined,
  CompassOutlined,
  DashboardOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ReadOutlined,
  UnorderedListOutlined,
  UserOutlined
} from '@ant-design/icons';
import React, { useState } from 'react'

import {Link} from "react-router-dom";

const { Header, Sider, Content } = AntLayout;

export const Layout = ({ page, children }: any) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [showMainSidebar, setShowMainSidebar] = useState<boolean>(false)

    return (
      <AntLayout className="admin">
        <Drawer
          width={640}
          placement="left"
          closable={false}
          onClose={() => setShowMainSidebar(false)}
          visible={showMainSidebar}
          className={"main-menu"}
        >
          <div className="user-info header">
            <Avatar size={"large"} icon={<UserOutlined />} />
            <div className="name">Samir Benzenine</div>
            <div className="email">samir.benzenine@gmail.com</div>
          </div>
          <Divider />
          <Menu
            defaultSelectedKeys={['1']}
            mode="inline"
          >
            <Menu.Item key="1">
              Features
            </Menu.Item>
            <Menu.Item key="2">
              Shop
            </Menu.Item>
            <Menu.Item key="3">
              Resources
            </Menu.Item>
            <Menu.Item key="4">
              About
            </Menu.Item>
          </Menu>
          <Divider />
          <div className="footer">
          <Button type="link">Logout</Button>
          </div>
        </Drawer>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<DashboardOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<ReadOutlined />}>
              Menu
            </Menu.Item>
            <Menu.Item key="3" icon={<CalendarOutlined />}>
              Events
            </Menu.Item>
            <Menu.Item key="4" icon={<UnorderedListOutlined />}>
              Pantry &amp; shopping lists
            </Menu.Item>
          </Menu>
        </Sider>
        <AntLayout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger desktop',
              onClick: () => setCollapsed(!collapsed),
            })}
            {React.createElement(showMainSidebar ? MenuFoldOutlined : MenuUnfoldOutlined, {
              className: 'trigger mobile',
              onClick: () => setShowMainSidebar(!showMainSidebar),
            })}
            <h1>{page}</h1>
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
            }}
          >
            {children}
          </Content>
          <nav className="touch-nav">
            <Link to="/explore">
              <div className={`inner-link ${page === 'explore' ? 'active':''}`}>
                <CompassOutlined />
              </div>
              </Link>
            <Link to="/explore">
              <div className="inner-link">
                <ReadOutlined />
              </div>
            </Link>
            <Link to="/explore">
              <div className="inner-link">
                <CalendarOutlined />
              </div>
            </Link>
            <Link to="/explore">
              <div className="inner-link">
                <UnorderedListOutlined />
              </div>
            </Link>
          </nav>
        </AntLayout>
      </AntLayout>
    )
}
