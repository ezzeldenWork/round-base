import React from "react";
import RoundSurvey from "../../components/survey";

const Survey = () => {
  return <RoundSurvey />;
};

export default Survey;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
