import "primeicons/primeicons.css";
import "primereact/resources/themes/mdc-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

import React from "react";

import moment from "moment";

import { getFileIcon } from "utilities/FileIcon";

/////////////////////  Datatable Body Templetes //////////////////////////////////////////////

export const fileNameBodyTemplate = (rowData) => {
  // return rowData.fileDate.toString();

  if (!rowData.fileName) {
    return "";
  }
  return (
    <React.Fragment>
      {getFileIcon(rowData.fileName)} {rowData.fileName}
    </React.Fragment>
  );
};

export const dateBodyTemplate = (rowData) => {
  // return rowData.fileDate.toString();
  if (!rowData.fileDate) {
    return "Data not available.";
  }
  return moment(rowData.fileDate).format("DD/MM/YYYY");
};

export const weekBodyTemplate = (rowData) => {
  // return rowData.fileDate.toString();
  if (
    !rowData.weekStartsEnds ||
    !rowData.weekStartsEnds[0] ||
    !rowData.weekStartsEnds[1]
  ) {
    return "Data not available.";
  }
  return `${moment(rowData.weekStartsEnds[0]).format("DD/MM/YYYY")} to ${moment(
    rowData.weekStartsEnds[1]
  ).format("DD/MM/YYYY")}`;
};

export const monthBodyTemplate = (rowData) => {
  // return rowData.fileDate.toString();
  if (!rowData.month) {
    return "Data not available.";
  }
  return moment(rowData.month).format("MMM YYYY");
};

export const yearBodyTemplate = (rowData) => {
  // return rowData.fileDate.toString();
  if (!rowData.year) {
    return "Data not available.";
  }
  return moment(rowData.year).format("YYYY");
};

export const fileDateFromToBodyTemplate = (rowData) => {
  // return rowData.fileDate.toString();
  if (
    !rowData.fileDateFromTo ||
    !rowData.fileDateFromTo[0] ||
    !rowData.fileDateFromTo[1]
  ) {
    return "Data not available.";
  }
  return `${moment(rowData.fileDateFromTo[0]).format("DD/MM/YYYY")} to ${moment(
    rowData.fileDateFromTo[1]
  ).format("DD/MM/YYYY")}`;
};

export const uploadDateBodyTemplate = (rowData) => {
  // return rowData.fileDate.toString();
  if (!rowData.uploadedOn) {
    return "Data not available.";
  }
  return moment(rowData.uploadedOn).format("DD/MM/YYYY");
};
export const fileSizeBodyTemplate = (rowData) => {
  const bytes = parseInt(rowData.size);
  if (!bytes) return "0B";
  if (bytes < 100) return `${bytes}B`;
  if (bytes < 1024 * 1024) {
    // If size is less than 1MB, show in KB
    return `${(bytes / 1024).toFixed(2)}KB`;
  } else {
    // If size is 1MB or larger, show in MB
    return `${(bytes / (1024 * 1024)).toFixed(2)}MB`;
  }
};

//////////////////////////////////////////////////////////////////////////////////////////////
