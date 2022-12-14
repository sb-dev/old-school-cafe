import "./Login.css";

import {Button, Checkbox, Form, Input, Layout} from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import React, {useState} from "react";

import Auth from "../../api";
import Box from "../../components/Box/Box";
import {Link} from "react-router-dom";

const { Content } = Layout;

function Login({ userHasAuthenticated, history }: any) {
    const [isLoading, setIsLoading] = useState(false);

    async function onFinish({ email, password }: any) {
        setIsLoading(true);

        const result = await Auth.signIn(email, password);
        console.log('result', result);
        if (result) {
          userHasAuthenticated(true);
          history.push("/");
        } else {
          setIsLoading(false);
          console.log('Authentication failed...');
        }

        // props.form.validateFields(async (err: any, values: any) => {
        //     if (!err) {
        //         // setIsLoading(true);
        //         console.log('Received values of login form: ', values);

        //         try {
        //             // await Auth.signIn(values.email, values.password);
        //             // props.userHasAuthenticated(true);
        //         } catch (e) {
        //             // alert(e.message);
        //         }

        //         // setIsLoading(false);
        //     }
        // });
    }

    return (
      <Content>
        <Box className={"login-box"}>
          <p>Sign in to your account</p>
          <Form
            name="login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please enter your Password" },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Link className="login-form-forgot" to="/">
                Forgot password
              </Link>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                loading={isLoading}
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Box>
      </Content>
    )
}

export default Login;
