import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import ReactDOM from "react-dom";
import { useNavigate, useLocation, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";
import "./authentication.css";
import { InputOtp } from "primereact/inputotp";
import BaseLayout from "layouts/sections/components/BaseLayout";
import View from "layouts/sections/components/View";
// import MKBox from "components/MKBox";

export default function ReactFinalFormDemo() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const [otp, setOtp] = useState();

  const onOtpregister = () => {
    setStep(2); // Move to OTP verification
  };

  /////////////////////////////////////////////////////// Validate Registration//////////////////////////////////
  const validate_register = (data) => {
    let errors = {};

    if (!data.name) {
      errors.name = "User Name is required.";
    }
    if (!data.email) {
      errors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email = "Invalid email address. E.g. example@email.com";
    }
    if (!data.organization) {
      errors.organization = "Organization is required.";
    }
    if (!data.mobilenumber) {
      errors.mobilenumber = "Mobile Number is required.";
    }
    if (!/^\d{10}$/.test(data.mobilenumber)) {
      errors.mobilenumber = "Mobile Number must be a 10-digit numeric code.";
    }

    if (!data.password) {
      errors.password = " Password is required.";
    }
    if (!data.confirmPassword) {
      errors.confirmPassword = " Confirm Password is required.";
    } else if (data.confirmPassword != data.password) {
      errors.confirmPassword = "Confirm Password is not matched with Password.";
    }

    return errors;
  };
  /////////////////////////////////////////////////////// Validate Registration//////////////////////////////////

  /////////////////////////////////////////////////////// Submit Registration//////////////////////////////////

  const submit_register = (data, form) => {
    if (
      !data.name ||
      !data.email ||
      !data.organization ||
      !data.mobilenumber ||
      !data.password ||
      !data.confirmPassword
    ) {
      return;
    }

    setFormData(data);
    onOtpregister();
    form.restart();
  };

  /////////////////////////////////////////////////////// Submit Registration//////////////////////////////////

  /////////////////////////////////////////////////////// Verify OTP validation//////////////////////////////////
  const registervalidateotp = (data) => {
    let errors = {};

    if (!otp) {
      errors.otp = "OTP is required.";
    } else if (!/^\d{6}$/.test(otp)) {
      errors.otp = "OTP must be a 6-digit numeric code.";
    }

    return errors;
  };

  /////////////////////////////////////////// Verify OTP Submission////////////////////////////////////////////
  const registerverifyotp = async (data) => {
    if (!otp || !/^\d{6}$/.test(otp)) {
      return;
    }

    setOtp(otp);
    setShowMessage(true);
    // form.restart();
    // handleVerifyOtpSuccess();
  };

  /////////////////////// Verify Change Password validation//////////////////////////////////////////////////////

  const isFormFieldValid = (meta) => !!(meta.touched && meta.error);
  const getFormErrorMessage = (meta) => {
    return (
      isFormFieldValid(meta) && <small className="p-error">{meta.error}</small>
    );
  };

  const dialogFooter = (
    <div className="flex justify-content-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => navigate("/")}
      />
    </div>
  );
  const passwordHeader = <h6>Pick a password</h6>;
  const passwordFooter = (
    <React.Fragment>
      <Divider />
      <p className="mt-2">Suggestions</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </React.Fragment>
  );

  return (
    <BaseLayout
      title="Register"
      breadcrumb={[
        {
          label: "User",
        },
        { label: "Register", route: "/user/register" },
      ]}
    >
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
            <h5>Registration Successful!</h5>
            <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
              Your account is registered under name <b>{formData.name}</b> ;
              it'll be valid next 30 days without activation. Please check{" "}
              <b>{formData.email}</b> for activation instructions.
            </p>
          </div>
        </Dialog>

        <div className="flex justify-content-center">
          <div className="card">
            {step === 1 && (
              <>
                <h1 className="text-center">Register for this site!</h1>
                <h4 className="text-center">Sign up now for the good stuff.</h4>
                <Form
                  onSubmit={submit_register}
                  initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    date: null,
                    country: null,
                    accept: false,
                  }}
                  validate={validate_register}
                  render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit} className="p-fluid">
                      <Field
                        name="name"
                        render={({ input, meta }) => (
                          <div className="field">
                            <span className="p-float-label">
                              <InputText
                                id="name"
                                {...input}
                                // autoFocus
                                className={classNames({
                                  "p-invalid": isFormFieldValid(meta),
                                })}
                              />
                              <label
                                htmlFor="name"
                                className={classNames({
                                  "p-error": isFormFieldValid(meta),
                                })}
                              >
                                Name*
                              </label>
                            </span>
                            {getFormErrorMessage(meta)}
                          </div>
                        )}
                      />

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
                                Email*
                              </label>
                            </span>
                            {getFormErrorMessage(meta)}
                          </div>
                        )}
                      />
                      <Field
                        name="organization"
                        render={({ input, meta }) => (
                          <div className="field">
                            <span className="p-float-label p-input-icon-right">
                              {/* <i className="pi pi-envelope" /> */}
                              <InputText
                                id="organization"
                                {...input}
                                className={classNames({
                                  "p-invalid": isFormFieldValid(meta),
                                })}
                              />
                              <label
                                htmlFor="organization"
                                className={classNames({
                                  "p-error": isFormFieldValid(meta),
                                })}
                              >
                                Organization*
                              </label>
                            </span>
                            {getFormErrorMessage(meta)}
                          </div>
                        )}
                      />
                      <Field
                        name="mobilenumber"
                        render={({ input, meta }) => (
                          <div className="field">
                            <span className="p-float-label p-input-icon-right">
                              {/* <i className="pi pi-envelope" /> */}
                              <InputText
                                id="mobilenumber"
                                {...input}
                                className={classNames({
                                  "p-invalid": isFormFieldValid(meta),
                                })}
                              />
                              <label
                                htmlFor="mobilenumber"
                                className={classNames({
                                  "p-error": isFormFieldValid(meta),
                                })}
                              >
                                Mobile Number*
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

                      <Button type="submit" label="Sign Up" className="mt-2" />
                    </form>
                  )}
                />
              </>
            )}

            {step === 2 && (
              <>
                <h1 className="text-center">OTP verification</h1>

                <h4 className="text-center">OTP is valid for 5 minutes</h4>
                <Form
                  onSubmit={registerverifyotp}
                  initialValues={{
                    otp: "",
                  }}
                  validate={registervalidateotp}
                  render={({ handleSubmit }) => (
                    <form onSubmit={handleSubmit} className="p-fluid">
                      <Field
                        name="otp"
                        render={({ input, meta }) => (
                          <div className="field">
                            <span className="p-float-label p-input-icon-right">
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

                      <Button type="submit" label="Verify" className="mt-2" />
                    </form>
                  )}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
