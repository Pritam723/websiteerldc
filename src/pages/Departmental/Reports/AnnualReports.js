import "primeicons/primeicons.css";
import "primereact/resources/themes/mdc-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

// import React, { useContext } from "react";
import { AuthContext } from "context/AuthContext";
import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";

import CommonDataTable from "pages/CommonDataTable/CommonDataTable.js";

// import { DEFAULT_FILTERS } from "utilities/DataFilterUtility";
import PleaseSignIn from "pages/TemplatePage/PleaseSignIn.js";
import { Toast } from "primereact/toast";
import { showToastMessage } from "utilities/ToastMessage";

// import { redirect } from "react-router-dom";

export default function AnnualReports() {
  /////////////////// Page Meta Data ////////////////////////////////////////

  ///////////////// Static Meta Data ///////////////////////////////////////
  const targetTableClass = "AnnualReports";
  // Must be same as it is in Flask -> ORM Class(Model) -> __tablename__
  const pageTitle = "Annual Reports";

  const breadcrumb = [
    // { label: "Home" },

    // { label: "Reports" },
    { label: "MIS Reports" },
    {
      label: "Annual Reports",
    },
    // { label: "User Profile", route: "/user/userprofile" },
  ];

  const redirectionURL = "/reports/annualreports";

  ///////////////// Dynamic Meta Data Fetched from Backend /////////////////
  const emptyDynamicMetaData = {
    readPermission: null,
    writePermission: null,
    multipleUploads: null,
    uploadPoints: {},
    dataToDisplay: {},
    sortInUse: {},
    filtersInUse: {},
    defaultFiltering: null,
  };

  const [dynamicMetaData, setDynamicMetaData] = useState(emptyDynamicMetaData);

  //////////////////////////////////////////////////////////////////////////

  const { authTokens } = useContext(AuthContext);

  const toast = useRef(null);

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
        url: `${process.env.REACT_APP_READ_API}/fetchStandardPageMetaData`,
        headers: headers,
        data: { targetTableClass: targetTableClass },
      });
      // console.log(response.data["data"]);
      // setReadPermission(response.data["data"]["readPermission"]);
      // setWritePermission(response.data["data"]["writePermission"]);
      // setDynamicMetaData({})
      setDynamicMetaData(response.data["data"]["dynamicMetaData"]);
    } catch (e) {
      // console.log(e);
      // // console.log(e.response.data);
      showToastMessage(toast, {});
    }
  };

  useEffect(() => {
    fetchPageMetaData();
  }, []);

  return (
    <React.Fragment>
      {" "}
      <Toast ref={toast} />
      {!dynamicMetaData.readPermission ? (
        <PleaseSignIn
          readPermission={dynamicMetaData.readPermission}
          breadcrumb={breadcrumb}
          redirectionURL={redirectionURL}
        />
      ) : (
        <CommonDataTable
          dataToDisplay={dynamicMetaData.dataToDisplay}
          uploadPoints={dynamicMetaData.uploadPoints}
          filtersInUse={dynamicMetaData.filtersInUse}
          defaultFiltering={dynamicMetaData.defaultFiltering}
          sortInUse={dynamicMetaData.sortInUse}
          pageTitle={pageTitle}
          breadcrumb={breadcrumb}
          targetTableClass={targetTableClass}
          multipleUploads={dynamicMetaData.multipleUploads}
          readPermission={dynamicMetaData.readPermission}
          writePermission={dynamicMetaData.writePermission}
        />
      )}
    </React.Fragment>
  );
}
