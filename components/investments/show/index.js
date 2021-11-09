import React from "react";
import ShowInvestment from "./showInvestment";
import styled from "styled-components";

const BoxContainerClass = styled.div`
  margin-top: 54px;
`;

const Index = () => {
  return (
    <>
      <BoxContainerClass>
        <ShowInvestment />
      </BoxContainerClass>
    </>
  );
};

export default Index;
