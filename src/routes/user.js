import React, {Fragment}from 'react';
import {Layout} from 'antd';
import style from './ex1.css';
import $ from 'jquery';
import { Table, Input, Form, Modal,Button} from 'antd';
import CollectionCreateForm from '../components/formes';
import CreateForm2 from '../components/form2';
const Content = Layout;
const FormItem = Form.Item;

const data = [];
for (let i = 0; i < 16; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}
// export async function load(params){
//   return request(`${APIV1}/users`,
//       {
//           method:'GET',
//       }
//   )
// }
// 发起一个POST请求
// axios.get('https://5b5e71c98e9f160014b88cc9.mockapi.io/api/v1/lists')
//   .then(function(response) {
//     console.log(response.data);
//     data.push(response.data);
//     console.log(data);
//   });

class EditableTable extends React.Component {
    state = { data, modal1visible:false ,modal2visible:false,notes:[]};
    columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        width: '25%',
        editable: true,
      },
      {
        title: '年龄',
        dataIndex: 'age',
        width: '15%',
        editable: true,
      },
      {
        title: '家庭住址',
        dataIndex: 'address',
        width: '40%',
        editable: true,
      },
      {
        title: '执行操作',
        dataIndex: 'operation',
        render: () => (
            <div>
            <a onClick={this.showModal1}>编辑</a>
            <a style={{ marginLeft: 18 }}>查看详情</a>
            </div>
        )
      }
    ];

  showModal1 = () =>{
    this.setState({modal1visible: true });
  }
  showModal2 = () =>{
    this.setState({modal2visible: true});
  }

  handleCancel = () => {
    this.setState({
      modal1visible: false, 
      modal2visible: false });
  }
  handleCreate = () => {
      this.setState({  
        modal1visible: false, 
    });
  }

  handleCreate2 = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({  
        modal1visible: false, 
        modal2visible: false });
    });
  }
  componentDidMount(){
    $.ajax({
        url : "/api/book/1",
        type : "get",
        dataType : "json",
        cache : false,
        success : function(notes){
            /*notes是从数据库读取到的笔记数组*/
            // console.log("请求成功了！！但是...数据呢？...");
            notes=this.notesSort(notes);
            this.setState({
                notes: notes
            });
            console.log(this.state.notes);
        }.bind(this),
        error : function(){
            console.log("视图渲染失败...");
        }
    });
}

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }

  render(){
    return (
    <Fragment>
      <Content className={style.home}>
      <Button className={style.button1} onClick={this.showModal2}>新建用户</Button>
        <Table
          bordered
          dataSource={this.state.data}
          columns={this.columns}
        />
      <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.modal1visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
      />
      <CreateForm2
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.modal2visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate2}
      />
      </Content>
    </Fragment>
    );
  }
}
export default EditableTable