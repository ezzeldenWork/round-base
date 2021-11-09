import { Typography, Form, Input } from "antd";
import useTranslation from "next-translate/useTranslation";
import { PersonInfoContainer } from "../style";

const { Text } = Typography;

type cardProps = {
  investorForm?: boolean;
  companyForm?: boolean;
};

const ContactInfoCard = ({ investorForm, companyForm }: cardProps) => {
  const { t } = useTranslation("person");

  const investorItem = () => {
    if (investorForm || companyForm) {
      return (
        <Form.Item label={t("websiteLink")} name="websiteLink">
          <Input />
        </Form.Item>
      );
    }
  };
  const companyItems = () => {
    if (companyForm) {
      return (
        <>
          <Form.Item label={t("login:email")} name="email">
            <Input />
          </Form.Item>
          <Form.Item label={t("login:phoneNumber")} name="phoneNumber">
            <Input />
          </Form.Item>
        </>
      );
    }
  };
  return (
    <PersonInfoContainer>
      <div id="contactInfo" className="user-card">
        <Text className="header"> {t("contactInfo")} </Text>
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
          {investorItem()}
          {companyItems()}
          <Form.Item label={t("twitterLink")} name="twitterLink">
            <Input />
          </Form.Item>
          <Form.Item label={t("linkedLink")} name="linkedinLink">
            <Input />
          </Form.Item>
          <Form.Item label={t("facebookLink")} name="facebookLink">
            <Input />
          </Form.Item>
        </Form>
      </div>
    </PersonInfoContainer>
  );
};

export default ContactInfoCard;
