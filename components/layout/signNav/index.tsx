import { Button, Col, Row, Space } from "antd";
import MyImage from "../../common/img";
import styled from "styled-components";
import Link from 'next/link';
// import logo from "../../../assets/imgs/navBarLogo.svg";
import { GlobalOutlined } from "@ant-design/icons";
import { b7rPlatformUrl, Breakpoints } from "../../../constants";
import useTranslation from "next-translate/useTranslation";
import LanguageChanger from "../../layout/header/accountmenu/languageChanger"

const Navbar = () => {
  const { lg, md } = Breakpoints;

  const { lang } = useTranslation();

  return (
    <Container>
        <Row gutter={[0, 23]}>
          <Col xs={{ span: 24 }}>
            <Space size="large">
              <Link href="/">
              <MyImage
                src="/static/images/navBarLogo.svg"
                alt="logo"
                style={{
                  width: lg ? 108 : 60,
                  display: "unset",
                  cursor: "pointer",
                }}
              />
              </Link>
              <LanguageChanger />
            </Space>
          </Col>
        </Row>
    </Container>
  );
};
const Container = styled.div`
  background: ${(props) => props.theme.backgroundColors.lightGray};
  .ant-image {
    text-align: ${Breakpoints.lg ? "initial" : "center"};
  }
`;
export default Navbar;
