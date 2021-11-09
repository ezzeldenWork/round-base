import { Tabs } from "antd";
import useTranslation from "next-translate/useTranslation";
import SignInCard from "./signinCard";
import SignUpCard from "./signupCard";

const { TabPane } = Tabs;

const SignAuth = ({ setType }) => {
  const { t } = useTranslation("login");
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab={t("login")} key="1">
        <SignInCard setType={setType} />
      </TabPane>
      <TabPane tab={t("logup")} key="2">
        <SignUpCard />
      </TabPane>
    </Tabs>
  );
};

export default SignAuth;
