import React from "react";
import Header from "../components/layout/header";
import PersonSide from "../components/person/cards/personSide";
import AddPerson from "../components/person";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <PersonSide>
        <AddPerson />
      </PersonSide>
    </>
  );
};

export default ProfilePage;
