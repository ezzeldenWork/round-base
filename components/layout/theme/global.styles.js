import { createGlobalStyle } from "styled-components";
import { Breakpoints } from "../../../constants";

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
	body {
    margin:0;
    font-family: ${(props) =>
      props.theme.lang == "ar" ? `'Cairo', sans-serif` : `'Roboto', sans-serif`};
	}

  * {
		box-sizing: border-box;
	}
::-webkit-scrollbar {
}
::-webkit-scrollbar-track {
  background-color: #fff;
}

::-webkit-scrollbar-thumb {
}

:focus {
  outline: none;
}

.ant-drawer-close ,
.ant-drawer-rtl .ant-drawer-close{
  right: 0;
  left: auto;
  color: #000;
}

.ant-input {
  outline: none;
  box-shadow: none;
  text-shadow: none;
  background: none;
}

.ant-layout {
  /* background: ${(props) => props.theme.customColors.white}; */
  background: #E5E5E5;
  min-height: 100vh;
}

.ant-btn {
  height: 36px;
  font-size:14px;
  border-radius: ${(props) => props.theme.borderRadius.borderRadiusBase};
  font-weight: 500;
  outline: none;
  &:after {
    display: none;
  }
}
.ant-btn-primary {
  background: ${(props) => props.theme.customColors.primaryHover};
  border-color: ${(props) => props.theme.customColors.primaryHover};
}
.ant-btn-primary:hover, .ant-btn-primary:focus {
  background: ${(props) => props.theme.customColors.primaryHover};
  border-color: ${(props) => props.theme.customColors.primaryHover};
}
.ant-btn-text {
  color: ${(props) => props.theme.customColors.primary}
}
.ant-btn-text:hover,
.ant-btn-text:active {
  background: none;
}
.ant-input:focus, .ant-input-focused {
  box-shadow: none;
}


// Popover menu css
.popover-menu {
  .ant-menu-inline,
  .ant-menu-vertical,
  .ant-menu-vertical-left {
    border: 0;
  }
  .ant-popover-inner-content {
    padding: 25px 0 22px;
  }
  .ant-menu-vertical > .ant-menu-item {
  height: 38px;
  line-height: 36px;
  padding: 0 24px;
  }
  .ant-menu-vertical > .ant-menu-item {
    margin: 0;
  }
  .ant-menu-item:active, .ant-menu-submenu-title:active,
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background: ${(props) => props.theme.backgroundColors.gray6};
  }
  .ant-menu .ant-menu-item,
  .ant-menu-item:hover,
  .ant-menu-item-active,
  .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
  .ant-menu-submenu-active,
  .ant-menu-submenu-title:hover,
  .ant-menu-item-selected a,
  .ant-menu-item-selected a:hover,
  .ant-menu-item a:hover {
    color: ${(props) => props.theme.colors.black3};
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
  }
}

// table border
.ant-table.ant-table-bordered
  > .ant-table-container
  > .ant-table-content
  > table
  > thead
  > tr
  > th,
.ant-table-cell,
.ant-table.ant-table-bordered > .ant-table-container,
.ant-table.ant-table-bordered
  > .ant-table-container
  > .ant-table-content
  > table
  > tbody
  > tr
  > td,
  .ant-table.ant-table-bordered > .ant-table-title {
  border-color: #bdbdbd;
}

.drawer-container {
  .ant-drawer-close {
    right: ${(props) => (props.theme.lang == "en" ? "0" : "auto")};
    left: ${(props) => (props.theme.lang == "ar" ? "0" : "auto")};
  }
}

.wrap-model {
  .ant-input-affix-wrapper,
  .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
    border: 0;
    box-shadow: unset
  }
}

.ant-input {
    height: 48px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
  }
  .ant-input:focus,
  .ant-input-focused,
  .ant-input:hover,
  .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover,
  .ant-input-affix-wrapper:focus,
  .ant-input-affix-wrapper-focused,
  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    box-shadow: unset;
    border-color: #e0e0e0;
  }
  .ant-form-item-label > label {
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.theme.colors.Gray2};
    @media (max-width: ${Breakpoints.md}) {
      font-size: 14px;
    }
  }
  .ant-form-rtl .ant-form-item-label {
    text-align: start;
  }
  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    height: 48px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
  }
  .ant-select-single .ant-select-selector .ant-select-selection-item {
    line-height: 45px;
  }

.user-dropdown {
  .ant-dropdown-menu-title-content {
    margin: 0 15px;
  }
}

.ant-input-search > .ant-input-group > .ant-input-group-addon:last-child .ant-input-search-button {
  background: transparent;
  box-shadow: unset;
}

.ant-menu {
    border-radius: 12px;
    overflow: hidden;
    width: auto;
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
      &:after {
        content: "";
        right: ${(props) => (props.theme.lang == "ar" ? "0 !important" : "auto !important")};
        left: ${(props) => (props.theme.lang == "en" ? "0 !important" : "auto !important")};
        top: 0;
        bottom: 0;
        width: 4px;
        background-color: #22aed1;
        transform: scale(1);
        border: none;
      }
      &.ant-menu-item-selected {
        background-color: #fff;
        span {
          color: #22aed1;
        }
        &:after {
          opacity: 1;
        }
      }
    }
  }

  .ant-select-auto-complete.ant-select-single .ant-select-selector {
    border: 0.5px solid #C2C9D1;
    border-radius: 4px;
  }
  .ant-input-search-large .ant-input-search-button {
    background: #fff;
    border: 0;
  }
  .anticon-search {
    color: #1985a1;
    font-size: 20px;
  }
  .ant-input-search-rtl > .ant-input-group > .ant-input-group-addon .ant-input-search-button {
    height: unset;
    box-shadow: unset;
  }
  .ant-input-search > .ant-input-group > .ant-input-group-addon:last-child {
    background-color: #fff;
  }
  .ant-input:focus,
  .ant-input-focused,
  .ant-input:hover,
  .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover,
  .ant-input-affix-wrapper:focus,
  .ant-input-affix-wrapper-focused,
  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    box-shadow: unset;
  }

  .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {
    display: none;
  }

  .ant-table-thead .ant-table-cell {
    background: #f9fafa;
    height: 48px;
    font-weight: 700;
    font-size: 14px;
    color: #747474;
  }
  .ant-table-container table > thead > tr:first-child th:first-child {
    border-top-right-radius: 8px;
  }
  .ant-table-container table > thead > tr:first-child th:last-child {
    border-top-left-radius: 8px;
  }
  .ant-table-thead {
    height: 48px;
  }
  .ant-table-thead tr th {
    font-weight: 600;
    font-size: 14px;
    color: ${(props) => props.theme.colors.black3};
    background: #e6f9ee;
  }
  .ant-table-tbody > tr > td {
    height: 56px;
    .ant-table-cell {
      font-weight: 400;
      font-size: 14px;
      color: #37474f;
    }
  }


  .edit_theme {

    width: 500px !important;
    @media (max-width: ${Breakpoints.sm}) {
      width: 400px !important;
    }
    .theme-space {
      @media (max-width: ${Breakpoints.sm}) {
        flex-wrap: wrap;
      }
    }
    .ant-input {
      height: 36px;
    }
    .ant-input-group-wrapper {
      width: 70%;
      @media (max-width: ${Breakpoints.sm}) {
        width: 100%;
      }
    }
    .ant-checkbox-wrapper + .ant-checkbox-wrapper {
      margin: 0;
    }
    .ant-input-affix-wrapper {
    border: 0;
    height: 36px;
    align-items: center;
  }
  .ant-input-group-wrapper {
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    height: 36px;
  }
  .ant-input-group > .ant-input-rtl:first-child {
    border: 0;
    height: 36px;
  }

  .ant-input-search .ant-input:hover,
  .ant-input-search .ant-input:focus,
  .ant-input-group > .ant-input:first-child {
    border: 0;
  }
  .ant-input-search
    > .ant-input-group
    > .ant-input-group-addon:last-child
    .ant-input-search-button {
    padding: 0 8px;
  }

  .ant-input-search > .ant-input-group > .ant-input-group-addon:last-child {
    background: transparent;
  }

  .btn {
    text-align: end;
    .ant-btn {
      background: #2E5DB7;
      width: 106px;
      height: 48px;
      font-size: 20px;
      font-weight: 500;
    }
  }

    .ant-modal-header {
      background: #2C4056;
      .ant-modal-title {
        color: #fff;
      }
    }
    .anticon-close {
      color: #fff;
    }
    .choose-col {
      background: #F6F6F8;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12);
      border-radius: 4px;
      width: 210px;
      cursor: pointer;
      .col {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #E7E7E6;
        padding: 16px 11px;
      }
    }
    .check {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  }

  .mob_filter_drawer {
    .drawer-card {
    background: #ffffff;
    padding: 36px 22px;
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
  }


  // container-fluid
  .container-fluid {
    width: 100%;
    /* padding-right: .75rem; */
    /* padding-left: .75rem; */
    margin-right: auto;
    margin-left: auto;
  }
// main container
.row-container {
  max-width: ${Breakpoints.xxl};
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

//1
@media (min-width: ${Breakpoints.xl}) and (max-width: ${Breakpoints.xxl}) {
  .row-container {
    max-width: ${Breakpoints.xl};
  }
}

//2
@media (min-width: ${Breakpoints.lg}) and (max-width: ${Breakpoints.xl}) {
  .row-container {
    max-width: ${Breakpoints.xl};
  }
}

//3
@media (min-width: ${Breakpoints.md}) and (max-width: ${Breakpoints.lg}) {
  .row-container {
    max-width: ${Breakpoints.lg};
  }
}
//4
@media (max-width: ${Breakpoints.md}) {
  .row-container {
    max-width: ${Breakpoints.sm};
  }
}






.searchModle{
  width: 90%;
@media (max-width: ${Breakpoints.lg}) {
  .ant-modal-body {
    padding: 0;
    .ant-input-affix-wrapper{
    height: 48px;
  }}
}}

`;
