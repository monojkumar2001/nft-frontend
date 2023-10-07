import React, { useState, useEffect } from "react";
import Link from "next/link";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import axios from "axios";
import Firstwidget from "../component/pages/connect/Firstwidget"
import Secondwidget from "../component/pages/connect/Secondwidget"
import Thirdwidget from "../component/pages/connect/Thirdwidget"
import Fourthwidget from "../component/pages/connect/Fourthwidget"
import { useRouter } from "next/router";


function Connect() {
  const [loading, setLoading] = useState(true);
  const [randomNumber, setRandomNumber] = useState(Math.floor((Math.random() * 100000) + 1));
  const { push } = useRouter();


  var today = new Date().toISOString().slice(0, -8);
  var date = new Date();
  date.setDate(date.getDate() + 7);
  var maxDate = date.toISOString().slice(0, -8);


  // ======================GET ALL CATEGORY ==============
  const [category, setCategory] = useState([]);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios.get('https://api.nftconstructer.com/api/category')
    // axios.get('http://127.0.0.1:8000/api/category')
    .then(res => 
    setCategory(res.data.data));
    axios.get('https://api.nftconstructer.com/api/country')
    // axios.get('http://127.0.0.1:8000/api/country')
    .then(res => 
      setCountry(res.data.data));
      setLoading(false);
  }, []);

  

  // ====================SUB CATEGORY ================
  const [subCategory, setSubCategory] = useState([]);

  const handleCategoryInput = (e) => {
    const cid = e.target.value;
      if(cid){
        axios.get(`https://api.nftconstructer.com/api/getsubcategory/${cid}`)
        // axios.get(`http://127.0.0.1:8000/api/getsubcategory/${cid}`)
        .then(res => 
          setSubCategory(res.data.data));
          setInputField( {
            ...inputField,
            [e.target.name] : e.target.value
          })
      }else{
        setInputField( {
          ...inputField,
          [e.target.name] : e.target.value
        })
      }
  }



  const [inputField, setInputField] = useState({
    first_name : "",
    last_name : "",
    email: "",
    phone: "",
    aboutUs: "",
    country: "",
    social: "",
    terms : [],

    category: "",
    subcategory: "",
    market: "",
    message: "",

    meeting : today,

    page1 : "1",
    page2 : "2",
    page3 : "3",
    error_log : []
  });



  // States
  const [activeStep, setActiveStep] = useState(1);

  const inputsHandler = (e) => {
    e.persist();

    if(e.target.type == 'checkbox'){
      
      let jone = inputField[e.target.name];
      if(e.target.checked == true){
        setInputField({
          ...inputField,
          [e.target.name]: [...jone,e.target.value ]
        });

      }else{
        setInputField({
          ...inputField,
          [e.target.name]: jone.filter((item) => item !== e.target.value)
        });
      }
      }else{
        setInputField({
          ...inputField,
          [e.target.name]: e.target.value,
        });
      }
    
  };

  const stateChangeOne = () => {
    setActiveStep(1)
  }
  const stateChangeTwo = () => {
    setActiveStep(2)
  }


  // Submits
  const brandInfoSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('randomNumber',randomNumber)
    formData.append('firstName',inputField.first_name)
    formData.append('lastName',inputField.last_name)
    formData.append('email',inputField.email)
    formData.append('phone',inputField.phone)
    formData.append('aboutUs',inputField.aboutUs)
    formData.append('page',inputField.page1)
    formData.append('terms',inputField.terms)
    formData.append("country", inputField.country);
    formData.append("social", inputField.social);

    axios
      .post("https://api.nftconstructer.com/api/connect", formData)
      // .post("http://127.0.0.1:8000/api/connect", formData)
      .then(res => {
        if(res.data.status == 200){
          setActiveStep(2);
        }else{
          setInputField( {
            ...inputField,
            error_log : res.data.error
          })
        }
      })
  };

  const websiteInfoSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('randomNumber',randomNumber)
    formData.append('category',inputField.category)
    formData.append('subcategory',inputField.subcategory)
    formData.append('market',inputField.market)
    formData.append('message',inputField.message)
    formData.append('page',inputField.page2)

    axios
      .post("https://api.nftconstructer.com/api/connect", formData)
      // .post("http://127.0.0.1:8000/api/connect", formData)
      .then(res => {
        if(res.data.status == 200){
          setActiveStep(3);
        }else{
          setInputField( {
            ...inputField,
            error_log : res.data.error,
          })
        }
      })
  };

  const smartContractInfoSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('randomNumber',randomNumber)
    formData.append('meeting',inputField.meeting)
    formData.append('page',inputField.page3)

    axios
      .post("https://api.nftconstructer.com/api/connect", formData)
      // .post("http://127.0.0.1:8000/api/connect", formData)
      .then(res => {
        if(res.data.status == 200){
          push('/v3/thankYou');
          // setActiveStep(4);
        }else{
          setInputField( {
            ...inputField,
            error_log : res.data.error
          })
        }
      })

  };

  return (
    <div>
      <Head>
        <title>NFT Website Development Services - Nft Constructer</title>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://www.nftconstructer.com" />

        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <meta
          name="description"
          content="We provide NFT website development services for digital content such as art, music, and videos, domain names, gaming items, investments, and other physical items that are unique Contact us!"
        ></meta>
        <meta
          name="og:description"
          content="We provide NFT website development services for digital content such as art, music, and videos, domain names, gaming items, investments, and other physical items that are unique Contact us!"
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="NFT Website Development Services - Nft Constructer"
        />
        <meta property="og:image" content="assets/img/meta/1.jpg" />
        <meta property="image" content="assets/img/meta/1.jpg" />
        <meta
          name="keywords"
          content="Nft minting website development NFT Website Design NFT marketplace development"
        ></meta>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MLNPCQK"
          className="tag-man"
        ></iframe>
      </noscript>

      <React.Fragment>
        <main className="project-requirements-page">
          <div className={`${loading ? "active" : ""} loading-post-data`}>
            <img
              height="auto"
              width="auto"
              src="assets/img/loading.svg"
              alt="Image Not Found"
            />
          </div>
          <section className="hero">
            <div className="container">
              <div className="steps">

                <Firstwidget brandInfoSubmit={brandInfoSubmit} randomNumber={randomNumber} inputsHandler={inputsHandler} inputField={inputField} country={country} activeStep={activeStep}/>

                <Secondwidget websiteInfoSubmit={websiteInfoSubmit} randomNumber={randomNumber} inputsHandler={inputsHandler} inputField={inputField} category={category} subCategory={subCategory} activeStep={activeStep} handleCategoryInput={handleCategoryInput} stateChangeOne={stateChangeOne}/>

                <Thirdwidget smartContractInfoSubmit={smartContractInfoSubmit} randomNumber={randomNumber} inputsHandler={inputsHandler} inputField={inputField} activeStep={activeStep} today={today} maxDate={maxDate} stateChangeTwo = {stateChangeTwo}/>

                <Fourthwidget activeStep={activeStep}/>

              </div>
            </div>
          </section>
        </main>
      </React.Fragment>
    </div>
  );
}
Connect.layout = AppLayout;
export default Connect;
