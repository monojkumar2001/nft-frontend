
import "../styles/globals.css";
import "../styles/App.css";
import "../styles/Layout.css";
import "../styles/section/_global-style.scss";
import Social from "./inner/Social";
import OfferA from "./inner/OfferA";
import OfferB from "./inner/OfferB";
import OfferC from "./inner/OfferC";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/section/portfolio.css";
import "../styles/inner/popup.css";
import { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import TagManager from "react-gtm-module";
import Script from 'next/script';
import axios from "axios";
import Connect from '/pages/connect'


function MyApp({ Component, pageProps}) {

  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
    getuserInfo();
  }, []);

  const getuserInfo = async () => {
    const data = await axios.get('https://api.nftconstructer.com/api/visit')
      .then(res => console.log(res.data))
  }

  const Layout = Component.layout || Fragment;
  const router = useRouter();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init("776091353545037"); // facebookPixelIds
        ReactPixel.pageView();
        router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);


  //  connect page

  const isConnectPage=router.pathname === '/connect';

  if(isConnectPage){
    return <Connect/>
  }else {
    <Layout>
    <Component {...pageProps} />
    <Social />
  </Layout>
  }
  return (
    <>
      <Layout>
        <OfferC />
        <Component {...pageProps} />
        <Social />
      </Layout>
      <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-G3G9LRWYBY"></Script>

        <Script strategy="lazyOnload">
        {
          `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MLNPCQK');
          `
        }
        </Script>

        <Script strategy="lazyOnload" type="application/ld+json">
        {
          `
          { 
            "@context": "https://schema.org/", 
            "@type": "WebSite", 
            "name": "Nft constructer", 
            "url": "https://nftconstructer.com/", 
            "potentialAction": { 
              "@type": "SearchAction", 
              "target": "{search_term_string}", 
              "query-input": "required name=search_term_string" 
            } 
          } 
          `
        }
        </Script>

        <Script strategy="lazyOnload">
        {
          `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G3G9LRWYBY');
          `
        }
        </Script>
      <Script id="tawk" strategy="lazyOnload">
        {`
           var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
           (function(){
           var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
           s1.async=true;
           s1.src='https://embed.tawk.to/6412f40b31ebfa0fe7f2f27f/1grl0ild0';
           s1.charset='UTF-8';
           s1.setAttribute('crossorigin','*');
           s0.parentNode.insertBefore(s1,s0);
           })();
        `}
      </Script>
    </>
  );
}

export default MyApp;
