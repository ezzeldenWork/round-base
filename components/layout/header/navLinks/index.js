import { Col, Row, Space } from "antd";
import Links from "./links";
import Logo from "./logo";

const NavLinks = () => {
  return (
    <Row>
      <Space size={"0"} className="navlink_wrapper">
        <Col md={{ span: 6 }} xs={{ span: 24 }}>
          <Logo />
        </Col>
        <Col md={{ span: 18 }} xs={{ span: 0 }}>
          <Links />
        </Col>
      </Space>
    </Row>
  );
};

export default NavLinks;
