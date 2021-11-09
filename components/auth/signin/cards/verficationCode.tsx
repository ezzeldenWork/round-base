import { Button, Form, Input, Typography } from "antd";
import useTranslation from "next-translate/useTranslation";
import { VerficationContainer } from "../style";

const { Text } = Typography;

const VerficationCode = ({ setType }) => {
  const { t } = useTranslation("login");
  return (
    <VerficationContainer>
      <Form
        name="basic"
        labelCol={{ span: 24 }}
        initialValues={{
          remember: true,
          password: "",
          email: "",
        }}>
        <Form.Item>
          <Text className="header"> {t("verficationCode")} </Text>
        </Form.Item>
        <Form.Item>
          <Text className="text"> {t("enterCode")} </Text>
        </Form.Item>
        <Form.Item
          name="verfication"
          label={t("verficationCode")}
          rules={[
            {
              required: true,
              message: t(`verficationError`),
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" block type="primary" onClick={() => setType("changePassword")}>
            {t(`send`)}
          </Button>
        </Form.Item>
      </Form>
    </VerficationContainer>
  );
};

export default VerficationCode;
