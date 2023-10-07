import AppLayout from "../../component/Layout/Layout";
import Head from "next/head";
import ContactBtn from "../../component/Section/ContactBtn";
import WhyChose from "../../component/Section/WhyChose";
import Review from "../../component/Section/Review";
import HeroSection from "../../component/PorfolioPage/HeroSection";
import PortfolioSection from "../../component/PorfolioPage/PortfolioSection";
import SaveTime from "../../component/Section/SaveTime";
import CompanyLogo from "../../component/Section/CompanyLogo";
import TechStacks from "../../component/Section/TechStacks";
function Portfolio() {
  return (
    <>
      <Head>
        <title>Our works and case studies - Nft Constructer </title>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:url"
          content="https://nftconstructer.com/portfolio"
        />
        <link rel="canonical" href="https://nftconstructer.co m/portfolio" />

        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />

        <meta
          name="description"
          content="We are a full-service NFT website development company. You can check our works and know more about our services."
        ></meta>
        <meta
          name="og:description"
          content="We are a full-service NFT website development company. You can check our works and know more about our services"
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Our works and case studies - Nft Constructer"
        />
        <meta property="og:image" content="assets/img/meta/portfolio.jpg" />
        <meta property="image" content="assets/img/meta/portfolio.jpg" />
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

      <HeroSection />

      <SaveTime />
      <TechStacks/>
      <PortfolioSection/>

        {/* ================WHY CHOSE UP SECTION start================  */}
        <WhyChose />

        {/* =====================happy clients======================= */}
       <div className="cpt-7">
       <Review />
       </div>

        {/* ===============================contact us start ================ */}
        <div className="cpt-7">
          <ContactBtn />
        </div>
        {/* ===============================contact us end ================ */}
    </>
  );
}

Portfolio.layout = AppLayout;

export default Portfolio;
