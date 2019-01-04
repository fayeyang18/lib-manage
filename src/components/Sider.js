import React from 'react';
import { Layout, Menu, Icon} from 'antd';
import { Link } from 'react-router-dom';
import style from '../routes/ex1.css'
const SubMenu = Menu.SubMenu;

class Sider extends React.Component {
  handleClick = (e) => {
    console.log('click ', e);
  }

  render() {
    return (
      <Layout>
        <Menu
          onClick={this.handleClick}
          style={{ width: 240
          }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          className={style.wmenu}
        >
          <SubMenu key="sub1" title={<span><Icon type="user" /><span>用户管理</span></span>}>
              <Menu.Item key="1"><Link to='/user'>用户列表</Link></Menu.Item>
              <Menu.Item key="2"><Link to='/home'>会员权限</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>类目管理</span></span>}>
            <Menu.Item key="3">后台类目</Menu.Item>
            <Menu.Item key="4">前台类目</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="notification" /><span>消息中心</span></span>}>
            <Menu.Item key="5">Option 9</Menu.Item>
            <Menu.Item key="6">Option 10</Menu.Item>
            
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="line-chart"/><span>报表管理</span></span>}>
            <Menu.Item key="7">Option 11</Menu.Item>
            <Menu.Item key="8">Option 12</Menu.Item>
            
          </SubMenu>
          <SubMenu key="sub5" title={<span><Icon type="camera-o"/><span>商品管理</span></span>}>
            <Menu.Item key="9">Option 11</Menu.Item>
            <Menu.Item key="10">Option 12</Menu.Item>
          </SubMenu>
          <SubMenu key="sub6" title={<span><Icon type="file-text"/><span>订单管理</span></span>}>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </Layout>
      
    );
  }
}

export default Sider