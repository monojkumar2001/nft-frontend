import React,{useState} from "react";
import axios from "axios";
import styles from '../../styles/pages/BlogPage/PostSubscriber.module.css'
function PostSubscriber() {

  const [inputField, setInputField] = useState({
    name: "Blog page",
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
            name: "Blog page",
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
    <div>
      <div className="post-subscriber cpy-6">
        <div className="container">
          <div className={styles.post_subscriber_wrapper}>
            <div className={styles.post_subscriber_left}>
              <div className={styles.post_subscriber_left_content}>
                <h3 className="sm-title">SUBSCRIBE OUR NEWSLETTER</h3>
                <h2>Don’t miss anything!</h2>
                <p>
                  Join our community of 15,000 who receive the best in design
                  and marketing content, biweekly.
                </p>
              </div>
              <div className={styles.post_subscriber_from}>
                <form onSubmit={allInfoSubmit} className={styles.subscriber_form}>
                <input
                  type="text"
                  name="name"
                  onChange={inputsHandler}
                  value={inputField.name}
                  placeholder="Your Name"
                  required
                  hidden
                />

                  <input
                    type="email"
                    name="email"
                    value={inputField.email}
                    onChange={inputsHandler}
                    className={styles.subscriber_input}
                    placeholder="Enter your email address"
                    required
                  />
                  
                  <button type="submit" className="custom-btn">
                    Subscribe
                  </button>
                </form>
                <small style={{ color:'red' }}>{inputField.error_log.email}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostSubscriber;
