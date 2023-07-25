import "./Login.css";
import React, { useState } from "react";
import BackGround from "../../assets/Background.png";
import { Button, Col, Input, Row } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
// import { FormControl } from "./LoginStyle.jsx";
const Forgot = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  const [userError, setUserError] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleUserChange = (e) => {
    const { value } = e.target;
    const userInput = value.replace(/\s+/g, "");

    const userType = validateUserInput(userInput);

    if (userType === "phone") {
      setUser(Number(userInput));
    } else {
      setUser(userInput);
    }

    const errorMessage =
      userType === "invalid"
        ? value.length === 0
          ? "This field is required."
          : "Please input valid Email or Phone Number"
        : "";
    setUserError(errorMessage);
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleForgot(e);
    }
  };
  const handleKeyPressNoSpace = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };
  const validateUserInput = (input) => {
    // Phone number pattern - accepts numbers with optional hyphens and spaces
    const phonePattern = /^[0-9]{10}$/;
    // Email pattern adapted from https://emailregex.com/
    const emailPattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (phonePattern.test(input)) {
      return "phone";
    } else if (emailPattern.test(input)) {
      return "email";
    } else {
      return "invalid";
    }
  };

  const handleForgot = async (e) => {
    e.preventDefault();
    if (userError !== "" || user === "") {
      if (user === "") {
        setUserError(FIELD_REQUIRED);
      } else {
        setUserError(userError);
      }
      return;
    }

    setLoading(true);

    const res = await dispatch(
      forgotPassword({
        email: user,
      })
    );

    if (res.error === undefined) {
      setLoading(false);
    } else {
      setLoading(false);
    }
  };
  return (
    <div className="container">
      <Row style={{ width: "100vw" }}>
        <Col xs={24} sm={12} md={12} lg={12}>
          <div className="image-container">
            <img className="background-img" src={BackGround} alt="Image" />
          </div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12}>
          <div className="login-container">
            <div className="logo-title">PROLINK</div>
            <div className="login-box">
              <div className="login-address-container">
                <div
                  className="login-address"
                  style={{ fontWeight: 700, fontSize: 20 }}
                >
                  Forgot Password
                </div>
              </div>

              <form className="form" onSubmit={handleForgot}>
                {/* <FormControl> */}
                <label className="login-lable">Email</label>
                <Input
                  className="email-forgot-input"
                  type="text"
                  size="large"
                  placeholder="Email or Phone Number"
                  prefix={<MailOutlined />}
                  value={user}
                  onChange={handleUserChange}
                  onKeyPress={(e) => {
                    handleEnterPress(e);
                    handleKeyPressNoSpace(e);
                  }}
                />
                <div className="error-label">{userError}</div>
                <Button
                  onClick={handleForgot}
                  className={
                    disabled || loading || userError !== "" || user === ""
                      ? "addUserBtnLoadingAuth"
                      : "addUserBtnAuth"
                  }
                  disabled={
                    disabled || loading || userError !== "" || user === ""
                  }
                  block
                >
                  {loading ? "Loading..." : "Send Reset Link"}
                </Button>
                <div
                  style={{
                    paddingTop: 10,
                    textAlign: "center",
                    color: "#7e56d8",
                  }}
                >
                  <Link to="/login" className="links cursor-remove-login">
                    <span className="cursor-pointer">Back To Login</span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Forgot;
