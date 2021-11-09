import { Button, Form, Input, Space, Typography } from "antd";
import useTranslation from "next-translate/useTranslation";
import { ForgetPassContainer } from "../style";
import Link from "next/link";

const { Text } = Typography;

const ForgetPassword = ({ setType }) => {
  const { t } = useTranslation("login");
  return (
    <ForgetPassContainer>
      <Form
        name="basic"
        labelCol={{ span: 24 }}
        initialValues={{
          remember: true,
          password: "",
          email: "",
        }}>
        <Form.Item>
          <Text className="header"> {t("forgetPass")} </Text>
        </Form.Item>
        <Form.Item>
          <Text className="text"> {t("forgetProcess")} </Text>
        </Form.Item>
        <Form.Item
          name="email"
          label={t("email")}
          rules={[
            {
              required: true,
              message: t(`emailError`),
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" block type="primary" onClick={() => setType("securityCode")}>
            {t(`continue`)}
          </Button>
        </Form.Item>
      </Form>
    </ForgetPassContainer>
  );
};

export default ForgetPassword;
