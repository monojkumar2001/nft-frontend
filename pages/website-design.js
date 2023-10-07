import { useEffect, useState } from "react";
import Faq from "react-faq-component";

import AppLayout from "../component/Layout/Layout";
import { Navigation, A11y } from "swiper";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import TopProject from "../component/Section/TopProject";
import Newsletter from "../component/Section/Newsletter";
import Head from "next/head";
import Review from "../component/Section/Review";
import OfferA from "./inner/OfferA";
import Featured from "../component/Section/Featured";
import PriceRangeSlider from "../component/Section/PriceRange";
import HowItWork from "../component/Section/HowItWork";
import ContactBtn from "../component/Section/ContactBtn";
import BenifitsItem from "../component/Section/BenifitsItem";
import { NFTWebDesignServices } from "./Data/BenifitsItemData/BenifitsItemData";
import Faqq from "../component/Section/Faqq";
import { WebsiteDesignFaqData } from "./Data/FaqData/FaqData";
import FeaturesItem from "../component/Section/FeaturesItem";
import { WebsiteDesignFeaturesData } from "./Data/FeaturesData/FeaturesData";
import ServiceCardItem from "../component/Section/ServiceCardItem";
import { WebsiteServiceData } from "./Data/ServiceData/ServiceData";
import DescriptionSection from "../component/Section/DescriptionSection";
import { WebsiteDesignDescriptionData } from "./Data/DescriptionData/DescriptionData";
import HeroSection from "../component/WebsiteDesignPage/HeroSection";
import SaveTime from "../component/Section/SaveTime";

function Coin() {
  return (
    <>
      <Head>
        <title>
          UI/UX Web Design Services for NFT Defi And Crypto Startups
        </title>
        <meta
          property="og:title"
          content="UI/UX Web Design Services for NFT Defi And Crypto Startups – NFT Constructer "
        />
        <meta
          property="og:url"
          content="https://nftconstructer.com/website-design"
        />

        <link
          rel="canonical"
          href="https://nftconstructer.com/website-design"
        />
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <meta
          name="description"
          content="Our team of top-notch website designers can offer you exceptional landing pages can help your NFT Defi or Metaverse business take on top"
        ></meta>
        <meta
          name="og:description"
          content="Our team of top-notch website designers can offer you exceptional landing pages can help your NFT Defi or Metaverse business take on top"
        ></meta>
        <meta
          property="og:title"
          content="UI/UX Web Design Services for NFT Defi And Crypto Startups"
        />
        <meta
          name="keywords"
          content="Nft website ui ux design nft website design company Best nft website design"
        ></meta>
        <meta property="og:image" content="assets/img/meta/4.jpg" />
        <meta property="image" content="assets/img/meta/4.jpg" />
        <meta property="og:type" content="article" />
        <meta property="og:type" content="website"></meta>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MLNPCQK"
          className="tag-man"
        ></iframe>
      </noscript>
     <HeroSection/>
      {/* =============service card section ================== */}
      <SaveTime/>

      {/* ================about us section ================== */}
      <DescriptionSection data={WebsiteDesignDescriptionData} />

      {/* ==============pricing range ============== */}
      <div className="cpt-6">
        <PriceRangeSlider />
      </div>
      {/* ===================service section ================== */}

      <ServiceCardItem data={WebsiteServiceData} title={'NFT Web Design Services'}
        description={`As NFT pioneers, we bring the same cutting-edge creativity and
         expertise to website design. Our team of skilled designers and developers
        combines artistry with technology to craft visually stunning, user-friendly
         websites tailored to your unique needs. Whether you're an NFT enthusiast or
         a business looking to make your mark online, we're here to transform your 
        vision into a captivating digital reality. Join us on a journey where website
        design meets the limitless possibilities of the NFT world.`}
        id={'web-design'}
        />


        {/* ===================Mentioned ================== */}
      <div className="cpt-6">
        <Featured />
      </div>
      {/* ==================Features ================== */}
      <div className="cpb-6">
        <FeaturesItem data={WebsiteDesignFeaturesData} />
      </div>
      {/* ===================Newsletter section  ================== */}
      {/* <div className="cpt-7">
        <Newsletter />
      </div> */}
      {/* ===============Benefits================== */}
      <BenifitsItem data={NFTWebDesignServices} title={'NFT Web Design Services'} />

      {/* =====================top project===================== */}
      <TopProject />

      {/* <!--  ============ business grow start =============--> */}
      {/* <HowItWork /> */}

      {/* =====================happy clients======================= */}
      <Review />

      {/* ==========================faq================== */}
      <Faqq data={WebsiteDesignFaqData} />

      {/* ===============================contact us ================ */}
      <ContactBtn />

    </>
  );
}

Coin.layout = AppLayout;

export default Coin;
