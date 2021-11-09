import React from "react";
import { Menu } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Breakpoints } from "../../constants";

const MenuBox = styled.div`
  .ant-menu {
    border-radius: 12px;
    border: 0;
    overflow: hidden;
    &.addMenu {
      .ant-menu-item {
        &:after {
          content: "";
          right: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background-color: #22aed1;
          transform: scale(1);
          border: none;
        }

        &.ant-menu-item-selected {
          &:after {
            opacity: 1;
          }
        }
      }
    }
    &.showMenu {
      .ant-menu-item {
        background-color: transparent;
        border-bottom: 0;
        height: unset;
        margin: 0;
        padding: calc(24px / 2 ) 0px;
        &:after{
          display: none;
        }
        span {
          font-size: 12px;
          font-weight: normal;

          .anticon-left {
            transform: ${(props) =>
              props.theme.lang == "ar" ? "unset" : "translateY(-5px) rotate(180deg)"};
          }
        }
      }
    }
    .ant-menu-item {
      padding: 24px 19px;
      border-bottom: 1px solid #f5f5ec;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      height: 67px;
      margin: 0;
      span {
        font-size: 16px;
        line-height: 19px;
        color: #828282;
        font-weight: 500;
      }

      &.ant-menu-item-selected {
        background-color: #fff;
        span {
          color: #22aed1;
        }
      }
    }
  }

  @media (max-width: ${Breakpoints.sm}) {
    .ant-menu {
      &.showMenu {
        display: none;
      }
    }
  }

  @media (max-width: ${Breakpoints.lg}) {
    .ant-menu {
      &.addMenu {
        display: none;
      }
    }
  }
`;

const MenuSide = (props) => {
  if (props.classShow == "showMenu") {
    var arrowLeft = <LeftOutlined className="arrowShow" />;
  }

  const listProps = props.menuItems;

  const menuList = listProps.map((data, index) => (
    <Menu.Item key={index}>
      <a href={`#${data.id}`}>
        {props.classShow == "showMenu" && <LeftOutlined />} {data.title}
      </a>
    </Menu.Item>
  ));

  return (
    <MenuBox>
      <Menu className={`${props.classShow}`} defaultSelectedKeys={["0"]}>
        {menuList}
      </Menu>
    </MenuBox>
  );
};

export default MenuSide;
