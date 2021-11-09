import { Col, Layout, Row, Space, Typography } from "antd";
import { ProfileSideContainer } from "../style";
import ProfileTabSider from "./profileTabSider";

const { Content, Sider } = Layout;

const ProfileSide = (props) => {
  return (
    <ProfileSideContainer>
      <Content>
        <Layout>
          <div className="row-container">
            <Row gutter={[24, 25]}>
              <Col lg={{ span: 8 }} xs={{ span: 0 }}>
                <Sider width={"auto"} className="site-layout-background">
                  <ProfileTabSider />
                </Sider>
              </Col>
              <Col lg={{ span: 16 }} xs={{ span: 24 }}>
                <Content className="content">{props.children}</Content>
              </Col>
            </Row>
          </div>
        </Layout>
      </Content>
    </ProfileSideContainer>
  );
};

export default ProfileSide;
