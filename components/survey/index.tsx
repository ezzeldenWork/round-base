import { Spin } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import SurveyFirstStep from "./cards/surveyFirstStep";
import SurveySecondStep from "./cards/surveySecondStep";
import SurveyThirdStep from "./cards/surveyThirdStep";
import { Container } from "./style";

const RoundSurvey = () => {
  const [type, setType] = useState("firstStep");
  const [value, setValue] = useState(0);
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setValue(e.target.value);
    setChecked(!checked);
  };

  const toggle = () => {
    setChecked(!checked);
  };
  const router = useRouter();

  if (!router.query && router.query == undefined) return <Spin />;

  const types = () => {
    switch (router.query.step) {
      case "2":
        return (
          <SurveySecondStep
            value={value}
            handleChange={handleChange}
            toggle={toggle}
            checked={checked}
            setType={setType}
          />
        );
      case "3":
        return <SurveyThirdStep setType={setType} />;
      default:
        return (
          <SurveyFirstStep
            value={value}
            handleChange={handleChange}
            toggle={toggle}
            setType={setType}
            checked={checked}
          />
        );
    }
  };

  return (
    <Container>
      <div className="row-container">
        <div className="survey-card">{types()}</div>
      </div>
    </Container>
  );
};

export default RoundSurvey;
