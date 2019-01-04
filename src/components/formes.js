import React from 'react';
import {Form , Modal , Input} from 'antd';
const FormItem=Form.Item;
//form界面
const CollectionCreateForm = Form.create()(
    class extends React.Component {
      render() {
        const { visible, onCancel, onCreate, form } = this.props;
        const { getFieldDecorator } = form;
        return (
          <Modal
            visible={visible}
            title="编辑用户信息"
            okText="确定"
            cancelText='取消'
            onCancel={onCancel}
            onOk={onCreate}
          >
            <Form layout="vertical">
              <FormItem label="姓名">
                {getFieldDecorator('name')(
                  <Input />
                )}
              </FormItem>
              <FormItem label="年龄">
                {getFieldDecorator('description')(<Input type="textarea" />)}
              </FormItem>
              <FormItem label='家庭住址'>
                  {getFieldDecorator('address')(<Input type="textarea" />)}
              </FormItem>
            </Form>
          </Modal>
        );
      }
    }
  );

export default CollectionCreateForm;