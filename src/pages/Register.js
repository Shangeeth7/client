import React from "react";
import { Button, Form, Input, message } from "antd";
import axios from "axios";
import toast from "react-hot-toast";

function Register() {
  const onFinish = async (values) => {
    try {
      const response = await axios.post("/api/user/register", values);
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data, message);
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };
  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h2 className="card-title">Hello, Nice To Meet You !</h2>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Name" name="name">
            <Input placeholder="Enter your name" />
          </Form.Item>
          <Form.Item label="E-mail" name="email">
            <Input placeholder="Enter your e-mail" />
          </Form.Item>
          <Form.Item name="password" label="Password">
            <Input placeholder="Password" type="password" />
          </Form.Item>
          <button className="primary-button my-2" type="submit">
            REGISTER
          </button>
          <a href="/login">
            Already a user? <u>click here to Login</u>
          </a>
        </Form>
      </div>
    </div>
  );
}

export default Register;
