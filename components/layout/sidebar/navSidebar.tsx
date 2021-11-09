import React, { useState } from "react";
import useTranslation from "next-translate/useTranslation";
import { Drawer, Button, Space } from "antd";
import styled from "styled-components";
import MyImage from "../../common/img";
import { Breakpoints } from "../../../constants";
import useWindowResize from "../../../hooks/useWindowResize";

interface Props {
  showDrawer: () => void;
  onClose: () => void;
  visible: boolean;
  menu: any;
}

const NavSidebar = ({ menu, onClose, showDrawer, visible }: Props) => {
  const { t, lang } = useTranslation("common");
  const [isMediumSize, setIsMediumSize] = useState(false);

  const mediumResizeCallback = () => {
    const md = parseInt(Breakpoints.md.slice(0, -2));
    window.innerWidth >= md ? setIsMediumSize(true) : setIsMediumSize(false);
  };
  useWindowResize(mediumResizeCallback);

  return (
    <Space align="center">
      <MyImage
        src="/static/images/round-base/sidebar_img.svg"
        alt="menu"
        width={24}
        onClick={showDrawer}
      />
      <nav>
        {/* <Container onClick={onClose}> */}
        <Container>
          <Drawer
            placement={`${lang == "ar" ? "left" : "right"}`}
            onClose={onClose}
            visible={visible}
            // contentWrapperStyle={{ width: md ? 376 : 250 }}
            contentWrapperStyle={{ width: !isMediumSize ? 332 : 285 }}
            bodyStyle={{ padding: 0 }}
            className="drawer-container">
            {menu}
          </Drawer>
        </Container>
      </nav>
    </Space>
  );
};

export default NavSidebar;

const Container = styled.div`
  .navbar {
    background-color: white;
    padding-left: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    overflow: visible;
  }
  .menu {
    z-index: -5;
    width: 24px;
    height: 16px;
  }
`;
