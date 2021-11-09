import React from "react";
import { Row, Col } from "antd";
import MenuSide from "../menu";
import InvestShowData from "./investShowData";
import useTranslation from "next-translate/useTranslation";

const InvestShowBox = () => {
  const { t } = useTranslation("investments");

  const menuItem = [
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
    <sidebarMenu>
         <Row gutter={{ lg: 24, md: 0 }}>
        <Col lg={{ span: 6 }} sm={{ span: 8 }}>
          <MenuSide classShow="showMenu" menuItems={menuItem} />
        </Col>
        <Col lg={{ span: 18 }} sm={{ span: 16 }} >
          <InvestShowData />
        </Col>
      </Row>
    </sidebarMenu>
  );
};

export default InvestShowBox;
