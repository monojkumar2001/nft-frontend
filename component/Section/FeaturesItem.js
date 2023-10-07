import React from "react";
import Image from "next/image";
import styles from "../../styles/section/FeaturesItem.module.css";
const FeaturesItem = ({ data, id }) => {
  return (
    <>
      <section className={styles.feature_item} id={id}>
        <div className="cpt-6">
          <div className="features">
            <div className="container">
              <div className="section-title">
                <p className="sm-title">FEATURES OF</p>
                <h2 className="sec-title"> NFT Development Services</h2>
              </div>

              <div className={styles.services}>
                <div className={styles.services_container}>
                  {data.map((item, i) => {
                    return (
                      <div
                        className={styles.service}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        key={i}
                      >
                        <div className={styles.services_icon}>
                          <div className={styles.feature_icon1}>
                            <Image
                              width={50}
                              height={50}
                              loading="lazy"
                              src={item.img1}
                              alt="nft constructer"
                            />
                          </div>
                          <div className={styles.feature_icon2}>
                            <Image
                              width={50}
                              height={50}
                              loading="lazy"
                              src={item.img2}
                              alt="nft constructer"
                            />
                          </div>
                        </div>

                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.yellow_filter}></div>
      </section>
    </>
  );
};

export default FeaturesItem;
