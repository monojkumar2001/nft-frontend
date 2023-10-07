import React from "react";
import { useState, useEffect } from "react";
import styles from "../../styles/pages/PorfolioPage/PorfolioSection.module.css";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import {
  AdminDashboards,
  NFTMarketplaces,
  NftPlatfroms,
} from "../../pages/Data/PortfolioData/PortfolioData";
const PortfolioSection = () => {
  const [portfolio, setPortfolio] = useState(1);
  const [visibleCards, setVisibleCards] = useState(6);
  const portfoliosData = [NftPlatfroms, NFTMarketplaces, AdminDashboards];
  const currentPortfolioData = portfoliosData[portfolio - 1];
  const totalCards = currentPortfolioData.length;
  const loadMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 6);
  };
  return (
    <>
      <section className="cpt-6">
        <div className="container">
          <div className="portfolios-warrper">
            <div className={styles.portfolios_title}>
              <h3>OUR WORK</h3>
            </div>

            <div className={styles.portfolio_header_item}>
              <div
                className={
                  portfolio === 1
                    ? `${styles.options} ${styles.active}`
                    : `${styles.options}`
                }
                onClick={() => {
                  setPortfolio(1);
                }}
              >
                <button className={styles.portfolio_btn}>Website</button>
              </div>
              <div
                className={
                  portfolio === 2
                    ? `${styles.options} ${styles.active}`
                    : `${styles.options}`
                }
                onClick={() => {
                  setPortfolio(2);
                }}
              >
                <button className={styles.portfolio_btn}>
                Web App
                </button>
              </div>
              <div
                className={
                  portfolio === 3
                    ? `${styles.options} ${styles.active}`
                    : `${styles.options}`
                }
                onClick={() => {
                  setPortfolio(3);
                }}
              >
                <button className={styles.portfolio_btn}>
                Web App
                </button>
              </div>
            </div>

            <div className={`${styles.portfolio_content_wrapper} cpt-7`}>
              <div
                className={
                  portfolio === 1
                    ? `${styles.portfolios_items} ${styles.active}`
                    : `${styles.portfolios_items}`
                }
              >
                <div className={styles.portfolio_cards}>
                  {currentPortfolioData
                    .slice(0, visibleCards)
                    .map((item, i) => (
                      <Link href={`/portfolio/`} key={item.id}>
                        <div className={styles.portfolios_card} >
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
                          <h4 >{item.title}</h4>
                          <button className={styles.portfolio_read_more_btn}>
                       Read More
                          </button>
                        </div>
                      </div>
                      </Link>
                    
                    ))}
                </div>
              </div>
              <div
                className={
                  portfolio === 2
                    ? `${styles.portfolios_items} ${styles.active}`
                    : `${styles.portfolios_items}`
                }
              >
                <div className={styles.portfolio_cards}>
                  {currentPortfolioData
                    .slice(0, visibleCards)
                    .map((item, i) => (
                      <Link href={`/portfolio/`} key={item.id}>
                      <div className={styles.portfolios_card} >
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
                        <h4 >{item.title}</h4>
                        <button className={styles.portfolio_read_more_btn}>
                       Read More
                          </button>
                      </div>
                    </div>
                    </Link>
                    ))}
                </div>
              </div>
              <div
                className={
                  portfolio === 3
                    ? `${styles.portfolios_items} ${styles.active}`
                    : `${styles.portfolios_items}`
                }
              >
                <div className={styles.portfolio_cards}>
                  {currentPortfolioData
                    .slice(0, visibleCards)
                    .map((item, i) => (
                      <Link href={`/portfolio/`} key={item.id}>
                      <div className={styles.portfolios_card} >
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
                        <h4 >{item.title}</h4>
                        <button className={styles.portfolio_read_more_btn}>
                       Read More
                          </button>
                      </div>
                    </div>
                    </Link>
                    ))}
                </div>
              </div>
             <div className={styles.load_more_btn}>
             {visibleCards < totalCards && (
                <button
                  onClick={loadMoreCards}
                  className={`custom-btn`}
                >
                  Load More
                </button>
              )}
             </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioSection;
