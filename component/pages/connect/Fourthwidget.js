import React from "react";
import Link from "next/link";

const Fourthwidget = ({ activeStep }) => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className={
          activeStep === 4 ? "connect-step step  active" : "connect-step step "
        }
      >
        <h2>Thanks</h2>
        <p className="subtitle">
          A confirmation has been sent to your email. Soon you will be contacted
          by one of our representative.
        </p>
        <Link href={"/"}>
          <button className="cta-btn">&larr; &nbsp; GO BACK</button>
        </Link>
      </form>
    </div>
  );
};

export default Fourthwidget;
