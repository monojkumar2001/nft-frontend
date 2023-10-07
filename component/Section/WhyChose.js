import React from "react";
import Image from "next/image";
import styles from "../../styles/pages/HomePage/WhyChose.module.css";
function WhyChose() {
  return (
    <>
      <section className={`${styles.why_chose} cpt-6`}>
        <div className="container">
          <div className="chose-grid">
            <div className={styles.left_wrapper}>
              <div className="chose-left">
                <div className={styles.left_title}>
                  <h2 className={styles.sec_title_left}>Why <span>Choose</span> Us</h2>
                  <p>
                    Use our customized plans to bring in high-caliber clients
                    who will spend a fortune at your site. To provide you a
                    game-changing experience,
                  </p>
                </div>

                <div className="chose-list">
                  {choseData.map((item, i) => {
                    return (
                      <div className={styles.chose_list_item} key={i}>
                        <div className="chose-list-item-icon">
                          <Image
                            width={85}
                            height={85}
                            loading="lazy"
                            src={item.img}
                            alt="nft constructer"
                          />
                        </div>

                        <div className="chose-list-item-content">
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="chose-right">
                <div className={styles.chose_right_img}>
                  <Image
                    width={600}
                    height={600}
                    loading="lazy"
                    src="/assets/new/inner/whychoseme.webp"
                    alt="nft constructer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.red_filter}>
          
        </div>
      </section>
    </>
  );
}

export default WhyChose;

const choseData = [
  {
    id: 1,
    img: "/assets/img/icon/chose1.svg",
    title: "Technical Proficiency",
    description:
      "Our team of blockchain enthusiasts have worked with 300+ projects in crypto nft and blockchain industry.",
  },
  {
    id: 2,
    img: "/assets/img/icon/chose2.svg",
    title: "Flexible team",
    description:
      "Our leadership team is a cross-functional team with 500+ combined experience in the blockchain technology business.",
  },
  {
    id: 3,
    img: "/assets/img/icon/chose3.svg",
    title: "Affordable prices",
    description:
      "We offer personalized design and development strategies that can be suited to any budget.",
  },
];
