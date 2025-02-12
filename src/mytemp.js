import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
// import ReactDOM from "react-dom";
import { useNavigate, useLocation } from "react-router-dom";

import React, { useEffect, useState, useContext } from "react";
import { Form, Field } from "react-final-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
// import { Dropdown } from "primereact/dropdown";
// import { Calendar } from "primereact/calendar";
import { Password } from "primereact/password";
// import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
// import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";
import "./authentication.css";
import BaseLayout from "layouts/sections/components/BaseLayout";
import axios from "axios";
import { AuthContext, AuthProvider } from "context/AuthContext";

import UserProfile from "./UserProfile";

import { InputOtp } from "primereact/inputotp";

export default function SignIn({ redirectionURL = "/" }) {
  const navigate = useNavigate();

  const { user, loginUser, namecontext } = useContext(AuthContext);

  const [showMessage, setShowMessage] = useState(false);

  const [isLoginSuccessful, setIsLoginSuccessful] = useState(false);

  const [token, setTokens] = useState();

  const validatesendotp = (data) => {
    let errors = {};

    if (!data.email) {
      errors.email = "Email/UserID is required.";
    }
    return errors;
  };

  const onSubmitsendotp = async (data, form) => {
    // console.log("hell ritik here");
    const loginFlag = await loginUser(data);
    console.log(data);

    if (!loginFlag) return;
  };

  const validateverifyotp = (data) => {
    let errors = {};
    // errors.token = "OTP is required.";
    // console.log(data.Otp);
    if (!data.Otp) {
      errors.Otp = "OTP is required.";
    }
    return errors;
  };

  const validatechangepassword = (data) => {
    let errors = {};

    if (!data.newPassword) {
      errors.newPassword = "Password is required.";
    }
    if (!data.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required.";
    }
    if (data.confirmPassword != data.newPassword) {
      errors.mainerror = "Confirm Password is not same as New Password.";
    }
    // console.log(errors);
    return errors;
  };

  const onSubmitverifyotp = async () => {
    console.log(token);
  };

  const onSubmitchangepassword = async (data, form) => {
    // console.log("hell ritik here");
    const loginFlag = await loginUser(data);
    console.log(data);

    if (!loginFlag) return;
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
    <div>
      {SuccessDialouge()}
      <UserProfile />
    </div>
  ) : (
    <BaseLayout
      title={"Reset Password"}
      breadcrumb={[
        {
          label: "User",
        },
        { label: "Reset Password", route: "/user/signin" },
      ]}
    >
      <div className="form-demo">
        {FailureDialouge()}
        <div className="flex justify-content-center">
          <div className="card">
            <h1 className="text-center">Forgot Username / Password?</h1>
            <h4 className="text-center">
              Enter your username or email to reset your password.
            </h4>

            {/* send an OTP to your registered email id */}
            <Form
              onSubmit={onSubmitsendotp}
              initialValues={{
                email: "",
              }}
              validate={validatesendotp}
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

                  <Button type="submit" label="Send OTP" className="mt-2" />
                </form>
              )}
            />
            {/* send an OTP to your registered email id */}

            {/* VerifyOTP */}

            <Form
              onSubmit={onSubmitverifyotp}
              initialValues={{
                Otp: "",
              }}
              validate={validateverifyotp}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className="p-fluid">
                  <Field
                    name="Otp"
                    render={({ input, meta }) => (
                      <div className="field">
                        <span className="p-float-label p-input-icon-right">
                          {/* <div className="card flex justify-content-center"> */}
                          <InputOtp
                            id="Otp"
                            value={token}
                            {...input}
                            onChange={(e) => setTokens(e.value)}
                            length={6}
                            style={{ width: "400px" }}
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                            })}
                          />
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )}
                  />
                  <Button type="submit" label="Verify OTP" className="mt-2" />
                </form>
              )}
            />

            {/* VerifyOTP */}

            {/* Password and Confirm Pasword*/}
            <h1 className="text-center">Reset Password</h1>
            <Form
              onSubmit={onSubmitchangepassword}
              initialValues={{
                newPassword: "",
                confirmPassword: "",
              }}
              validate={validatechangepassword}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit} className="p-fluid">
                  <Field
                    name="newPassword"
                    render={({ input, meta }) => (
                      <div className="field">
                        <span className="p-float-label">
                          <Password
                            id="newPassword"
                            {...input}
                            toggleMask
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                            })}
                          />
                          <label
                            htmlFor="newPassword"
                            className={classNames({
                              "p-error": isFormFieldValid(meta),
                            })}
                          >
                            New Password*
                          </label>
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )}
                  />

                  <Field
                    name="confirmPassword"
                    render={({ input, meta }) => (
                      <div className="field">
                        <span className="p-float-label">
                          <Password
                            id="confirmPassword"
                            {...input}
                            toggleMask
                            className={classNames({
                              "p-invalid": isFormFieldValid(meta),
                            })}
                          />
                          <label
                            htmlFor="confirmPassword"
                            className={classNames({
                              "p-error": isFormFieldValid(meta),
                            })}
                          >
                            Confirm Password*
                          </label>
                        </span>
                        {getFormErrorMessage(meta)}
                      </div>
                    )}
                  />

                  <Button
                    type="submit"
                    label="Reset Password"
                    className="mt-2"
                  />
                </form>
              )}
            />

            {/* Password and Confirm Pasword*/}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
