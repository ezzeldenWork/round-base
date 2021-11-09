import { CompanySideContainer } from "../style";
import { Button, Col, Layout, Row, Space, Typography } from "antd";
import useTranslation from "next-translate/useTranslation";
import CompanyTabSider from "./companyTabSider";

const { Text } = Typography;
const { Content, Sider } = Layout;

const CompanySide = (props) => {
  const { t } = useTranslation("company");
  return (
    <CompanySideContainer>
      <div className="row-container">
        <Content>
          <Layout>
            <Space
              align="baseline"
              style={{ width: "100%", justifyContent: "space-between", marginBottom: 21 }}>
              <Text className="head"> {t("createCompany")} </Text>
              <Button type="primary"> {t("person:add")} </Button>
            </Space>
            <Row gutter={[24, 25]}>
              <Col lg={{ span: 8 }} xs={{ span: 0 }}>
                <Sider width={"auto"} className="site-layout-background">
                  <CompanyTabSider />
                </Sider>
              </Col>
              <Col lg={{ span: 16 }} xs={{ span: 24 }}>
                <Content className="content">{props.children}</Content>
              </Col>
            </Row>
          </Layout>
        </Content>
      </div>
    </CompanySideContainer>
  );
};

export default CompanySide;
