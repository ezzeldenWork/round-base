import { Space, Typography, Form, Input, Row, Col, Button, Upload, message } from "antd";
import useTranslation from "next-translate/useTranslation";
import MyImage from "../../common/img";
import { UserInfoContainer } from "../style";
import UploadUserAvatar from "../../common/uploadUserAvatar";

const { Text } = Typography;

const UserInfoCard = () => {
  const { t } = useTranslation("profile");

  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <UserInfoContainer>
      <div id="info" className="user-card">
        <Text className="header"> {t("basicInfo")} </Text>
        <Space
          size={24}
          align="start"
          style={{ width: "100%" }}
          className="user_profile_wrapper">
          <UploadUserAvatar img={<MyImage src="/static/images/round-base/avatar.svg" width={100} />} />
          <Form
            name="basic"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            initialValues={{
              remember: true,
            }}
            autoComplete="off">
            <Row gutter={[22, 0]}>
              <Col md={{ span: 12 }} xs={{ span: 24 }}>
                <Form.Item label={t("login:fName")} name="firstname">
                  <Input />
                </Form.Item>
              </Col>
              <Col md={{ span: 12 }} xs={{ span: 24 }}>
                <Form.Item label={t("login:lName")} name="lastname">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item label={t("login:email")} name="email">
              <Input />
            </Form.Item>
            <Form.Item className="btn">
              <Button type="primary" htmlType="submit">
                {t("edit")}
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </div>
    </UserInfoContainer>
  );
};

export default UserInfoCard;
