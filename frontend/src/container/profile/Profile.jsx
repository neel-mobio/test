import "./Profile.css";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Checkbox,
  Col,
  Divider,
  Input,
  Modal,
  Row,
  Select,
  Space,
  Switch,
  Upload,
  message,
} from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const Profile = ({ setBreadCrumb }) => {
  const [editProfileModal, setEditProfileModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    setBreadCrumb("User Profile");
  }, [setBreadCrumb]);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onChangeNotification = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const handleChangeUploadImage = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setImageUrl(url);
        setLoading(false); // moved inside callback
      });
    } else if (info.file.status === "error") {
      // Handle any errors
      setLoading(false);
      message.error(`${info.file.name} file upload failed.`);
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  const editProfile = () => {};
  return (
    <>
      {editProfileModal && (
        <Modal
          title="My Profile"
          visible={editProfileModal}
          width={541}
          // onOk={() => setModalVisible(false)}
          onCancel={() => setEditProfileModal(false)}
          footer={null}
        >
          <form className="form" onSubmit={editProfile}>
            <Row style={{ paddingTop: 5 }}>
              <Col xs={24} sm={24} md={24} lg={24}>
                <label className="modal-lable" style={{ fontWeight: 700 }}>
                  Profile Img
                </label>
                <>
                  <Upload
                    name="avatar"
                    listType="picture-circle"
                    className="avatar-uploader"
                    showUploadList={false}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    beforeUpload={beforeUpload}
                    onChange={handleChangeUploadImage}
                  >
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt="avatar"
                        style={{ width: "100%" }}
                      />
                    ) : (
                      uploadButton
                    )}
                  </Upload>
                </>
              </Col>
            </Row>
            <Row
              className="setting-row"
              style={{ padding: "4px 10px 4px 0px" }}
            >
              <Col xs={24} sm={24} md={24} lg={24}>
                <label className="login-lable">Name</label>
                <Input
                  className="email-forgot-input"
                  type="text"
                  size="large"
                  placeholder="Type name here. . ."
                  //   value={roleName}
                  //   onChange={handleRoleNameChange}
                />
              </Col>
            </Row>

            <Row
              className="setting-row"
              style={{ padding: "4px 10px 4px 0px" }}
            >
              <Col xs={24} sm={24} md={24} lg={24}>
                <label className="login-lable">Email</label>

                <Input
                  className="email-forgot-input"
                  type="text"
                  size="large"
                  placeholder="Type email here. . ."
                  //   value={roleName}
                  //   onChange={handleRoleNameChange}
                />
              </Col>
            </Row>

            <Row
              className="setting-row"
              style={{ padding: "4px 10px 4px 0px" }}
            >
              <Col xs={24} sm={24} md={24} lg={24}>
                <label className="login-lable">Phone</label>

                <Input
                  className="email-forgot-input"
                  type="text"
                  size="large"
                  placeholder="Type phone here. . ."
                  //   value={roleName}
                  //   onChange={handleRoleNameChange}
                />
              </Col>
            </Row>

            <Row
              className="setting-row"
              style={{ padding: "4px 10px 4px 0px" }}
            >
              <Col xs={24} sm={24} md={24} lg={24}>
                <label className="login-lable">Company</label>
                <Input
                  className="email-forgot-input"
                  type="text"
                  size="large"
                  placeholder="Type company here. . ."
                  //   value={roleName}
                  //   onChange={handleRoleNameChange}
                />
              </Col>
            </Row>

            <Row>
              <Col xs={24} sm={24} md={12} lg={12}>
                <Button
                  onClick={() => {
                    setEditProfileModal(false);
                  }}
                >
                  Cancle
                </Button>
              </Col>
              <Col
                style={{ textAlign: "right" }}
                xs={24}
                sm={24}
                md={12}
                lg={12}
              >
                <Button
                  className="addUserBtnAuth"
                  onClick={() => {
                    setModalVisible(false);
                  }}
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </form>
        </Modal>
      )}
      <div
        className="setting-container"
        style={{
          borderRadius: "8px",
          padding: 10,
          marginTop: 24,
          height: "auto",
        }}
      >
        {/* <Row gutter={16}>
        <Col span={24}>
          <Card
            title=""
            style={{
              background: "rgb(126 86 216 / 30%)",
              color: "white",
              height: 116,
            }}
            bordered={false}
          ></Card>
        </Col>
      </Row>
      <div
        style={{
          borderRadius: "50%",
          background: "gray",
          top: "35%",
          left: "22%",
          position: "absolute",
          height: "100px",
          width: " 100px",
        }}
      ></div> */}
        <div style={{ position: "relative" }}>
          <Row gutter={16}>
            <Col span={24}>
              <Card
                title=""
                style={{
                  background: "rgb(126 86 216 / 30%)",
                  color: "white",
                  height: 116,
                }}
                bordered={false}
              ></Card>
            </Col>
          </Row>
          <img
            src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
            alt="Avatar"
            style={{
              borderRadius: "50%",
              background: "gray",
              top: "55%",
              left: "4%",
              position: "absolute",
              height: "100px",
              width: "100px",
              zIndex: 2, // make sure it appears above the card
            }}
          />
        </div>
        <Row>
          <Col xs={24} sm={24} md={12} lg={12}></Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            style={{ textAlign: "right", padding: 12 }}
          >
            <Button
              style={{ borderColor: "#7E56D8", color: "#7E56D8" }}
              onClick={() => setEditProfileModal(true)}
            >
              Edit Profile
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={12} lg={12}>
            <span className="user-name">User Name</span>
            <div className="user-role" style={{ color: "#667085" }}>
              Lad Technician
            </div>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            style={{ textAlign: "right", paddingRight: 12 }}
          >
            <Space wrap>
              <Select
                defaultValue="selectStatus"
                style={{
                  width: 150,
                  paddingTop: 4,
                  textAlign: "left",
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "selectStatus",
                    label: "Select Status",
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
        <Divider />
        <Row>
          <Col xs={24} sm={24} md={6} lg={6}>
            <div
              className="user-role"
              style={{ color: "#667085", paddingLeft: 12 }}
            >
              User Name/Email
            </div>
            <div style={{ paddingLeft: 12, paddingTop: 5 }}>
              jayharrdgudson@mail.com
            </div>
          </Col>
          <Col xs={24} sm={24} md={6} lg={6}>
            <div
              className="user-role"
              style={{ color: "#667085", paddingLeft: 12 }}
            >
              Phone Number
            </div>
            <div style={{ paddingLeft: 12, paddingTop: 5 }}>050 414 8778</div>
          </Col>
        </Row>
        <Row style={{ paddingTop: 24, paddingLeft: 12 }}>
          <Col xs={24} sm={24} md={24} lg={24}>
            <span className="notification-lable">Notifications</span>
          </Col>
        </Row>
        <Row>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            style={{ paddingTop: 24, paddingLeft: 12 }}
          >
            <Switch value={true} onChange={onChangeNotification} />
            <span style={{ marginLeft: 10 }}>Notifications</span>
          </Col>
        </Row>
        <Row gutter={12} style={{ paddingTop: 24, paddingLeft: 12 }}>
          <Col xs={24} sm={24} md={8} lg={8}>
            <span className="checkbox-color">
              <Checkbox />
            </span>
            <span style={{ paddingLeft: "2%" }}>
              Email updates for work orders & messages
            </span>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8}>
            <span className="checkbox-color">
              <Checkbox />
            </span>
            <span style={{ paddingLeft: "2%" }}>
              Email updates for work orders & messages
            </span>
          </Col>
        </Row>
        <Row gutter={12} style={{ paddingTop: 24, paddingLeft: 12 }}>
          <Col xs={24} sm={24} md={8} lg={8}>
            <span className="checkbox-color">
              <Checkbox />
            </span>
            <span style={{ paddingLeft: "2%" }}>
              Email updates for work orders & messages
            </span>
          </Col>
          <Col xs={24} sm={24} md={8} lg={8}>
            <span className="checkbox-color">
              <Checkbox />
            </span>
            <span style={{ paddingLeft: "2%" }}>
              Email updates for work orders & messages
            </span>
          </Col>
        </Row>
        <Row style={{ paddingTop: 24, paddingLeft: 12 }}>
          <Col xs={24} sm={24} md={24} lg={24}>
            <span className="notification-lable">Language</span>
          </Col>
        </Row>
        <Row style={{ paddingTop: 12, paddingLeft: 12 }}>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Space wrap>
              <Select
                defaultValue="English"
                style={{
                  width: 150,
                  paddingTop: 4,
                  textAlign: "left",
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "English",
                    label: "English",
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
    </>
  );
};

export default Profile;
