import React from "react";
import { Outlet } from "react-router-dom";

export const Profile = () => {
  return (
    <div>
      <h1 className="aboutH1">Profile</h1>
      <Outlet />
    </div>
  );
};
