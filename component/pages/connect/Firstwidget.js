import React from "react";
import Link from "next/link";

const Firstwidget = ({
  brandInfoSubmit,
  randomNumber,
  inputsHandler,
  inputField,
  country,
  activeStep,
}) => {
  return (
    <div>
      <form
        onSubmit={brandInfoSubmit}
        className={
          activeStep === 1 ? "connect-step step  active" : "connect-step step"
        }
      >
        <h2>‍How can we connect?</h2>

        <input type="hidden" defaultValue={randomNumber} name="randomNumber" />
        <input type="hidden" defaultValue={inputField.page1} name="page" />

        <div className="full-name">
          <div className="input-group">
            <input
              type="text"
              name="first_name"
              onChange={inputsHandler}
              value={inputField.first_name}
              placeholder="First Name"
            />
            <small style={{ color: "red" }}>
              {inputField.error_log.firstName}
            </small>
          </div>
          <div className="input-group">
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              onChange={inputsHandler}
              value={inputField.last_name}
            />
            <small style={{ color: "red" }}>
              {inputField.error_log.lastName}
            </small>
          </div>
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            onChange={inputsHandler}
            value={inputField.email}
            placeholder="Email"
          />
          <small style={{ color: "red" }}>{inputField.error_log.email}</small>
        </div>

        <div className="input-group">
          <select
            name="country"
            onChange={inputsHandler}
            value={inputField.country}
            className="form-control input-select"
            placeholder="Select Country"
          >
            <option value="">Select Country</option>
            {country.map((country) => (
              <option value={country.code} key={country.id}>
                {country.name}
              </option>
            ))}
          </select>
          <small style={{ color: "red" }}>{inputField.error_log.country}</small>
        </div>

        <div className="input-group">
          <input
            type="number"
            name="phone"
            placeholder="Phone"
            onChange={inputsHandler}
            value={inputField.phone}
          />
          <small style={{ color: "red" }}>{inputField.error_log.phone}</small>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="social"
            onChange={inputsHandler}
            placeholder="WhatsApp/Discord/Skype id"
            value={inputField.social}
          />
          <small style={{ color: "red" }}>{inputField.error_log.social}</small>
        </div>

        <div className="input-group">
          <input
            type="text"
            name="aboutUs"
            onChange={inputsHandler}
            placeholder="How did you hear about us?"
            value={inputField.aboutUs}
          />
          <small style={{ color: "red" }}>{inputField.error_log.aboutUs}</small>
        </div>

        <div className="check-input sm-none">
          <label className="checkbox-container">
            <input
              type="checkbox"
              name="terms"
              value="1"
              onChange={inputsHandler}
              required
            />
            <span className="checkmark"></span>I have read and I agree to the{" "}
            <Link href="/terms" target="_blank">
              Terms of Use
            </Link>{" "}
            and
            <Link href="/privacy-policy" target="_blank">
              Privacy Policy
            </Link>
          </label>
        </div>

        <div className="btns">
          <button className="btn-hero-1">
            <span>Next</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Firstwidget;
