import { Typography, Form, Input, Select } from "antd";
import useTranslation from "next-translate/useTranslation";
import { PersonInfoContainer } from "../style";

const { Text } = Typography;
const { Option } = Select;

type Props = {
  companyForm?: boolean;
};

const AddressCard = ({ companyForm }: Props) => {
  const { t } = useTranslation("person");

  const companyFormItems = () => {
    if (companyForm) {
      return (
        <>
          <Form.Item label={t("street")} name="street">
            <Input />
          </Form.Item>
          <Form.Item label={t("buildingNum")} name="buildingNum">
            <Input />
          </Form.Item>
        </>
      );
    }
  };

  return (
    <PersonInfoContainer>
      <div id="address" className="user-card">
        <Text className="header"> {t("address")} </Text>
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
          <Form.Item name="country" label={t("country")}>
            <Select>
              <Option value="egypt">Egypt</Option>
              <Option value="ksa">Suadi Arabia</Option>
            </Select>
          </Form.Item>
          <Form.Item name="state" label={t("state")}>
            <Select>
              <Option value="cairo">Cairo</Option>
              <Option value="mansoura">Mansoura</Option>
              <Option value="alrayyad">Alrayyad</Option>
              <Option value="jeddah">Jeddah</Option>
            </Select>
          </Form.Item>
          {companyFormItems()}
        </Form>
      </div>
    </PersonInfoContainer>
  );
};

export default AddressCard;
