import React from "react";
import Styles from "../../styles/pages/DefiDevelopmentPage/HeroSection.module.css";
import Link from "next/link";
import Image from "next/image";
const HeroSection = () => {
  return (
    <>
      <div id={Styles.defiDevelopment}>
        <div className="container">
          <section className={Styles.hero}>
            <div
              className={Styles.hero_content}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1>
                Build Your <span>Decentralized</span> Exchange Platform
              </h1>

              <p>
                We create DeFi apps range across a variety of financial
                instruments, from lending/borrowing platforms to stablecoins.
              </p>

              <div className="hero-btns">
                <button className={Styles.btn_hero_1}>
                  <Link href="#defi-service">Get Started</Link>
                </button>
              </div>
            </div>

            <div
              className={Styles.hero_img}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Image
                width={779}
                height={613}
                loading="lazy"
                src="/assets/new/services/defi-development.webp"
                alt="Hero IMG"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
