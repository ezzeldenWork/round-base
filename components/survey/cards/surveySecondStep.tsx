import { Button, Space, Typography, Select, Radio } from "antd";
import useTranslation from "next-translate/useTranslation";
import router from "next/router";
import { Breakpoints } from "../../../constants";
import { SecondStepContainer } from "../style";

const { Text } = Typography;
const { Option } = Select;

const SurveySecondStep = ({ setType, value, handleChange, toggle, checked }) => {
  const { t } = useTranslation("survey");
  const { md, sm } = Breakpoints;

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
  const workTexts = [
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
  const companyTexts = [
    {
      text: t("farming"),
    },
    {
      text: t("bankingServices"),
    },
    {
      text: t("biotechnology"),
    },
    {
      text: t("chemicals"),
    },
    {
      text: t("telecommunications"),
    },
    {
      text: t("building"),
    },
    {
      text: t("consultation"),
    },
    {
      text: t("electronics"),
    },
    {
      text: t("energy"),
    },
    {
      text: t("entertainment"),
    },
  ];

  const routerUrl = () => {
    router.push({
      pathname: "/survey/3",
    });
    setType("thirdStep");
  };

  return (
    <SecondStepContainer>
      <Space
        direction="vertical"
        align="center"
        size={10}
        style={{ width: "100%", marginBottom: 64, textAlign: "center" }}>
        <Text className="step_text"> {t("step2")} </Text>
        <Text className="info_text"> {t("infoText")} </Text>
      </Space>

      <Space direction="vertical" size={10} style={{ width: "100%", marginBottom: 64 }}>
        <Text className="head"> {t("iam")} </Text>
        <Select
          defaultValue=""
          style={{ width: "100%" }}
          dropdownStyle={{ width: md ? 586 : sm ? 524 : 343 }}>
          {texts.map((text, index) => (
            <Option key={index} onClick={() => toggle} checked={checked} value={index}>
              <Radio> {text.text} </Radio>
            </Option>
          ))}
        </Select>
        <Text className="head"> {t("work")} </Text>
        <Select defaultValue="" style={{ width: "100%" }}>
          {workTexts.map((text, index) => (
            <Option key={index} onClick={() => toggle} checked={checked} value={index}>
              <Radio> {text.text} </Radio>
            </Option>
          ))}
        </Select>
        <Text className="head"> {t("company")} </Text>
        <Select defaultValue="" style={{ width: "100%" }}>
          {companyTexts.map((text, index) => (
            <Option key={index} value={text.text}>
              <Radio> {text.text} </Radio>
            </Option>
          ))}
        </Select>
      </Space>

      <Space style={{ width: "100%", justifyContent: "space-between" }}>
        <Button className="skip" type="text" onClick={() => routerUrl()}>
          {t("skip")}
        </Button>
        <Button className="continue" type="primary" onClick={() => routerUrl()}>
          {t("login:continue")}
        </Button>
      </Space>
    </SecondStepContainer>
  );
};

export default SurveySecondStep;
