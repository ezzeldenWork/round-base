import styled from "styled-components";
import { Breakpoints } from "../../constants";

export const ProfileSideContainer = styled.div`
  padding-top: 62px;
  .ant-layout-sider {
    background: transparent;
  }
`;

export const SiderContainer = styled.div`
  .ant-menu {
    width: 270px;
    border-radius: 12px;
  }
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    border-right: ${(props) => (props.theme.lang == "ar" ? "2px solid #22aed1" : "unset")};
    border-left: ${(props) => (props.theme.lang == "en" ? "2px solid #22aed1" : "unset")};
    background: transparent;
    span {
      color: #22aed1;
    }
  }
  .ant-menu-item {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: ${(props) => props.theme.colors.Gray1};
    padding: 32px 26px;
    margin: 0;
    height: 83px;
  }
  .ant-menu-vertical .ant-menu-item:not(:last-child) {
    border-bottom: 1px solid #f5f5ec;
    border-top-right-radius: ${(props) => (props.theme.lang == "ar" ? "12px" : "unset")};
    border-top-left-radius: ${(props) => (props.theme.lang == "en" ? "12px" : "unset")};
    margin-bottom: 0;
  }
  .ant-menu-vertical .ant-menu-item:not(:first-child) {
    border-bottom-right-radius: ${(props) => (props.theme.lang == "ar" ? "12px" : "unset")};
    border-bottom-left-radius: ${(props) => (props.theme.lang == "en" ? "12px" : "unset")};
  }
`;

export const ProfileContainer = styled.div`
  padding-bottom: 40px;
  .user-card {
    background: #fff;
    padding: 24px;
    @media (max-width: ${Breakpoints.xl}) {
      width: auto;
    }
  }
  .header {
    font-size: 19px;
    font-weight: 700;
    color: #37474f;
    display: block;
    margin-bottom: 32px;
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
  .ant-input-affix-wrapper-focused {
    box-shadow: unset;
    border-color: #e0e0e0;
  }
  .ant-btn-primary {
    height: 36px;
    font-size: 14px;
    font-weight: 600;
    margin-top: 10px;
    background: #2e5db7;
    box-shadow: 0px 0px 8px rgba(45, 105, 118, 0.2);
    border-radius: 4px;
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
  .btn {
    text-align: end;
  }
`;

export const UserInfoContainer = styled.div`
  .user_profile_wrapper {
    flex-direction: row;
    @media (max-width: ${Breakpoints.lg}) {
      flex-direction: column;
      align-items: center;
    }
  }
  .ant-form {
    width: 100%;
    border-right: ${(props) => props.theme.lang == "ar" ? "1px solid #edf0f2" : "unset"};
    border-left: ${(props) => props.theme.lang == "en" ? "1px solid #edf0f2" : "unset"};
    padding: 0 25px;
    @media (max-width: ${Breakpoints.lg}) {
      border: 0;
    }
  }
`;

export const PasswordContainer = styled.div`
  .ant-form {
    width: 100%;
    padding: 0 25px;
  }
`;
