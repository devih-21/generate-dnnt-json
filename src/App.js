import React, { Component } from 'react';
import { Form, Input, Button, Select } from 'antd';
import './App.css';

import getData from './callApi/getData'

import listSubject from './resource/listSubject'

const { Option } = Select;
const { TextArea } = Input;


const layout = {
  labelCol: {
    span: 8,
  }
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};


class App extends Component{
  constructor(){
    super();
    this.state = {
      subjectModal: listSubject,
      authenKey: ""
    }
  }

  render(){
    return(
      <div className="main">
        {this._renderInputForm()}
        {this._renderMenuFeture()}
        {this._renderOutputTextBox()}
      </div>
    );    
  }
  _renderInputForm = () => {
    return(
      <div className="wrap-form-input">
        <Form span={8} name="control-ref" className="form-input">
          <Form.Item 
            name="auth"
            label="Authen"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              onChange={(e) => this.getAuthenKey(e)} />
          </Form.Item>
          <Form.Item
            name="note"
            label="Summary"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="content"
            label="Content"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Test"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select>
              <Option value="yes">Yes</Option>
              <Option value="no">No</Option>
            </Select>
          </Form.Item>
          <Form.Item 
            name="link"
            label="Link"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="tag"
            label="Tag"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select>
              <Option value="math">Math</Option>
              <Option value="english">English</Option>
              <Option value="literature">Literature</Option>
              <Option value="chemistry">Chemistry</Option>
              <Option value="biology">Biology</Option>
              <Option value="history">History</Option>
              <Option value="geography">Geography</Option>
              <Option value="casioMath">Casio Math</Option>
            </Select>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Generate
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }

  _renderMenuFeture = () => {
    return(
      <div className="wrap-button-feature">

      </div>
    )
  }

  _renderOutputTextBox = () => {
    return(
      <div className="wrap-output-text-box">
        <Form span={8} >
          <TextArea rows={5}  copyable />
        </Form>
      </div>
    )
  }

  getAuthenKey = (e) => {
    let auth = e.target.value.trim();
    this.setState({
      authenKey: auth
    }, () => {
      getData(this.state.authenKey).then(json => {
        this.setState({
          documentQuery: json[Object.keys(json)[0]],
          testQuery: json[Object.keys(json)[1]]
        }, () => {
          console.log(this.state)
        })
      })
    })
  }
}

export default App;
