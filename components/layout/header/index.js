import { Col, Row, Layout, Modal, Input } from "antd";
import AccountMenu from "./accountmenu";
import NavLinks from "./navLinks";
import styled from "styled-components";
import Headroom from "react-headroom";
import { Breakpoints } from "../../../constants";
import Search from "./search";
import MyImage from "../../common/img";
import Sidebar from "../sidebar";
import { useState } from "react";
import useTranslation from "next-translate/useTranslation";

const { Header: AntdHeader, Content } = Layout;

const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { t } = useTranslation("common");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Container>
      <AntdHeader>
        <Content>
          <Headroom style={{ zIndex: 99 }} pinStart={150}>
            <div className="row-container">
              <Row align="middle" justify="space-between">
                <Col span={10}>
                  <NavLinks />
                </Col>
                <Col lg={{ span: 8 }} xs={{ span: 0 }}>
                  <Search />
                </Col>
                <Col span={5}>
                  <Row align="middle" justify="space-between">
                    <Col lg={{ span: 0 }} xs={{ span: 12 }}>
                      <div className="search" onClick={showModal}>
                        <MyImage src="/static/images/round-base/md-search.svg" width={18} />
                      </div>
                    </Col>
                    <Col lg={{ span: 24 }} md={{ span: 12 }} xs={{ span: 0 }}>
                      <AccountMenu />
                    </Col>
                    <Col md={{ span: 0 }} xs={{ span: 12 }}>
                      <Sidebar />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Headroom>
        </Content>
        <Modal
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          width={"100%"}
          footer={false}
          className="searchModle"
          bodyStyle={{
            // height: 70,
            padding: 15,
          }}
          style={{
            top: "64px",
            width: "90%",
            margin: "auto",
          }}
          closable={false}
          wrapClassName="wrap-model">
          <Input
            className="inputBox"
            size="large"
            placeholder={t("search")}
            enterButton
            defaultValue="yyyyyyy"
            allowClear
          />
        </Modal>
      </AntdHeader>
    </Container>
  );
};

export default Header;

const ModalBox = styled.div``;
const Container = styled.div`
  .ant-layout-header,
  .headroom.headroom--pinned.headroom--scrolled {
    height: 64px;
    padding: 0;
    background-color: ${(props) => props.theme.customColors.primary};
    box-shadow: 0px 1px 8px 0px rgba(51, 51, 3, 0.12);
    z-index: 999;
  }
  @media (max-width: ${Breakpoints.md}) and (min-width: ${Breakpoints.sm}) {
    .row-container {
      width: 100%;
      max-width: 100%;
    }
  }
  .navlink_wrapper {
    gap: 80px;
    @media (max-width: ${Breakpoints.xl}) {
      gap: 40px;
    }
  }
  .search .ant-image {
    @media (max-width: ${Breakpoints.md}) {
      height: 15px;
    }
  }
`;
