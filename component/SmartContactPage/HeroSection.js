import Image from "next/image";
import Link from "next/link";
import React from "react";
import Styles from "../../styles/pages/SmartContractPage/HeroSection.module.css";
const HeroSection = () => {
  return (
    <>
      <div id={Styles.smart_contract}>
        <div className="container">
          <section className={Styles.hero}>
            <div
              className={Styles.hero_content}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1>
                Decentralized <span> Smart Contract</span> Development
              </h1>

              <p>
                Built over $10B in on-chain value across 1000+ projects!
                Experienced smart contract developers at your service.
              </p>

              <div className="hero-btns">
                <button className={Styles.btn_hero_1}>
                  <Link href="#smart-contract">Get Started</Link>
                </button>
              </div>
            </div>

            <div
              className={Styles.hero_img}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Image
                width={932}
                height={671}
                loading="lazy"
                src="/assets/new/services/smart-contract-development.webp"
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
