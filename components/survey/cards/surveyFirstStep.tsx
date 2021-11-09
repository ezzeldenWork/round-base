import { Space, Typography, Radio, Button, Checkbox } from "antd";
import useTranslation from "next-translate/useTranslation";
import router from "next/router";
import { FirstStepContainer } from "../style";

const { Text } = Typography;

const SurveyFirstStep = ({ setType, value, handleChange, toggle, checked }) => {
  const { t } = useTranslation("survey");

  const texts = [
    {
      text: t("increaseSales"),
    },
    {
      text: t("investOpp"),
    },
    {
      text: t("searchInvest"),
    },
    {
      text: t("jobSearch"),
    },
    {
      text: t("tracking"),
    },
    {
      text: t("marketSearch"),
    },
    {
      text: t("promoteCompany"),
    },
    {
      text: t("other"),
    },
  ];

  const routerUrl = () => {
    router.push({
      pathname: "/survey/2",
    });
    setType("thirdStep");
  };

  return (
    <FirstStepContainer>
      <Space
        direction="vertical"
        align="center"
        size={10}
        style={{ width: "100%", marginBottom: 64 }}>
        <Text className="step_text"> {t("step")} </Text>
        <Text className="welcome_text"> {t("welcomeText")} </Text>
        <Text className="text"> {t("text")} </Text>
      </Space>
      <Space direction="vertical" size={32} style={{ width: "100%", marginBottom: 64 }}>
        <Text className="header"> {t("roundbasePurpose")} </Text>
        {texts.map((text, index) => (
          <Checkbox key={index}>{text.text}</Checkbox>
        ))}
      </Space>
      <Space style={{ width: "100%", justifyContent: "space-between" }}>
        <Button className="skip" type="text" onClick={() => routerUrl()}>
          {t("skip")}
        </Button>
        <Button className="continue" type="primary" onClick={() => routerUrl()}>
          {t("login:continue")}
        </Button>
      </Space>
    </FirstStepContainer>
  );
};

export default SurveyFirstStep;
