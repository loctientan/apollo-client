  
import React from "react";
import { Link } from "react-router-dom";
import { Form, Checkbox } from "antd";


function SignIn() {
  const contentSignup ="Bạn đã có tài khoản? "
  const titleSignup = "Đăng ký ngay"

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  return (
    <>
      <div className="form-signin-text">
        <p>ĐĂNG NHẬP</p>
      </div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <div className="form-signin-box">
          <input placeholder="User Name" />
        </div>
        <div className="form-signin-box">
          <input type="password" placeholder="Password" />
        </div>
        <div className="form-signin-checkbox">
          <Checkbox>Remember me</Checkbox>
        </div>
        <div className="form-signin-submit">
          <button type="black">Submit</button>
        </div>
        <div className="form-signin-box">
          <span>{contentSignup}<a href="/sign-up">{titleSignup}</a></span>
        </div>
      </Form>
    </>
  );
}

export default SignIn;