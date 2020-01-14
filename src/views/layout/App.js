import React from 'react';
import { Layout, Input, Row, Col, Icon, Menu } from 'antd';

import './App.css';

const { Header, Content, Footer } = Layout;
const { Item } = Menu;

function App() {
  return (
    <Layout>
      <Header 
        style={{
          background: '#ffffff',
          padding: '0 12px',
          position: 'fixed',
          width: '100%',
          zIndex: 1,
        }}
      >
        <Row type="flex" justify="space-between">
          <Col
            xs={18}
            sm={18}
            md={18}
            lg={20}
            xl={20}
            xxl={20}
          >
            <Input.Search
              placeholder="Cari Pokemon"
            />
          </Col>
          <Col
            xs={3}
            sm={3}
            md={3}
            lg={2}
            xl={2}
            xxl={2}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon type="sort-ascending" style={{ fontSize: 24 }} />
          </Col>
          <Col
            xs={3}
            sm={3}
            md={3}
            lg={2}
            xl={2}
            xxl={2}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon type="filter" style={{ fontSize: 24 }} />
          </Col>
        </Row>
      </Header>
      <Content
        style={{
          padding: '0 12px',
          margin: '64px auto',
          maxWidth: '480px',
        }}
      >
      </Content>
      <Footer
        style={{
          background: '#ffffff',
          padding: 0,
          position: 'fixed',
          width: '100%',
          zIndex: 1,
          bottom: 0,
        }}
      >
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Item key="1">
            <Icon type="home" />
            Home
          </Item>
          <Item key="2">
            <Icon type="github" />
            My Pokemon
          </Item>
        </Menu>
      </Footer>
    </Layout>
  );
}

export default App;
