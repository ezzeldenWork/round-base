import React from "react";
import MyImage from "../../common/img";
import { Breakpoints } from "../../../constants";
import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";


const ShowInvestmentDataStyle = styled.div`
  .contaierBox {
    padding: 0 0 64px;
    .sectionTitle {
      font-size: 14px;
      color: #828282;
      font-weight: normal;
      padding: 0 0 12px;
      margin: 0;
    }
    .imgBox {
      border-radius: 8px;
      padding: 0 0 12px;
      width: 594px;
      max-width: 100%;
    }
    .title {
      margin: 0;
      padding: 0 0 12px;
      font-weight: 600;
      font-size: 24px;
      color: #37474f;
    }
    .prag {
      margin: 0;
      font-weight: normal;
      font-size: 18px;
      color: #4f4f4f;
    }
  }
  @media (max-width: ${Breakpoints.sm}) {
    .contaierBox {
      text-align: center;
      .imgBox {
        padding-top: 16px;
      }
      .title {
        padding-top: 14px;
      }
    }
  }
`;

const InvestShowData = () => {
  const { t } = useTranslation("investments");

  let dataShwo = [
    {
      id: "problemSection",
      titleSection:  t("problem"),
      isImg: true,
      img: "/static/images/round-base/thup.png",
      title: "Smart home",
      prag: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tortor augue magna etiam. Habitasse vivamus risus, euismod augue at faucibus. Aliquet duis habitant nisl, vitae. Purus phasellus habitant mauris sagittis.",
    },
    {
      id: "slotionSection",
      titleSection: t("solv"),
      isImg: false,
      title: "Smart home",
      prag: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tortor augue magna etiam. Habitasse vivamus risus, euismod augue at faucibus. Aliquet duis habitant nisl, vitae. Purus phasellus habitant mauris sagittis.",
    },
    {
      id: "productSection",
      titleSection: t("product"),
      isImg: true,
      img: "/static/images/round-base/thup2.png",
      title: "Smart home",
      prag: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tortor augue magna etiam. Habitasse vivamus risus, euismod augue at faucibus. Aliquet duis habitant nisl, vitae. Purus phasellus habitant mauris sagittis.",
    },
  ];

  const mapData = dataShwo.map((data) => (
    <div className="contaierBox" key={data.id} id={data.id}>
      <h3 className="sectionTitle">{data.titleSection}</h3>
      {data.isImg && <MyImage className="imgBox" src={data.img} />}
      <h4 className="title">{data.title}</h4>
      <p className="prag">{data.prag}</p>
    </div>
  ));

  return <ShowInvestmentDataStyle>{mapData}</ShowInvestmentDataStyle>;
};

export default InvestShowData;
