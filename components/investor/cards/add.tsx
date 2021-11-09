import { Col, Row } from "antd";
import ContactInfoCard from "../../person/cards/contactInfoCard";
import { AddInvestorContainer } from "../style";
import CvForm from "./cvForm";
import DegreeForm from "./degreeForm";
import InvestorForm from "./investorForm";

const AddNewInvestor = () => {
  const isInvestorForm = true;
  return (
    <AddInvestorContainer>
      <Row gutter={[0, 24]}>
        <Col span={24}>
          <InvestorForm />
        </Col>
        <Col span={24}>
          <DegreeForm />
        </Col>
        <Col span={24}>
          <CvForm />
        </Col>
        <Col span={24}>
          <ContactInfoCard investorForm={isInvestorForm} />
        </Col>
      </Row>
    </AddInvestorContainer>
  );
};

export default AddNewInvestor;
