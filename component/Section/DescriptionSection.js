import React from "react";
import Image from "next/image";
import styles from "../../styles/section/Description.module.css";
const DescriptionSection = ({ data }) => {
  return (
    <>
      {/* {/ ================about us section ================== /} */}
      <section className={`${styles.about_us_content} cpt-6`}>
        <div className="container">
          <div className={styles.row_col_2}>
            <div
              className="col-md-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className={styles.about_us_img}>
                <Image
                  width="567px"
                  height="565px"
                  loading="lazy"
                  src="/assets/new/services/about-us.webp"
                  alt="nft constructer"
                />
              </div>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className={styles.about_us_content}>
                {data.map((item, i) => {
                  return (
                    <div className={styles.about_content_inner} key={i}>
                      <h1>Description</h1>
                      <p>{item.content}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* {/ ================about us section end ================== /} */}
    </>
  );
};

export default DescriptionSection;
