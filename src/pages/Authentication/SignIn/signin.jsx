  
import React, {useState} from "react";
import { Form, Checkbox } from "antd";
import { Alert } from "antd";
import auth from "../../../utils/helpers/auth";
import authApi from "../services/auth";
import { set_admin_info } from "../../../redux/action/admin";

function SingIn() {

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
  
  const [error, setError] = useState("");
  const username = useFormInput("");
  const password = useFormInput("");


  const onFinish = () => {
    const data = {
      email: username,
      password: password,
    };
    authApi
      .adminLogin(data)
      .then(({ info, token }) => {
        set_admin_info(info, token);
        auth.setAuthInfo(info, token);
      })
      .catch((e) => {
        if (e.response && e.response.data) {
          setError(e.response.data.message);
        }
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onClose = () => {
    setError("");
  };

  return (
    <>
    {error && (
          <div className="login__validation">
            <Alert
              message={error}
              type="error"
              showIcon={true}
              closable={true}
              onClose={onClose}
            />
          </div>
        )}
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
          <input {...username} placeholder="User Name" />
        </div>
        <div className="form-signin-box">
          <input {...password} type="password" placeholder="Password" />
        </div>
        <div className="form-signin-checkbox">
          <Checkbox>Remember me</Checkbox>
        </div>
        <div className="form-signin-submit">
          <button type="submit" onSubmit={onFinish}>
            Submit
          </button>
        </div>
      </Form>
    </>
  );
}

export default SingIn;