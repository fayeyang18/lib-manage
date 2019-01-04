// export default Login
import React, {Fragment} from 'react'
import { Form, Icon, Input, Button, Checkbox, notification} from 'antd';
import style1 from './IndexPage.css'
import config from '../utils/config';
import { routerRedux } from 'dva/router';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      if(values.userName==='guest'&&values.passWord==='guest')
        console.log(true);
        this.props.history.push('/user');
        notification.success({ message: '登录成功！' ,duration: 2,}); 
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div className={style1.center}>
            <div className={style1.logo}>
                <img src={config.logoPath} alt='logo'/>
                <span>Lib System</span>
            </div>
            <Form onSubmit={this.handleSubmit} className={style1.login_form}>
                <FormItem>
                {getFieldDecorator('userName', {
                    rules: [{ required: true, message: '请输入用户名!' }],
                })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                )}
                </FormItem>
                <FormItem>
                {getFieldDecorator('passWord', {
                    rules: [{ required: true, message: '请输入密码!' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                )}
                </FormItem>
                <FormItem style={{marginTop: '-20px'}}>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(
                    <Checkbox>记住密码</Checkbox>
                )}
                <a className={style1.login_form_forgot} href="">忘记密码？</a>
                <Button type="primary" htmlType="submit" className={style1.login_form_button}>
                    Sign in
                </Button>
                </FormItem>
            </Form>
        </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

export default WrappedNormalLoginForm