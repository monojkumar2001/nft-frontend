import React from "react";
import HeroSub from "./HeroSub";
import Image from "next/image";
import styles from "../../styles/pages/HomePage/Hero.module.css";
import { BsCheck } from "react-icons/bs";
const Slider = () => {
  return (
    <div id={styles.home1}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.hero_wrapper}>
            <div
              className={styles.hero_content_wrapper}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className={styles.hero_content}>
                <h1 className={styles.section_title}>
                  Full Stack Web Tech Services For NFT & Fintech Companies
                </h1>
                <p>
                  We provide full stack web tech development and design services
                  for NFT Defi and fintech start ups that can help you to reach
                  a wider audience and increase of revenue.
                </p>
                <HeroSub />
                <div className={styles.service}>
                  <ul>
                    <li>
                      <span>
                        <BsCheck />
                      </span>{" "}
                      Task Management
                    </li>
                    <li>
                      <span>
                        <BsCheck />
                      </span>{" "}
                      24/7 Great Service
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={styles.hero_img}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Image
                width={659}
                height={731}
                loading="lazy"
                src="/assets/new/hero/webdevlopment.webp"
                alt="nft constructer"
              />
            </div>
          </div>
        </div>
      </section>

      <div className={styles.home_blur}></div>
    </div>
  );
};

export default Slider;
