import React, { Component, useRef, useEffect, useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/router";

import Styles from '../../styles/pages/ContactPage/ContactPage.module.css'

function Contract() {
  const [verified, setVerified] = useState(true);
  const { push } = useRouter();

  var today2 = new Date();
  today2.setDate(today2.getDate() + 1);
  var today = new Date().toISOString().slice(0, -8);
  var date = new Date();
  date.setDate(date.getDate() + 4);
  var maxDate = date.toISOString().slice(0, -8);

  const [inputField, setInputField] = useState({
    do_not_fill: "",
    botSubmit: "",
    name: "",
    email: "",
    country: "",
    phone: "",
    subject: "",
    message: "",
    meeting: today,
    error_log : []
  });
  const inputsHandler = (e) => {
    e.persist();
    setInputField({
      ...inputField,
      [e.target.name]: e.target.value,
    });
  };

  const captchaRef = useRef(null)
  const onChangeRecapcha = () => {
    setVerified(false)
  }


  const allInfoSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("do_not_fill", inputField.do_not_fill);
    formData.append("name", inputField.name);
    formData.append("email", inputField.email);
    formData.append("phone", inputField.phone);
    formData.append("country", inputField.country);
    formData.append("subject", inputField.subject);
    formData.append("message", inputField.message);
    formData.append("meeting", inputField.meeting);

    axios
      .post("https://api.nftconstructer.com/api/contract", formData)
      // .post("http://127.0.0.1:8000/api/contract", formData)
      .then((res) => {
        if (res.data.status === 200) {
          setVerified(true)
          captchaRef.current.reset();
          setInputField({
            do_not_fill: "",
            botSubmit: "",
            name: "",
            email: "",
            country: "",
            phone: "",
            subject: "",
            message: "",
            meeting: today,
            error_log : []
          });
          push('/v2/thankYou');
        } else if(res.data.status == 203){
          setInputField( {
            ...inputField,
            botSubmit : res.data.data
          })
        }else {
          setInputField( {
            ...inputField,
            error_log : res.data.error
          })
          console.log(res.data.error);
        }
      });
  };
  // ======================GET ALL CATEGORY ==============
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios.get('https://api.nftconstructer.com/api/country')
    // axios.get('http://127.0.0.1:8000/api/country')
    .then(res => 
      setCountry(res.data.data));
  }, []);

  return (
    <>
      <section className={`${Styles.contact_area} cpb-6`}>
        <div className={Styles.yellow_filter}></div>
        <div className={Styles.blue_filter}></div>
        <div className="container">
          <div className={`${Styles.section_title} cpb-7`}>
            <h2 className={Styles.sec_title}>CONNECT WITH US</h2>
            <p className="sec-des">
              Our team wants to learn more about your project. Take some time
              to schedule a call and connect with us today. At Nftconstructer,
              we always respect your wishes and privacy and never share
              information with anyone or project details with people not
              employed by the company. Your security is our top priority.
            </p>
          </div>

         
  
          <div className="row">
            {
              inputField.botSubmit != '' ?
              <div style={{ color:'white', backgroundColor:'red', textAlign:'center',padding:'5px',fontWeight:'Bold',margin:'5px' }}>{inputField.botSubmit}</div>
              :
              ''
            }
          

            <div className={Styles.request_form}>
              <form onSubmit={allInfoSubmit}>

              <input
                      type="hidden"
                      onChange={inputsHandler}
                      value={inputField.do_not_fill}
                      name="do_not_fill"
                      placeholder="do_not_fill"
                    />

                <div className={Styles.form_group_2}>
                  <div className="input-group">
                    <label className={Styles.input_label} htmlFor="name">Your Name</label>
                    <div className={Styles.input_label}>
                      <input
                        type="text"
                        onChange={inputsHandler}
                        value={inputField.name}
                        name="name"
                        
                        className={Styles.form_control}
                        placeholder="Enter Your Name"
                      />
                    </div>
                    <small style={{ color:'red' }}>{inputField.error_log.name}</small>
                  </div>
                  <div className="input-group">
                    <label className={Styles.input_label} htmlFor="name">Your E-mail :</label>
                    <div className={Styles.input_label}>
                      <input
                        type="email"
                        onChange={inputsHandler}
                        value={inputField.email}
                        name="email"
                        
                        className={Styles.form_control}
                        placeholder="YourEmail@domain.com"
                      />
                    </div>
                    <small style={{ color:'red' }}>{inputField.error_log.email}</small>
                  </div>
                  
                </div>

                <div className={Styles.form_group_2}>
                 
                <div className="input-group">
                  <label className={Styles.input_label} htmlFor="country">Country</label>
                  <div className={Styles.input_label}>
                    <select
                      name="country"
                      onChange={inputsHandler}
                      value={inputField.country}
                      className={`${Styles.form_control} ${Styles.input_select}`}
                    >
                      <option value="">Select Country</option>
                      {country.map((country) => (
                          <option value={country.code} key={country.id}>
                            {country.name}
                          </option>
                        ))}
                      
                    </select>
                  </div>
                    <small style={{ color:'red' }}>{inputField.error_log.country}</small>
                </div>

  
                <div className="input-group">
                    <label className={Styles.input_label} htmlFor="phone-number">
                      Phone Number:
                    </label>
                    <div className={Styles.input_label}>
                      <input
                        type="text"
                        onChange={inputsHandler}
                        value={inputField.phone}
                        name="phone"
                        
                        placeholder="+1234567890"
                        className={`${Styles.form_control} with-select`}
                      />
                    </div>
                    <small style={{ color:'red' }}>{inputField.error_log.phone}</small>
                  </div>
                </div>

                <div className={Styles.form_group_2}>
                 
  
                  <div className="input-group">
                    <label className={Styles.input_label} htmlFor="subject">Subject :</label>
                    <div className={Styles.input_label}>
                      <input
                        type="text"
                        onChange={inputsHandler}
                        value={inputField.subject}
                        
                        name="subject"
                        placeholder="Subject"
                        className={`${Styles.form_control} with-select`}
                      />
                    </div>
                    <small style={{ color:'red' }}>{inputField.error_log.subject}</small>
                  </div>
                  <div className="input-group">
                    <label className={Styles.input_label} htmlFor="subject">Schedule A Meeting : (Schedule should be in Europe/London time)</label>
                    <div className={Styles.input_label}>
                      <input
                        type="datetime-local"
                        onChange={inputsHandler}
                        value={inputField.meeting}
                        name="meeting"
                        placeholder="meeting"
                        className={Styles.form_control}
                        min={today}
                        max={maxDate}
                      />
                    </div>
                    <small style={{ color:'red' }}>{inputField.error_log.meeting}</small>
                  </div>
                </div>
  
                <div className="form-group " style={{marginBottom: '30px'}}>
                  <div className="input-group">
                    <label className={Styles.input_label} htmlFor="message">Consult :</label>
                    <div className={Styles.input_label}>
                      <textarea
                        onChange={inputsHandler}
                        value={inputField.message}
                        
                        name="message"
                        className={Styles.form_control}
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                    <small style={{ color:'red' }}>{inputField.error_log.message}</small>
                  </div>
                </div>
                {/* localjost */}
                {/* <ReCAPTCHA
                    sitekey="6LeZXu4kAAAAAGFzu6tlXEQpi68T1C5xX-m_HKAn"
                    onChange={onChangeRecapcha} ref={captchaRef}
                  /> */}
                  {/* live server */}
                <ReCAPTCHA
                    sitekey="6Lf99vAkAAAAABFfJlb8WEvnXU7zsJhvamSPEnvP"
                    onChange={onChangeRecapcha} ref={captchaRef}
                  />

                <div className="form-group mt-3">
                  <button className={Styles.custom_btn} type="submit" style={verified ? {color: '#837c7c',
    background: '#7470706b'} : {color:'white',background:'#6E58EB'}} disabled={verified}>
                    Send Message
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contract;
