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

export async function getStaticPaths() {
  const response = await axios.get("https://api.nftconstructer.com/api/blog");

  return {
    fallback: true,
    paths: response.data.map((post) => ({
      params: { slug: post.slug.toString() },
    })),
  };
}

export async function getStaticProps({ params }) {
  const response = await axios.get(`/blog-details/${params.slug}`);
  const data = response.data;

  if(!data.slug){
    return {
      notFound : true
    }
  }

  return {
    props: {
      blog: data,
    },
    revalidate: 10
  };
}

export default function BlogDetails({ blog }) {
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
      <Head>
      <title>{blog.title}</title>
      <meta property="og:title" content={blog.seo_title} />
      <meta name="description" content={blog.seo_description}></meta>
      <meta name="og:description" content={blog.seo_description}></meta>
      <meta property="og:type" content="article" />
      <meta property="og:image" content={blog.main_image} />
      <meta property="image" content={blog.main_image} />
      <meta name="keywords" content={blog.seo_keywords}></meta>
      <link rel="icon" type="image" href="/favicon.png"></link>
    </Head>

    <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MLNPCQK"
          className="tag-man"
        ></iframe>
      </noscript>
    
    {/* <OfferA /> */}
    <div id="blog" className="cpy-6">
      <div className="container">
        <div className={styles.page_route}>
          <Link href={"/blog"}>
            <p className={styles.blog_page_link}>BLOG</p>
          </Link>
          <p> &gt; </p>

          <p>POST DETAILS</p>
        </div>

        <div className="post-top-area">
          <div className="post-top-content">
            <h1 className={styles.urbanist_dark_22}>{blog.title}</h1>

            <div className={styles.blog_img}>
              <img
                height="auto"
                width="auto"
                src={blog.main_image}
                alt={blog.seo_title}
              />
            </div>
          </div>
          <div className={styles.small_info}>
            <div>
              <img
                height="auto"
                width="auto"
                src="../assets/imgs/user.svg"
                alt="Nft Constructer"
              />
              <p className={styles.urbanist_grey_15}>{blog.author}</p>
            </div>
            <div>
              <img
                height="auto"
                width="auto"
                src="../assets/imgs/calendar-p.svg"
                alt="Nft Constructer"
              />
              <p className={styles.urbanist_grey_15}>{blog.created_date}</p>
            </div>
          </div>
        </div>
        <section className={styles.blog_content}>
          {/* <!---------------------- right side -------------------------------> */}
          <div className={styles.tags_media}>
            <p className={styles.read_time}>10 Min Read</p>

            <div className={styles.progress_bar}>
              <div className={styles.progress} style={{ width: `${scroll}%` }} />
            </div>
            <div className={styles.soc_share}>
              <p className={styles.urbanist_black_18}>Share:</p>
              <div className={styles.soc_tags_container}>
                <FacebookShareButton url={`https://nftconstructer.com/blog/${blog.slug}`}>
                <div className={styles.soc_tag}>
                    <svg
                      width="10"
                      height="16"
                      viewBox="0 0 10 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.71875 9L9.15625 6.125H6.375V4.25C6.375 3.4375 6.75 2.6875 8 2.6875H9.28125V0.21875C9.28125 0.21875 8.125 0 7.03125 0C4.75 0 3.25 1.40625 3.25 3.90625V6.125H0.6875V9H3.25V16H6.375V9H8.71875Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  </FacebookShareButton>
                  <TwitterShareButton url={`https://nftconstructer.com/blog/${blog.slug}`}>
                  <div className={styles.soc_tag}>
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.3438 3.75C14.9688 3.28125 15.5312 2.71875 15.9688 2.0625C15.4062 2.3125 14.75 2.5 14.0938 2.5625C14.7812 2.15625 15.2812 1.53125 15.5312 0.75C14.9062 1.125 14.1875 1.40625 13.4688 1.5625C12.8438 0.90625 12 0.53125 11.0625 0.53125C9.25 0.53125 7.78125 2 7.78125 3.8125C7.78125 4.0625 7.8125 4.3125 7.875 4.5625C5.15625 4.40625 2.71875 3.09375 1.09375 1.125C0.8125 1.59375 0.65625 2.15625 0.65625 2.78125C0.65625 3.90625 1.21875 4.90625 2.125 5.5C1.59375 5.46875 1.0625 5.34375 0.625 5.09375V5.125C0.625 6.71875 1.75 8.03125 3.25 8.34375C3 8.40625 2.6875 8.46875 2.40625 8.46875C2.1875 8.46875 2 8.4375 1.78125 8.40625C2.1875 9.71875 3.40625 10.6562 4.84375 10.6875C3.71875 11.5625 2.3125 12.0938 0.78125 12.0938C0.5 12.0938 0.25 12.0625 0 12.0312C1.4375 12.9688 3.15625 13.5 5.03125 13.5C11.0625 13.5 14.3438 8.53125 14.3438 4.1875C14.3438 4.03125 14.3438 3.90625 14.3438 3.75Z"
                        fill="#14161B"
                      />
                    </svg>
                  </div>
                  </TwitterShareButton>
                <LinkedinShareButton url={`https://nftconstructer.com/blog/${blog.slug}`}>
                  <div className={styles.soc_tag}>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.125 14V4.65625H0.21875V14H3.125ZM1.65625 3.40625C2.59375 3.40625 3.34375 2.625 3.34375 1.6875C3.34375 0.78125 2.59375 0.03125 1.65625 0.03125C0.75 0.03125 0 0.78125 0 1.6875C0 2.625 0.75 3.40625 1.65625 3.40625ZM13.9688 14H14V8.875C14 6.375 13.4375 4.4375 10.5 4.4375C9.09375 4.4375 8.15625 5.21875 7.75 5.9375H7.71875V4.65625H4.9375V14H7.84375V9.375C7.84375 8.15625 8.0625 7 9.5625 7C11.0625 7 11.0938 8.375 11.0938 9.46875V14H13.9688Z"
                        fill="#14161B"
                      />
                    </svg>
                  </div>
                </LinkedinShareButton>
                <TelegramShareButton url={`https://nftconstructer.com/blog/${blog.slug}`}>
                  <div className={styles.soc_tag}>
                    {/* <TelegramIcon size={32} /> */}
                    <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM14.64 6.8C14.49 8.38 13.84 12.22 13.51 13.99C13.37 14.74 13.09 14.99 12.83 15.02C12.25 15.07 11.81 14.64 11.25 14.27C10.37 13.69 9.87 13.33 9.02 12.77C8.03 12.12 8.67 11.76 9.24 11.18C9.39 11.03 11.95 8.7 12 8.49C12.0069 8.45819 12.006 8.42517 11.9973 8.3938C11.9886 8.36244 11.9724 8.33367 11.95 8.31C11.89 8.26 11.81 8.28 11.74 8.29C11.65 8.31 10.25 9.24 7.52 11.08C7.12 11.35 6.76 11.49 6.44 11.48C6.08 11.47 5.4 11.28 4.89 11.11C4.26 10.91 3.77 10.8 3.81 10.45C3.83 10.27 4.08 10.09 4.55 9.9C7.47 8.63 9.41 7.79 10.38 7.39C13.16 6.23 13.73 6.03 14.11 6.03C14.19 6.03 14.38 6.05 14.5 6.15C14.6 6.23 14.63 6.34 14.64 6.42C14.63 6.48 14.65 6.66 14.64 6.8Z" fill="black"/>
</svg>
                  </div>
                </TelegramShareButton>
              </div>
            </div>
          </div>

          {/* <!---------------------- right side end-------------------------------> */}
          <div className={styles.blog_side}>
            <div className={styles.blog_txt_container}>
              <div className={styles.blog_txt}>
                <p className={styles.raleway_grey_14}>
                  <div
                    dangerouslySetInnerHTML={{ __html: blog.description }}
                  ></div>
                </p>
              </div>
            </div>
          </div>
        </section>
        <PostSubscriber />
        <LatestBlog />
      </div>
    </div>
    </>
  );
}

BlogDetails.layout = AppLayout;

