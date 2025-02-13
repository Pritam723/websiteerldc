// import "primeicons/primeicons.css";
// import "primereact/resources/themes/mdc-light-indigo/theme.css";
// import "primereact/resources/primereact.css";
// import "primeflex/primeflex.css";

// // import React, { useContext } from "react";
// import { AuthContext, AuthProvider } from "context/AuthContext";
// import React, { useState, useEffect, useRef, useContext } from "react";
// import axios from "axios";

// import CommonDataTable from "pages/CommonDataTable/CommonDataTable.js";

// // import { DEFAULT_FILTERS } from "utilities/DataFilterUtility";
// import PleaseSignIn from "pages/TemplatePage/PleaseSignIn.js";
// import { Toast } from "primereact/toast";
// import { showToastMessage } from "utilities/ToastMessage";

// // import { redirect } from "react-router-dom";

// export default function PeakHours() {
//   /////////////////// Page Meta Data ////////////////////////////////////////

//   ///////////////// Static Meta Data ///////////////////////////////////////
//   const targetTableClass = "PeakHour";
//   // Must be same as it is in Flask -> ORM Class(Model) -> __tablename__
//   const pageTitle = "Peak Hours & Season Declaration";

//   const breadcrumb = [
//     // { label: "Home" },

//     { label: "System Operation" },
//     {
//       label: "Peak Hours & Season Declaration",
//     },
//     // { label: "User Profile", route: "/user/userprofile" },
//   ];

//   const redirectionURL = "/scheduling/peakhours";

//   ///////////////// Dynamic Meta Data Fetched from Backend /////////////////
//   const emptyDynamicMetaData = {
//     readPermission: false,
//     writePermission: false,
//     multipleUploads: false,
//     uploadPoints: {},
//     dataToDisplay: {},
//     sortInUse: {},
//     filtersInUse: {},
//     defaultFiltering: null,
//   };

//   const [dynamicMetaData, setDynamicMetaData] = useState(emptyDynamicMetaData);

//   // const multipleUploads = true;

//   // const uploadPoints = {
//   //   // id: false,
//   //   // fileName: false,
//   //   fileDate: true,
//   //   // weekStartsEnds: true,
//   //   // month: true,
//   //   // quarter: true,
//   //   // year: true,
//   //   // fy: true,
//   //   // fileDateFromTo: true,
//   //   uploadedOn: true,
//   //   // uploadedBy: true,
//   //   // actualUploadDate: false,
//   //   // size: true,
//   // };

//   // const dataToDisplay = {
//   //   // id: false,
//   //   fileName: true,
//   //   fileDate: true,
//   //   // weekStartsEnds: true,
//   //   // month: true,
//   //   // quarter: true,
//   //   // year: true,
//   //   // fy: true,
//   //   // fileDateFromTo: true,
//   //   uploadedOn: true,
//   //   // uploadedBy: true,
//   //   // actualUploadDate: false,
//   //   size: true,
//   // };

//   // const sortInUse = {
//   //   // id: false,
//   //   fileName: true,
//   //   fileDate: true,
//   //   // weekStartsEnds: true,
//   //   // month: true,
//   //   // quarter: true,
//   //   // year: true,
//   //   // fy: true,
//   //   // fileDateFromTo: true,
//   //   uploadedOn: true,
//   //   // uploadedBy: true,

//   //   // actualUploadDate: false,
//   //   // size: true,
//   // };

//   // const filtersInUse = {
//   //   "Date Range": true,
//   //   Year: true,
//   //   Month: true,
//   //   "Financial Year & Quarter": true,
//   // };

//   // const defaultFiltering = DEFAULT_FILTERS.NONE;

//   //////////////////////////////////////////////////////////////////////////

//   const { user, authTokens } = useContext(AuthContext);
//   // console.log(user);
//   // console.log(authTokens);

//   // const [readPermission, setReadPermission] = useState(false);
//   // const [writePermission, setWritePermission] = useState(false);
//   const toast = useRef(null);

//   const fetchPageMetaData = async () => {
//     try {
//       let headers = {
//         "Content-Type": "application/json",
//       };

//       if (authTokens?.access_token) {
//         headers["Authorization"] = `Bearer ${authTokens.access_token}`;
//       }
//       let response = await axios({
//         method: "POST",
//         url: `${process.env.REACT_APP_READ_API}/fetchStandardPageMetaData`,
//         headers: headers,
//         data: { targetTableClass: targetTableClass },
//       });
//       console.log(response.data["data"]);
//       // setReadPermission(response.data["data"]["readPermission"]);
//       // setWritePermission(response.data["data"]["writePermission"]);
//       // setDynamicMetaData({})
//       setDynamicMetaData(response.data["data"]["dynamicMetaData"]);
//     } catch (e) {
//       console.log(e);
//       // console.log(e.response.data);
//       showToastMessage(toast, {});
//     }
//   };

//   useEffect(() => {
//     fetchPageMetaData();
//   }, []);

//   return (
//     <React.Fragment>
//       {" "}
//       <Toast ref={toast} />
//       {!dynamicMetaData.readPermission ? (
//         <PleaseSignIn breadcrumb={breadcrumb} redirectionURL={redirectionURL} />
//       ) : (
//         <CommonDataTable
//           dataToDisplay={dynamicMetaData.dataToDisplay}
//           uploadPoints={dynamicMetaData.uploadPoints}
//           filtersInUse={dynamicMetaData.filtersInUse}
//           defaultFiltering={dynamicMetaData.defaultFiltering}
//           sortInUse={dynamicMetaData.sortInUse}
//           pageTitle={pageTitle}
//           breadcrumb={breadcrumb}
//           targetTableClass={targetTableClass}
//           multipleUploads={dynamicMetaData.multipleUploads}
//           readPermission={dynamicMetaData.readPermission}
//           writePermission={dynamicMetaData.writePermission}
//         />
//       )}
//     </React.Fragment>
//   );
// }
