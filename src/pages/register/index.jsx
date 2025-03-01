import React, { useState } from "react";
import { Button, Form, Input, message, Radio, DatePicker, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { RegisterUser } from "../../api/users";
import dayjs from "dayjs";

function Register() {
    const [dob, setDob] = useState(null);

    const onChange = (date, dateString) => {
      setDob(dateString); // Stores selected date as string (YYYY-MM-DD)
      console.log("Selected Date of Birth:", dateString);
    };

    const validateName = (_, value) => {
      const regex = /^[A-Za-z\s]+$/;
      if (!value || regex.test(value)) {
        return Promise.resolve();
      }
      return Promise.reject("Name should contain only alphabets.");
    };

    const validateEmail = (_, value) => {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!value || regex.test(value)) {
        return Promise.resolve();
      }
      return Promise.reject("Please enter a valid email address!");
    };

    const validatePassword = (_, value) => {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!value) {
        // return Promise.reject("Password is required!");
        return Promise.reject("");
      } else if (!regex.test(value)) {
        return Promise.reject(
          <Tooltip title="Must be 8+ chars, include uppercase, number & special char.">
            <span>Password is too weak!</span>
          </Tooltip>
        );
      }
      return Promise.resolve();
    };
        
  const onFinish = async (values) => {
    try {
      const response = await RegisterUser(values);
      console.log(response);
      if (response.success) {
        message.success(response.message);
      } else {
        message.error(response.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <main className="App-header">
        <h1 className="color">Registration</h1>
        <section className="mw-500 text-center px-3">
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Name"
              htmlFor="name"
              name="name"
              className="d-block"
              rules={[{ required: true, message: "Name is required" }, { validator: validateName }]}
            >
              <Input type="text" placeholder="Enter your full Name"></Input>
            </Form.Item>
            <Form.Item
              label="Email"
              htmlFor="email"
              name="email"
              className="d-block"
              rules={[
                { required: true, message: "Email is required" },
                { validator: validateEmail }
              ]}
            >
              <Input type="text" placeholder="Enter your Email"></Input>
            </Form.Item>
            <Form.Item
              label="Password"
              htmlFor="password"
              name="password"
              className="d-block"
              rules={[{ required: true, message: "Password is required" }, { validator: validatePassword }]}
            >
              <Input type="password" placeholder="Enter your Password"></Input>
            </Form.Item>

            {/* Confirm Password Field */}
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm your password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject("Passwords do not match!");
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm your password" />
            </Form.Item>


            <Form.Item label="Date of Birth" name="dob" rules={[{ required: true, message: "Please select your DOB!" }]}>
              <DatePicker 
                 onChange={onChange} 
                 format="YYYY-MM-DD"
                 style={{ width: "100%" }} 
                 disabledDate={(current) => current && current > dayjs().endOf("day")} // Disables future dates
              />
            </Form.Item>
            <Form.Item className="d-block">
              <Button
                type="primary"
                block
                htmlType="submit"
                style={{ fontSize: "1rem", fontWeight: "600" }}
              >
                Register
              </Button>
            </Form.Item>
            {/* <Form.Item
              label="Register as a Provider"
              htmlFor="role"
              name="role"
              className="d-block text-center"
              initialValue={false}
              rules={[{ required: true, message: "Please select a role" }]}
            >
              <div className="d-flex justify-content-center">
                <Radio.Group name="radiogroup" className="flex-start">
                  <Radio value={"provider"}>Yes</Radio>
                  <Radio value={"user"}>No</Radio>
                </Radio.Group>
              </div>
            </Form.Item> */}
          </Form>
          <div>
            <p className="color">
              Already a user ? <Link to="/login">Login Now</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Register;