import React from "react";
import Styles from "../../styles/pages/MarketingPage/MarketingDashboard.module.css";
const MarketingDashboard = () => {
  return (
    <>
      {/* <!-- =============== marketing dashbord start =========== --> */}
      <section className={Styles.marketing_dashboard}>
        <div className={Styles.dashbord_img}>
          <img
            width={1920}
            height={610}
            loading="lazy"
            src="/assets/new/services/merketing.webp"
            alt="Hero IMG"
          />
        </div>
      </section>
    </>
  );
};

export default MarketingDashboard;
