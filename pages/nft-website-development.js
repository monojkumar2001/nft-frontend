import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import AppLayout from "../component/Layout/Layout";
import { Navigation, A11y } from "swiper";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import TopProject from "../component/Section/TopProject";
import Newsletter from "../component/Section/Newsletter";
import Head from "next/head";
import Review from "../component/Section/Review";
import Link from "next/link";
import OfferA from "./inner/OfferA";
import Featured from "../component/Section/Featured";
import PriceRangeSlider from "../component/Section/PriceRange";
import HowItWork from "../component/Section/HowItWork";

import ContactBtn from "../component/Section/ContactBtn";

import Image from "next/image";
// import Servicecard from "../component/Section/Servicecard";
import Faqq from "../component/Section/Faqq";
import { NftDevelopmentFaqData } from "./Data/FaqData/FaqData";
import HeroSection from "../component/NftDevelopmentPage/HeroSection";
import DescriptionSection from "../component/Section/DescriptionSection";
// import { NftDescriptionData } from "./Data/DescriptionData/DescriptionData";
import ServiceCardItem from "../component/Section/ServiceCardItem";
import { NftDevelopmentServiceData } from "./Data/ServiceData/ServiceData";
import FeaturesItem from "../component/Section/FeaturesItem";
import { NftDevelopmentFeaturesData } from "./Data/FeaturesData/FeaturesData";
import BenifitsItem from "../component/Section/BenifitsItem";
import { NftDevelopmentDescriptionData } from "./Data/DescriptionData/DescriptionData";
import { NftDevelopmnetBenifitsData } from "./Data/BenifitsItemData/BenifitsItemData";
import NftDevelopmentTechStack from "../component/Section/NftDevelopmentTechStack";
import SaveTime from "../component/Section/SaveTime";
import WorkPlace from "../component/Section/WorkPlace";

function HiCoin() {
  const [service, setService] = useState(1);

  const styles = {
    titleTextColor: "blue",
    rowTitleColor: "blue",
  };

  const [isHovering, setIsHovering] = useState(1);
  return (
    <>
      <Head>
        <title>
          Web Development Services for NFT Defi and Crypto Collectibles
        </title>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:url"
          content="https://nftconstructer.com/nft-website-development"
        />
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <link
          rel="canonical"
          href="https://nftconstructer.com/nft-website-development"
        />
        <meta
          name="description"
          content="We provide customizable website development services for specialized for NFT development, DeFi and Web3 based startups at affordable prices"
        ></meta>
        <meta
          name="og:description"
          content="We provide customizable website development services for specialized for NFT development, DeFi and Web3 based startups at affordable prices"
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Web Development Services for NFT Defi and Crypto Collectibles"
        />
        <meta property="og:image" content="assets/img/meta/2.jpg" />
        <meta property="image" content="assets/img/meta/2.jpg" />
        <meta
          name="keywords"
          content="Web Development Services for NFT Defi and Crypto Collectibles"
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
      <main className="home-page">
        <div className="home-page-overlay"></div>
        <HeroSection />
        {/* =============service card section ================== */}
        <SaveTime />
        {/* =============service card section ================== */}
        {/* ================about us section ================== */}
        <DescriptionSection data={NftDevelopmentDescriptionData} />

        {/* ================about us section end ================== */}
        {/* ==============pricing range ============== */}
        <div className="cpt-6">
          <PriceRangeSlider />
        </div>
        {/* ==============pricing range end ============== */}
        {/* ===================demo request section end ================== */}

        {/* ===================service section ================== */}
        <ServiceCardItem
          data={NftDevelopmentServiceData}
          title={"Token Development Services"}
          description={`At NFT Constructer, we specialize in the art of 
          crafting exceptional NFT websites. With a decade of experience in
          the digital realm, we are at the forefront of NFT website development.
          Our team of experts is dedicated to bringing your unique vision to life 
          in the digital art and collectibles space. Whether you're an artist,
          creator, or collector, we're here to turn your NFT dreams into reality.`}
          id={"nft-development"}
        />
        {/* ===================service section end ================== */}

        {/* ===================Mentioned section ================== */}
        <div className="cpt-6">
          <Featured />
        </div>
        {/* ===================Mentioned section end ================== */}

        {/* ===================development track ================== */}
        <NftDevelopmentTechStack
          short_dis={`NFT CONSTRUCTOR is a leading NFT, Defi Metaverse development company.
        We are highly innovative & work with advanced technologies.`}
        />
        {/* ===================development track end ================== */}

        {/* ==================Features================== */}
        <div className="cpb-7">
          <FeaturesItem data={NftDevelopmentFeaturesData} />
        </div>

        {/* ===================Newsletter section  ================== */}
        {/* <div className="cpt-7">
          <Newsletter />
        </div> */}
        {/* ===============Benefits================== */}
        <BenifitsItem
          data={NftDevelopmnetBenifitsData}
          title={"NFT Development"}
        />
        {/* ===============Benefits end================== */}

        {/* =====================top project===================== */}
        <TopProject />
        <WorkPlace/>
        {/* =====================happy clients======================= */}
        <Review />

        {/* ==========================faq================== */}
        <Faqq data={NftDevelopmentFaqData} />

        {/* ===============================contact us ================ */}
        <ContactBtn />
      </main>
    </>
  );
}
HiCoin.layout = AppLayout;

export default HiCoin;
