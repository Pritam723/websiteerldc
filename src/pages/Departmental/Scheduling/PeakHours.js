import "primeicons/primeicons.css";
import "primereact/resources/themes/mdc-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

// import React, { useContext } from "react";
import { AuthContext, AuthProvider } from "context/AuthContext";
import React, { useState, useEffect, useRef, useContext } from "react";
import CommonDataTable from "pages/CommonDataTable/CommonDataTable.js";

import { DEFAULT_FILTERS } from "utilities/DataFilterUtility";

export default function PeakHours() {
  const { user } = useContext(AuthContext);

  const pageTitle = "Peak Hours & Season Declaration";
  const targetTableClass = "PeakHour";
  const multipleUploads = true;

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
    // fileName: false,
    fileDate: true,
    // weekStartsEnds: true,
    // month: true,
    // quarter: true,
    // year: true,
    // fy: true,
    // fileDateFromTo: true,
    uploadedOn: true,
    // uploadedBy: true,
    // actualUploadDate: false,
    // size: true,
  };

  const dataToDisplay = {
    // id: false,
    fileName: true,
    fileDate: true,
    // weekStartsEnds: true,
    // month: true,
    // quarter: true,
    // year: true,
    // fy: true,
    // fileDateFromTo: true,
    uploadedOn: true,
    // uploadedBy: true,
    // actualUploadDate: false,
    size: true,
  };

  const sortInUse = {
    // id: false,
    fileName: true,
    fileDate: true,
    // weekStartsEnds: true,
    // month: true,
    // quarter: true,
    // year: true,
    // fy: true,
    // fileDateFromTo: true,
    uploadedOn: true,
    // uploadedBy: true,

    // actualUploadDate: false,
    // size: true,
  };

  const filtersInUse = {
    "Date Range": true,
    Year: true,
    Month: true,
    "Financial Year & Quarter": true,
  };

  const defaultFiltering = DEFAULT_FILTERS.CURRENT_YEAR;

  return (
    <CommonDataTable
      dataToDisplay={dataToDisplay}
      uploadPoints={uploadPoints}
      filtersInUse={filtersInUse}
      defaultFiltering={defaultFiltering}
      sortInUse={sortInUse}
      pageTitle={pageTitle}
      breadcrumb={breadcrumb}
      targetTableClass={targetTableClass}
      multipleUploads={multipleUploads}
    />
  );
}
