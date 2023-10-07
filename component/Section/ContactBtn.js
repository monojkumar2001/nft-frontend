import React from "react";
import styles from "../../styles/pages/HomePage/ContactBtn.module.css";
import Link from "next/link";
import Image from "next/image";
function ContactBtn() {
  return (
    <div>
      {/* {/ ===============================contact us btn ================ /} */}
      <div className={`${styles.contact_us_btn} cpb-6`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.contact_us_btn_wrapper}>
                <div className={styles.contact_us_btn_con}>
                  <h2>Is Your Project Not In The List</h2>
                  <p>
                    If you can describe it, chances are your dedicated team of{" "}
                    <br />
                    developers can create it, feel free to send us a message to
                    confirm.
                  </p>
                  <button className={styles.ContactUsBtn}>
                    <Link href="/contact">Contact Us</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contact_us_btn_img}>
          <Image
            width={183}
            height={173}
            src={"/assets/images/contact-btn--img-1.svg"}
            alt="btn img"
          />
        </div>
        <div className={styles.red_filter}></div>
        <div className={styles.green_filter}></div>
      </div>
      {/* {/ ===============================contact us btn end ================ /} */}
    </div>
  );
}

export default ContactBtn;
