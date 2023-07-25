import "../profile/Profile.css";
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
} from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
// Don't wait for the perfect moment, Take the moment and make it perfect.

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

const CompanyProfile = ({ setBreadCrumb }) => {
  const [editCompanyProfileModal, setEditCompanyProfileModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  useEffect(() => {
    setBreadCrumb("Company Profile");
  }, [setBreadCrumb]);
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
  const editCompanyProfile = () => {};
  return (
    <>
      {editCompanyProfileModal && (
        <Modal
          title="Edit Company Profile"
          visible={editCompanyProfileModal}
          width={541}
          // onOk={() => setModalVisible(false)}
          onCancel={() => setEditCompanyProfileModal(false)}
          footer={null}
        >
          <form className="form" onSubmit={editCompanyProfile}>
            <Row style={{ paddingTop: 5 }}>
              <Col xs={24} sm={24} md={24} lg={24}>
                <label className="modal-lable" style={{ fontWeight: 700 }}>
                  Company Img
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
                <label className="login-lable">Company Name</label>
                <Input
                  className="email-forgot-input"
                  type="text"
                  size="large"
                  placeholder="Type company name here. . ."
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
                <label className="login-lable">Address Line 1</label>

                <Input
                  className="email-forgot-input"
                  type="text"
                  size="large"
                  placeholder="Type address line 1 here. . ."
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
                <label className="login-lable">Address Line 2</label>

                <Input
                  className="email-forgot-input"
                  type="text"
                  size="large"
                  placeholder="Type address line 2 here. . ."
                  //   value={roleName}
                  //   onChange={handleRoleNameChange}
                />
              </Col>
            </Row>

            <Row
              className="setting-row"
              style={{ padding: "4px 10px 4px 0px" }}
            >
              <Col xs={24} sm={24} md={6} lg={7}>
                <label className="login-lable">City</label>

                <Input
                  className="email-forgot-input"
                  type="text"
                  size="large"
                  placeholder="City"
                  //   value={roleName}
                  //   onChange={handleRoleNameChange}
                />
              </Col>
              <Col xs={24} sm={24} md={6} lg={7}>
                <label className="login-lable">State</label>

                <Input
                  className="email-forgot-input"
                  type="text"
                  size="large"
                  placeholder="State"
                  //   value={roleName}
                  //   onChange={handleRoleNameChange}
                />
              </Col>
              <Col xs={24} sm={24} md={6} lg={7}>
                <label className="login-lable">Zip Code</label>

                <Input
                  className="email-forgot-input"
                  type="text"
                  size="large"
                  placeholder="Zip code"
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
                <label className="login-lable">Website</label>
                <Input
                  className="email-forgot-input"
                  type="text"
                  size="large"
                  placeholder="Type website here. . ."
                  //   value={roleName}
                  //   onChange={handleRoleNameChange}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={24} sm={24} md={12} lg={12}>
                <Button
                  onClick={() => {
                    setEditCompanyProfileModal(false);
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
                  onClick={() => setEditCompanyProfileModal(false)}
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
            src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-eco-energy-logo-with-electric-symbol-and-leaf-png-image_5327433.jpg"
            alt="image"
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
              onClick={() => setEditCompanyProfileModal(true)}
            >
              Edit Profile
            </Button>
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={24} md={12} lg={12}>
            <span className="user-name" style={{ paddingLeft: "8%" }}>
              Echo Energy
            </span>
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
        <Row style={{ paddingTop: 12 }}>
          <Col xs={24} sm={24} md={24} lg={24}>
            <div
              className="user-role"
              style={{ color: "#667085", paddingLeft: 12 }}
            >
              Address
            </div>
            <div style={{ paddingLeft: 12, paddingTop: 5 }}>
              123, Down Town Late, Streen One, New York, United States. 1002356
            </div>
          </Col>
        </Row>
        <Row style={{ paddingTop: 12 }}>
          <Col xs={24} sm={24} md={24} lg={24}>
            <div
              className="user-role"
              style={{ color: "#667085", paddingLeft: 12 }}
            >
              Website
            </div>
            <div style={{ paddingLeft: 12, paddingTop: 5 }}>
              www.echoenergy.com
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default CompanyProfile;
