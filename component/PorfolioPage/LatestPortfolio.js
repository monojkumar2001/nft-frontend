import React, { useEffect, useState } from "react";
import Link from "next/link";
import "swiper/css";
import styles from "../../styles/pages/PorfolioPage/LatestPortfolio.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import { NftPlatfroms } from "../../pages/Data/PortfolioData/PortfolioData";
import { BsArrowRight } from "react-icons/bs";
function LatestPortfolio() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://api.nftconstructer.com/api/latest/post")
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });
  }, []);
  return (
    <>
      <section className={`${styles.latest_portfolio} cpb-6`}>
        <div className="container">
          <div className="section-title">
            <h2 className="sec-title">Our Other Work</h2>
            <p className="sec-des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              ullam?
            </p>
          </div>
          <div className="post-card-wrapper">
            <Swiper
              // install Swiper modules
              modules={[Navigation, A11y]}
              spaceBetween={30}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              loop="true"
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              breakpoints={{
                450: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                900: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
            >
              {NftPlatfroms.map((item, i) => (
                <SwiperSlide className={styles.latest_portfolio_post} key={i}>
                  <Link href={`/portfolio/`}>
                    <div className={styles.portfolios_card} key={item.id}>
                      <div className={styles.portfolios_item_img}>
                        <Image
                          src={item.img}
                          width={420}
                          height={240}
                          alt="Nft-Constractor"
                        />
                      </div>
                      <div className={styles.portfolios_item_title}>
                        <p>{item.webSiteName}</p>
                        <h4>{item.title}</h4>
                        <button className={styles.portfolio_read_more_btn}>
                       Read More
                          </button>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              className={`${styles.slider_nav}`}
            >
              <div className="prev">
                <span>
                  <FaAngleLeft />
                </span>
              </div>
              <div className="next">
                <span>
                  <FaAngleRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LatestPortfolio;
