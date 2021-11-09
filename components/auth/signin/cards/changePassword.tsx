import { Button, Form, Input, Typography } from "antd";
import useTranslation from "next-translate/useTranslation";
import { ChangePassContainer } from "../style";

const { Text } = Typography;

const ChangePassword = ({ setType }) => {
  const { t } = useTranslation("login");
  return (
    <ChangePassContainer>
      <Form
        name="basic"
        labelCol={{ span: 24 }}
        initialValues={{
          remember: true,
          password: "",
          email: "",
        }}>
        <Form.Item>
          <Text className="header"> {t("resetPass")} </Text>
        </Form.Item>
        <Form.Item
          label={t(`password`)}
          name="password"
          rules={[
            {
              required: true,
              message: t(`passError`),
            },
          ]}>
          <Input.Password />
        </Form.Item>
        <Form.Item
          label={t(`confirmNewPassword`)}
          name="confirm-password"
          rules={[
            {
              required: true,
              message: t(`passError`),
            },
          ]}>
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" block type="primary" onClick={() => setType("signin")}>
            {t(`reset`)}
          </Button>
        </Form.Item>
      </Form>
    </ChangePassContainer>
  );
};

export default ChangePassword;
