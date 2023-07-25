import "./RoleManagement.css";
import React, { useEffect, useState } from "react";
import {
  Col,
  Row,
  Button,
  Radio,
  Space,
  Modal,
  Input,
  Dropdown,
  Select,
  Checkbox,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import styled from "styled-components";
import CustomTable from "../../components/table/Table";
import { SUPER_ADMIN_ROLE_MANAGEMENT } from "../../utils/columns";
const { TextArea } = Input;

const WhiteSearchOutlined = styled(SearchOutlined)`
  background-color: white;
`;
const items = [
  {
    key: "1",
    label: (
      <div>
        asa<b>sdas</b> aa
      </div>
    ),
  },
  {
    key: "2",
    label: "    2nd menu item",
  },
  {
    key: "3",
    label: "3rd menu item",
  },
];

const SuperAdminRoleManagement = ({
  setBreadCrumb,
  setValues,
  modalVisible,
  setModalVisible,
}) => {
  const [roleName, setRoleName] = useState("");
  const [projectType, setProjectType] = useState("all");
  const [accessType, setAccessType] = useState("all");
  const [description, setDescription] = useState("");
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModifyChecked, setModifyChecked] = useState(false); // At the beginning of your component.
  const data = [
    {
      key: "1",
      role: "Admin",
      read: [<Checkbox />],
      write: [<Checkbox />],
      modify: [
        <Checkbox
        // checked={isModifyChecked}
        // onChange={(e) => setModifyChecked(e.target.checked)}
        />,
      ],
      moderate: [<Checkbox />],
      delete: [<Checkbox />],
    },
    {
      key: "2",
      role: "User",
      read: [<Checkbox />],
      write: [<Checkbox />],
      modify: [<Checkbox />],
      moderate: [<Checkbox />],
      delete: [<Checkbox />],
    },
    {
      key: "3",
      role: "Manager",
      read: [<Checkbox />],
      write: [<Checkbox />],
      modify: [<Checkbox />],
      moderate: [<Checkbox />],
      delete: [<Checkbox />],
    },
    {
      key: "4",
      role: "Office Crew",
      read: [<Checkbox />],
      write: [<Checkbox />],
      modify: [<Checkbox />],
      moderate: [<Checkbox />],
      delete: [<Checkbox />],
    },
  ];
  useEffect(() => {
    setBreadCrumb("Super Admin Roles Agreement");
    setValues("Roles");
  }, [setBreadCrumb, setValues]);

  const handleRoleNameChange = (e) => {
    const { value } = e.target;
    console.log("Value", value);
    setRoleName(value);
  };
  const onChangeProjectType = (e) => {
    setProjectType(e.target.value);
  };
  const onChangeAccessType = (e) => {
    setAccessType(e.target.value);
  };
  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const createRole = () => {
    console.log("submit", roleName, projectType, accessType, description);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  return (
    <div>
      <Modal
        title="Create Role"
        visible={modalVisible}
        width={541}
        // onOk={() => setModalVisible(false)}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        <form className="form" onSubmit={createRole}>
          <Row>
            <Col xs={24} sm={24} md={24} lg={24}>
              <label className="login-lable">Role Name</label>
              <Input
                className="email-forgot-input"
                type="text"
                size="large"
                placeholder="Supervisor"
                value={roleName}
                onChange={handleRoleNameChange}
              />
            </Col>
          </Row>
          <div style={{ padding: "14px 0px" }}>
            <Row
              className="setting-row"
              style={{ padding: "4px 10px 4px 0px" }}
            >
              <Col xs={24} sm={24} md={12} lg={12}>
                <label className="login-lable">Project Type</label>
                <div style={{ padding: "10px 0px" }}>
                  <Radio.Group
                    onChange={onChangeProjectType}
                    value={projectType}
                  >
                    <Radio value={"all"}>All</Radio>
                    <Radio value={"assignedProjects"}>Assigned Projects</Radio>
                  </Radio.Group>
                </div>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12}>
                <label className="login-lable">Access Type</label>
                <div style={{ padding: "10px 0px" }}>
                  <Radio.Group onChange={onChangeAccessType} value={accessType}>
                    <Radio value={"all"}>All</Radio>
                    <Radio value={"mobile"}>Mobile</Radio>
                    <Radio value={"web"}>Web</Radio>
                  </Radio.Group>
                </div>
              </Col>
            </Row>
          </div>
          <div style={{ padding: "14px 0px" }}>
            <Row className="setting-row" style={{ padding: "4px 0px 4px 0px" }}>
              <Col xs={24} sm={24} md={24} lg={24}>
                <label className="login-lable">Description</label>
                <TextArea
                  rows={4}
                  className="email-forgot-input"
                  size="large"
                  placeholder="Description text. . ."
                  value={description}
                  onChange={onChangeDescription}
                />
              </Col>
            </Row>
          </div>
          <Row>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Button
                onClick={() => {
                  setModalVisible(false);
                }}
              >
                Cancle
              </Button>
            </Col>
            <Col style={{ textAlign: "right" }} xs={24} sm={24} md={12} lg={12}>
              <Button
                className="addUserBtnAuth"
                onClick={() => {
                  createRole();
                  setModalVisible(false);
                }}
              >
                Save
              </Button>
            </Col>
          </Row>
        </form>
      </Modal>
      <div
        className="setting-container"
        style={{ borderRadius: "8px", padding: 0, marginTop: 24 }}
      >
        <CustomTable
          rowSelection={rowSelection}
          columns={SUPER_ADMIN_ROLE_MANAGEMENT}
          rows={data}
          footer={false}
          pagination={true}
          current={currentPage}
          onChange={(page) => setCurrentPage(page)}
          //   isViewable={true}
          //   isEditable={true}
        />
      </div>
    </div>
  );
};

export default SuperAdminRoleManagement;
