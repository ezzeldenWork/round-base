import styled from "styled-components";
import { Breakpoints } from "../../constants";

export const Container = styled.div`
  margin-top: 49px;
  padding-bottom: 50px;
  /* background: #fff; */
  .ant-tabs-top > .ant-tabs-nav::before {
    border: 0;
  }
  .ant-tabs-nav-wrap {
    margin: ${(props) => (props.theme.lang == "ar" ? "0 36px 0 0 " : "0 0 0 36px")};
    @media (max-width: ${Breakpoints.xs}) {
      margin: ${(props) => (props.theme.lang == "ar" ? "0 17px 0 0 " : "0 0 0 17px")};
    }
  }
  .ant-tabs-tab.ant-tabs-tab-active {
    background: #ffffff;
    box-shadow: 0px -2px 4px rgba(51, 51, 51, 0.08);
    border-radius: 10px 10px 0px 0px;
    padding: 19px 49px;
  }
  .ant-tabs .ant-tabs-nav .ant-tabs-tab {
    padding: 19px 49px;
    @media (max-width: ${Breakpoints.sm}) and (min-width: ${Breakpoints.xs}) {
      padding: 10px 15px;
    }
    @media (max-width: ${Breakpoints.xs}) {
      padding: 10px 13px;
    }
  }
  .ant-tabs-top > .ant-tabs-nav .ant-tabs-ink-bar-animated {
    width: 0;
    height: 0;
  }
  .ant-tabs-content-holder {
    background: #fff;
    padding: 39px 36px;
    margin-top: -16px;
  }
  .ant-tabs-tab.ant-tabs-tab .ant-tabs-tab-btn {
    color: #747474;
    font-weight: 500;
    font-size: 20px;
    @media (max-width: ${Breakpoints.sm}) {
      font-size: 16px;
    }
  }

  .ant-tabs .ant-tabs-nav .ant-tabs-tab {
    @media (max-width: ${Breakpoints.md}) {
      margin: ${(props) => (props.theme.lang == "ar" ? "0" : "0")};
    }
  }

  .ant-tabs-nav-wrap {
    @media (max-width: ${Breakpoints.xs}) {
      justify-content: center;
    }
  }

  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #22aed1;
  }
`;

export const CompanyContainer = styled.div`
  .modal-btn {
    width: 50px;
    height: 24px;
    background: #2e5db7;
    color: #fff;
  }
  .ant-table-container table > thead > tr:first-child th:first-child {
    text-align: center;
  }
  .company-brand {
    color: #2e5db7;
  }
  .ant-pagination-item-active {
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),
      #3e66fb;
    border-radius: 4px;
    border: 0;
    width: 32px;
    height: 32px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: ${(props) => (props.theme.lang == "ar" ? "10px !important" : "unset")};
    margin-left: ${(props) => (props.theme.lang == "en" ? "10px !important" : "unset")};
  }
  .ant-pagination-prev,
  .ant-pagination-next {
    display: none;
  }
  .ant-table-container table > thead > tr:first-child th:first-child {
    border-top-right-radius: ${(props) => (props.theme.lang == "ar" ? "8px" : "unset")};
    border-top-left-radius: ${(props) => (props.theme.lang == "en" ? "8px" : "unset")};
  }
  .ant-table-container table > thead > tr:first-child th:last-child {
    border-top-right-radius: ${(props) => (props.theme.lang == "en" ? "8px" : "unset")};
    border-top-left-radius: ${(props) => (props.theme.lang == "ar" ? "8px" : "unset")};
  }
`;

export const FilterContainer = styled.div`
  .filter-card {
    background: #ffffff;
    border: 1px solid #c2c9d1;
    border-radius: 4px;
    padding: 24px 22px;
  }
  .filter-text {
    font-weight: 700;
    font-size: 16px;
    color: #37474f;
  }
  .ant-menu-sub.ant-menu-inline,
  .ant-menu-item,
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected,
  .ant-menu-item:active,
  .ant-menu-submenu-title:active {
    background: transparent;
    &:after {
      display: none;
    }
  }
  .ant-menu-item-group-title {
    display: none;
  }
  .ant-menu-submenu-title,
  .ant-menu-submenu-arrow {
    font-weight: 600;
    font-size: 16px;
    color: ${(props) => props.theme.colors.black3};
  }
  .ant-checkbox-wrapper {
    align-items: center;
  }
  .ant-menu-submenu-title {
    gap: 8px;
  }
  .ant-menu.ant-menu-inline,
  .ant-menu .ant-menu-item {
    border: 0;
  }
  .ant-divider {
    margin: 7px 0 7px;
  }
  .ant-menu-title-content {
    font-size: 14px;
    font-weight: 500;
    color: #163663;
  }
  .ant-menu-submenu-selected,
  .ant-menu-submenu:hover > .ant-menu-submenu-title > .ant-menu-submenu-arrow {
    color: #163663;
  }
  .ant-input-affix-wrapper {
    border: 0;
    height: 40px;
    align-items: center;
  }
  .ant-input-group-wrapper {
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
  }
  .ant-menu .ant-menu-item.ant-menu-item-selected span,
  .ant-menu-item .anticon {
    color: rgba(46, 93, 183, 0.6);
    font-size: 18px;
  }
  .ant-radio-group.ant-radio-group {
    span.ant-radio + * {
      font-size: 12px;
      font-weight: 400;
      color: #37474f;
    }
  }
  .ant-input-search .ant-input:hover,
  .ant-input-search .ant-input:focus,
  .ant-input-group > .ant-input:first-child {
    border: 0;
    height: 36px;
  }
  .ant-input-search
    > .ant-input-group
    > .ant-input-group-addon:last-child
    .ant-input-search-button {
    padding: 0 10px;
  }
  .filter-btn {
    height: 54px;
    border: 1px solid #e0e0e0;
    font-weight: 700;
    font-size: 18px;
    color: #37474f;
    margin-bottom: 24px;
  }
  .ant-menu .ant-menu-item.ant-menu-item-selected span.location,
  .ant-menu .ant-menu-item span.location {
    font-weight: 500;
    font-size: 12px;
    color: #37474f;
  }
`;
