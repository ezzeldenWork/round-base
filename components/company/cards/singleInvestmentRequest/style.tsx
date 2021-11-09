import styled from "styled-components";
import { Breakpoints } from "../../../../constants";

export const SingleContainer = styled.div`
  padding-top: 32px;
  padding-bottom: 50px;
  .back {
    padding: 0;
    font-weight: 500;
    font-size: 16px;
    color: #163663;
  }
  .invest-name {
    font-weight: 700;
    font-size: 24px;
    color: #37474f;
  }
  .switch-space {
    align-items: end;
    justify-content: end;
    width: 100%;
    @media (max-width: ${Breakpoints.sm}) {
      align-items: baseline;
      justify-content: space-between;
    }
  }
  .switch-text {
    font-weight: 400;
    font-size: 16px;
    color: #4f4f4f;
  }
  .ant-select-auto-complete.ant-select-single .ant-select-selector {
    background-color: #fff;
    border: 0.5px solid #c2c9d1;
    border-radius: 4px;
  }
  .table {
    background: #ffffff;
    border-radius: 12px;
    padding: 32px 57px 121px;
  }
  .accept {
    border: 1px solid #00aa6e;
    color: #00aa6e;
    border-radius: 4px;
    min-width: 65px;
  }
  .refuse {
    border: 1px solid #eb5757;
    color: #eb5757;
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
    border-color: transparent;
    /* border: 0; */
  }
  .ant-input {
    border: 0;
  }
`;
