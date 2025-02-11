import "primeicons/primeicons.css";
import "primereact/resources/themes/mdc-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

// import React, { useContext } from "react";
import { AuthContext, AuthProvider } from "context/AuthContext";
import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";

import CommonDataTable from "pages/CommonDataTable/CommonDataTable.js";

import { DEFAULT_FILTERS } from "utilities/DataFilterUtility";
// import { redirect } from "react-router-dom";

export default function PeakHours() {
  /////////////////// Page Meta Data ////////////////////////////////////////

  const targetTableClass = "PeakHour";
  // Must be same as it is in Flask -> ORM Class(Model) -> __tablename__
  const pageTitle = "Peak Hours & Season Declaration";
  const multipleUploads = true;

  const breadcrumb = [
    // { label: "Home" },

    { label: "System Operation" },
    {
      label: "Peak Hours & Season Declaration",
      redirectionURL: "/scheduling/peakhours",
    },
    // { label: "User Profile", route: "/user/userprofile" },
  ];

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

  const defaultFiltering = DEFAULT_FILTERS.NONE;

  //////////////////////////////////////////////////////////////////////////

  const { user, authTokens } = useContext(AuthContext);
  // console.log(user);
  // console.log(authTokens);

  const [readPermission, setReadPermission] = useState(false);
  const [writePermission, setWritePermission] = useState(false);

  const fetchPageMetaData = async () => {
    try {
      let headers = {
        "Content-Type": "application/json",
      };

      if (authTokens?.access_token) {
        headers["Authorization"] = `Bearer ${authTokens.access_token}`;
      }
      let response = await axios({
        method: "POST",
        url: "http://10.3.101.179:4001/fetchStandardPageMetaData",
        headers: headers,
        data: { targetTableClass: targetTableClass },
      });
      console.log(response.data["data"]);
      setReadPermission(response.data["data"]["readPermission"]);
      setWritePermission(response.data["data"]["writePermission"]);
    } catch (e) {
      console.log(e);
      // console.log(e.response.data);
    }
  };

  useEffect(() => {
    fetchPageMetaData();
  }, []);

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
      readPermission={readPermission}
      writePermission={writePermission}
    />
  );
}
