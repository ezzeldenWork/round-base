import styled from "styled-components";
import { Breakpoints } from "../../constants";

export const Container = styled.div`
  width: 768px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  background: #ffffff;
  box-shadow: 0px 0px 28px rgba(51, 51, 51, 0.05);
  border-radius: 8px;
  padding: 48px 70px;
  @media (max-width: ${Breakpoints.sm}) {
    padding: 40px 20px;
  }
  @media (max-width: ${Breakpoints.lg}) and (min-width: ${Breakpoints.sm}) {
    width: 609px;
  }
  @media (max-width: ${Breakpoints.sm}) {
    width: auto;
  }
  .skip {
    padding: 0;
    color: ${(props) => props.theme.customColors.secondaryHover};
    font-size: 18px;
    font-weight: 700;
    @media (max-width: ${Breakpoints.sm}) {
      font-size: 16px;
    }
  }
  .continue {
    background: #2e5db7;
    font-size: 20px;
    height: 48px;
    font-weight: 600;
    width: 122px;
    &:hover {
      background: #2e5db7;
    }
    @media (max-width: ${Breakpoints.sm}) {
      font-size: 16px;
      width: 86px;
      height: 34px;
    }
  }

  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-radius: 50%;
  }
`;

export const FirstStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .step_text {
    color: #7c7b7b;
    font-size: 15px;
    font-weight: 400;
  }
  .welcome_text {
    font-size: 26px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.black3};
    @media (max-width: ${Breakpoints.sm}) {
      font-size: 18px;
    }
  }
  .text {
    font-size: 18px;
    color: #343c44;
    font-weight: 400;
    @media (max-width: ${Breakpoints.sm}) {
      font-size: 14px;
    }
  }
  .header {
    color: #343c44;
    font-size: 20px;
    font-weight: 500;
    display: block;
    margin-bottom: 36px;
    @media (max-width: ${Breakpoints.sm}) {
      font-size: 15px;
      margin-bottom: 5px;
    }
  }
  span.ant-radio + * {
    margin-right: 18px;
    margin-left: 18px;
    font-weight: 500;
    font-size: 18px;
    color: #707070;
    @media (max-width: ${Breakpoints.sm}) {
      font-size: 16px;
    }
  }
  .ant-checkbox-inner {
    border-radius: 50%;
  }
  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border: 1px solid #d9d9d9;
  }
`;

export const SecondStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .ant-row {
    margin-bottom: 48px;
    @media (max-width: ${Breakpoints.lg}) {
      margin-bottom: 40px;
    }
  }
  .step_text {
    color: #7c7b7b;
    font-size: 15px;
    font-weight: 400;
  }
  .welcome_text {
    font-size: 26px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.black3};
    @media (max-width: ${Breakpoints.sm}) {
      font-size: 18px;
    }
  }
  .header_text {
    font-size: 20px;
    font-weight: 500;
    color: #343c44;
    display: block;
    text-align: center;
    @media (max-width: ${Breakpoints.sm}) {
      font-size: 18px;
    }
  }
  .info_text {
    font-size: 26px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.black3};
    @media (max-width: ${Breakpoints.sm}) {
      font-size: 18px;
    }
  }
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    height: 48px;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
  }
  .ant-radio-wrapper.ant-radio-wrapper {
    line-height: 45px;
  }
  .head {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 16px;
    color: ${(props) => props.theme.colors.Gray2};
  }
  .card-company {
    width: 178px;
    background: #ffffff;
    box-shadow: 0px 0px 8px rgba(51, 51, 51, 0.12);
    border-radius: 4px;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 24px 53px;
    gap: 9px;
    @media (max-width: ${Breakpoints.sm}) and (min-width: ${Breakpoints.xs}) {
      width: 140px;
      padding: 19px 30px;
    }
    @media (max-width: ${Breakpoints.xs}) {
      width: 115px;
      padding: 19px 30px;
    }
    .ant-image {
      width: 96px !important;
      @media (max-width: ${Breakpoints.md}) {
        width: 78px !important;
      }
    }
    .card-text {
      font-weight: 400;
      font-size: 18px;
      color: #707070;
      @media (max-width: ${Breakpoints.md}) {
        font-size: 14px;
      }
    }
    .follow {
      color: #2e5db7;
      font-size: 16px;
      font-weight: 700;
      border: 1px solid #2e5db7;
      width: 120px;
      height: 36px;
      line-height: 20px;
      @media (max-width: ${Breakpoints.md}) {
        width: 97px;
        height: 32px;
      }
    }
  }
  .btn-space {
    width: 100%;
    justify-content: end;
    margin-top: 40px;
    @media (max-width: ${Breakpoints.sm}) {
      margin-top: 10px;
    }
  }
`;
