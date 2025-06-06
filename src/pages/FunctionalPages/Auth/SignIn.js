import "primeicons/primeicons.css";
// import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/themes/mdc-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

import { useNavigate, useLocation, Link } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import { Form, Field } from "react-final-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Dialog } from "primereact/dialog";
import { classNames } from "primereact/utils";
import "./authentication.css";
import BaseLayout from "layouts/sections/components/BaseLayout";
// import axios from "axios";
import { AuthContext } from "context/AuthContext";
import UserProfile from "./UserProfile";

export default function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();
  const { redirectionURL } = location.state || {}; // Handle case where state is undefined
  const { user, loginUser, namecontext } = useContext(AuthContext);
  const [showMessage, setShowMessage] = useState(false);
  // const [formData, setFormData] = useState({});
  // const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);
  // const [username, setUsername] = useState("");

  // console.log(redirectionURL);

  const validate = (data) => {
    let errors = {};

    if (!data.email) {
      errors.email = "Email/UserID is required.";
    }

    if (!data.password) {
      errors.password = "Password is required.";
    }

    return errors;
  };

  const onSubmit = async (data, form) => {
    const loginFlag = await loginUser(data);
    // console.log(namecontext);

    // setIsLoginSuccessful(loginFlag);
    setShowMessage(true);

    // if (!loginFlag) return;
  };

  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta) => {
    return (
      isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
    );
  };

  const dialogFooterSuccess = (
    <div className="flex justify-content-center">
      <Button
        label="Proceed"
        className="p-button-text"
        autoFocus
        onClick={() => {
          setShowMessage(false);
          // console.log(redirectionURL);

          navigate(redirectionURL);
        }}
      />
    </div>
  );

  const dialogFooterFailure = (
    <div className="flex justify-content-center">
      <Button
        label="Close"
        className="p-button-text"
        autoFocus
        onClick={() => {
          setShowMessage(false);
        }}
      />
    </div>
  );

  const SuccessDialouge = () => (
    <Dialog
      visible={showMessage}
      onHide={() => setShowMessage(false)}
      position="top"
      footer={dialogFooterSuccess}
      showHeader={false}
      breakpoints={{ "960px": "80vw" }}
      style={{ width: "30vw" }}
    >
      <div className="flex align-items-center flex-column pt-6 px-3">
        <i
          className="pi pi-check-circle"
          style={{ fontSize: "5rem", color: "var(--green-500)" }}
        ></i>
        <h5>You are Signed In!</h5>
        <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
          You can now access password protected pages. Please Proceed. In case
          of any difficulty accessing the pages, please reach us at{" "}
          <b>erldcit@grid-india.in</b>.
        </p>
      </div>
    </Dialog>
  );

  const FailureDialouge = () => (
    <Dialog
      visible={showMessage}
      onHide={() => setShowMessage(false)}
      position="top"
      footer={dialogFooterFailure}
      showHeader={false}
      breakpoints={{ "960px": "80vw" }}
      style={{ width: "30vw" }}
    >
      <div className="flex align-items-center flex-column pt-6 px-3">
        <i
          className="pi pi-times"
          style={{ fontSize: "5rem", color: "var(--red-500)" }}
        ></i>
        <h5>Wrong Email/ UserID or Password!</h5>
        <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
          In case you are facing difficulty loggin in, please reach us at{" "}
          <b>erldcit@grid-india.in</b>.
        </p>
      </div>
    </Dialog>
  );

  return user ? (
    <React.Fragment>
      {SuccessDialouge()}
      <UserProfile />
    </React.Fragment>
  ) : (
    <BaseLayout
      title={"Sign In"}
      breadcrumb={[
        {
          label: "User",
        },
        { label: "Sign In", route: "/user/signin" },
      ]}
    >
      <div className="form-demo">
        {FailureDialouge()}
        <div className="flex justify-content-center">
          <div className="card">
            <h3 className="text-center">Sign In to ERLDC</h3>
            <Form
              onSubmit={onSubmit}
              initialValues={{
                email: "",
                password: "",
              }}
              validate={validate}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className="p-fluid">
                  <Field
                    name="email"
                    render={({ input, meta }) => (
                      <div className="field">
                        <span className="p-float-label p-input-icon-right">
                          {/* <i className="pi pi-envelope" /> */}
                          <InputText
                            id="email"
                            {...input}
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                            })}
                          />
                          <label
                            htmlFor="email"
                            className={classNames({
                              "p-error": isFormFieldValid(meta),
                            })}
                          >
                            Email/UserID*
                          </label>
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )}
                  />
                  <Field
                    name="password"
                    render={({ input, meta }) => (
                      <div className="field">
                        <span className="p-float-label">
                          <Password
                            id="password"
                            {...input}
                            toggleMask
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                            })}
                            feedback={false}
                          />
                          <label
                            htmlFor="password"
                            className={classNames({
                              "p-error": isFormFieldValid(meta),
                            })}
                          >
                            Password*
                          </label>
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )}
                  />
                  <Button type="submit" label="Sign In" className="mt-2" />
                </form>
              )}
            />

            <div className="text-center mt-2">
              <Link
                key={"forgotpassword"}
                to={"/user/forgotpassword"}
                className="forgot-password-link"
              >
                Forgot Password?
              </Link>

              <Link
                key={"register"}
                to={"/user/register"}
                className="forgot-password-link"
              >
                Don’t have an account? Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
