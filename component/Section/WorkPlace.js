import React from "react";
import { useState } from "react";
import styles from "../../styles/section/WorkPlace.module.css";
const WorkPlace = () => {
  const [activePlace, setActivePlace] = useState(1);
  const togglePlace = (index) => {
    setActivePlace(index);
  };
  return (
    <>
      <section className={`${styles.work_place} cpt-6`}>
        <div className="container">
          <div className={styles.work_place_wrapper}>
            <div className={`section-title`}>
              <h2 className="sec-title">Get started with the Alchemy SDK</h2>
              <p className="sec-des">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolores impedit sapiente deleniti ut officiis dolorum? Illum ab
                fugit laudantium totam?
              </p>
            </div>
            <div className={styles.work_place_header}>
              <button
                className={
                  activePlace === 1
                    ? `${styles.work_place_item} ${styles.active}`
                    : `${styles.work_place_item}`
                }
                onClick={() => {
                  togglePlace(1);
                }}
              >
                Initiation
              </button>
              <button
                className={
                  activePlace === 2
                    ? `${styles.work_place_item} ${styles.active}`
                    : `${styles.work_place_item}`
                }
                onClick={() => {
                  togglePlace(2);
                }}
              >
                Initiation
              </button>
            </div>
            <div className={styles.work_place_content}>
              <div
                className={
                  activePlace === 1
                    ? `${styles.work_place_content_item} ${styles.active}`
                    : `${styles.work_place_content_item}`
                }
              >
                <h1>hello workd</h1>
              </div>
              <div
                className={
                  activePlace === 2
                    ? `${styles.work_place_content_item} ${styles.active}`
                    : `${styles.work_place_content_item}`
                }
              >
                <h1>hello workafd2</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkPlace;
