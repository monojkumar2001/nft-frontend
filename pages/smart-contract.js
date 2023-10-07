import { useEffect, useState } from "react";
import Faq from "react-faq-component";
import AppLayout from "../component/Layout/Layout";
import CountUp from "react-countup";
import TopProject from "../component/Section/TopProject";
import Newsletter from "../component/Section/Newsletter";
import Head from "next/head";
import Review from "../component/Section/Review";
import Featured from "../component/Section/Featured";
import PriceRangeSlider from "../component/Section/PriceRange";
import HowItWork from "../component/Section/HowItWork";
import ContactBtn from "../component/Section/ContactBtn";
import DescriptionSection from "../component/Section/DescriptionSection";
import { SmartContractDescriptionData } from "./Data/DescriptionData/DescriptionData";
import NftDevelopmentTechStack from "../component/Section/NftDevelopmentTechStack";
import FeaturesItem from "../component/Section/FeaturesItem";
import { SmartContractFeaturesData } from "./Data/FeaturesData/FeaturesData";
import Faqq from "../component/Section/Faqq";
import { SmartContractFaqData } from "./Data/FaqData/FaqData";
import BenifitsItem from "../component/Section/BenifitsItem";
import { SmartContractDevelopmentServices } from "./Data/BenifitsItemData/BenifitsItemData";
import HeroSection from "../component/SmartContactPage/HeroSection";
import BenifitsServiceItem from "../component/SmartContactPage/BenifitsServiceItem";
import SaveTime from "../component/Section/SaveTime";

function SmartContract() {
  const [service, setService] = useState(1);

  return (
    <>
      <Head>
        <title>
          Customized and Secured Smart-Contract Development Services
        </title>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:url"
          content="https://nftconstructer.com/smart-contract"
        />
        <link
          rel="canonical"
          href="https://nftconstructer.com/smart-contract"
        />
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <meta
          name="description"
          content="We offer a variety of decentralized smart contract development and auditing services, including contract clause analysis, spent analysis"
        ></meta>
        <meta
          name="og:description"
          content="We offer a variety of decentralized smart contract development and auditing services, including contract clause analysis, spent analysis"
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Customized and Secured Smart-Contract Development Services"
        />
        <meta property="og:image" content="assets/img/meta/7.jpg" />
        <meta property="image" content="assets/img/meta/7.jpg" />
        <meta
          name="keywords"
          content="NFT Smart Contract Development NFT smart contract Best Smart Contract Developer"
        ></meta>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MLNPCQK"
          className="tag-man"
        ></iframe>
      </noscript>
      {/* <OfferA /> */}
      <HeroSection/>
      {/* =============service card section ================== */}
      <SaveTime />
      {/* =============service card section ================== */}

      {/* ================about us section ================== */}
      <DescriptionSection data={SmartContractDescriptionData} />

      {/* ==============pricing range ============== */}
      <div className="cpt-6">
        <PriceRangeSlider />
      </div>
    {/* ==================Features================== */}
    <div className="cpb-6">  <FeaturesItem data={SmartContractFeaturesData} id={'smart-contract'}  /></div>
 {/* ===================Mentioned section ================== */}
 <Featured />
      {/* ===================development track ================== */}
    <div className="cpb-7">
    <NftDevelopmentTechStack
      short_dis={`SemiDot is a leading NFT marketplace development company. We are highly innovative & work with advanced technologies.`}
      />
    </div>

      {/* ===================Newsletter ================== */}
 {/* <div className="cpt-6">
 <Newsletter />
 </div> */}
      {/* ===============Benefits================== */}
      <BenifitsItem data={SmartContractDevelopmentServices} title={'Smart Contract Development Services'} />

      {/* ==================benefit================== */}
  {/* <BenifitsServiceItem/> */}

      {/* =====================top project===================== */}
      <TopProject />

      {/* <!--  ============ business grow  =============--> */}
      {/* <HowItWork /> */}

      {/* =====================happy clients======================= */}
      <Review />

      {/* ==========================faq================== */}
      <Faqq data={SmartContractFaqData} />
      {/* ===============================contact us ================ */}

      <ContactBtn />
    </>
  );
}

SmartContract.layout = AppLayout;

export default SmartContract;
