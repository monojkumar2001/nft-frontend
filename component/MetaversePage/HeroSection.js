import React from 'react'
import Styles from '../../styles/pages/MetaversePage/HeroSection.module.css'
import Link from 'next/link'
import Image from 'next/image'
const HeroSection = () => {
  return (
    <>
     <div id={Styles.metaverseHero}>
        <div className="container">
          <section className={Styles.hero}>
            <div
              className={Styles.hero_content}
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h1 className={Styles.section_title}>
                Create Your Own <span>Platform-driven</span> Virtual World
              </h1>

              <p className="raleway-black-16">
                We offer affordable bespoke development of full-featured
                metaverse platforms.
              </p>
             <div className={Styles.hero_btn}>
             <button className={Styles.btn_hero_1}>
                <Link href="#metaverse" >
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
                width={925}
                height={721}
                loading="lazy"
                src="/assets/new/services/metaverse.webp"
                alt="Hero IMG"
                className="hero-img-5"
              />
              
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default HeroSection