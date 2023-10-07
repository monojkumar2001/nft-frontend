import React from "react";
import Image from "next/image";
import styles from "../../styles/section/ServicesSection.module.css";

const ServiceCardItem = ({ data, title, description, id }) => {
  return (
    <>
      <section className={styles.our_services} id={id}>
        <div className="container">
          <div className={styles.our_service_wrapper}>
            <div className="section-title">
              <span className={styles.short_title}>OUR NON FUNGIBLE</span>
              <h2 className="sec-title">{title}</h2>
              <p className="sec-des">
            {description}
            </p>
            </div>
            <div className={`${styles.our_service_items} cpt-6`}>
              {data.map((item, i) => {
                return (
                  <div className={styles.our_service_item} key={i}>
                    <div className={styles.our_service_icon}>
                      <Image
                        width={40}
                        height={40}
                        src={item.img}
                        alt="nftconstructer"
                      />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.pra}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.green_filter}></div>
      </section>
    </>
  );
};

export default ServiceCardItem;
