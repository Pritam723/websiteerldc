import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //   const navigate = useNavigate();

  const [namecontext, setNameContext] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(JSON.parse(localStorage.getItem("authTokens")).access_token)
          .sub.name
      : null
  );

  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(JSON.parse(localStorage.getItem("authTokens")).access_token)
          .sub
      : null
  );

  let loginUser = async (data) => {
    // data.preventDefault()

    // console.log("login works");
    // console.log(data);

    try {
      let response = await axios({
        method: "post",
        url: "http://10.3.101.179:4001/login",
        headers: {},
        data: data,
      });
      console.log(response);
      let tokenData = await response.data;
      await setAuthTokens(tokenData);
      await setUser(jwtDecode(tokenData.access_token).sub);
      await setNameContext(jwtDecode(tokenData.access_token).sub.name);

      console.log(jwtDecode(tokenData.access_token).sub.name);

      await localStorage.setItem("authTokens", JSON.stringify(tokenData));
      return true;
      //   navigate("/");
      //   console.log("works");
      //   console.log(jwtDecode(tokenData.access_token));
    } catch {
      console.log("Bad Request");
      return false;
    }
  };

  let logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    setNameContext(null);
    localStorage.removeItem("authTokens");
  };

  let contextData = {
    user,
    authTokens,
    loginUser,
    logoutUser,
    namecontext,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
