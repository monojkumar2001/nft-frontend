import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, EffectCoverflow } from "swiper";
import Image from "next/image";
import styles from "../../styles/pages/HomePage/Review.module.css";
import { BiSolidStar } from "react-icons/bi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
function Review() {
  return (
    <>
      <section className={styles.section_wrap}>
        <div className="container">
          <div className={`section-title`}>
            <h2 className="sec-title">
              Hear from our <span>clients</span>
            </h2>

            <p className="sec-des">
              As a leading custom blockchain, nft, defi, and metaverse
              development, design, and consulting firm, our development and
              design services facilitate the tokenization of digital assets for
              collection and business growth.
            </p>
          </div>

          <div
            className={styles.client_review}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Swiper
              modules={[Navigation, A11y, EffectCoverflow]}
              spaceBetween={50}
              // slidesPerView={3}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              // slidesPerView={3}
              coverflowEffect={{
                rotate: 0,
                stretch: 46,
                depth: 142,
                modifier: 1,
                slideShadows: true,
              }}
              breakpoints={{
                450: {
                  slidesPerView: 1,
                },
                680: {
                  slidesPerView: 1.4,
                },
                1050: {
                  slidesPerView: 2,
                },
                1400: {
                  slidesPerView: 2.5,
                },
              }}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              loop="true"
            >
              {data.map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className={styles.client_review_slider}>
                      <div className={styles.review_icon}>
                        <Image
                          width={55}
                          height={39}
                          src={item.icon}
                          alt="Review Icon"
                        />
                      </div>
                      <div className={styles.review_title}>
                        <h3>{item.title}</h3>
                      </div>
                      <div className={styles.review_dis}>
                        <p>{item.des}</p>
                      </div>
                      <div className={styles.review_profile}>
                        <div className={styles.review_user_img}>
                          <Image
                            width={51}
                            height={51}
                            src={item.userImg}
                            alt="user image"
                          />
                        </div>
                        <div className={styles.review_user_name}>
                          <h4>{item.userName}</h4>
                          <span>{item.profession}</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <div className={`${styles.slider_navAll} slider_nav`}>
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
        <div className={styles.yellow_filter}></div>
      </section>
    </>
  );
}

export default Review;

const data = [
  {
    id:1,
    icon: "/assets/images/review/review-icon.svg",
    userImg: "/assets/images/review/user-img-1.png",
    title: "95x Growth",
    des: `"Alchemy’s comprehensive developer platform -
    from infrastructure and tooling to enhanced
    APIs and monitoring systems - is best in class."`,
    userName: "Sandeep Nailwal",
    profession: "Co-Founder",
  },
  {
    id:2,
    icon: "/assets/images/review/review-icon.svg",
    userImg: "/assets/images/review/user-img-3.png",
    title: "$170B+ trading volume",
    des: `"Alchemy's technology and team are best in
    class. The team wins with response times,
    reliability and accurate data."`,
    userName: "Charles Reese",
    profession: "Engineering Manager",
  },
  {
    id:3,
    icon: "/assets/images/review/review-icon.svg",
    userImg: "/assets/images/review/user-img-2.png",
    title: "1K+ NFTs Sold in <2 Mins",
    des: `"Not only does Alchemy ensure 0% rate limiting
    for our NFT drops, but their infra handles the
    load seamlessly."`,
    userName: "Kyle Gusdorf",
    profession: "Software Engineer",
  },

  {
    id:4,
    icon: "/assets/images/review/review-icon.svg",
    userImg: "/assets/images/review/user-img-1.png",
    title: "$170B+ trading volume",
    des: `"Alchemy's technology and team are best in
    class. The team wins with response times,
    reliability and accurate data."`,
    userName: "Charles Reese",
    profession: "Engineering Manager",
  },
  {
    id:5,
    icon: "/assets/images/review/review-icon.svg",
    userImg: "/assets/images/review/user-img-1.png",
    title: "$170B+ trading volume",
    des: `"Alchemy's technology and team are best in
    class. The team wins with response times,
    reliability and accurate data."`,
    userName: "Charles Reese",
    profession: "Engineering Manager",
  },
  {
    id:6,
    icon: "/assets/images/review/review-icon.svg",
    userImg: "/assets/images/review/user-img-1.png",
    title: "$170B+ trading volume",
    des: `"Alchemy's technology and team are best in
    class. The team wins with response times,
    reliability and accurate data."`,
    userName: "Charles Reese",
    profession: "Engineering Manager",
  },
  {
    id:7,
    icon: "/assets/images/review/review-icon.svg",
    userImg: "/assets/images/review/user-img-1.png",
    title: "$170B+ trading volume",
    des: `"Alchemy's technology and team are best in
    class. The team wins with response times,
    reliability and accurate data."`,
    userName: "Charles Reese",
    profession: "Engineering Manager",
  },
];
