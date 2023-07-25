import "./App.css";
import React, { useEffect, useState } from "react";
import { FrappeProvider } from "frappe-react-sdk";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./container/login/Login";
import Forgot from "./container/login/Forgot";
import CreatePassword from "./container/login/CreatePassword";
import Layouts from "./components/Layout";
import Setting from "./container/settings/Setting";
import session from "./utils/session";
import RoleManagement from "./container/roleManagement/RoleManagement";
import SuperAdminRoleManagement from "./container/roleManagement/SuperAdminRoleManagement";
import Profile from "./container/profile/Profile";
import CompanyProfile from "./container/companyProfile/CompanyProfile";

function App() {
  const navigate = useNavigate();
  const [breadCrumbText, setBreadCrumbText] = useState("");
  const [valueText, setValueText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  let config = {
    headers: {
      Authorization: "token 537d522748f2c76:13977fa6d448cd2",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  useEffect(() => {
    fetch("http://localhost:8080/api/resource/Role", config)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("GETROLE:-> ", result);
        },
        (error) => {
          console.error("Error:", error);
        }
      );
  }, []);
  useEffect(() => {
    const { pathname } = window.location;
    if (pathname.includes("create-password")) {
      return;
    }
    if (pathname.includes("reset")) {
      return;
    }
    if (!session.token) {
      if (pathname.includes("/forgot")) {
        pathname.includes("/forgot") && navigate("/forgot");
      } else if (pathname.includes("/role_management")) {
        session.setToken("ABC");
        pathname.includes("/role_management") && navigate("/role_management");
      } else if (pathname.includes("/settings")) {
        session.setToken("ABC");
        pathname.includes("/settings") && navigate("/settings");
      } else if (pathname.includes("/profile")) {
        session.setToken("ABC");
        pathname.includes("/profile") && navigate("/profile");
      } else if (pathname.includes("/companyprofile")) {
        session.setToken("ABC");
        pathname.includes("/companyprofile") && navigate("/companyprofile");
      } else {
        navigate("/login");
      }
    } else {
      !pathname.includes("login") ? navigate(pathname) : navigate("login");
      !pathname.includes("role-management") ? null : navigate("login");
    }
  }, [navigate]);

  return (
    <div className="App">
      <FrappeProvider>
        <Routes>
          <Route path="/login" exact element={<Login />} />
          <Route path="/forgot" exact element={<Forgot />} />
          <Route path="/create-password" exact element={<CreatePassword />} />
          <Route path="/layout" exact element={<Layouts />} />

          {/* <Route path="/reset" exact element={<ResetPassword />} /> */}
        </Routes>
        {session.token && (
          <Layouts
            breadCrumbText={breadCrumbText}
            valueText={valueText}
            setModalVisible={setModalVisible}
          >
            <Routes>
              <Route
                path="/role_management"
                exact
                element={
                  <RoleManagement
                    setBreadCrumb={setBreadCrumbText}
                    setValues={setValueText}
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                  />
                }
              />
              <Route
                path="/superadminrolemanagement"
                exact
                element={
                  <SuperAdminRoleManagement
                    setBreadCrumb={setBreadCrumbText}
                    setValues={setValueText}
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                  />
                }
              />

              <Route
                path="/companyprofile"
                exact
                element={
                  <CompanyProfile
                    setBreadCrumb={setBreadCrumbText}
                    setValues={setValueText}
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                  />
                }
              />
              <Route
                path="/profile"
                exact
                element={
                  <Profile
                    setBreadCrumb={setBreadCrumbText}
                    setValues={setValueText}
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                  />
                }
              />
              <Route
                path="/settings"
                exact
                element={
                  <Setting
                    setBreadCrumb={setBreadCrumbText}
                    setValues={setValueText}
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                  />
                }
              />
            </Routes>
          </Layouts>
        )}
      </FrappeProvider>
    </div>
  );
}

export default App;
