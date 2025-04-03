import "primeicons/primeicons.css";
import "primereact/resources/themes/mdc-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

import React, { useContext } from "react";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import "./authentication.css";
import BaseLayout from "layouts/sections/components/BaseLayout";
import { AuthContext, AuthProvider } from "context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function UserProfile({ redirectionURL = "/" }) {
  //   const user = {
  //     name: "Munesh Kumar Prajapati",
  //     emp_id: "00198",
  //     email: "munesh@grid-india",
  //     role: "Software Engineer",
  //     department: "IT",
  //   };

  const { user, logoutUser } = useContext(AuthContext);
  // console.log(user);
  const nameParts = user.name.split(" ");
  const firstNameInitial = nameParts[0].charAt(0).toUpperCase(); // First character of first name
  const lastNameInitial = nameParts[nameParts.length - 1]
    .charAt(0)
    .toUpperCase(); // First character of last name
  const navigate = useNavigate();

  return (
    <BaseLayout
      breadcrumb={[
        { label: "User" },
        { label: "User Profile" },
        // { label: "User Profile", route: "/user/userprofile" },
      ]}
    >
      <div className="flex justify-content-center mt-6">
        <div className="flex flex-column align-items-center p-4 ">
          {/* Profile Picture */}
          <Avatar
            label={`${firstNameInitial}${lastNameInitial}`} // Combine first letters
            color="red"
            size="xlarge"
            shape="circle"
            className="mb-4"
            style={{ border: "3px solid var(--primary-color)" }}
          />

          {/* User Information */}
          <h2 className="text-center text-900">Welcome, {user.name}</h2>
          <div className="w-full mt-2 mb-3">
            <p className="text-left text-700 mb-1">
              <strong>Name:</strong> {user.name}
            </p>
            <p className="text-left text-700 mb-1">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-left text-700">
              <strong>Mobile Number:</strong> {user.mobileNumber}
            </p>
            <p className="text-left text-700">
              <strong>Organization:</strong> {user.organization}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <Button
              label="Go to Home Page"
              icon="pi pi-home"
              className="p-button-primary p-button-rounded"
              onClick={() => navigate("/")}
            />
            <Button
              label="Sign Out"
              icon="pi pi-sign-out"
              className="p-button-danger p-button-rounded"
              onClick={() => {
                logoutUser();
              }}
            />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
