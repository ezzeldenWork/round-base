import { Space, Typography, Form, Row, Col, Input, Button } from "antd";
import useTranslation from "next-translate/useTranslation";
import MyImage from "../../common/img";
import { PasswordContainer } from "../style";

const { Text } = Typography;

const ChangePasswordCard = () => {
  const { t } = useTranslation("profile");
  return (
    <PasswordContainer>
      <div id="password" className="user-card">
        <Text className="header"> {t("changePass")} </Text>
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
            
          <Form.Item
            label={t("nowPassword")}
            name="password">
            <Input.Password />
          </Form.Item>
          <Form.Item
            label={t("newPassword")}
            name="newPassword">
            <Input.Password />
          </Form.Item>
          <Form.Item
            label={t("login:confirmNewPassword")}
            name="confirmpassword">
            <Input.Password />
          </Form.Item>
          <Form.Item className="btn">
            <Button type="primary" htmlType="submit">
              {t("edit")}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </PasswordContainer>
  );
};

export default ChangePasswordCard;
