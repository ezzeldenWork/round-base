import { Col, Row } from "antd";
import ContactCard from "../common/cards/contactCard";
import InfoCard from "../common/cards/infoCard";
import AddressCard from "../person/cards/addressCard";
import InvestorInfo from "./cards/investorInfo";
import InvestorProfileCard from "./cards/investorProfileCard";
import { InvestorProfileContainer } from "./style";

const InvestorProfile = () => {
  return (
    <InvestorProfileContainer>
      <div className="row-container">
        <Row gutter={{ lg: 25, md: 15, sm: 0 }}>
          <Col lg={{ span: 8 }} xs={{ span: 24 }}>
            <div className="profile-card">
              <InvestorProfileCard />
            </div>
          </Col>
          <Col lg={{ span: 16 }} xs={{ span: 24 }}>
            <div className="investor-info">
              <InvestorInfo />
            </div>
          </Col>
        </Row>
      </div>
    </InvestorProfileContainer>
  );
};

export default InvestorProfile;
