import Image from "next/image";
import Link from "next/link";
import React from "react";
import Styles from "../../styles/pages/AboutPage/AboutPage.module.css";
const HeroSection = () => {
  return (
    <>
      <section id={Styles.hero_about}>
        <div className="container">
          <div className={Styles.hero}>
            <div
              className={Styles.hero_content}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1>
                Non Fungible Token Development <span>Agency </span>
              </h1>

              <p>
                Get the ability to scale your decentralized start up globally
                with secure transactions and tamper-proof programming.
              </p>

              <div className="hero-btns">
                <button className={Styles.btn_hero_1}>
                  <Link href="">Hire Me</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
              className={Styles.hero_img2}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Image
                width={576}
                height={425}
                loading="lazy"
                src="/assets/images/about/hero-bg-img-2.svg"
                alt="Hero IMG"
              />
            </div>
        <div
              className={Styles.hero_img3}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Image
                width={1920}
                height={568}
                loading="lazy"
                src="/assets/images/about/hero-bg-img-3.svg"
                alt="Hero IMG"
              />
            </div>
      </section>

    </>
  );
};

export default HeroSection;
