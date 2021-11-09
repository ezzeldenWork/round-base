import { Button, Col, Row, Typography, Form, Space, Input, Tabs, Divider } from "antd";
import useTranslation from "next-translate/useTranslation";
import Icon from "@ant-design/icons";
import Link from "next/link";
import { SignInContainer } from "../style";
import MyImage from "../../../common/img";
const { Text } = Typography;

const SignInCard = ({ setType }) => {
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
        <Form.Item>
          <Text className="forget" onClick={() => setType("forgetPass")} >{t("forgetPassword")}</Text>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" block type="primary">
            {t(`login`)}
          </Button>
        </Form.Item>
        <Form.Item>
          <Divider />
          {/* <Space size={10} style={{ width: "100%", justifyContent: "center" }}>
            <h2 className="header-2">THIS IS A TEST</h2>
          </Space> */}
        </Form.Item>
        <Form.Item>
          <Space size={27} style={{ width: "100%", justifyContent: "center" }}>
            {socialMediaIcons.map((icon) => (
              <Link href={icon.href}>
                <div className="wrapper">
                  <MyImage src={icon.icon} width={33} />
                </div>
              </Link>
            ))}
          </Space>
        </Form.Item>
      </Form>
    </SignInContainer>
  );
};

export default SignInCard;
