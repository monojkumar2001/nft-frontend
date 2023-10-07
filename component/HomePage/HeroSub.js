import React,{ useState } from "react";
import {HiMail} from "react-icons/hi"
import styles from '../../styles/pages/HomePage/Hero.module.css';
import axios from "axios";
function DemoForm() {
  const [inputField, setInputField] = useState({
    name: "Hire Us",
    email: "",
    error_log : []
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
            email: "",
            name: "Hire Us",
            error_log : []
          });
        }else {
          setInputField( {
            ...inputField,
            error_log : res.data.message
          })
        }
      });
  };


  return (
    <div className={styles.input_box}>
      <div className={styles.input_area} >
        <form onSubmit={allInfoSubmit}>

        <input
            type="text"
            onChange={inputsHandler}
            value={inputField.name}
            name="name"
            placeholder="Your Name"
            className={styles.subscriber_name}
            required
            hidden
          />

          <input
            type="email"
            name="email"
            value={inputField.email}
            onChange={inputsHandler}
            className={styles.form_control}
            placeholder="Type your email here"
          />
          <div className={styles.icon}>
            <span><HiMail/></span>
          </div>
          <div className={styles.btn}>
              <button type="submit">
                Hire Us
              </button>
          </div>
        </form>
        <small style={{ color:'red' }}>{inputField.error_log.email}</small>
      </div>
      
    </div>
  );
}

export default DemoForm;