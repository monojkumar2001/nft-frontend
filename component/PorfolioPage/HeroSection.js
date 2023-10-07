import React, { useEffect, useState } from "react";
import Typed from "react-typed";
import Image from "next/image";
import Link from "next/link";
import Styles from '../../styles/pages/PorfolioPage/HeroSection.module.css'
const HeroSection = () => {
      const imageUrls = [
        "/assets/images/portfolio/portfolio-img-1.svg",
        "/assets/images/portfolio/portfolio-img-2.svg",
        "/assets/images/portfolio/portfolio-img-3.svg",
        "/assets/images/portfolio/portfolio-img-4.svg",
      ];
      const [currentIndex, setCurrentIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((preIndex) => (preIndex + 1) % imageUrls.length);
        }, 2500);
        return () => clearInterval(interval);
      }, []);
  return <>
      {/* <!-- =========== Portfolio-Hero-Start ================= --> */}
      <section className={Styles.portfolio}>
        <div className="container">
          <div className={Styles.portfolio_wrapper}>
            <div className={Styles.portfolio_left}>
              <h1>
              Here are some of our  Recent <br />
                <span>
                <Typed
                  strings={[
                    `PROJECTS`
                  ]}
                  typeSpeed={150}
                  backSpeed={150}
                  loop
                >
                </Typed>
                </span>
              </h1>
              <p>
                Enhance your business with our excellent web 3.0 and blockchain
                based web tech services.
              </p>
              <div className={Styles.portfolio_btn}>
                <Link href="/contact">
                  Hire Us
                </Link>
              </div>
            </div>
            <div className={Styles.portfolio_right}>
              <Image
                width={631}
                height={515}
                loading="lazy"
                src={imageUrls[currentIndex]}
                alt={`Image ${currentIndex}`}
              />
            </div>
          </div>
        </div>
        <div className={Styles.home_blur}></div>
      </section>
      {/* <!-- =========== Portfolio-Hero-end ================= --> */}
  </>;
};

export default HeroSection;
