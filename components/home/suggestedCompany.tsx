import { Col, Row, Space, Tag, Typography } from "antd";
import useTranslation from "next-translate/useTranslation";
import MyImage from "../common/img";
import Link from "next/link";
import { SuggestedContainer } from "./cards/style";

const { Text } = Typography;

const SuggestedCompany = () => {
  const { t } = useTranslation("home");

  const trade = (
    <Tag color="rgba(44, 218, 157, 0.08)" className="trade">
      {t("trade")}
    </Tag>
  );
  const food = (
    <Tag color="rgba(209, 88, 0, 0.08)" className="food">
      {t("food")}
    </Tag>
  );
  const technology = (
    <Tag color="rgba(28, 133, 232, 0.08)" className="tech">
      {t("technology")}
    </Tag>
  );

  const cards = [
    {
      title: "Starbucks",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "/static/images/round-base/starbucks-img.svg",
      tag: trade,
    },
    {
      title: "McDonald's",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "/static/images/round-base/mac.svg",
      tag: food,
    },
    {
      title: "Media fire",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "/static/images/round-base/media_fire.svg",
      tag: trade,
    },
    {
      title: "Google",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "/static/images/round-base/google_img.svg",
      tag: technology,
    },
  ];

  return (
    <SuggestedContainer>
      <Row gutter={[12, 12]}>
        <Col span={24}>
          <Text className="header"> {t("suggestCompanies")} </Text>
        </Col>
        {cards.map((card, index) => (
          <Col xs={{ span: 24 }} key={index}>
            <div className="company_card">
              <MyImage src={card.img} width={"100%"} />
              <Space direction="vertical" size={0}>
                <Text className="card_title"> {card.title} </Text>
                <Text className="card_text"> {card.text} </Text>
                {card.tag}
              </Space>
            </div>
          </Col>
        ))}
      </Row>
    </SuggestedContainer>
  );
};

export default SuggestedCompany;
