import { Button, Col, Divider, Row, Tag, Typography } from "antd";
import useTranslation from "next-translate/useTranslation";
import styled from "styled-components";
import MyImage from "./img";
import { PlusOutlined, CheckOutlined } from "@ant-design/icons";
import { Breakpoints } from "../../constants";
import { useState } from "react";

const { Text } = Typography;

type Props = {
  savedItems?: boolean
}

const RecommendCards = ({ savedItems }: Props) => {
  const { t } = useTranslation("recommend");
  const [saved, setSaved] = useState(false);

  const onSaved = () => {
    setSaved(true);
  };

  const trade = (
    <Tag color="rgba(44, 218, 157, 0.08)" className="trade">
      {t("trade")}
    </Tag>
  );
  const entertainment = (
    <Tag color="rgba(209, 88, 0, 0.08)" className="entertainment">
      {t("entertainment")}
    </Tag>
  );
  const technology = (
    <Tag color="rgba(28, 133, 232, 0.08)" className="tech">
      {t("technology")}
    </Tag>
  );

  const cards = [
    {
      img: "/static/images/round-base/spring.svg",
      title: "Spotify",
      text: "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online ",
      tag: trade,
      btnText: saved ? t("saved") : t("save"),
      id: 1
    },
    {
      img: "/static/images/round-base/ecwid.svg",
      title: "Spotify",
      text: "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online ",
      tag: technology,
      btnText: saved ? t("saved") : t("save"),
    },
    {
      img: "/static/images/round-base/spring.svg",
      title: "Spotify",
      text: "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online ",
      tag: entertainment,
      btnText: saved ? t("saved") : t("save"),
    },
    {
      img: "/static/images/round-base/spring.svg",
      title: "Spotify",
      text: "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online ",
      tag: trade,
      btnText: saved ? t("saved") : t("save"),
    },
    {
      img: "/static/images/round-base/spring.svg",
      title: "Spotify",
      text: "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online ",
      tag: technology,
      btnText: saved ? t("saved") : t("save"),
    },
    {
      img: "/static/images/round-base/spring.svg",
      title: "Spotify",
      text: "This Python For Beginners Course Teaches You The Python Language Fast. Includes Python Online ",
      tag: entertainment,
      btnText: saved ? t("saved") : t("save"),
    },
  ];

  return (
    <Container>
      <Row gutter={[30, 30]}>
        {cards.map((card, index) => (
          <Col key={index} lg={{ span: 8 }} md={{ span: 12 }} xs={{ span: 24 }}>
            <div className="recommend_card">
              <MyImage src={card.img} width={128} />
              <Text className="title"> {card.title} </Text>
              <Text className="text"> {card.text} </Text>
              {card.tag}
              <Divider />
              <div className="btn">
                <Button
                  type="link"
                  onClick={onSaved}
                  icon={saved ? <CheckOutlined /> : <PlusOutlined />}>
                  {card.btnText}
                </Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const Container = styled.div`
  .recommend_card {
    background: #ffffff;
    box-shadow: 0px 0px 8px rgba(51, 51, 51, 0.12);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 17px;
    justify-content: start;
    align-items: start;
    padding: 32px;
    @media (max-width: ${Breakpoints.lg}) and (min-width: ${Breakpoints.md}) {
      /* width: 328px; */
    }
    @media (max-width: ${Breakpoints.md}) {
      /* width: 343px; */
    }
  }
  .title {
    font-weight: 700;
    font-size: 24px;
    color: #081f32;
  }
  .text {
    font-weight: 400;
    font-size: 14px;
    color: #6e798c;
  }
  .ant-tag {
    border-radius: 3px;
    height: 20px;
    font-weight: 500;
    font-size: 10px;
    line-height: 17px;
    text-align: center;
  }
  .trade {
    color: #2cda9d;
  }
  .entertainment {
    color: #d15800;
  }
  .tech {
    color: #1c85e8;
  }
  .btn {
    text-align: end;
    width: 100%;
    .ant-btn {
      height: 36px;
      border-radius: 4px;
      border: 1px solid #2e5db7;
      font-size: 14px;
      font-weight: 500;
      color: #2e5db7;
    }
  }
`;

export default RecommendCards;
