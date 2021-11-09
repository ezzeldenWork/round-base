import { Tabs } from "antd";
import useTranslation from "next-translate/useTranslation";
import { CompanyProfileContainer } from "../../../style";
import CompanyTabCard from "./companyTabCard";
import InvestmentRequest from "./investmentRequest";
import InvestmentTab from "./investmentTab";

const { TabPane } = Tabs;

const CompanyTabs = () => {
  const { t } = useTranslation("company");
  return (
    <>
      <div className="user-card">
        <Tabs defaultActiveKey="1">
          <TabPane tab={t("company")} key="1">
            <CompanyTabCard />
          </TabPane>
          <TabPane tab={t("investments")} key="2">
            <InvestmentTab />
          </TabPane>
          <TabPane tab={t("investmentRequest")} key="3">
            <InvestmentRequest />
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default CompanyTabs;
