import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
// import ReactDOM from "react-dom";
import { useNavigate, useLocation } from "react-router-dom";

import React, { useState, useRef } from "react";
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

import { InputOtp } from "primereact/inputotp";
import { Toast } from "primereact/toast";
import { showToastMessage } from "utilities/ToastMessage";

export default function ForgotPassword({ redirectionURL = "/" }) {
  const navigate = useNavigate();

  const [showMessage, setShowMessage] = useState(false);
  const [step, setStep] = useState("");

  const [otp, setOtp] = useState();
  const [password, setPassword] = useState();

  const [email, setEmail] = useState();
  const toast = useRef(null);

  // const handleOtpSuccess = () => {
  //   setStep("notVerified"); // Move to OTP verification
  // };

  //////////////////////////////////////// Send OTP  validation/////////////////////////////////////////////////////
  const validateSendOTP = (data) => {
    let errors = {};

    if (!data.email) {
      errors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email = "Invalid email address. E.g. example@email.com";
    }
    return errors;
  };

  ///////////////////////////////////////////////// Send OTP  Submission////////////////////////////////////////////
  const onSubmitSendOTP = async (data, form) => {
    if (!data.email) {
      return;
    }

    try {
      let response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_READ_API}/forgotPassword`,
        headers: {},
        data: data,
      });
      setEmail(data.email);
      setStep("notVerified"); // Move to OTP verification
      console.log(data.email);
      console.log(response);
    } catch (e) {
      // console.log(e.response);
      // console.log("Bad Request");

      const responseData = e.response?.data;
      console.log(responseData);

      const toastDetails = {
        severity: responseData?.type,
        summary: responseData?.summary,
        deatil: responseData?.message,
      };
      showToastMessage(toast, toastDetails);
    }
  };

  /////////////////////////////////////////////////////// Verify OTP validation//////////////////////////////////
  const validateVerifyOTP = (data) => {
    let errors = {};

    if (!otp) {
      errors.otp = "OTP is required.";
    } else if (!/^\d{6}$/.test(otp)) {
      errors.otp = "OTP must be a 6-digit numeric code.";
    }

    if (!data.newPassword) {
      errors.newPassword = "Password is required.";
    } else if (data.newPassword) {
      const hasLowercase = /[a-z]/.test(data.newPassword);
      const hasUppercase = /[A-Z]/.test(data.newPassword);
      const hasNumber = /\d/.test(data.newPassword);
      const hasMinLength = data.newPassword.length >= 8;

      if (!(hasLowercase && hasUppercase && hasNumber && hasMinLength)) {
        errors.newPassword = "Choose a strong password";
      }
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required.";
    } else if (data.confirmPassword != data.newPassword) {
      errors.confirmPassword =
        "Confirm Password is not same as chosen Password.";
    }
    return errors;
  };

  /////////////////////////////////////////// Verify OTP Submission////////////////////////////////////////////
  const onSubmitVerifyOTP = async (data) => {
    if (!otp || !/^\d{6}$/.test(otp)) {
      return;
    }
    if (
      !data.confirmPassword ||
      !data.newPassword ||
      data.confirmPassword !== data.newPassword
    ) {
      return;
    }

    // console.log(otp, data.newPassword, data.confirmPassword);
    const newData = { ...data };
    newData["email"] = email;
    newData["otp"] = otp;

    try {
      let response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_READ_API}/forgotPasswordVerifyOTP`,
        headers: {},
        data: newData,
      });
      // setEmail(data.email);
      // console.log(data.email);
      setShowMessage(true);
      // setOtp(otp);
      // setPassword(data.newPassword);
      // form.restart();
      // handleVerifyOtpSuccess();

      console.log(response);
    } catch (e) {
      // console.log(e.response);
      // console.log("Bad Request");

      const responseData = e.response?.data;
      console.log(responseData);

      const toastDetails = {
        severity: responseData?.type,
        summary: responseData?.summary,
        deatil: responseData?.message,
      };
      showToastMessage(toast, toastDetails);
    }
  };

  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta) => {
    return (
      isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
    );
  };

  const dialogFooter = (
    <div className="flex justify-content-center">
      <Button
        label="Proceed"
        className="p-button-text"
        autoFocus
        onClick={() => {
          navigate("/user/signin");
        }}
      />
    </div>
  );

  return (
    <BaseLayout
      title={"Reset Password"}
      breadcrumb={[
        {
          label: "User",
        },
        { label: "Reset Password", route: "/user/forgotpassword" },
      ]}
    >
      {" "}
      <Toast ref={toast} />
      <div className="form-demo">
        <Dialog
          visible={showMessage}
          onHide={() => setShowMessage(false)}
          position="top"
          footer={dialogFooter}
          showHeader={false}
          breakpoints={{ "960px": "80vw" }}
          style={{ width: "30vw" }}
        >
          <div className="flex align-items-center flex-column pt-6 px-3">
            <i
              className="pi pi-check-circle"
              style={{ fontSize: "5rem", color: "var(--green-500)" }}
            ></i>
            <h5>Password Changed!</h5>
            <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
              Use your Email ID: <b>{email}</b> and new <b>Password</b> to
              login.
            </p>
          </div>
        </Dialog>

        <div className="flex justify-content-center">
          <div className="card">
            <React.Fragment>
              <h1 className="text-center">Forgot Username / Password?</h1>
              <h4 className="text-center">
                Enter your email to reset your password.
              </h4>

              {/* send an OTP to your registered email id */}
              <Form
                onSubmit={onSubmitSendOTP}
                initialValues={{
                  email: "",
                }}
                validate={validateSendOTP}
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
                              disabled={step == "notVerified"}
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
                              Email*
                            </label>
                          </span>
                          {getFormErrorMessage(meta)}
                        </div>
                      )}
                    />

                    {step != "notVerified" && (
                      <Button type="submit" label="Send OTP" className="mt-2" />
                    )}
                  </form>
                )}
              />
            </React.Fragment>

            {/* send an OTP to your registered email id */}

            {/* VerifyOTP */}
            {step === "notVerified" && (
              <React.Fragment>
                <div className="otp-notification">
                  <h4 className="text-center mt-2">
                    We've sent a verification code to your email address:{" "}
                  </h4>
                  <h4 className="text-center mb-2">{email}</h4>
                  <h4 className="text-center mb-2">
                    OTP is valid for 5 minutes.
                  </h4>
                </div>

                {/* <h4 className="text-center">
                  Enter the 6 digit code we sent you via email.
                </h4> */}

                {/* <h4 className="text-center">OTP is valid for 5 minutes</h4> */}
                <Form
                  onSubmit={onSubmitVerifyOTP}
                  initialValues={{
                    otp: "",
                    // newPassword: "",
                    // confirmPassword: "",
                  }}
                  validate={validateVerifyOTP}
                  render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit} className="p-fluid">
                      <Field
                        name="otp"
                        render={({ input, meta }) => (
                          <div className="field">
                            <span className="p-float-label p-input-icon-right">
                              {/* <div className="card flex justify-content-center"> */}
                              <InputOtp
                                id="otp"
                                value={otp}
                                // {...input}
                                onChange={(e) => setOtp(e.value)}
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
                                feedback={false}
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
                        label="Change Password"
                        className="mt-2"
                      />
                    </form>
                  )}
                />
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
