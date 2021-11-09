import { Col, Layout, Row, Space } from "antd";
import { SideContainer } from "./style";
import UserAvatar from "./userAvatar";
import OverviewCard from "./overviewCard";
import EntitiesCard from "./entitiesCard";

const { Content, Sider } = Layout;

const HomeSide = (props) => {
  return (
    <SideContainer>
      <Content>
        <Layout>
          <div className="row-container">
            <Row gutter={{ sm: 0, md: 61 }}>
              <Col xl={{ span: 8 }} lg={{ span: 8 }} xs={{ span: 0 }}>
                <Sider width={"auto"} className="site-layout-background">
                  <Space direction="vertical" size={12} style={{ width: "100%" }}>
                    <UserAvatar />
                    <OverviewCard />
                    <EntitiesCard />
                  </Space>
                </Sider>
              </Col>
              <Col xl={{ span: 16 }} lg={{ span: 16 }} xs={{ span: 24 }}>
                <Content className="content">{props.children}</Content>
              </Col>
            </Row>
          </div>
        </Layout>
      </Content>
    </SideContainer>
  );
};

export default HomeSide;
