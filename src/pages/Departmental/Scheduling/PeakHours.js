import "primeicons/primeicons.css";
import "primereact/resources/themes/mdc-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

// import React, { useContext } from "react";
import { AuthContext, AuthProvider } from "context/AuthContext";
import React, { useState, useEffect, useRef, useContext } from "react";
import CommonDataTable from "pages/CommonDataTable/CommonDataTable.js";

export default function PeakHours() {
  const { user } = useContext(AuthContext);

  const pageTitle = "Peak Hours & Season Declaration";
  const breadcrumb = [
    // { label: "Home" },

    { label: "System Operation" },
    { label: "Peak Hours & Season Declaration" },
    // { label: "User Profile", route: "/user/userprofile" },
  ];

  const apiEndPoints = {
    getApi: "/getAllPeakHour",
    uploadApi: "/uploadPeakHour",
    downloadApi: "/downloadPeakHour",
    editApi: "/editPeakHour",
    deleteApi: "/deletePeakHour",
  };

  const uploadPoints = {
    // id: false,
    filename: false,
    fileDate: true,
    weekStartsEnds: true,
    month: true,
    // quarter: true,
    // year: true,
    fy: true,
    // fileDateFromTo: true,
    // uploadedOn: true,
    // actualUploadDate: false,
    // size: true,
  };

  const dataToDisplay = {
    // id: false,
    filename: true,
    fileDate: true,
    weekStartsEnds: true,
    month: true,
    // quarter: true,
    // year: true,
    fy: true,
    // fileDateFromTo: true,
    // uploadedOn: true,
    // actualUploadDate: false,
    // size: true,
  };

  const filtersInUse = {};

  return (
    // <>huu</>
    <CommonDataTable
      dataToDisplay={dataToDisplay}
      uploadPoints={uploadPoints}
      pageTitle={pageTitle}
      breadcrumb={breadcrumb}
      apiEndPoints={apiEndPoints}
    />
  );
}
