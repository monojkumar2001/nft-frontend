import React from "react";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import TopProject from "../component/Section/TopProject";
import Newsletter from "../component/Section/Newsletter";
import Review from "../component/Section/Review";
import Featured from "../component/Section/Featured";
import PriceRangeSlider from "../component/Section/PriceRange";
import ContactBtn from "../component/Section/ContactBtn";
import WhyChose from "../component/Section/WhyChose";
import Faqq from "../component/Section/Faqq";
import Service from "../component/HomePage/Service";
import Servicecard from "../component/Section/SaveTime";
import HowItWork from "../component/Section/HowItWork";
import { HomeFaqData } from "./Data/FaqData/FaqData";
import Slider from "../component/HomePage/Slider";
import SaveTime from "../component/Section/SaveTime";
import Service2 from "../component/HomePage/Service2";

function Home() {
  return (
    <>
      <Head>
        <title>
          In Non-Fungible Token Development Services, We Are the Experts
        </title>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://www.nftconstructer.com" />
        <link rel="canonical" href="https://nftconstructer.com/ " />
        <meta
          name="description"
          content="NFT Constructer offers highly professional website design and development service with affordable pricing specialized for NFT DeFi "
        ></meta>
        <meta
          name="og:description"
          content="NFT Constructer offers highly professional website design and development service with affordable pricing specialized for NFT DeFi "
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="In Non-Fungible Token Development Services, We Are the Experts"
        />
        <meta property="og:image" content="assets/img/meta/1.jpg" />
        <meta property="image" content="assets/img/meta/1.jpg" />
        <meta
          name="keywords"
          content="Nft minting website development NFT Website Design NFT marketplace development"
        ></meta>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>

      {/* ============= Hero Section ================== */}
      <Slider />

      {/* =============service cards section ================== */}
      {/* <Servicecard /> */}
      <SaveTime/>

      {/* ===================service section ================== */}
      <Service />
      {/* <Service2 /> */}

      {/* ===============price range============= */}
      <PriceRangeSlider />

      {/* ===================Newsletter section  ================== */}
      {/* <div className="cpt-7">
        <Newsletter />
      </div> */}

      {/* ================WHY CHOSE UP SECTION ================  */}
      <WhyChose />

      {/* =====================top project===================== */}
      <TopProject />

      {/* <!--  ============ business grow end =============--> */}
      {/* <HowItWork /> */}

      {/* ===================Mentioned section ================== */}
      <Featured />

      {/* =====================happy clients======================= */}
      <div className="cpy-6">
        <Review />
      </div>

      {/* ==========================faq================== */}
      <Faqq data={HomeFaqData} />
      {/* ===============================contact us ================ */}
      <ContactBtn />
    </>
  );
}
Home.layout = AppLayout;

export default Home;
