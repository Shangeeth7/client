import React from "react";
import { Form, Input } from "antd";
import Password from "antd/lib/input/Password";

function Login() {
  const onFinish = (values) => {
    console.log("Valus submitted in form : ", values);
  };
  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h2 className="card-title">Welcome Back !</h2>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="E-mail"
            name="email"
            // rules={[
            //   {
            //     required: true,
            //     message: "Please enter your e-mail",
            //   },
            //   {
            //     type: "email",
            //     message: "Enter a valid E-mail!",
            //   },
            // ]}
          >
            <Input placeholder="Enter your e-mail" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            // rules={[
            //   {
            //     required: true,
            //     message: "Please input your password!",
            //   },
            //   { type: "string", min: 6 },
            // ]}
            hasFeedback
          >
            <Password />
          </Form.Item>
          <button className="primary-button my-2" type="submit">
            LOGIN
          </button>
          <a href="/register">
            New user? <u>click here to Register</u>
          </a>
        </Form>
      </div>
    </div>
  );
}

export default Login;
