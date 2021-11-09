import React from "react";
import Company from "../components/company";
import CompanySide from "../components/company/cards/companySide";
import Header from "../components/layout/header";

const AddCompany = () => {
  return (
    <>
      <Header />
      <CompanySide>
        <Company />
      </CompanySide>
    </>
  );
};

export default AddCompany;
