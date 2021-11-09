import { Col, Row } from "antd";
import AddressCard from "../person/cards/addressCard";
import ContactInfoCard from "../person/cards/contactInfoCard";
import { PersonContainer } from "../person/style";
import CompanyInfoForm from "./cards/companyInfoForm";

const Company = () => {
  const isCompanyForm = true;
  return (
    <PersonContainer>
      <Row gutter={[0, 24]}>
        <Col span={24}>
          <CompanyInfoForm />
        </Col>
        <Col span={24}>
          <ContactInfoCard companyForm={isCompanyForm} />
        </Col>
        <Col span={24}>
          <AddressCard companyForm={isCompanyForm} />
        </Col>
      </Row>
    </PersonContainer>
  );
};

export default Company;
