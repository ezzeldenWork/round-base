import React from "react";
import styled from "styled-components";
const FormTempleteStyle = styled.div`
  border-radius: 12px;
  background-color: #fff;
  padding: 32px 24px;
  margin-bottom: 16px;

`;

const FormTemplete = (props) => {
  return (
    <FormTempleteStyle>
      {props.children}
    </FormTempleteStyle>
  );
};

export default FormTemplete;
