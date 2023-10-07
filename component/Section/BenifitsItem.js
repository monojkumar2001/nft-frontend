import React from "react";
import Styles from "../../styles/section/BenifitsItem.module.css";
import Image from "next/image";
const BenifitsItem = ({ data, title }) => {
  return (
    <>
      <section>
        <div id={Styles.inner_area}>
          <div className={Styles.benefit_section}>
            <div className="container ">
              <div className="section-title">
                <p className="sm-title">BENIFITS OF</p>
                <h2 className="sec-title">{title}</h2>
              </div>

              <div
                className={Styles.spider}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className={Styles.spider_center}>
                  <Image
                    height={702}
                    width={480}
                    src="/assets/imgs/center-nft.png"
                    alt="nft constructer"
                  />
                </div>

                <div className={Styles.benefits}>
                  {data.map((item, i) => (
                    <div className={Styles.benefits_container} key={i}>
                      <div className={Styles.benefit_box}>
                        <div className={Styles.benifit_img}>
                          {item.item1.img ? (
                            <Image
                              width={117}
                              height={117}
                              loading="lazy"
                              src={item.item1.img}
                              alt="nft constructor"
                            />
                          ) : null}
                        </div>
                        <p>{item.item1.title}</p>
                      </div>
                      <div className={Styles.benefit_box}>
                        <div className={Styles.benifit_img}>
                          {item.item2.img ? (
                            <Image
                              width={117}
                              height={117}
                              loading="lazy"
                              src={item.item2.img}
                              alt="nft constructor"
                            />
                          ) : null}
                        </div>
                        <p>{item.item2.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BenifitsItem;
