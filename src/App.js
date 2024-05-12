import React from 'react';
import { Avatar, Breadcrumb, Button, Card, Flex, Image, Layout, List, Menu, Steps, Tabs, theme, Typography} from 'antd';
import { HomeOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Homepage from './Homepage';
import Portfolio from './Portfolio';
const { Header, Content, Footer } = Layout;
const { Title, Text, Paragraph } = Typography;


function LayoutWrapper({children}) {
  const navigate = useNavigate();
  const items = [{
    key: '1',
    label: <a href='/'>Profile</a>
  },
  {
    key: '2',
    label: <a href='/#/portfolio'>Portfolio</a>
  }, {
    key: '3',
    label: <a href='/resume.png'>Resume</a>
  }]
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return <Layout>
  <Header
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}
  >
    <Button type='link'  style={{padding: 0}}>
      <Image src='/logo.png' style={{height: 50}}/>
    </Button>
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['1']}
      items={items}
      style={{
        flex: 1,
        minWidth: 0,
        marginLeft: '70%'
      }}
    />
  </Header>
  <Content
    style={{
      padding: '24px 48px',
    }}
  >
    {children}
    
  </Content>
  <Footer
    style={{
      textAlign: 'center',
    }}
  >
    Nakeisya ©{new Date().getFullYear()}
  </Footer>
</Layout>
}




const App = () => {
  
  return (
    <Routes>
      <Route path='/' element={<LayoutWrapper><Homepage/></LayoutWrapper>}/>
      <Route path='/portfolio' element={<LayoutWrapper><Portfolio/></LayoutWrapper>}/>
    </Routes>
  );
};
export default App;