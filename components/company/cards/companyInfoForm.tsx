import { Typography, Form, Row, Col, Input, Radio, Space, Select } from "antd";
import useTranslation from "next-translate/useTranslation";
import UploadImg from "../../investor/cards/uploadImg";
import { CompanyContainer } from "../style";

const { Text } = Typography;
const { Option } = Select;

const CompanyInfoForm = () => {
  const { t } = useTranslation("company");
  return (
    <CompanyContainer>
      <div id="companyInfo" className="user-card">
        <Text className="header"> {t("companyInfo")} </Text>
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
          <UploadImg />

          <Row gutter={[22, 0]}>
            <Col md={{ span: 12 }} xs={{ span: 24 }}>
              <Form.Item label={t("companyName")} name="companyName">
                <Input />
              </Form.Item>
            </Col>
            <Col md={{ span: 12 }} xs={{ span: 24 }}>
              <Form.Item label={t("companyNickname")} name="companyNickname">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label={t("investor:field")} name="field">
            <Input />
          </Form.Item>
          <Form.Item label={t("investor:companyActivity")} name="companyActivity">
            <Input />
          </Form.Item>
          <Form.Item label={t("investor:establishDate")} name="establishDate">
            <Input />
          </Form.Item>
          <Form.Item label={t("investor:founders")} name="founders">
            <Input />
          </Form.Item>
          <Form.Item name="employeeNum" label={t("investor:employeeNum")}>
            <Select>
              <Option value="10">10</Option>
              <Option value="100">100</Option>
              <Option value="150">150</Option>
            </Select>
          </Form.Item>
          <Form.Item label={t("companyType")} name="companyType">
            <Radio.Group defaultValue={1} value={1}>
              <Space size={50}>
                <Radio value={1}> {t("profit")} </Radio>
                <Radio value={2}> {t("Nonprofit")} </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
        </Form>
      </div>
    </CompanyContainer>
  );
};

export default CompanyInfoForm;
