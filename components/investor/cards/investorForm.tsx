import { Typography, Form, Input, Row, Col, Radio, Space } from "antd";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { AddInvestorContainer } from "../style";
import UploadImg from "./uploadImg";

const { Text } = Typography;

const InvestorForm = () => {
  const { t } = useTranslation("investor");
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <AddInvestorContainer>
      <div id="investorInfo" className="user-card">
        <Text className="header"> {t("investorInfo")} </Text>
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
              <Form.Item label={t("login:fName")} name="firstname">
                <Input />
              </Form.Item>
            </Col>
            <Col md={{ span: 12 }} xs={{ span: 24 }}>
              <Form.Item label={t("login:lName")} name="lastname">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label={t("person:gender")} name="gender">
            <Radio.Group onChange={onChange} defaultValue={1} value={1}>
              <Space size={50}>
                <Radio value={1}> {t("person:male")} </Radio>
                <Radio value={2}> {t("person:female")} </Radio>
              </Space>
            </Radio.Group>
          </Form.Item>
          <Form.Item label={t("nickname")} name="nickname">
            <Input />
          </Form.Item>
          <Form.Item label={t("job")} name="job">
            <Input />
          </Form.Item>
          <Form.Item label={t("primaryLocation")} name="primaryLocation">
            <Input />
          </Form.Item>
        </Form>
      </div>
    </AddInvestorContainer>
  );
};

export default InvestorForm;
