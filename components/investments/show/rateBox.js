import React from "react";
import { Breakpoints } from "../../../constants";
import { Progress } from "antd";
import { Button } from "antd";
import styled from "styled-components";
import useTranslation from "next-translate/useTranslation";

const RateBoxStyle = styled.div`
  .rateTitle {
    color: #ff6b4b;
    font-weight: bold;
    font-size: 34px;
    margin: 0;
  }
  .prag {
    margin: 0;
    padding: 8px 0 13px;
    font-weight: normal;
    font-size: 16px;
    color: #747474;
  }
  .ant-progress-bg {
    background: #6ebbc5;
  }
  .ant-progress-success-bg,
  .ant-progress-bg {
    height: 8.61px;
  }

  .rateClass {
    padding: 40px 0 0;
    list-style: none;
    li {
      padding-bottom: 24px;
    }
  }
  .buttonRate {
    background: #22aed1;
    box-shadow: 0px 0px 8px rgba(45, 105, 118, 0.2);
    border-radius: 4px;
    width: 100%;
    max-width: 100%;
    height: 48px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 0;
    span {
      font-weight: bold;
      font-size: 16px;
      color: #ffffff;
    }
    &:hover {
      background: #1e94b2;
    }
  }

  @media (max-width: ${Breakpoints.md}) {
    .rateClass {
      padding: 14px 0 0;
      li {
        padding-bottom: 8px;
      }
    }
    .buttonRate {
      width: 365px;
      margin: 0 auto;
    }
  }

  @media (max-width: ${Breakpoints.sm}) {
    .rateTitle {
      font-size: 26px;
    }
    .prag {
      padding: 4px 0 16px;
    }
    .rateClass {
      li {
        h3 {
          font-size: 18px;
        }
        .prag {
          font-size: 14px;
          padding: 4px 0 16px;
        }
      }
    }
  }
`;

const RateTtileStyle = styled.h3`
  font-weight: bold;
  font-size: 20px;
  margin: 0;
  color: ${(props) => props.color};
`;

const RateBox = () => {
  const { t } = useTranslation("investments");

  const rateList = [
    {
      id: 1,
      number: "$ 100.50",
      color: "#2E5DB7",
      prag: t("lowestInvestment"),
    },
    {
      id: 2,
      number: "$ 1500.50",
      color: "#439A86",
      prag: t("investmentsharevalue"),
    },
    {
      id: 3,
      number: "$ 60000.350 ",
      color: "#4F4F4F",
      prag: t("totalvalue"),
    },
  ];

  const listMap = rateList.map((data) => (
    <li key={data.id}>
      <RateTtileStyle color={data.color}>{data.number}</RateTtileStyle>
      <p className="prag">{data.prag}</p>
    </li>
  ));

  return (
    <RateBoxStyle>
      <h2 className="rateTitle">$ 2850.75</h2>
      <p className="prag">{t("invested")}</p>
      <Progress percent={30} showInfo={false} />
      <ul className="rateClass">{listMap}</ul>
      <Button className="buttonRate">{t("investIn")} smart home</Button>
    </RateBoxStyle>
  );
};

export default RateBox;
