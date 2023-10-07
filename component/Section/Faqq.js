import React from "react";
import Faq from "react-faq-component";
import Link from "next/link";
import Image from "next/image";
import Styles from "../../styles/pages/HomePage/HomeFaq.module.css";

const Faqq = ({ data }) => {
  const styles = {
    titleTextColor: "blue",
    rowTitleColor: "blue",
  };

  return (
    <>
      <div className="faqs-section cpb-6 cpt-7">
        <div className="container">
          <div className={Styles.faq_wrapper}>
            <div className={Styles.left_faq}>
              <h2>Frequently Asked Questions</h2>
              <p>
                If you can not find what you are looking for
                <span className={Styles.faq_Link_Item}>
                  {" "}
                  <Link href={"/contact"}>send us a message!</Link>
                </span>
              </p>
              <div className={Styles.faq_image}>
                <Image
                  width={210}
                  height={217}
                  src="/assets/img/faq/1.png"
                  alt=""
                />
              </div>
            </div>

            <div className="content">
              <Faq data={data} styles={styles} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqq;
