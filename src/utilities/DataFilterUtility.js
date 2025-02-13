import axios from "axios";
import { showToastMessage } from "utilities/ToastMessage";

// export const DEFAULT_FILTERS = {
//   NONE: null, // No filtering, will fetch all data.
//   LAST_ONE_YEAR: "LAST_ONE_YEAR", // Will Filter Data for last 1-year ending today.
//   CURRENT_YEAR: "CURRENT_YEAR", // Will Filter Data for current year. current year = today.year().
//   CURRENT_FINANCIAL_YEAR: "CURRENT_FINANCIAL_YEAR", // Will Filter Data for current fy. current fy = today.fy().
//   CURRENT_FYQ: "CURRENT_FYQ", // Will Filter Data for current fy & quarter. current fy & q = today.fy() & q().
//   CURRENT_MONTH: "CURRENT_MONTH", // Will Filter Data for current month. current month = today.month().
// };

export const getFinancialYearList = async (setFyList, toast) => {
  try {
    let response = await axios({
      method: "GET",
      url: `${process.env.REACT_APP_READ_API}/getFYList`,
    });
    setFyList(response.data);
  } catch (e) {
    showToastMessage(toast, {});
  }
};

export const getQuarterList = () => {
  return ["Q1", "Q2", "Q3", "Q4"];
};
