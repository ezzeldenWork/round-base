import styled from "styled-components";
import { Breakpoints } from "../../../constants";

export const Container = styled.div`
  @media (max-width: ${Breakpoints.md}) {
    height: 52px;
  }
  .ant-layout-sider {
    background: ${(props) => props.theme.backgroundColors.layoutBodyBackground};
  }
  .ant-image {
    display: block;
  }
`;
