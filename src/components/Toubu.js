import React from 'react';
import { Layout } from 'antd';
// import { Router, Route, Link } from 'react-router';
import style from "../routes/ex1.css"
 const Header = Layout;

class Toubu extends React.Component {
  handleClick = (e) => {
    console.log('click ', e);
  }

  render() {
    return (
      <Layout>
        <Header className={style.header}>
          <div className={style.logo_container}>
            <div className={style.logo}></div>
          </div>
        </Header>
      </Layout>
    );
  }
}

export  default Toubu