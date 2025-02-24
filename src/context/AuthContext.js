import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { createContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //   const navigate = useNavigate();

  const [languagePreference, setLanguagePreference] = useState(() =>
    localStorage.getItem("languagePreference")
      ? localStorage.getItem("languagePreference")
      : "English"
  );

  const [namecontext, setNameContext] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(JSON.parse(localStorage.getItem("authTokens")).access_token)
          .user_info.name
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
          .user_info
      : null
  );

  let loginUser = async (data) => {
    // data.preventDefault()

    // console.log("login works");
    // console.log(data);

    try {
      
      let response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_READ_API}/login`,
        headers: {},
        data: data,
      });
      console.log(response);
      let tokenData = await response.data;
      setAuthTokens(tokenData);
      setUser(jwtDecode(tokenData.access_token).user_info);
      setNameContext(jwtDecode(tokenData.access_token).user_info.name);

      console.log("hiiiiiiiiii", jwtDecode(tokenData.access_token).user_info.name);

      localStorage.setItem("authTokens", JSON.stringify(tokenData));
      return true;
      //   navigate("/");
      //   console.log("works");
      //   console.log(jwtDecode(tokenData.access_token));
    } catch {
      console.log("hiiiiiiiiiiiiii Bad Request");
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
    languagePreference,
    setLanguagePreference,
  };

  let tokenValidity = async (token) => {
    // console.log("I am here");
    // console.log(jwtDecode(token.access_token));
    const tokenExp = jwtDecode(token.access_token)?.exp;

    // console.log(tokenExp * 1000);

    console.log(Date.now());
    if (!tokenExp || tokenExp * 1000 < Date.now()) {
      console.log("Token expired. Logging Out.");
      logoutUser();
      return;
    }
    console.log("Token still valid");
    return;
  };

  useEffect(() => {
    const authTokens = localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null;

    if (authTokens) {
      tokenValidity(authTokens);
    }
  }, []);

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
