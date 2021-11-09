import { Typography, Form, Input, DatePicker, Row, Col } from "antd";
import useTranslation from "next-translate/useTranslation";
import { AddInvestorContainer } from "../style";

const { Text } = Typography;

const DegreeForm = () => {
  const { t } = useTranslation("investor");
  return (
    <AddInvestorContainer>
      <div id="degree" className="user-card">
        <Text className="header"> {t("degree")} </Text>
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
          <Form.Item label={t("university")} name="university">
            <Input />
          </Form.Item>
          <Form.Item label={t("jobGrade")} name="jobGradeType">
            <Input />
          </Form.Item>
          <Form.Item label={t("specialization")} name="Specialization">
            <Input />
          </Form.Item>
          <Row justify="space-between" gutter={[24, 0]}>
            <Col span={12}>
              <Form.Item label={t("startDate")} name="startDate">
                <DatePicker placeholder="" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label={t("endDate")} name="endDate">
                <DatePicker placeholder="" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </AddInvestorContainer>
  );
};

export default DegreeForm;
