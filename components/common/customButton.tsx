import { Button } from "antd";
import styled from "styled-components";
import { Breakpoints } from "../../constants";

const CustomButton = ({ children, type, ...props }) => {
  return (
    <ButtonContainer {...props}>
      <Button type={type}>{children}</Button>
    </ButtonContainer>
  );
};

export default CustomButton;

const ButtonContainer = styled.div`
  .ant-btn {
    height: 56px;
    width: 260px;
    font-size: 16px;
    font-weight: 500;
  }
  @media screen and (max-width: ${Breakpoints.sm}){
    .ant-btn{
      font-size: 13px;
    }
    
  }
`;
