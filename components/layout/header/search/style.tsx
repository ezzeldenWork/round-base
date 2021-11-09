import styled from "styled-components";

export const Container = styled.div`
  margin-top: -20px;
  .ant-layout-sider {
    background: ${(props) => props.theme.backgroundColors.layoutBodyBackground};
  }
  .ant-image {
    display: block;
  }
  .ant-select {
    background: #fff;
    border-radius: 4px;
  }
  .ant-input-search > .ant-input-group > .ant-input-group-addon:last-child {
    background-color: #fff;
  }
  .ant-input {
    border: 0;
  }
`;
