import React, { Component } from 'react';
import { Form, Input, Button, Select } from 'antd';
import './App.css';

import getData from './callApi/getData'

const { Option } = Select;

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
      listSubject: {
        math: {
          subject: "Math",
          icon: 
        },
        english: {
          subject: "Endlist",
          icon:
        },
        literature: {
          subject: "Literature",
          icon:
        },
        chemistry: {
          subject: "Chemistry",
          icon:
        },
        biology: {
          subject: "Biology",
          icon:
        },
        history: {
          subject: "History",
          icon:
        },
        geography: {
          subject: "Geography",
          icon:
        },
        casioMath: {
          subject: "Casio Math",
          icon:
        }
      }
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

  componentDidMount(){
    getData("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiZXhwIjoxNjIwMTIxODc3LCJpYXQiOjE2MjAxMTgyNzcsInYiOjB9.8b4cPpaGXIzFJuxjz8FGTWatcm1-iunkCXO8uwUBmGw").then(json => {
      this.setState({
        documentQuery: json[Object.keys(json)[0]],
        testQuery: json[Object.keys(json)[1]]
      })
    })
  }

  _renderInputForm = () => {
    return(
      <div className="wrap-form-input">
        <Form {...layout} name="control-ref" className="form-input">
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

      </div>
    )
  }
}

export default App;
