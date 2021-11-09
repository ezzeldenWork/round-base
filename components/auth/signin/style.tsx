import styled from "styled-components";
import { Breakpoints } from "../../../constants";

export const AuthContainer = styled.div`
  position: relative;
  background: #fff;
  min-height: 100vh;
  .ant-tabs {
    padding: 34px 0;
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-wrap {
    margin-bottom: 30px;
  }
  .ant-tabs-top > .ant-tabs-nav {
    margin-bottom: 40px;
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-list {
    justify-content: space-between;
    width: 100%;
    padding: 0 45px;
  }
  .ant-tabs-top > .ant-tabs-nav::before {
    border: 0;
  }
  .ant-tabs-ink-bar {
    margin: ${(props) => (props.theme.lang == "ar" ? "0 43px" : "unset")};
    background: ${(props) => props.theme.customColors.secondaryHover};
    left: ${(props) => (props.theme.lang == "ar" ? "0 !important" : "unset")};
  }
  .ant-tabs-tab-btn {
    font-weight: 500;
    font-size: 20px;
    @media (max-width: ${Breakpoints.md}) {
      font-weight: 700;
      font-size: 16px;
    }
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: ${(props) => props.theme.customColors.secondaryHover};
  }
  .ant-tabs-top > .ant-tabs-nav .ant-tabs-ink-bar {
    height: 3.43px;
  }
  .card-form {
    display: flex;
    flex-direction: column;
    width: 550px;
    margin-top: 20px;
    @media (max-width: ${Breakpoints.xl}) and (min-width: ${Breakpoints.lg}) {
      width: 400px;
    }
    @media (max-width: ${Breakpoints.lg}) and (min-width: ${Breakpoints.md}) {
      width: 585px;
      background: #ffffff;
      box-shadow: 0px 1px 17px rgba(51, 51, 51, 0.25);
      border-radius: 7px;
      margin: auto;
      padding: 40px;
    }
    @media (max-width: ${Breakpoints.md}) {
      width: auto;
    }
  }
  .ant-input {
    height: 48px;
  }
  .ant-input:focus,
  .ant-input-focused,
  .ant-input:hover,
  .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover,
  .ant-input-affix-wrapper:focus,
  .ant-input-affix-wrapper-focused {
    box-shadow: unset;
    border-color: #d9d9d9;
  }
  .ant-btn-primary {
    height: 56px;
    background: #2e5db7;
    font-size: 20px;
    font-weight: 500;
    margin-top: -10px;
    box-shadow: 0px 0px 8px rgba(45, 105, 118, 0.2);
    @media (max-width: ${Breakpoints.md}) {
      height: 48px;
      font-size: 18px;
    }
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
  .navbar {
    @media (max-width: ${Breakpoints.sm}) {
      display: none;
    }
  }
  .lang_changer {
    display: none;
    @media (max-width: ${Breakpoints.sm}) {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 50px 0 25px;
      width: 100%;
    }
  }
`;

export const SignInContainer = styled.div`
  .wrapper {
    width: 49px;
    height: 49px;
    background: #ffffff;
    box-shadow: 0px 1px 10px rgba(51, 51, 51, 0.16);
    border-radius: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    .ant-image {
      width: 33px !important;
    }
    @media (max-width: ${Breakpoints.md}) {
      width: 40px;
      height: 40px;
      .ant-image {
        width: 26px !important;
      }
    }
  }
  .forget {
    display: block;
    font-weight: 400;
    font-size: 16px;
    color: ${(props) => props.theme.customColors.secondaryHover};
    text-align: end;
    margin-top: -20px;
    cursor: pointer;
    @media (max-width: ${Breakpoints.md}) {
      font-size: 14px;
    }
  }
  .term-condition {
    display: block;
    width: 384px;
    line-height: 24px;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 32px;
    cursor: pointer;
    @media (max-width: ${Breakpoints.md}) {
      font-size: 18px;
    }
    .terms {
      color: ${(props) => props.theme.customColors.secondaryHover};
    }
  }

  /* .header-2 {
    overflow: hidden;
    text-align: center;
  }
  .header-2:before,
  .header-2:after {
    background-color: #000;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
  }
  .header-2:before {
    right: 0.5em;
    margin-left: -50%;
  }
  .header-2:after {
    left: 0.5em;
    margin-right: -50%;
  } */
`;

export const ForgetPassContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 16px rgba(51, 51, 51, 0.04);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  padding: 40px;
  @media (max-width: ${Breakpoints.lg}) {
    box-shadow: unset;
    border-radius: 0;
    padding: unset;
  }
  .ant-form {
    width: 100%;
    text-align: center;
  }
  .header {
    font-size: 32px;
    font-weight: 500;
    color: ${(props) => props.theme.customColors.dark};
    display: block;
    margin-bottom: 40px;
    @media (max-width: ${Breakpoints.md}) {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 10px;
    }
  }
  .text {
    font-size: 16px;
    font-weight: normal;
    color: ${(props) => props.theme.customColors.lightDark};
    @media (max-width: ${Breakpoints.md}) {
      font-size: 12px;
      font-weight: 400;
    }
  }
  .ant-btn-primary {
    margin-top: 30px !important;
    @media (max-width: ${Breakpoints.md}) {
      margin-top: 0 !important;
    }
  }
`;

export const ChangePassContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 16px rgba(51, 51, 51, 0.04);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  padding: 40px;
  @media (max-width: ${Breakpoints.lg}) {
    box-shadow: unset;
    border-radius: 0;
    padding: unset;
  }
  .ant-form {
    width: 100%;
    text-align: center;
  }
  .header {
    font-size: 32px;
    font-weight: 500;
    color: ${(props) => props.theme.customColors.dark};
    display: block;
    margin-bottom: 40px;
    @media (max-width: ${Breakpoints.md}) {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 10px;
    }
  }
  .text {
    font-size: 16px;
    font-weight: normal;
    color: ${(props) => props.theme.customColors.lightDark};
    @media (max-width: ${Breakpoints.md}) {
      font-size: 12px;
      font-weight: 400;
    }
  }
  .ant-btn-primary {
    margin-top: 30px !important;
    @media (max-width: ${Breakpoints.md}) {
      margin-top: 0 !important;
    }
  }
`;

export const VerficationContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 16px rgba(51, 51, 51, 0.04);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  padding: 40px;
  @media (max-width: ${Breakpoints.lg}) {
    box-shadow: unset;
    border-radius: 0;
    padding: unset;
  }
  .ant-form {
    width: 100%;
    text-align: center;
  }
  .header {
    font-size: 32px;
    font-weight: 500;
    color: ${(props) => props.theme.customColors.dark};
    display: block;
    margin-bottom: 40px;
    @media (max-width: ${Breakpoints.md}) {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 10px;
    }
  }
  .text {
    font-size: 16px;
    font-weight: normal;
    color: ${(props) => props.theme.customColors.lightDark};
    @media (max-width: ${Breakpoints.md}) {
      font-size: 12px;
      font-weight: 400;
    }
  }
  .ant-btn-primary {
    margin-top: 24px !important;
    @media (max-width: ${Breakpoints.md}) {
      margin-top: 0 !important;
    }
  }
`;
