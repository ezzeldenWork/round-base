import { Col, Row } from "antd";
import styled from "styled-components";
import MyImage from "../../../common/img";
import LanguageChanger from "../../../layout/header/accountmenu/languageChanger";

const AuthNavbar = () => {
  return (
    <Container>
      <Row justify="space-between" align="middle">
        <Col>
          <MyImage src="/static/images/round-base/auth-logo.svg" width={77} />
        </Col>
        <Col>
          <LanguageChanger />
        </Col>
      </Row>
    </Container>
  );
};

const Container = styled.div``;

export default AuthNavbar;
