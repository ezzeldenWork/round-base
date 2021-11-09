import { Button, Col, Row, Space, Tag, Typography } from "antd";
import useTranslation from "next-translate/useTranslation";
import MyImage from "../../../../common/img";
import { InvestmentTabContainer } from "../../../style";

const { Text } = Typography;

const InvestmentTab = () => {
  const { t } = useTranslation("company");

  const trade = (
    <Tag color="rgba(44, 218, 157, 0.08)" className="trade">
      {t("recommend:trade")}
    </Tag>
  );
  const farming = (
    <Tag color="rgba(146, 96, 227, 0.08)" className="farming">
      {t("recommend:farming")}
    </Tag>
  );

  const investCards = [
    {
      img: "/static/images/round-base/hotel-img.svg",
      title: "smart home",
      icon: "/static/images/round-base/edit-line.svg",
      tag: trade,
      desc: "The Hotel DoubleTree Montréal Centre-Ville / Downtown is set in the heart of the city, a few step",
    },
    {
      img: "/static/images/round-base/hotel-img.svg",
      title: " AI robot",
      icon: "/static/images/round-base/edit-line.svg",
      tag: trade,
      desc: "The Hotel DoubleTree Montréal Centre-Ville / Downtown is set in the heart of the city, a few step",
    },
    {
      img: "/static/images/round-base/hotel-img.svg",
      title: "Green houses",
      icon: "/static/images/round-base/edit-line.svg",
      tag: farming,
      desc: "The Hotel DoubleTree Montréal Centre-Ville / Downtown is set in the heart of the city, a few step",
    },
  ];

  return (
    <InvestmentTabContainer>
      <Row justify="space-between" gutter={[0, 38]}>
        <Col span={12}>
          <Text className="invest-header"> {t("currentInvest")} </Text>
        </Col>
        <Col span={12}>
          <div className="btn">
            <Button type="primary"> {t("addInvest")} </Button>
          </div>
        </Col>
        <Col span={24}>
          <Row gutter={[24, 24]}>
            {investCards.map((card, index) => (
              <Col lg={{ span: 8 }} md={{ span: 12 }} key={index}>
                <div className="inevest-card">
                  <MyImage src={card.img} width={"100%"} />
                  <div className="card-body">
                    <Space
                      align="baseline"
                      style={{ width: "100%", justifyContent: "space-between" }}>
                      <Text className="title"> {card.title} </Text>
                      <MyImage src={card.icon} width={16} />
                    </Space>
                    {card.tag}
                    <Text className="desc"> {card.desc} </Text>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </InvestmentTabContainer>
  );
};

export default InvestmentTab;
