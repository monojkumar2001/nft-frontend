import axios from "../../lib/axios";
import AppLayout from "../../component/Layout/Layout";
import Head from "next/head";
import LatestBlog from "../inner/LatestBlog";
import PostSubscriber from "../inner/PostSubscriber";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Blocks } from 'react-loader-spinner'
import { useRouter } from "next/router";
import styles from '../../styles/pages/BlogPage/slug.module.css'

import {
  FacebookShareButton,LinkedinShareButton,TwitterShareButton,TelegramShareButton,TelegramIcon
} from "react-share";
import LatestPortfolio from "../../component/PorfolioPage/LatestPortfolio";
import HeroSection from "../../component/PorfolioPage/HeroSection";
import PortfolioAbout from "../../component/PorfolioPage/PortfolioAbout";
import TechStacks from "../../component/Section/TechStacks";


export default function PortfolioDetails({ slug }) {
  const [scroll, setScroll] = useState(0);
  const router = useRouter();

  if(router.isFallback){
    return <Blocks
    visible={true}
    height="80"
    width="80"
    ariaLabel="blocks-loading"
    wrapperStyle={{ }}
    wrapperClass="blocks-wrapper"
  />;
  }

  useEffect(() => {
    function handleScroll() {
      setScroll(
        Math.floor(
          (window.scrollY / (document.body.offsetHeight - window.innerHeight)) *
            100
        )
      );
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* <Head>
      <title>{blog.title}</title>
      <meta property="og:title" content={blog.seo_title} />
      <meta name="description" content={blog.seo_description}></meta>
      <meta name="og:description" content={blog.seo_description}></meta>
      <meta property="og:type" content="article" />
      <meta property="og:image" content={blog.main_image} />
      <meta property="image" content={blog.main_image} />
      <meta name="keywords" content={blog.seo_keywords}></meta>
      <link rel="icon" type="image" href="/favicon.png"></link>
    </Head> */}

    <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MLNPCQK"
          className="tag-man"
        ></iframe>
      </noscript>
    
    {/* <OfferA /> */}
    <HeroSection/>
    <PortfolioAbout/>
    <TechStacks/>
    
<PostSubscriber/>
<LatestPortfolio/>
    </>
  );
}

PortfolioDetails.layout = AppLayout;

