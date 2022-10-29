import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, message} from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import memoryUtils from "../../utils/memoryUtils"
import storageUtils from "../../utils/storageUtils"
import { api } from "../../api/api"
import './login.css'

//登录路由组件

export default function Login (){
    const navigate = useNavigate()
    //发送登录请求
    const onFinish = async (values) => {
        console.log('Received values of form: ', values)
        try {
            const response = await api.post('/login/', values)
            // console.log('success: ' + response.data)
            const result = response.data //0, data: user; 1, message
            if(result.code === 0){ 
                //登录成功
                message.success('Login Successful!')
                //保存user数据到内存和local中
                const user = result.data
                memoryUtils.user = user
                storageUtils.saveUser(user)
                //跳转路由
                navigate('/user')
            }else {
                    //登录失败
                message.error(result.msg)
            }
        } catch (error) {
            console.log('fail: '+ error.message);
        }
    }
    return (
    <div className="login">
        <header className="login-header">
            <h1>Wallpaper Engine</h1>
        </header>
        <section className="login-content">
            <h2>User Login</h2>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your Password!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item name="remember" className="remember" valuePropName="checked">
                        <Checkbox defaultChecked>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                        </Button>
                        Or <a href="#/register">register now!</a>
                    </Form.Item>
                </Form>
        </section>            
    </div>
    )
}