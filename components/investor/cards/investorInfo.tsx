import { Col, Row } from "antd";
import ContactCard from "../../common/cards/contactCard";
import InfoCard from "../../common/cards/infoCard";
import AddressCard from "../../common/cards/addressCard";
import { InvestorProfileContainer } from "../style";

const InvestorInfo = () => {
  const isInvestorProfile = true;
  return (
    <InvestorProfileContainer>
      <div className="info">
        <Row gutter={[0, 42]}>
          <Col span={24}>
            <InfoCard investorProfile={isInvestorProfile} />
          </Col>
          <Col span={24}>
            <ContactCard investorProfile={isInvestorProfile} />
          </Col>
          <Col span={24}>
            <AddressCard />
          </Col>
        </Row>
      </div>
    </InvestorProfileContainer>
  );
};

export default InvestorInfo;
