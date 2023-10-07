import React from "react";

const Thirdwidget = ({
  smartContractInfoSubmit,
  inputsHandler,
  activeStep,
  randomNumber,
  inputField,
  today,
  maxDate,
  stateChangeTwo,
}) => {
  return (
    <div>
      <form
        onSubmit={smartContractInfoSubmit}
        className={
          activeStep === 3 ? "connect-step step  active" : "connect-step step "
        }
      >
        <input type="hidden" defaultValue={randomNumber} name="randomNumber" />
        <input type="hidden" defaultValue={inputField.page3} name="page" />
        <h2>Schedule a meeting (Schedule should be in Europe/London time)</h2>

        <div className="input-group">
          <label>Select Date and Time</label>
          <input
            type="datetime-local"
            name="meeting"
            onChange={inputsHandler}
            value={inputField.meeting}
            min={today}
            max={maxDate}
            required
          />
        </div>

        <div className="btns">
          <button type="button" className="btn-hero-1" onClick={stateChangeTwo}>
            Previous
          </button>

          <button className="btn-hero-1">Next</button>
        </div>
      </form>
    </div>
  );
};

export default Thirdwidget;
