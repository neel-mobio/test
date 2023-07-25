import "./Login.css";
import React, { useState } from "react";
import BackGround from "../../assets/Background.png";
import { Button, Col, Input, Row } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Validator } from "../../utils/validations.jsx";
// import { FormControl } from "./LoginStyle.jsx";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  const [userError, setUserError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
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
                {/* <FormControl> */}
                <label className="login-lable">UserName</label>
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
                {/* </FormControl>
            <FormControl> */}
                <label className="login-lable">PassWord</label>
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
                <span className="error-label">{passwordError}</span>
                {/* </FormControl> */}

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
                    loading ||
                    userError !== "" ||
                    passwordError !== "" ||
                    user === "" ||
                    disabled ||
                    (password === "" && password.length > 0)
                      ? "addUserBtnLoadingAuth"
                      : "addUserBtnAuth"
                  }
                  block
                  disabled={
                    loading ||
                    userError !== "" ||
                    passwordError !== "" ||
                    user === "" ||
                    disabled ||
                    (password === "" && password.length > 0)
                  }
                >
                  {loading ? "Loading..." : "LogIn"}
                </Button>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
