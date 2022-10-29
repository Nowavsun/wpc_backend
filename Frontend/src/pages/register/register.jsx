import React from "react"
import {Button, Form, Input, message} from 'antd'
import {useNavigate} from "react-router-dom"
import { api } from "../../api/api"
import './register.css'

//注册路由组件
const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span:8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 10,
        offset: 7,
      },
    },
  }

export default function Register(){
    const navigate = useNavigate()

    const onFinish = async (values) => {
        console.log('Received values of form: ', values)
        try {
            const response = await api.post('/register/', values)
            // console.log('success: ' + response.data)
            const result = response.data //0, data: user; 1, message
            if(result.code === 1){ 
                //注册成功
                message.success('Register Successful!')
                //跳转路由
                navigate('/')
            }else { //注册失败
                message.error(result.msg)
            }
        } catch (error) {
            console.log('fail: '+ error.message);
        }
    }
    //验证是否登录
    return (
    <div className="register">
        <header className="register-header">
            <h1>Wallpaper Engine</h1>
        </header>
        <section className="register-content">
            <h2>User Register</h2>
            <Form
                {...formItemLayout}
                className="register-form"
                name="register"
                onFinish={onFinish}
                scrollToFirstError
                >
                <Form.Item
                    name="username"
                    label="Username"
                    rules={[
                    {
                        required: true,
                        whitespace:true,
                        message: 'Please input your Username!',
                    },
                    {
                        pattern:/^[a-zA-Z0-9_]+$/,
                        message: 'Username must be letters, numbers or underscores',
                    },
                    {
                        min:4,
                        message: 'Username must be more then 4 characters or less then 12 characters',
                    },
                    {
                        max:12,
                        message: 'Username must be more then 4 characters or less then 12 characters',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                    {
                        required: true,
                        whitespace:true,
                        message: 'Please input your password!',
                    },
                    {
                        min:4,
                        message: 'Password must be more then 4 characters or less then 16 characters',
                    },
                    {
                        max:16,
                        message: 'Password must be more then 4 characters or less then 16 characters',
                    },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }
                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <a href="/">already have a account?</a>
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit" className="register-button">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </section>            
    </div>
    )

}