import { Container } from "./style";
import { Tabs } from "antd";
import useTranslation from "next-translate/useTranslation";
import CompaniesTab from "./companiesTab";

const { TabPane } = Tabs;

const Explore = () => {
  const { t } = useTranslation("explore");
  return (
    <Container>
      <div className="container-fluid">
        <Tabs defaultActiveKey="1">
          <TabPane tab={t("companies")} key="1">
            <CompaniesTab />
          </TabPane>
          <TabPane tab={t("investors")} key="2" disabled >
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab={t("people")} key="3" disabled>
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    </Container>
  );
};

export default Explore;
