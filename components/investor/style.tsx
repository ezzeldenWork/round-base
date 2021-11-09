import styled from "styled-components";
import { Breakpoints } from "../../constants";

export const InvestorContainer = styled.div`
  padding-top: 62px;
  padding-bottom: 62px;
  .ant-layout.ant-layout-has-sider {
    justify-content: center;
    flex-direction: column;
  }
  /* .site-layout-background {
    overflow: auto;
    height: 100vh;
    position: fixed;
    left: ${(props) => (props.theme.lang == "en" ? "0" : " unset ")};
    right: ${(props) => (props.theme.lang == "ar" ? "0" : " unset ")};
  } */
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

export const AddInvestorContainer = styled.div`
  .ant-picker {
    width: 100%;
    height: 48px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
  }

  .ant-picker-input > input:focus,
  .ant-picker-input > input-focused,
  .ant-picker-focused {
    box-shadow: unset;
  }
`;

export const InvestorProfileContainer = styled.div`
  /* padding-top: 48px; */
  padding-bottom: 62px;
  @media (max-width: ${Breakpoints.sm}) {
    padding-bottom: 0;
  }
  .info-space {
    width: 100%;
    gap: 10px;
    @media (max-width: ${Breakpoints.xl}) {
      text-align: start;
      gap: 0;
    }
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

  .investor-card {
    flex-direction: column;
    @media (max-width: ${Breakpoints.lg}) {
      flex-direction: row;
      gap: 33px;
    }
    .company-name {
      text-align: center;
      @media (max-width: ${Breakpoints.lg}) {
        margin: 0px;
        font-size: 18px;
        text-align: start;
      }
    }
  }
  .info {
    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.16);
    border-radius: 9px;
    padding: 24px 32px;
    @media (max-width: ${Breakpoints.md}) {
      padding: 19px 10px;
    }
  }
  .profile-card {
    margin-top: 64px;
  }
  .investor-info {
    margin-top: 64px;
    @media (max-width: ${Breakpoints.md}) {
      margin-top: 0;
    }
  }
`;
