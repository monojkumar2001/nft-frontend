import React from "react";
import Image from "next/image";
import styles from "../../styles/pages/NftDevelopmentPage/HeroSection.module.css";
import Link from "next/link";
const HeroSection = () => {
  return (
    <>
      <div id={styles.hiCoin} className="cpb-6">
        <div className="container">
          <section className={styles.hero}>
            <div
              className={styles.hero_content}
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h1 className={styles.section_title}>
                Top Notch NFT <span>Development</span> Company
              </h1>

              <p className="raleway-black-16">
                Get an unique and distinguishable non-fungible token platform
                with integrated multiple security layers and rich features to
                enhance users&apos; trading experiences.
              </p>
              <div className={styles.hero_btns}>
                <button className={styles.btn_hero_1}>
                  <Link href="#nft-development">Get Started</Link>
                </button>
              </div>
            </div>

            <div
              className={styles.hero_img}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Image
                width={925}
                height={721}
                loading="lazy"
                src="/assets/new/services/nft-websitedevelopment.webp"
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
