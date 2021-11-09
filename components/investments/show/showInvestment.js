import React from "react";
import { Row, Col } from "antd";
import FormTempleteStyle from "../style/formTemplete";
import LogoBox from "./logoBox";
import InvestShowBox from "./investShowBox";
import RateBox from "./rateBox";
import { Breakpoints } from "../../../constants";
import styled from "styled-components";

const ShowInvestmentStyle = styled.div`
  @media (max-width: ${Breakpoints.lg}) {
    .order-md {
      order: -1;
    }
  }
`;

const ShowInvestment = () => {
  return (
    <ShowInvestmentStyle>
      <div className="row-container">
        <Row gutter={{ lg: 24, md: 0 }}>
          <Col className="order-md" md={{ span: 24 }} xs={{ span: 24 }}>
            <LogoBox classProp="logoMd" />
          </Col>
          <Col lg={{ span: 16 }} md={{ span: 24 }} xs={{ span: 24 }}>
            <FormTempleteStyle>
              <LogoBox classProp="logoLg" />
              <InvestShowBox />
            </FormTempleteStyle>
          </Col>
          <Col className="order-md" lg={{ span: 8 }} md={{ span: 24 }} xs={{ span: 24 }}>
            <FormTempleteStyle>
              <RateBox />
            </FormTempleteStyle>
          </Col>
        </Row>
      </div>
    </ShowInvestmentStyle>
  );
};

export default ShowInvestment;
