import React from 'react';
import {Form , Modal , Input} from 'antd';
const FormItem=Form.Item;

const CreatForm2 = Form.create()(
    class extends React.Component {
      render() {
        const { visible, onCancel, onCreate, form } = this.props;
        const { getFieldDecorator } = form;
        return (
          <Modal
            visible={visible}
            title="新建用户"
            okText="确定"
            cancelText='取消'
            onCancel={onCancel}
            onOk={onCreate}
          >
            <Form layout="vertical">
              <FormItem label="姓名">
                {getFieldDecorator('name', {
                  rules: [{ required: true, message: '请输入用户姓名!' }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem label="年龄">
                {getFieldDecorator('description',{
                    rules:[{required: true, message: '请输入用户年龄！'}],
                })(
                <Input type="textarea" />
                )}
              </FormItem>
              <FormItem label='家庭住址'>
                  {getFieldDecorator('address',{
                      rules:[{required: true, message: '请输入用户家庭住址！'}]
                  }
                  )(<Input type="textarea" />)}
              </FormItem>
            </Form>
          </Modal>
        );
      }
    }
);

export default CreatForm2;