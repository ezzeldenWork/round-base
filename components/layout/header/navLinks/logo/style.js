import styled from "styled-components";
import { Breakpoints } from "../../../../../constants";

export const LogoContainer = styled.div`
  .ant-image {
    cursor: pointer;
  }
  .ant-image .logo {
    width: 67px;
    @media (max-width: ${Breakpoints.sm}) {
      width: 60px;
    }
  }
  .signin-link {
    font-weight: 300;
  }
`;
