import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("Pritam");
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
      setAuthTokens(tokenData);
      setUser(jwtDecode(tokenData.access_token));
      localStorage.setItem("authTokens", JSON.stringify(tokenData));
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
    localStorage.removeItem("authTokens");
  };

  let contextData = {
    user,
    authTokens,
    loginUser,
    logoutUser,
    name,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
