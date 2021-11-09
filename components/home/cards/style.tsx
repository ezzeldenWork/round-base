import styled from "styled-components";
import { Breakpoints } from "../../../constants";

export const SideContainer = styled.div`
  padding-top: 62px;
  .ant-layout-sider {
    background: transparent;
  }
  .card {
    /* width: 270px; */
    background: #fff;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.14), 0px 0px 1px rgba(0, 0, 0, 0.12);
    border-radius: 16px;
    padding: 24px 21px;
    .home_header {
      font-weight: 700;
      font-size: 16px;
      color: #212121;
    }
  }
  .ant-menu,
  .ant-menu .ant-menu-item {
    border: 0;
  }
  .ant-menu .ant-menu-item span {
    line-height: normal;
  }
  .ant-menu-inline.ant-menu-root .ant-menu-item > .ant-menu-title-content {
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme.colors.Gray2};
    padding: 0 30px;
  }
  .ant-menu-sub.ant-menu-inline,
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected,
  .ant-menu-item:active,
  .ant-menu-submenu-title:active {
    background: transparent;
  }
  .ant-menu-item-selected,
  .ant-menu-item,
  .ant-menu-light .ant-menu-item:hover {
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme.colors.Gray1};
  }
  .ant-menu-submenu-selected,
  .ant-menu-light .ant-menu-submenu-title:hover,
  .ant-menu.ant-menu-inline .ant-menu-submenu-title {
    color: #37474f;
    font-size: 16px;
    font-weight: 400;
  }
  .ant-menu-submenu:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow {
    color: #37474f;
  }
  .ant-menu-inline.ant-menu-root .ant-menu-submenu-title {
    gap: 10px;
  }
  .ant-menu.ant-menu-inline .ant-menu-item::after {
    display: none;
  }
  .ant-menu-item {
    margin: 0 25px;
  }
  .card-item {
    color: #37474f;
    font-size: 16px;
    font-weight: 400;
  }
`;

export const UserContainer = styled.div`
  .info {
    display: flex;
    flex-direction: column;
    gap: 5px;
    .user-job {
      font-weight: 400;
      font-size: 12px;
      color: ${(props) => props.theme.colors.Gray1};
    }
  }
`;

export const OverviewContainer = styled.div``;

export const CreateContainer = styled.div`
  .header {
    font-size: 20px;
    font-weight: 500;
    color: #37474f;
  }
  .create-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 16px;
    cursor: pointer;
    border-radius: 4px;
    .card_text {
      font-size: 18px;
      font-weight: 400;
      color: #fff;
    }
  }
  .slick-slide {
    width: calc(100% / 3 - 12px) !important;
    margin: 0 5px;
    @media (max-width: ${Breakpoints.md}) {
      margin: 0 2px;
      width: 160px !important;
    }
  }
`;

export const SuggestedContainer = styled.div`
  .header {
    font-size: 20px;
    font-weight: 500;
    color: #37474f;
  }
  .company_card {
    display: flex;
    align-items: center;
    gap: 32px;
    background: #ffffff;
    border-radius: 16px;
    @media (max-width: ${Breakpoints.sm}) {
      gap: 20px;
    }
    .ant-image {
      width: 160px !important;
      transform: ${(props) => props.theme.lang == "en" ? "scaleX(-1)" : "unset"};
      @media (max-width: ${Breakpoints.sm}) {
        width: 185px !important;
      }
      .ant-image-img {
      /* border-radius: ${(props) => props.theme.lang == "en" ? "16px 0px 0px 16px !important" : "0px 16px 16px 0px !important"}; */
      }
    }
  }
  .card_title {
    font-weight: 700;
    font-size: 20px;
    color: #37474f;
    @media (max-width: ${Breakpoints.sm}) {
      font-size: 16px;
    }
  }
  .card_text {
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme.colors.Gray1};
    @media (max-width: ${Breakpoints.sm}) {
      font-size: 12px;
    }
  }
  .ant-tag {
    border-radius: 3px;
    height: 20px;
    margin-top: 19px;
    font-weight: 500;
    font-size: 10px;
    line-height: 17px;
    text-align: center;
    @media (max-width: ${Breakpoints.sm}) {
      margin-top: 10px;
    }
  }
  .trade {
    color: #2cda9d;
  }
  .food {
    color: #d15800;
  }
  .tech {
    color: #1c85e8;
  }
`;
