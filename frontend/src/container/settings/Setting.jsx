import "./Setting.css";
import {
  Col,
  Segmented,
  Row,
  Button,
  Radio,
  Space,
  Switch,
  Modal,
  Input,
} from "antd";
import React, { useEffect, useState } from "react";
import CustomTable from "../../components/table/Table";
import { Select } from "antd";
import { ROLES_COLUMNS } from "../../utils/columns";
const { TextArea } = Input;
const data = [
  {
    creatingWorkOrder: "Description1",
    optional: true,
    hidden: false,
    required: false,
  },
  {
    creatingWorkOrder: "Description2",
    optional: false,
    hidden: true,
    required: false,
  },
  {
    creatingWorkOrder: "Description3",
    optional: false,
    hidden: false,
    required: true,
  },
];
const completeData = [
  {
    completedWorkOrder: "complete1",
    optional: true,
    required: false,
  },
  {
    completedWorkOrder: "Complete2",
    optional: false,
    required: true,
  },
];
const rowData = [
  {
    name: "Administrator",
    external_id: "admin",
    user: 2,
    type: "Free",
  },
  {
    name: "Limited Administrator",
    external_id: "limited_admin",
    user: 2,
    type: "Paid",
  },
  {
    name: "Technician",
    external_id: "tech",
    user: 2,
    type: "Free",
  },
  {
    name: "Limited Technician",
    external_id: "limited_tech",
    user: 0,
    type: "Free",
  },
  {
    name: "Limited Technician",
    external_id: "limited_tech",
    user: 0,
    type: "Free",
  },
  {
    name: "Limited Technician",
    external_id: "limited_tech",
    user: 0,
    type: "Free",
  },
];
const Setting = ({
  setBreadCrumb,
  setValues,
  modalVisible,
  setModalVisible,
}) => {
  const [value, setValue] = useState("General Settings");
  const [isActiveCreating, setIsActiveCreating] = useState(true);
  const [isActiveCompleting, setIsActiveCompleting] = useState(false);
  const [radioValue, setRadioValue] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [roleName, setRoleName] = useState("");
  const [projectType, setProjectType] = useState("all");
  const [accessType, setAccessType] = useState("all");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setBreadCrumb("Settings");
    setValues(value);
  }, [setBreadCrumb, setValues, value]);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setRadioValue(e.target.value);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onChangeNotification = (checked) => {
    console.log(`switch to ${checked}`);
  };

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

  return (
    <>
      <div style={{ padding: "24px 0px" }}>
        <Segmented
          options={["General Settings", "Work Order Configuration", "Roles"]}
          value={value}
          style={{ backgroundColor: "white" }}
          onChange={setValue}
        />
      </div>
      {value === "General Settings" && (
        <>
          <div className="setting-container" style={{ borderRadius: "8px" }}>
            <div style={{ width: "100%" }}>
              Common user and business-wide settings.
            </div>
            <div style={{ padding: "14px 0px" }}>
              <Row
                className="setting-row"
                style={{ padding: "4px 10px 4px 0px" }}
              >
                <Col xs={24} sm={6} md={4.3} lg={4}>
                  <span>Language</span>
                  <Space wrap>
                    <Select
                      defaultValue="lucy"
                      style={{
                        width: 120,
                        paddingTop: 4,
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "jack",
                          label: "Jack",
                        },
                        {
                          value: "lucy",
                          label: "Lucy",
                        },
                        {
                          value: "Yiminghe",
                          label: "yiminghe",
                        },
                        {
                          value: "disabled",
                          label: "Disabled",
                          disabled: true,
                        },
                      ]}
                    />
                  </Space>
                </Col>
                <Col xs={24} sm={6} md={4.3} lg={4}>
                  <span>Date Format</span>
                  <Space wrap>
                    <Select
                      defaultValue="lucy"
                      style={{
                        width: 120,
                        paddingTop: 4,
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "jack",
                          label: "Jack",
                        },
                        {
                          value: "lucy",
                          label: "Lucy",
                        },
                        {
                          value: "Yiminghe",
                          label: "yiminghe",
                        },
                        {
                          value: "disabled",
                          label: "Disabled",
                          disabled: true,
                        },
                      ]}
                    />
                  </Space>
                </Col>
                <Col xs={24} sm={6} md={4.3} lg={4}>
                  <span>Currency</span>
                  <Space wrap>
                    <Select
                      defaultValue="lucy"
                      style={{
                        width: 120,
                        paddingTop: 4,
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "jack",
                          label: "Jack",
                        },
                        {
                          value: "lucy",
                          label: "Lucy",
                        },
                        {
                          value: "Yiminghe",
                          label: "yiminghe",
                        },
                        {
                          value: "disabled",
                          label: "Disabled",
                          disabled: true,
                        },
                      ]}
                    />
                  </Space>
                </Col>
                <Col xs={24} sm={6} md={4.3} lg={4}>
                  <span>Business Type</span>
                  <Space wrap>
                    <Select
                      defaultValue="lucy"
                      style={{
                        width: 120,
                        paddingTop: 4,
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "jack",
                          label: "Jack",
                        },
                        {
                          value: "lucy",
                          label: "Lucy",
                        },
                        {
                          value: "Yiminghe",
                          label: "yiminghe",
                        },
                        {
                          value: "disabled",
                          label: "Disabled",
                          disabled: true,
                        },
                      ]}
                    />
                  </Space>
                </Col>
                <Col xs={24} sm={6} md={4.3} lg={4}>
                  <span>Timezone</span>
                  <Space wrap>
                    <Select
                      defaultValue="lucy"
                      style={{
                        width: 120,
                        paddingTop: 4,
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: "jack",
                          label: "Jack",
                        },
                        {
                          value: "lucy",
                          label: "Lucy",
                        },
                        {
                          value: "Yiminghe",
                          label: "yiminghe",
                        },
                        {
                          value: "disabled",
                          label: "Disabled",
                          disabled: true,
                        },
                      ]}
                    />
                  </Space>
                </Col>
              </Row>
            </div>
            <div style={{ width: "100%", fontWeight: 800 }}>Work Orders</div>
            <div className="a">
              <div className="aa">
                <div>
                  <div>Auto-assign Work Orders</div>
                  <div className="setting-description">
                    Automatically assign new work orders to the person that
                    creates them.
                  </div>
                </div>
              </div>
              <div style={{ width: "30%", marginTop: "10px" }}>
                <Switch value={true} onChange={onChangeNotification} />
              </div>
            </div>
            <div className="a">
              <div className="aa">
                <div>
                  <div>Auto-assign Requests</div>
                  <div className="setting-description">
                    Automatically assign work orders to the person who approves
                    the request.
                  </div>
                </div>
              </div>
              <div style={{ width: "30%", marginTop: "10px" }}>
                <Switch value={true} onChange={onChangeNotification} />
              </div>
            </div>
            <div className="a">
              <div className="aa">
                <div>
                  <div>Disable Closed Work Order Notifications</div>
                  <div className="setting-description">
                    Disable notifications when closed work orders are updated.
                  </div>
                </div>
              </div>
              <div style={{ width: "30%", marginTop: "10px" }}>
                <Switch value={true} onChange={onChangeNotification} />
              </div>
            </div>
            <div className="a">
              <div className="aa">
                <div>
                  <div>Ask for feedback when Work Order is Closed</div>
                  <div className="setting-description">
                    Users are asked to give feedback on the job done.
                  </div>
                </div>
              </div>
              <div style={{ width: "30%", marginTop: "10px" }}>
                <Switch value={true} onChange={onChangeNotification} />
              </div>
            </div>
            <div className="a">
              <div className="aa">
                <div>
                  <div>Include labor costs in the total cost</div>
                  <div className="setting-description">
                    Add labor costs to the total when a user logs time and has
                    an hourly rate stored in UpKeep. Admins can also control
                    this when manually adding time.
                  </div>
                </div>
              </div>
              <div style={{ width: "30%", marginTop: "10px" }}>
                <Switch value={true} onChange={onChangeNotification} />
              </div>
            </div>
            <div className="a">
              <div className="aa">
                <div>
                  <div>Enable Work Order Updates for Requesters</div>
                  <div className="setting-description">
                    Users get updates for the Work Orders they requested.
                  </div>
                </div>
              </div>
              <div style={{ width: "30%", marginTop: "10px" }}>
                <Switch value={true} onChange={onChangeNotification} />
              </div>
            </div>
            <br />
            <br />
            <div style={{ width: "100%", fontWeight: 800 }}>Parts</div>
            <div className="a">
              <div className="aa">
                <div>
                  <div>Enable Parts with multiple inventory lines</div>
                  <div className="setting-description">
                    Please follow{" "}
                    <span style={{ color: "#7F56D9" }}>
                      {" "}
                      this import process
                    </span>{" "}
                    to update your data.
                  </div>
                </div>
              </div>
              <div style={{ width: "30%", marginTop: "10px" }}>
                <Switch value={true} onChange={onChangeNotification} />
              </div>
            </div>
            <Button className="addUserBtnAuth" style={{ margin: "14px 0px" }}>
              Group Parts
            </Button>
          </div>
        </>
      )}
      {value === "Work Order Configuration" && (
        <>
          <div className="setting-container">
            <div className="setting-list-header">
              <Row>
                <Col xs={24} sm={12} md={12} lg={12}>
                  <Button
                    className={isActiveCreating ? "btnStyle" : "btnStyle1"}
                    style={{
                      width: "100%",
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                    onClick={() => {
                      setIsActiveCreating(true);
                      setIsActiveCompleting(false);
                    }}
                  >
                    Creating a work order
                  </Button>
                </Col>

                <Col xs={24} sm={12} md={12} lg={12}>
                  <Button
                    style={{
                      width: "100%",
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    }}
                    className={isActiveCompleting ? "btnStyle" : "btnStyle1"}
                    onClick={() => {
                      setIsActiveCompleting(true);
                      setIsActiveCreating(false);
                    }}
                  >
                    Completing a work order
                  </Button>
                </Col>
              </Row>
            </div>
          </div>

          {isActiveCreating
            ? data?.map((item, index) => {
                let initialRadioValue;
                if (item.optional) initialRadioValue = "optional";
                else if (item.hidden) initialRadioValue = "hidden";
                else if (item.required) initialRadioValue = "required";
                return (
                  // <div className="setting-container-list-items">
                  <div className="setting-container-list">
                    <Row key={index}>
                      <Col xs={24} sm={12} md={12} lg={12}>
                        <div>{item?.creatingWorkOrder}</div>
                      </Col>
                      <Col
                        xs={24}
                        sm={12}
                        md={12}
                        lg={12}
                        style={{ textAlign: "center" }}
                      >
                        <div>
                          <Radio.Group
                            onChange={onChange}
                            value={radioValue ? radioValue : initialRadioValue}
                          >
                            <Radio value={"optional"}>Optional</Radio>
                            <Radio value={"hidden"}>Hidden</Radio>
                            <Radio value={"required"}>Required</Radio>
                          </Radio.Group>
                        </div>
                      </Col>
                    </Row>
                  </div>
                );
              })
            : completeData?.map((item, index) => {
                let initialRadioValue;
                if (item.optional) initialRadioValue = "optional";
                else if (item.required) initialRadioValue = "required";
                return (
                  // <div className="setting-container-list-items">
                  <div className="setting-container-list">
                    <Row key={index}>
                      <Col xs={24} sm={12} md={12} lg={12}>
                        <div>{item?.completedWorkOrder}</div>
                      </Col>
                      <Col
                        xs={24}
                        sm={12}
                        md={12}
                        lg={12}
                        style={{ textAlign: "center" }}
                      >
                        <div>
                          <Radio.Group
                            onChange={onChange}
                            value={radioValue ? radioValue : initialRadioValue}
                          >
                            <Radio value={"optional"}>Optional</Radio>
                            <Radio value={"required"}>Required</Radio>
                          </Radio.Group>
                        </div>
                      </Col>
                    </Row>
                  </div>
                );
              })}
        </>
      )}
      {value === "Roles" && (
        <>
          <div className="setting-container">
            <div className="setting-list-header">
              <Row>
                <Col xs={24} sm={12} md={12} lg={12}>
                  6 Roles
                </Col>
              </Row>
            </div>
          </div>
          <CustomTable
            columns={ROLES_COLUMNS}
            rows={rowData}
            rowKey="id"
            footer={false}
            pagination={true}
            current={currentPage}
            onChange={(page) => setCurrentPage(page)}
          />
        </>
      )}
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
    </>
  );
};

export default Setting;
