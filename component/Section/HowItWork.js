import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/pages/HomePage/HowItWork.module.css";
function HowItWork() {
  return (
    <section>
      <div className="container">
        <div className={styles.how_we_work_section}>
          <h2>That is how we work</h2>
          <div className={styles.how_we_work_row}>
            {workData.map((item, i) => {
              return (
                <div className={styles.how_we_work_topic} key={i}>
                  <hr className={styles.how_we_work_row_line} />
                  <div className={styles.how_we_work_icon}>
                    <Image src={item.img} alt="" width={30} height={30} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWork;

const workData = [
  {
    id: 1,
    img: "/assets/images/howitwork/initiation.svg",
    title: "Initiation",
    description:
      "This phase aims to bring everyone involved on the same page. Before starting Discovery we get to know each other and define actual busines need and your persnol expectations and how we can fit them",
  },
  {
    id: 2,
    img: "/assets/images/howitwork/discovery.svg",
    title: "Discovery",
    description:
      "The most important step is research. We dont start coding at random : we conduct fundamental research and produce a comprehensive action plan to implement",
  },
  {
    id: 3,
    img: "/assets/images/howitwork/architecture.svg",
    title: "Architecture & Design",
    description:
      "Still no development yet after the reseach. wecraft the product’s architecture and measurably think through the user flow. Only after designing the foundation can we move further",
  },
  {
    id: 4,
    img: "/assets/images/howitwork/development.svg",
    title: "Development",
    description:
      "This phase aims to bring everyone involved on the same page. Before starting Discovery we get to know each other and define actual busines need and your persnol expectations and how we can fit them",
  },
  {
    id: 5,
    img: "/assets/images/howitwork/testing.svg",
    title: "Testing & Audits",
    description:
      "No release is made without testing. We have a high-qualified QA team who test all the product peculiarities on testnet, devent, and remote mainnet before goig public.",
  },
  {
    id: 6,
    img: "/assets/images/howitwork/support.svg",
    title: "Release & Support",
    description:
      "We don’t launch projects and leave them, we are highly interested in projects success and continue to be involved in their growth by supporting products and developing new functionalities",
  },
];
