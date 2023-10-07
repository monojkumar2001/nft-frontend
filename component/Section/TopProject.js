import React, { useEffect, useState } from "react";
import styles from "../../styles/pages/HomePage/TopProject.module.css";
import Image from "next/image";
function TopProject() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.nftconstructer.com/api/home/projects")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  return (
    <>
      {/* {/ =====================top project====================== /} */}
      <section className={`${styles.projects} cpy-6 }`}>
        <div className="container">
          <div className={`section-title`}>
            <p className={styles.sm_title}>best service</p>
            <h2 className="sec-title">The Complete Developer Platform</h2>

            <p className="sec-des">
              NFT Constructer is one of the most trusted non-fungible token
              development company that ensures the customized token offers an
              innovative platform to meet the specific demand of your business.
            </p>
          </div>

          <div className={styles.project_content}>
            {/* <a
              href="https://opensea.io/"
              target="_blank"
              rel="noreferrer"
              className={styles.btn_purple_2}
            >
              View Ranking
            </a> */}

            <div
              className={styles.table_responsive}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <table className={styles.project_table}>
                <thead>
                  <tr>
                    <th>
                      <div className={styles.table_head_item}>
                        <Image
                          width={22}
                          height={22}
                          src={"/assets/images/top-project/project.svg"}
                          alt="icon"
                        />
                        <p>Project Name</p>
                      </div>
                    </th>
                    <th>
                      <div className={styles.table_head_item}>
                        <Image
                          width={22}
                          height={22}
                          src={"/assets/images/top-project/Volume.svg"}
                          alt="icon"
                        />
                        <p>Volume</p>
                      </div>
                    </th>
                    <th>
                      <div className={styles.table_head_item}>
                        <Image
                          width={22}
                          height={22}
                          src={"/assets/images/top-project/sales.svg"}
                          alt="icon"
                        />
                        <p>Sales 7 days</p>
                      </div>
                    </th>
                    <th>
                      <div className={styles.table_head_item}>
                        <Image
                          width={22}
                          height={22}
                          src={"/assets/images/top-project/time.svg"}
                          alt="icon"
                        />
                        <p>Total Supply</p>
                      </div>
                    </th>
                    <th>
                      <div className={styles.table_head_item}>
                        <Image
                          width={22}
                          height={22}
                          src={"/assets/images/top-project/total.svg"}
                          alt="icon"
                        />
                        <p>Total Owners</p>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {items.map((table, index) => (
                    <tr key={index}>
                      <td>{table.name}</td>
                      <td>
                        <div className={styles.table_body_item}>
                          <Image
                            width={22}
                            height={22}
                            src={"/assets/images/top-project/eth.svg"}
                            alt="icon"
                          />
                          <p>{table.value}</p>
                        </div>
                      </td>
                      <td>{table.days}</td>
                      <td>
                        <div className={styles.table_body_item}>
                          <Image
                            width={22}
                            height={22}
                            src={"/assets/images/top-project/eth.svg"}
                            alt="icon"
                          />
                          <p>{table.all_time_value}</p>
                        </div>
                      </td>
                      <td>
                        <div className={styles.table_body_item}>
                          <Image
                            width={22}
                            height={22}
                            src={"/assets/images/top-project/eth.svg"}
                            alt="icon"
                          />
                          <p>{table.sales_value}</p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <div className={styles.top_project_bottom}>
                  <h4>Lorem ipsum dolor sit amet.</h4>
                </div>
                <div className={styles.top_project_bottom_img}>
                  <Image
                    width={1293}
                    height={118}
                    src={"/assets/images/top-project/top-bottom-img.svg"}
                  />
                </div>
              </table>
            </div>
          </div>
        </div>
        <div className={styles.top_project_img_1}>
          <Image
            width={305}
            height={289}
            src={"/assets/images/top-project/top-1.svg"}
            alt="top img"
          />{" "}
        </div>
        <div className={styles.top_project_img_2}>
          <Image
            width={354}
            height={339}
            src={"/assets/images/top-project/top-2.svg"}
            alt="top img"
          />{" "}
        </div>
        <div className={styles.blue_filter}></div>
      </section>

      {/* {/ ===============top project end=============== /} */}
    </>
  );
}

export default TopProject;
