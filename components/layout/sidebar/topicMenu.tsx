import { Button, Col, Divider, Menu, Row, Space, Typography } from "antd";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { Breakpoints } from "../../../constants";
import MyImage from "../../common/img";

const { SubMenu } = Menu;
const { Text } = Typography;

const TopicMenu = ({ onClose }) => {
  const { t, lang } = useTranslation("common");
  const { push, pathname, asPath } = useRouter();
  const changeLang = (lang: string) => {
    push(pathname, asPath, { locale: lang });
  };
  const onLangChange = (
    changeLang: (newLang: string) => void,
    lang: string,
    onClose: any
  ) => {
    changeLang(lang == "en" ? `ar` : `en`);
    onClose();
  };

  return (
    <Container>
      <Space direction="vertical" className="links">
        <Row justify="space-between" align="middle" gutter={[40, 40]}>
          <Link href="/" passHref>
            <Col span={24} onClick={onClose}>
              <Space size={15} align="end">
                <MyImage
                  src="/static/images/round-base/home-sider.svg"
                  width={16}
                />
                <Text className="sidebar-link">{t("common:home")}</Text>
              </Space>
            </Col>
          </Link>
          <Link href="/explore" passHref>
            <Col span={24} onClick={onClose}>
              <Space size={15} align="end">
                <MyImage
                  src="/static/images/round-base/explor-sider.svg"
                  width={16}
                />
                <Text className="sidebar-link">{t("common:explore")}</Text>
              </Space>
            </Col>
          </Link>
          <Link href="/recommendations" passHref>
            <Col span={24} onClick={onClose}>
              <Space size={15} align="end">
                <MyImage
                  src="/static/images/round-base/suggest-sider.svg"
                  width={16}
                />
                <Text className="sidebar-link">{t("common:recommend")}</Text>
              </Space>
            </Col>
          </Link>
          <Link href="/profile" passHref>
            <Col span={24} onClick={onClose}>
              <Space size={15} align="end">
                <MyImage
                  src="/static/images/round-base/setting.svg"
                  width={16}
                />
                <Text className="sidebar-link">
                  {t("common:profilSetting")}
                </Text>
              </Space>
            </Col>
          </Link>
          <Col
            span={24}
            onClick={() => {
              changeLang(lang == "en" ? `ar` : `en`);
              onClose();
            }}
          >
            <Space size={15} align="end">
              <MyImage src="/static/images/round-base/lang.svg" width={16} />
              <Text className="sidebar-link">{t("common:changeLang")}</Text>
            </Space>
          </Col>
          <Link href="/signin" passHref>
            <Col span={24} onClick={onClose}>
              <Space size={15} align="end">
                <MyImage
                  src="/static/images/round-base/trash-sider.svg"
                  width={16}
                />
                <Text className="sidebar-link">{t("common:logout")}</Text>
              </Space>
            </Col>
          </Link>
        </Row>
      </Space>
    </Container>
  );
};

export default TopicMenu;

const Container = styled.div`
  margin: 40px 0;
  .links {
    padding: ${({ theme }) =>
      theme.lang == "ar" ? "5px 32px 0 32px" : "5px 32px 0 32px"};
    width: 100%;
  }
  .sidebar-link {
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.black3};
    cursor: pointer;
  }
  /* .ant-space,
  .ant-row,
  .ant-menu {
    direction: ltr;
  } */
  .ant-divider-horizontal {
    margin: 40px 0;
  }

  //////////////////////
  // ovveride antd menu css

  .ant-menu-sub.ant-menu-inline {
    background: none;
  }
  .ant-menu {
    border: 0;
    color: ${(props) => props.theme.colors.black3};
    font-size: 16px;
    font-weight: 500;
  }
  .ant-menu.ant-menu-inline .ant-menu-item,
  .ant-menu.ant-menu-inline .ant-menu-submenu-title {
    text-align: left;
  }
  .ant-menu-inline > .ant-menu-submenu > .ant-menu-submenu-title {
    padding: 0;
    margin: 0;
  }
  .ant-menu-item:hover,
  .ant-menu-item-active,
  .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
  .ant-menu-submenu-active,
  .ant-menu-submenu-title:hover,
  .ant-menu-submenu-selected {
    color: ${(props) => props.theme.colors.black3};
    font-size: 16px;
    font-weight: 500;
  }
  .ant-menu-submenu:hover
    > .ant-menu-submenu-title
    > .ant-menu-submenu-expand-icon,
  .ant-menu-submenu:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow,
  .ant-menu-item-selected a,
  .ant-menu-item-selected a:hover {
    color: ${(props) => props.theme.colors.black3};
  }
  .ant-menu-item:active,
  .ant-menu-submenu-title:active {
    background: none;
  }
  .ant-menu
    .ant-menu-submenu-inline
    > .ant-menu-submenu-title
    .ant-menu-submenu-arrow {
    right: auto;
    left: 12%;
    @media screen and (max-width: ${Breakpoints.sm}) {
      left: 19%;
    }
    top: 56%;
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background: none;
  }
  .ant-menu-inline .ant-menu-item::after {
    border: 0;
  }
  .ant-menu-inline .ant-menu-item:not(:last-child) {
    margin-bottom: 0;
  }
  .ant-menu-inline .ant-menu-item {
    padding: 0 24px;
  }
  .ant-menu-item a {
    padding: ${(props) => (props.theme.lang == "ar" ? "initial" : " 0 24px")};
  }
`;
function SideBarLanguageChanger(lang: string) {
  return (
    <div lang={lang}>
      <Button
        type="text"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
        }}
      >
        <MyImage
          type="next"
          width={15}
          alt="langchanger"
          height={15}
          src="/static/images/langchanger.svg"
        />
        <Text>{lang == "en" ? `AR` : `EN`}</Text>
      </Button>
    </div>
  );
}
