import React from "react";
import MyImage from "../../common/img";
import { Breakpoints } from "../../../constants";
import styled from "styled-components";

const LogoBoxStyle = styled.div`
  .investBoxHeader {
    padding: 0 0 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .investmentShowTitle {
      font-weight: 500;
      font-size: 34px;
      color: #37474f;
      margin: 0 20px;
    }
  }
  .logoMd {
    display: none;
  }
  @media (max-width: ${Breakpoints.lg}) {
    .logoLg {
      display: none;
    }
    .logoMd {
      display: flex;
      .investmentShowTitle {
        color: #37474f;
      }
    }
  }
`;
const LogoBox = (props) => {
  return (
    <LogoBoxStyle>
      <div className={`investBoxHeader ${props.classProp}`}>
        <MyImage src="/static/images/round-base/brand.png" width={48} alt="Brand" />
        <h3 className="investmentShowTitle">Smart home</h3>
      </div>
    </LogoBoxStyle>
  );
};

export default LogoBox;
