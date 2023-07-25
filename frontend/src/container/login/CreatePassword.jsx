import "./Login.css";
import React, { useState } from "react";
import BackGround from "../../assets/Background.png";
import { Button, Col, Input, Row } from "antd";
import { LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Validator } from "../../utils/validations";
// import { FormControl } from "./LoginStyle.jsx";
const CreatePassword = () => {
  const [user, setUser] = useState("");
  const [userError, setUserError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    setPasswordError(Validator.validate("password", value, 6, 30, true));
  };
  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleLogin(e);
    }
  };
  const handleConfirmPassword = (e) => {
    const { value } = e.target;
    setConfirmPassword(value);
    setConfirmPasswordError(
      Validator.validate("confirm", value, password, null, null, true)
    );
  };
  const handleKeyPressNoSpace = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (
      userError !== "" ||
      passwordError !== "" ||
      user === "" ||
      password === ""
    ) {
      if (user === "") {
        setUserError("This field is required.");
      } else {
        setUserError(userError);
      }
      if (password === "") {
        setPasswordError("This field is required.");
      } else {
        setPasswordError(passwordError);
      }
      return;
    }

    setLoading(true);

    const res = await dispatch(
      login({
        userName: user,
        password: password,
      })
    );

    if (res.error === undefined) {
      setLoading(false);
    } else {
      setLoading(false);
    }

    if (res.payload && res.payload.data && res.payload.data.status) {
      dispatch(getProfile());
      if (isChecked && user !== "") {
        session.setCheckbox(isChecked);
        session.setUser(user);
        const encryptedPassword = AES?.encrypt(
          password,
          process.env.REACT_APP_SECRET_KEY
        ).toString();
        session.setPassword(encryptedPassword);
      }
      navigate("/");
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
                  Login to Field Services
                </div>
              </div>
              <div className="login-address-container" style={{ padding: 0 }}>
                <div
                  className="login-address"
                  style={{ color: "gray", paddingBottom: 30 }}
                >
                  Welcome back, please enter your details.
                </div>
              </div>
              <form className="form" onSubmit={handleLogin}>
                <label className="login-lable">New PassWord</label>
                <Input.Password
                  className="email-forgot-input"
                  size="large"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  onKeyPress={(e) => {
                    handleEnterPress(e);
                    handleKeyPressNoSpace(e);
                  }}
                  prefix={<LockOutlined />}
                />
                <div className="error-label">{passwordError}</div>
                <label className="login-lable">Confirm Password</label>
                <Input.Password
                  className="email-forgot-input"
                  size="large"
                  placeholder="Confirm Password"
                  type="confirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPassword}
                  onKeyPress={(e) => {
                    handleEnterPress(e);
                    handleKeyPressNoSpace(e);
                  }}
                  prefix={<LockOutlined />}
                />
                <div className="error-label">{confirmPasswordError}</div>

                <div className="forgot-text">
                  <Link to="/forgot" className="links cursor-remove-login">
                    <span className="cursor-pointer">
                      Forgot your password?
                    </span>
                  </Link>
                </div>

                <Button
                  onClick={handleLogin}
                  className={
                    disabled ||
                    loading ||
                    confirmPasswordError !== "" ||
                    passwordError !== "" ||
                    confirmPassword === "" ||
                    password === "" ||
                    password !== confirmPassword
                      ? "addUserBtnLoadingAuth"
                      : "addUserBtnAuth"
                  }
                  disabled={
                    disabled ||
                    loading ||
                    passwordError !== "" ||
                    confirmPasswordError !== "" ||
                    confirmPassword === "" ||
                    password === "" ||
                    password !== confirmPassword
                  }
                  block
                >
                  {loading ? "Loading..." : "Change My Password"}
                </Button>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CreatePassword;
