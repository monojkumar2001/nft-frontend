import React from 'react'
import Styles from '../../styles/pages/MarketingPage/HeroSection.module.css';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <>
    <section id={Styles.marketing} className="cpy-5 cpb-6">
        <div className="container">
          <div className="marketing-hero-warrper">
            <div className={Styles.hero_content}>
              <h1>
                Proven <span>Marketing Plans</span> For Non Fungible Token Sales
              </h1>
              <p>
                Our marketers trive on executing customized marketing plans with
                boldest ideas to reality specifically designed for Crypto Nft
                Defi start ups.
              </p>
              <div className={Styles.hero_btns}>
                <button className={Styles.btn_hero_1}>
                <Link href="#marketing">
                Get Started
              </Link>
              </button>

              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default HeroSection