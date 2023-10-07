import React from "react";
import CurrencyFormat from "react-currency-format";
const Secondwidget = ({
  category,
  subCategory,
  randomNumber,
  inputField,
  websiteInfoSubmit,
  activeStep,
  inputsHandler,
  handleCategoryInput,
  stateChangeOne,
}) => {
  return (
    <div>
      <form
        onSubmit={websiteInfoSubmit}
        className={
          activeStep === 2 ? "connect-step step  active" : "connect-step step "
        }
      >
        <h2>Tell us about your business</h2>

        <input type="hidden" defaultValue={randomNumber} name="randomNumber" />
        <input type="hidden" defaultValue={inputField.page2} name="page" />

        <div className="input-group">
          <label>Category</label>
          <select
            name="category"
            onChange={handleCategoryInput}
            value={inputField.category}
            aria-invalid="false"
          >
            <option value="">Select Category</option>
            {category.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <small style={{ color: "red" }}>
            {inputField.error_log.category}
          </small>
        </div>

        <div className="input-group">
          <label>Subcategory</label>
          <select
            name="subcategory"
            onChange={inputsHandler}
            value={inputField.subcategory}
            className="form-control input-select"
            aria-invalid="false"
          >
            <option value="">Select Sub Category</option>
            {subCategory.map((subcat) => (
              <option value={subcat.name} key={subcat.id}>
                {subcat.name}
              </option>
            ))}
          </select>
          <small style={{ color: "red" }}>
            {inputField.error_log.subcategory}
          </small>
        </div>

        <div className="input-group">
          <label>What is your monthly marketing budget?</label>

          <CurrencyFormat
            thousandSeparator={true}
            prefix={"$"}
            type="text"
            name="market"
            onChange={inputsHandler}
            value={inputField.market}
          />
          <small style={{ color: "red" }}>{inputField.error_log.market}</small>
        </div>

        <div className="input-group">
          <label>Consult :</label>
          <textarea
            name="message"
            onChange={inputsHandler}
            value={inputField.message}
            className="form-control"
            cols="30"
            rows="10"
            style={{ border: "1px solid black", borderRadius: "10px" }}
          ></textarea>
          <small style={{ color: "red" }}>{inputField.error_log.message}</small>
        </div>

        <div className="btns">
          <button type="button" className="btn-hero-1" onClick={stateChangeOne}>
            Previous
          </button>

          <button className="btn-hero-1">Next</button>
        </div>
      </form>
    </div>
  );
};

export default Secondwidget;
