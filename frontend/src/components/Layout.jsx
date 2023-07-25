import "./Layout.css";
import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { useNavigate } from "react-router-dom";
import icon from "../assets/icon.svg";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import icon5 from "../assets/icon5.svg";
import icon6 from "../assets/icon6.svg";
import icon7 from "../assets/icon7.svg";
import icon8 from "../assets/icon8.svg";
import icon9 from "../assets/icon9.svg";
import icon10 from "../assets/icon10.svg";
import icon11 from "../assets/icon11.svg";
import icon12 from "../assets/icon12.svg";

const { Header, Sider, Content } = Layout;
const topMenuItems = [
  {
    key: "1",
    icon: <img src={icon} />,
    label: "Work Order",
  },
  {
    key: "2",
    icon: <img src={icon1} />,
    label: "Parts and Inventory",
  },
  {
    key: "3",
    icon: <img src={icon2} />,
    label: "Purchase Order",
  },
  {
    key: "4",
    icon: <img src={icon3} />,
    label: "QHSE Management",
  },
  {
    key: "5",
    icon: <img src={icon4} />,
    label: "Locations",
  },
  {
    key: "6",
    icon: <img src={icon5} />,
    label: "Assets",
  },
  {
    key: "7",
    icon: <img src={icon6} />,
    label: "People & Teams",
  },
  {
    key: "8",
    icon: <img src={icon7} />,
    label: "Vendors & Customers",
  },
  {
    key: "9",
    icon: <img src={icon8} />,
    label: "Files",
  },
  {
    key: "10",
    icon: <img src={icon9} />,
    label: "Categories",
  },
  {
    key: "11",
    icon: <img src={icon10} />,
    label: "Checklist",
  },
];
const bottomMenuItems = [
  {
    key: "12",
    icon: <img src={icon11} />,
    label: "Support",
  },
  {
    key: "13",
    icon: <img src={icon12} />,
    label: "Settings",
  },
];

const Layouts = (props) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState();
  const [hasScrollBar, setHasScrollBar] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  useEffect(() => {
    function updateScrollbarStatus() {
      const contentElement = document.querySelector(".content");
      // Compare scrollHeight and clientHeight
      const hasScrollbar =
        contentElement.scrollHeight > contentElement.clientHeight;
      setHasScrollBar(hasScrollbar);
    }

    // Call immediately to set initial state
    updateScrollbarStatus();
    // Add event listener for future window resizes
    window.addEventListener("resize", updateScrollbarStatus);

    // Cleanup after component unmount
    return () => window.removeEventListener("resize", updateScrollbarStatus);
  }, [props]);
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="sidebar-top" style={{ height: "calc(100% - 100px)" }}>
          <div className="demo-logo-vertical" style={{ height: 65 }}>
            LOGO
          </div>

          <Menu
            theme="light"
            mode="inline"
            style={{ flex: 1 }}
            selectedKeys={[selectedKey]}
            onClick={({ key }) => {
              if (key === "3") {
                navigate("/role_management");
              }
            }}
          >
            {topMenuItems.map((item) => (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
        </div>
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={({ key }) => setSelectedKey(key)}
        >
          {bottomMenuItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,

            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          className="content"
          style={{
            // margin: "32px 12px 32px 24px",
            margin: hasScrollBar ? "32px 12px 32px 24px" : "32px 24px",
            // padding: 24,
            height: "calc(100vh - 96px)", // Subtracting header height
            overflowY: "auto",
          }}
        >
          <div className="breadcrumbtext">
            <div>{props.breadCrumbText}</div>
            {props.valueText === "Roles" ? (
              <Button
                className="addUserBtnAuth"
                style={{ marginRight: 5 }}
                onClick={() => props.setModalVisible(true)}
              >
                + Add Role
              </Button>
            ) : null}
          </div>
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Layouts;
