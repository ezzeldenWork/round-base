import React from "react";
import Profile from "../components/profile";
import Header from "../components/layout/header";
import ProfileSide from "../components/profile/cards/profileSide";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <ProfileSide>
        <Profile />
      </ProfileSide>
    </>
  );
};

export default ProfilePage;
