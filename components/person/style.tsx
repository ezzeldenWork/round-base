import styled from "styled-components";
import { Breakpoints } from "../../constants";

export const PersonSideContainer = styled.div`
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
export const PersonContainer = styled.div``;
export const PersonInfoContainer = styled.div``;
