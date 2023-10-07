import React from 'react'
import Styles from "../../styles/pages/WebsiteDesignPage/HeroSection.module.css";
import Image from 'next/image';
import Link from 'next/link';
const HeroSection = () => {
  return (
    <>
     <div id={Styles.websiteDesign}>
     <div className={Styles.home_blur}></div>
        <div className="container">
          <section className={Styles.hero}>
            <div
              className={Styles.hero_content}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1>
                Next Level Design Solution For Your
                <span> Fintech Business</span>
              </h1>

              <p className="raleway-black-16">
                If you&apos;re looking for fantastic Design Solutions, no
                fintech or nft website is off limits with our team of
                multidisciplinary experts.
              </p>

              <div className="hero-btns">
               <button className={Styles.btn_hero_1} >
               <Link href="#web-design">
                  Get Started
                </Link>
               </button>
              </div>
            </div>

            <div
              className={Styles.hero_img}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Image
                width={708}
                height={723}
                loading="lazy"
                src="/assets/new/services/website-design.webp"
                alt="Hero IMG"
              />
            </div>
          </section>
        </div>
      </div>
    
    </>
  )
}

export default HeroSection