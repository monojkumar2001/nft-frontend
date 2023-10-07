import React from "react";
import MentionedImg from "../HomePage/MentionedImg";
import styles from "../../styles/pages/HomePage/Mentioned.module.css";
import CompanyLogo from "./CompanyLogo";
function TechStacks() {
  return (
    <>
        <section className="mentioned-area cpt-6">
          <div className="section-title">
            <p className="sm-title">best services </p>
            <h2 className="sec-title">Tech Stacks</h2>
          </div>
          <div className={styles.mentioned_section}>
            <div className={styles.images_slider}>
              <div className={styles.images_slider_wrapper}>
                <div className={styles.images_slider_imgs}>
                  <CompanyLogo />
                </div>
                <div className={styles.images_slider_imgs}>
                  <CompanyLogo />
                </div>
                <div className={styles.images_slider_imgs}>
                  <CompanyLogo />
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}

export default TechStacks;
