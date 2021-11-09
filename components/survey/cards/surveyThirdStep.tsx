import { Button, Space, Typography, Select, Radio, Row, Col } from "antd";
import useTranslation from "next-translate/useTranslation";
import router from "next/router";
import { Breakpoints } from "../../../constants";
import MyImage from "../../common/img";
import { SecondStepContainer } from "../style";

const { Text } = Typography;
const { Option } = Select;

const SurveyThirdStep = ({ setType }) => {
  const { t } = useTranslation("survey");
  const { md, sm } = Breakpoints;

  const cards = [
    {
      img: "/static/images/round-base/spotify.svg",
      text: "teespring",
      btn: t("follow"),
    },
    {
      img: "/static/images/round-base/spotify.svg",
      text: "teespring",
      btn: t("follow"),
    },
    {
      img: "/static/images/round-base/spotify.svg",
      text: "teespring",
      btn: t("follow"),
    },
    {
      img: "/static/images/round-base/lines.svg",
      text: "teespring",
      btn: t("follow"),
    },
    {
      img: "/static/images/round-base/spotify.svg",
      text: "teespring",
      btn: t("follow"),
    },
    {
      img: "/static/images/round-base/spotify.svg",
      text: "teespring",
      btn: t("follow"),
    },
    {
      img: "/static/images/round-base/teespring.svg",
      text: "teespring",
      btn: t("follow"),
    },
    {
      img: "/static/images/round-base/spotify.svg",
      text: "teespring",
      btn: t("follow"),
    },
    {
      img: "/static/images/round-base/spotify.svg",
      text: "teespring",
      btn: t("follow"),
    },
  ];

  return (
    <SecondStepContainer>
      <Space
        direction="vertical"
        align="center"
        size={10}
        style={{ width: "100%", marginBottom: 74, textAlign: "center" }}>
        <Text className="step_text"> {t("step3")} </Text>
        <Text className="welcome_text"> {t("followCompany")} </Text>
      </Space>

      <Row gutter={md ? [32, 32] : [0, 32]}>
        <Col span={24}>
          <Text className="header_text"> {t("cardHeader")} </Text>
        </Col>
        {cards.map((card, index) => (
          <Col key={index} lg={{ span: 8 }} md={{ span: 12 }} xs={{ span: 12 }}>
            <div className="card-company">
              <MyImage src={card.img} width={"100%"} />
              <Text className="card-text"> {card.text} </Text>
              <Button type="link" className="follow">
                {card.btn}
              </Button>
            </div>
          </Col>
        ))}
      </Row>

      <Space className="btn-space">
        <Button className="continue" type="primary" onClick={() => router.push("/")}>
          {t("finish")}
        </Button>
      </Space>
    </SecondStepContainer>
  );
};

export default SurveyThirdStep;
