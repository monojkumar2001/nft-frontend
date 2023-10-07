import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "../../styles/pages/HomePage/Newsletter.module.css";
function DemoForm() {
  const [inputField, setInputField] = useState({
    name: "",
    email: "",
    error_log: [],
  });

  const inputsHandler = (e) => {
    e.persist();
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };

  const allInfoSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", inputField.name);
    formData.append("email", inputField.email);
    axios
      .post("https://api.nftconstructer.com/api/subscriber", formData)
      // .post("http://127.0.0.1:8000/api/subscriber", formData)
      .then((res) => {
        if (res.data.status === 200) {
          alert(res.data.message);
          setInputField({
            name: "",
            email: "",
            error_log: [],
          });
        } else {
          setInputField({
            ...inputField,
            error_log: res.data.message,
          });
        }
      });
  };

  return (
    <>
      <form onSubmit={allInfoSubmit}>
        <div
          className={styles.newsletters}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className={styles.newsletter_content}>
            <div className={styles.flex_col}>
              <p className={styles.newsletter_title}>Newsletters</p>
              <p className={styles.newsletter_pra}>
                Get Updates About Our Latest Service Trends
              </p>
            </div>

            <div className={styles.subscribe_inputs}>
              <input
                type="text"
                onChange={inputsHandler}
                value={inputField.name}
                name="name"
                placeholder="Your Name"
                className={styles.subscriber_name}
                required
              />
              <small style={{ color: "red" }}>
                {inputField.error_log.name}
              </small>

              <div className={styles.input_withbtn}>
                <input
                  type="email"
                  required
                  name="email"
                  onChange={inputsHandler}
                  value={inputField.email}
                  placeholder="Enter Email Address"
                />
                <small style={{ color: "red" }}>
                  {inputField.error_log.email}
                </small>
                <button type="submit" className={styles.subscirbe_btn}>
                  <Image
                    height={18}
                    width={18}
                    src="/assets/imgs/send.svg"
                    alt="Send"
                  />
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className={styles.banner_img}>
            <Image
              width={507}
              height={583}
              loading="lazy"
              src="/assets/new/newsletter/send.webp"
              alt="nft constructer"
            />
          </div>
        </div>
        {/* ===================Newsletter section end ================== */}
      </form>
    </>
  );
}
export default DemoForm;
