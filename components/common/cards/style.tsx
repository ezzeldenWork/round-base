import styled from "styled-components";
import { Breakpoints } from "../../../constants";

export const Container = styled.div`
  padding: 0 6px;
  position: relative;

  .info {
    background: #ffffff;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.16);
    border-radius: 9px;
    padding: 24px 32px;
    @media (max-width: ${Breakpoints.md}) {
      padding: 19px 10px;
    }
    .header {
      font-weight: 700;
      font-size: 18px;
      color: #37474f;
      display: block;
      margin-bottom: 20px;
      @media (max-width: ${Breakpoints.md}) {
        font-size: 16px;
      }
    }
    .text {
      font-weight: 400;
      font-size: 14px;
      color: ${(props) => props.theme.colors.Gray1};
    }
    .data {
      font-weight: 500;
      font-size: 14px;
      color: #37474f;
    }
  }
  .edit {
    width: 41px;
    height: 41px;
    background: #ffffff;
    box-shadow: 0px 1px 5px rgba(51, 51, 51, 0.12);
    border-radius: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: end;
    position: absolute;
    cursor: pointer;
    z-index: 5;
    left: ${(props) => props.theme.lang == "ar" ? "28px" : "unset"};
    right: ${(props) => props.theme.lang == "en" ? "28px" : "unset"};
    top: 10px;
    @media (max-width: ${Breakpoints.md}) {
      width: 30px;
      height: 30px;
    }
    .ant-image {
      width: 25px !important;
      @media (max-width: ${Breakpoints.md}) {
        width: 16px !important;
      }
    }
  }
  .contact-sapce {
    width: 470px;
    @media (max-width: ${Breakpoints.md}) {
      width: 100%;
      justify-content: space-between;
    }
  }
  .data-space {
    width: 400px;
    @media (max-width: ${Breakpoints.md}) {
      width: 85%;
      justify-content: space-between;
    }
  }
  .address-space {
    width: 385px;
    @media (max-width: ${Breakpoints.md}) {
      width: 85%;
      justify-content: space-between;
    }
  }
`;
