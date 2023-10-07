import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import Featured from "../component/Section/Featured";
import WhyChose from "../component/Section/WhyChose";
import ContactBtn from "../component/Section/ContactBtn";
import HeroSection from "../component/AboutPage/HeroSection";
import ServiceCardItem from "../component/Section/ServiceCardItem";
import { AboutServiceData } from "./Data/ServiceData/ServiceData";
import SolvingProblem from "../component/AboutPage/SolvingProblem";
import SaveTime from "../component/Section/SaveTime";

function About() {
  return (
    <>
      <Head>
        <title>
          Non-Fungible Token Development Agency Committed to Your Best Interest
          Description
        </title>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://nftconstructer.com/about" />
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <link rel="canonical" href="https://nftconstructer.com/about" />

        <meta
          name="description"
          content="We assist you in starting your own NFT collectibles minting website & marketplace to draw in the expanding NFT user community"
        ></meta>
        <meta
          name="og:description"
          content="We assist you in starting your own NFT collectibles minting website & marketplace to draw in the expanding NFT user community"
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Non-Fungible Token Development Agency Committed to Your Best Interest Description"
        />
        <meta property="og:image" content="assets/img/meta/about.jpg" />
        <meta property="image" content="assets/img/meta/about.jpg" />
        <meta
          name="keywords"
          content="nft, full stack, web development, website, website design , website development,development, nft constructer, minting website"
        ></meta>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MLNPCQK"
          className="tag-man"
        ></iframe>
      </noscript>

      {/* ================= Hero section ====================== */}
      <HeroSection />
      {/* ================= Hero section ====================== */}
      {/* =============service card section ================== */}
      <SaveTime />
      {/* =============service card section ================== */}
      <div className="white-bg cpt-6 ">

        {/* <!-- ================ Solving Problem Services start ================ --> */}
        <SolvingProblem />
        {/* <SolvingProblem/> */}
        <div className="cpt-7">
          <Featured />
        </div>
        {/* <!-- ================ Solving Problem Services end ================ --> */}
        <div className="cpt-6">
          <ServiceCardItem
            data={AboutServiceData}
            title={" We’re Like your cheif growth officer"}
            description={``}
          />
        </div>
        {/* ===================service section end ================== */}

        {/* ================WHY CHOSE UP SECTION start================  */}
        <div className="cpb-7">
          <WhyChose />
        </div>
        {/* ================WHY CHOSE UP SECTION end================  */}
        {/* * ===============================contact us start ================ */}
        <ContactBtn />
        {/* ===============================contact us end ================ */}
      </div>
    </>
  );
}

About.layout = AppLayout;

export default About;
