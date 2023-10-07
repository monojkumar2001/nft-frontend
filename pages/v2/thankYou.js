import React from "react";
import Link from "next/link";
import AppLayout from "../../component/Layout/Layout";
const ThankYou = ({}) => {
  return (
    <>
     <div className="thank-you">
     <h2>Thank You</h2>
      <p className="subtitle">
        A confirmation has been sent to your email. Soon you will be contacted
        by one of our representative.
      </p>
      <Link href={"/"}>
        <button className="cta-btn">&larr; &nbsp; GO BACK</button>
      </Link>
     </div>
    </>
  );
};
ThankYou.layout = AppLayout;
export default ThankYou;
