import React from 'react';
// import ReactDOM from 'react-dom';
// import { NavLink } from 'react-router-dom';
import {Layout,Spin} from 'antd';
import style from './ex1.css';
const Content = Layout;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        loading: true
    };
  }
    componentDidMount() {
    this.showSaveCover();
  }
 
  showSaveCover() {
    this.setState({
      loading: true
    });
    this.hideSaveCover();
  }
    hideSaveCover() {
    var self = this;
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      self.setState({
        loading: false
      });
    }, 2000);
  }
    render(){
        return(
            <Content className={style.home1}> 
                <Spin spinning={this.state.loading? true:false} size='large' tip='Loading' />
                亲爱的用户,欢迎你回来
            </Content>
        )
    }
}
export default Home