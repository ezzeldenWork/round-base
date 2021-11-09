import styled from "styled-components";
import { Breakpoints } from "../../constants";

export const CompanyContainer = styled.div``;
export const CompanySideContainer = styled.div`
  padding-top: 62px;
  padding-bottom: 62px;
  .ant-layout.ant-layout-has-sider {
    justify-content: center;
    flex-direction: column;
  }
  .ant-layout-sider {
    background: transparent;
  }
  .user-card {
    background: #fff;
    padding: 24px;
    border-radius: 12px;
    @media (max-width: ${Breakpoints.xl}) {
      width: auto;
    }
  }
  .header {
    font-size: 18px;
    font-weight: 700;
    color: #37474f;
    display: block;
    margin-bottom: 32px;
    @media (max-width: ${Breakpoints.lg}) {
      font-size: 16px;
    }
  }
  .head {
    font-size: 24px;
    font-weight: 700;
    color: #37474f;
    @media (max-width: ${Breakpoints.lg}) {
      font-size: 18px;
    }
  }
  .ant-btn-primary {
    height: 36px;
    font-size: 14px;
    font-weight: 600;
    background: #2e5db7;
    box-shadow: 0px 0px 8px rgba(45, 105, 118, 0.2);
    border-radius: 4px;
  }
`;

export const CompanyProfileContainer = styled.div`
  padding-top: 48px;
  padding-bottom: 62px;
  .ant-layout.ant-layout-has-sider {
    justify-content: start;
  }
  .ant-layout-sider {
    background: transparent;
  }
  .user-card {
    background: #fff;
    padding: 33px 30px;
    border-radius: 12px;
    @media (max-width: ${Breakpoints.xl}) {
      width: auto;
    }
    @media (max-width: ${Breakpoints.sm}) {
      padding: 20px 0;
    }
  }
  .header {
    font-size: 18px;
    font-weight: 700;
    color: #37474f;
    display: block;
    margin-bottom: 32px;
    @media (max-width: ${Breakpoints.lg}) {
      font-size: 16px;
    }
  }
  .head {
    font-size: 24px;
    font-weight: 700;
    color: #37474f;
    @media (max-width: ${Breakpoints.lg}) {
      font-size: 18px;
    }
  }
  .ant-btn-primary {
    height: 36px;
    font-size: 14px;
    font-weight: 600;
    background: #2e5db7;
    box-shadow: 0px 0px 8px rgba(45, 105, 118, 0.2);
    border-radius: 4px;
  }
  .card {
    background: #ffffff;
    border-radius: 12px;
    padding: 40px 25px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: ${Breakpoints.lg}) and (min-width: ${Breakpoints.sm}) {
      padding: 15px ​28px;
      gap: 18px;
    }
    @media (max-width: ${Breakpoints.xl}) {
      flex-direction: row;
      gap: 33px;
    }
    @media (max-width: ${Breakpoints.sm}) {
      padding: 12px 10px;
      gap: 11px;
    }
    .info-space {
      width: 100%;
      gap: 10px;
      @media (max-width: ${Breakpoints.xl}) {
        text-align: start;
        gap: 0;
      }
    }
    .company-name {
      font-weight: 600;
      font-size: 20px;
      color: #37474f;
      display: block;
      margin: 24px 0 0px;
      text-align: center;
      @media (max-width: ${Breakpoints.xl}) {
        margin: 0px;
        font-size: 18px;
        text-align: start;
      }
    }
    .text {
      font-weight: 400;
      font-size: 12px;
      color: ${(props) => props.theme.colors.Gray2};
      height: 16px;
      display: block;
      @media (max-width: ${Breakpoints.lg}) {
        height: auto;
      }
    }
    .desc {
      text-align: center;
      display: block;
      margin: 8px 0 40px;
      @media (max-width: ${Breakpoints.xl}) {
        text-align: start;
        margin: 0;
        display: block;
        width: auto;
      }
    }
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #2e5db7;
  }
  .ant-tabs-ink-bar {
    background: #2e5db7;
  }
  .ant-tabs-tab-btn {
    color: ${(props) => props.theme.colors.Gray2};
    font-size: 16px;
    font-weight: 700;
    @media (max-width: ${Breakpoints.md}) {
      font-size: 12px;
    }
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-wrap {
    @media (max-width: ${Breakpoints.md}) {
      justify-content: center;
    }
  }
  .ant-tabs .ant-tabs-nav .ant-tabs-tab {
    @media (max-width: ${Breakpoints.md}) {
      margin: ${(props) => (props.theme.lang == "ar" ? "0 0 0 20px" : "0 20px 0 0")};
    }
  }
`;

export const InvestmentTabContainer = styled.div`
  padding: 39px 47px;
  .ant-row {
    align-items: baseline;
  }
  .invest-header,
  header {
    font-size: 16px;
    font-weight: 700;
    color: #37474f;
    @media (max-width: ${Breakpoints.lg}) {
      font-size: 16px;
    }
  }
  .inevest-card {
    display: flex;
    flex-direction: column;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.03));
    background: #ffffff;
    border-radius: 8px;
    .card-body {
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      .title {
        font-weight: 700;
        font-size: 18px;
        color: #37474f;
      }
      .ant-tag {
        width: fit-content;
      }
      .desc {
        font-weight: 400;
        font-size: 12px;
        color: ${(props) => props.theme.colors.Gray2};
      }
      .trade {
        color: #2cda9d;
      }
      .farming {
        color: #9260e3;
      }
    }
  }
  .btn {
    text-align: end;
  }
`;

export const InvestmentRequestContainer = styled.div`
  padding: 31px 0 0;
  @media (max-width: ${Breakpoints.lg}) {
    padding: 15px 10px 0;
  }

  .open.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    background-color: #2cda9d;
  }
  .close.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    background: #eb5757;
  }

  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    border-radius: 28px;
    width: 79px;
    height: 30px;
    border: 0;
    @media (max-width: ${Breakpoints.md}) {
      width: 90px;
    }
  }
  .ant-select.ant-select-single.ant-select-show-arrow .ant-select-selection-item {
    line-height: 25px;
    font-size: 14px;
    font-weight: 400;
    padding-left: 0;
    padding-right: 0;
    color: #fff;
    @media (max-width: ${Breakpoints.md}) {
      line-height: 30px;
      font-size: 12px;
    }
  }
  .ant-select .ant-select-arrow {
    color: #fff;
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
    border-color: transparent;
    /* border: 0; */
  }
  .ant-input {
    border: 0;
  }
  .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
    border-color: #c2c9d1;
  }
`;
