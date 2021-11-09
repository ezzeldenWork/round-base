import { Button, Col, Row, Typography, Form, Space, Input, Tabs, Divider } from "antd";
import useTranslation from "next-translate/useTranslation";
import Icon from "@ant-design/icons";
import Link from "next/link";
import { SignInContainer } from "../style";
import MyImage from "../../../common/img";
import router from "next/router";
const { Text } = Typography;

const SignUpCard = () => {
  const { t } = useTranslation("login");

  const socialMediaIcons = [
    {
      icon: "/static/images/round-base/linkedin.svg",
      href: "/login",
    },
    {
      icon: "/static/images/round-base/google.svg",
      href: "/login",
    },
    {
      icon: "/static/images/round-base/twitter.svg",
      href: "/login",
    },
    {
      icon: "/static/images/round-base/facebook.svg",
      href: "/login",
    },
  ];

  return (
    <SignInContainer>
      <Form
        name="basic"
        labelCol={{ span: 24 }}
        initialValues={{
          remember: true,
          password: "",
          email: "",
        }}>
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

        <Row gutter={[22, 0]}>
          <Col xs={{ span: 12 }}>
            <Form.Item
              name="first-name"
              label={t("fName")}
              rules={[
                {
                  required: true,
                  message: t(`nameError`),
                },
              ]}>
              <Input />
            </Form.Item>
          </Col>
          <Col xs={{ span: 12 }}>
            <Form.Item
              name="last-name"
              label={t("lName")}
              rules={[
                {
                  required: true,
                  message: t(`nameError`),
                },
              ]}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

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
          label={t(`confirmPassword`)}
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
          <Text className="term-condition">
            {t("clickToSign")}
            <Link href="/" passHref>
              <Text className="terms">
                {t("terms&condition")} {t("and")} {t("privacy")}
              </Text>
            </Link>
          </Text>
        </Form.Item>
        <Form.Item>
          <Button
            htmlType="submit"
            block
            type="primary"
            onClick={() => router.push("/survey/1")}>
            {t(`logup`)}
          </Button>
        </Form.Item>
        <Form.Item>
          <Divider />
        </Form.Item>
        <Form.Item>
          <Space size={27} style={{ width: "100%", justifyContent: "center" }}>
            {socialMediaIcons.map((icon, index) => (
              <Link href={icon.href} passHref key={index}>
                <div className="wrapper">
                  <MyImage src={icon.icon} width={"100%"} />
                </div>
              </Link>
            ))}
          </Space>
        </Form.Item>
      </Form>
    </SignInContainer>
  );
};

export default SignUpCard;
