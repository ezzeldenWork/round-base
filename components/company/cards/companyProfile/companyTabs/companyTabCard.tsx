import { Col, Row } from "antd";
import ContactCard from "../../../../common/cards/contactCard";
import InfoCard from "../../../../common/cards/infoCard";
import AddressCard from "../../../../common/cards/addressCard";
import { CompanyProfileContainer } from "../../../style";

const CompanyTabCard = () => {
  return(
    <CompanyProfileContainer>
      <Row gutter={[0, 42]}>
        <Col span={24}>
          <InfoCard />
        </Col>
        <Col span={24}>
          <ContactCard />
        </Col>
        <Col span={24}>
          <AddressCard />
        </Col>
      </Row>
    </CompanyProfileContainer>
  )
}

export default CompanyTabCard;