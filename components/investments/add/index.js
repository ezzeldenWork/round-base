import React from "react";
import MenuSide from "../menu";
import FormBox from "./formBox";
import { Row, Col } from "antd";
import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";

const BoxContainerClass = styled.div`
  margin-top: 54px;
`;

const Index = () => {
  const { t } = useTranslation("investments");

  const menuItem = [
    {
      id: "infoSection",
      title: t("investInfo"),
    },
    {
      id: "problemSection",
      title: t("problem"),
    },
    {
      id: "slotionSection",
      title: t("solv"),
    },
    {
      id: "productSection",
      title: t("product"),
    },
    {
      id: "workSection",
      title: t("businessModle"),
    },
    {
      id: "clintSection",
      title: t("customers"),
    },
    {
      id: "serchSection",
      title: t("shopSearch"),
    },
    {
      id: "founderSection",
      title: t("founders"),
    },
    {
      id: "investorSection",
      title: t("investors"),
    },
  ];
  return (
    <>
      <BoxContainerClass>
        <div className="row-container">
          <Row gutter={{ lg: 24, md: 0 }}>
            <Col lg={{ span: 8 }}>
              <MenuSide classShow="addMenu" menuItems={menuItem} />
            </Col>
            <Col xl={{ span: 16 }} lg={{ span: 16 }} md={{ span: 24 }}>
              <FormBox />
            </Col>
          </Row>
        </div>
      </BoxContainerClass>
    </>
  );
};

export default Index;
