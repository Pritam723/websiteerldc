import React, { useState, useEffect } from "react";
import { Calendar } from "primereact/calendar";
import LoadingOverlay from "react-loading-overlay";

const CalendarWithBackendTimestamp = () => {
  const isActive = true;
  return (
    <LoadingOverlay active={isActive} spinner text="Loading your content...">
      <p>Some content or children or something.</p>
    </LoadingOverlay>
  );
};

export default CalendarWithBackendTimestamp;
