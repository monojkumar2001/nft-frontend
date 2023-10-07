import React from "react";
import Image from "next/image";
import styles from "../../styles/pages/HomePage/ServiceCard.module.css";
const SaveTime = () => {
  return (
    <>
      <section className={styles.service_card}>
        <div className="section-title">
          <h4 className="sec-span">We Do Heavy Lifiting</h4>
          <h2 className="sec-title">You<span> Save Time</span> And Money</h2>
        </div>
        <div className="container">
          <div className={styles.service_card_items}>
            {data.map((item, i) => {
              return (
                <div
                  className="col-md-3"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  key={i}
                >
                  <div className={styles.service_card_item}>
                    <div className={styles.service_card_head}>
                      <span>{item.span}</span>
                      <h4 className={styles.service_title}>{item.title}</h4>
                    </div>
                    <p>{item.des}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.yellow_filter}></div>
      </section>
    </>
  );
};

export default SaveTime;
const data = [
  {
    title: "On-site customer balances",
    span: "R1",
    des: "Enable your customers to buy more, one-click fast checkout by using site balance.",
  },
  {
    title: "Reward your customers",
    span: "R2",
    des: "Customize rules to gift customers on-site balances, products, and more for completing tasks",
  },
  {
    title: "On-site customer balances",
    span: "R3",
    des: "Enable your customers to buy more, one-click fast checkout by using site balance.",
  },
];
