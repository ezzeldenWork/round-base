import { Button, Col, Layout, Row, Space, Typography } from "antd";
import useTranslation from "next-translate/useTranslation";
import { PersonSideContainer } from "../style";
import PersonTabSider from "./personTabSider";

const { Text } = Typography;
const { Content, Sider } = Layout;

const PersonSide = (props) => {
  const { t } = useTranslation("person");
  return (
    <PersonSideContainer>
      <div className="row-container">
        <Content>
          <Layout>
            <Space
              align="baseline"
              style={{ width: "100%", justifyContent: "space-between", marginBottom: 21 }}>
              <Text className="head"> {t("addPerson")} </Text>
              <Button type="primary"> {t("person:add")} </Button>
            </Space>
            <Row gutter={[24, 25]}>
              <Col lg={{ span: 8 }} xs={{ span: 0 }}>
                <Sider width={"auto"} className="site-layout-background">
                  <PersonTabSider />
                </Sider>
              </Col>
              <Col lg={{ span: 16 }} xs={{ span: 24 }}>
                <Content className="content">{props.children}</Content>
              </Col>
            </Row>
          </Layout>
        </Content>
      </div>
    </PersonSideContainer>
  );
};

export default PersonSide;
