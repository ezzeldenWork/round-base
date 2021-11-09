import { Typography, Form, Input, Select } from "antd";
import useTranslation from "next-translate/useTranslation";
import { PersonInfoContainer } from "../style";

const { Text } = Typography;
const { Option } = Select;

const PersonInfoCard = () => {
  const { t } = useTranslation("person");
  return (
    <PersonInfoContainer>
      <div id="personInfo" className="user-card">
        <Text className="header"> {t("personInfo")} </Text>
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
          <Form.Item label={t("name")} name="name">
            <Input />
          </Form.Item>
          <Form.Item label={t("mainJob")} name="mainJob">
            <Input />
          </Form.Item>
          <Form.Item label={t("mainCompany")} name="mainCompany">
            <Input />
          </Form.Item>
          <Form.Item name="gender" label={t("gender")}>
            <Select>
              <Option value="male">{t("male")}</Option>
              <Option value="female">{t("female")}</Option>
            </Select>
          </Form.Item>
        </Form>
      </div>
    </PersonInfoContainer>
  );
};

export default PersonInfoCard;
