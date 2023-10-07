import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/pages/HomePage/HomeService.module.css";
const Service = () => {
  return (
    <>
      <section className={`${styles.service} cpy-6`}>
        <div className="container">
          <div className="section-title">
            <h2 className="sec-title">Services</h2>
            <p className="sec-des">
              Prepare to launch a billion-dollar start-up on the NFT Fintech and
              Crypto Platform with its new, exciting features and capabilities.
            </p>
          </div>

          <div className={styles.service_grid}>
            {data.map((item, i) => {
              return (
                <Link href={item.link}>
                  <div
                    className={styles.service_car}
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    key={i}
                  >
                    <div className={styles.service_icon}>
                      <Image
                        width={60}
                        height={60}
                        loading="lazy"
                        src={item.image}
                        alt="nft constructer"
                      />
                    </div>
                    <div className={styles.service_content}>
                      <h3>{item.title}</h3>
                      <p>{item.des}</p>
                    </div>
                    <div className={styles.service_learn_more_btn}>
                      <Link href={item.link}>
                        <p className={styles.learn_more_btns}>Learn More</p>
                      </Link>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className={styles.green_filter}></div>
      </section>
    </>
  );
};

export default Service;

const data = [
  {
    title: " NFT Development",
    image: "/assets/images/service/icon-1.svg",
    link: "/nft-website-development",
    des: `With NFT CONSTRUCTER, you can build a feature-rich,
    user-friendly NFT minting platform or marketplace without
    any coding or technical knowledge. Enable your users to
    generate new coins without worrying about the blockchain's
    main plot.`,
  },
  {
    title: " DeFi Development ",
    image: "/assets/img/icon/smart-contract.png",
    link: "/defi-development",
    des: `Create your optimum DeFi protocol on blockchain networks
    to expand your business to new heights and participate in
    the financial future. As DeFi gives users more control
    because of its security and reliability, you can get your
    DeFi business developed on any of your desired blockchain
    networks.`,
  },
  {
    title: " Metaverse Development",
    image: "/assets/img/icon/crypto.png",
    link: "/metaverse",
    des: ` Create excellent, beneficial VR experiences in the
    metaverse as your business's next bold move towards
    success. By developing dynamically changing worlds,
    providing distinctive features and characters, and
    offering an exceptional interactive experience.`,
  },
  {
    title: " Marketing",
    image: "/assets/img/icon/exchange.png",
    link: "/marketing",
    des: `  With our growth-hacking blockchain and NFT marketing
    strategies, you can secure your company's success. By
    using persona-based, content-driven engagement strategies,
    we help blockchain, cryptocurrency, and NFT projects
    maintain their relevance to target audiences and enhance
    their market value.`,
  },
  {
    title: " Website Design",
    image: "/assets/img/icon/open.png",
    link: "/website-design",
    des: `   Build cutting-edge DeFi platforms, advance the field of
    NFTs and blockchains with website designs which emphasise
    on good user experience, Simplicity and efficacy to ensure
    that visitors can quickly discover the information they
    require without being confused or overwhelmed.`,
  },
  {
    title: " Smart Contract Development",
    image: "/assets/img/icon/identity.png",
    link: "/smart-contract",
    des: `    We create blockchain-agnostic smart contracts for your
    business that meets all the security standards, including
    consultancy, development, testing, and deployment of smart
    contract logic. You can produce effective, hack-proof,
    customizable blockchain-enabled smart contracts with us.`,
  },
];
