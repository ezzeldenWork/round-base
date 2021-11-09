import { Col, Row } from "antd";
import AddressCard from "./cards/addressCard";
import ContactInfoCard from "./cards/contactInfoCard";
import PersonInfoCard from "./cards/personInfoCard";
import { PersonContainer } from "./style";

const AddPerson = () => {
  return (
    <PersonContainer>
      <Row gutter={[0, 24]}>
        <Col span={24}>
          <PersonInfoCard />
        </Col>
        <Col span={24}>
          <ContactInfoCard />
        </Col>
        <Col span={24}>
          <AddressCard />
        </Col>
      </Row>
    </PersonContainer>
  );
};

export default AddPerson;
