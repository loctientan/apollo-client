import React, {useState} from "react";
import { Form, Checkbox } from "antd";
import "../../../styles/pages/_signUp.scss";
import register from "../../../core/api/static/register";

function SignUp() {
    const approval = "Tôi đồng ý Điều khoản & Chính sách bảo mật của Apollo";
    const contentSignin ="Bạn đã có tài khoản? "
    const titleSignin = "Đăng nhập ngay"
    const useFormInput = (initialValue) => {
      const [value, setValue] = useState(initialValue);
    
      const handleChange = (e) => {
        setValue(e.target.value);
      };
      return {
        value,
        onChange: handleChange,
      };
    };

    const name = useFormInput("");
    const username = useFormInput("");
    const email = useFormInput("");
    const pwd = useFormInput("");

    const onSubmit = async () => { 
      const data = {
        name: name.value,
        username: username.value,
        email: email.value,
        password: pwd.value,
      };
       register .postRegister(data);
    };


  return (
    <>
      <div className="form-signup-text">
        <p>ĐĂNG KÝ</p>
      </div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onSubmit}
        // onFinishFailed={onFinishFailed}
      >
        <div className="form-signup-box">
          <input {...name} placeholder="Full name" />
        </div>
        <div className="form-signup-box">
          <input {...username} placeholder="User Name" />
        </div>
        <div className="form-signup-box">
          <input {...email} placeholder="Email" />
        </div>
        <div className="form-signup-box">
          <input {...pwd} type="password" placeholder="Password" />
        </div>
        <div className="form-signup-checkbox">
          <Checkbox>{approval}</Checkbox>
        </div>
        <div className="form-signup-submit">
          <button type="submit" onSubmit={onSubmit} >Tạo tài khoản</button>
        </div>
        <div className="form-signup-box">
          <span>{contentSignin}<a href="/sign-in">{titleSignin}</a></span>
        </div>
      </Form>
    </>
  );
}

export default SignUp;