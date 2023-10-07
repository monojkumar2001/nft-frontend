import React from "react";
import MentionedImg from "../HomePage/MentionedImg";
import styles from "../../styles/pages/HomePage/Mentioned.module.css"
function Featured() {
  return (
    <div>
      <section>
        <div className="mentioned-area">
          <div className="section-title">
            <p className="sm-title">best services </p>
            <h2 className="sec-title">We’ve Been Mentioned In</h2>
          </div>
          <div className={styles.mentioned_section}>
            <div className={styles.images_slider}>
              <div className={styles.images_slider_wrapper}>
                <div className={styles.images_slider_imgs}>
                <MentionedImg/>
                </div>
                <div className={styles.images_slider_imgs}>
                <MentionedImg/>
                </div>
                <div className={styles.images_slider_imgs}>
                <MentionedImg/>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Featured;
