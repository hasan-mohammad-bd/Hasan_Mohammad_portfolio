import React from "react";
import pic from "../../img/HasanLinkdin.png"
import DevName from "./DevName";
import ProfilePic from "./ProfilePic";

const Profile = () => {
  return (
    <div className="pro-name sticky">
        <DevName></DevName>
        <ProfilePic></ProfilePic>
    </div>
  );
};

export default Profile;
