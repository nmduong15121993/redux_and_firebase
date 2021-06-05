import React from 'react';
import {
  Alert,
  Button,
  Input,
  Form,
  Checkbox,
} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { loginAsync } from './store';
import { layout, tailLayout } from './constant';
import './login.css';

function Login() {
  const login = useSelector((root) => root.login);
  const { 
    error,
    loading,
   } = login;
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    const { email, password } = values;
    try {
      await dispatch(loginAsync({email, password}));
      window.location.replace('/');
    } catch (error) {
      // Handle error
      console.log(error);
    }
  };

  return (
    <div className="form-login">
      <div className="form-login-1">
        <div className="form-login-2">
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Email"
              name="email"
              placeholder="Email"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập email',
                },
                {
                  type: 'email',
                  message: 'Bạn đã nhập sai email'
                }
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập mật khẩu',
                },
                {
                  type: 'string',
                  min: 6,
                  message: 'Mật khẩu phải có tối thiểu 6 ký tự',
                }
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button loading={loading} type="primary" htmlType="Login">
                Login
              </Button>
            </Form.Item>
            { error ? (<Alert message={error} type="error" />) : null }
          </Form>
        </div>
      </div>
    </div>
  );
}

export { Login };