// import { Toast } from "primereact/toast";
// import React, { useState, useEffect, useRef, useContext } from "react";

export const showToastMessage = (
  toastRef,
  {
    severity = "error",
    summary = "Something went wrong",
    deatil = "Not able to reach server",
  }
) => {
  // console.log(toastRef.current);
  if (!toastRef || !toastRef.current) return;
  else {
    return toastRef.current.show({
      severity: severity,
      summary: summary,
      detail: deatil,
      life: 3000,
    });
  }
};
