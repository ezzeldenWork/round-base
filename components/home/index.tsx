import { Col, Row } from "antd";
import styled from "styled-components";
import CreateEntityCard from "./createEntityCard";
import SuggestedCompany from "./suggestedCompany";

const Home = () => {
  return (
    <Container>
      <Row gutter={[0, 40]}>
        <Col span={24}>
          <CreateEntityCard />
        </Col>
        <Col span={24}>
          <SuggestedCompany />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  padding-bottom: 37px;
  /* display: flex;
  justify-content: center; */
`;
