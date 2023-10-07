import React, { useEffect, useState } from "react";
import AppLayout from "../../component/Layout/Layout";
import Head from "next/head";
import Link from "next/link";
import OfferA from "../inner/OfferA";
import { Blocks } from "react-loader-spinner";
import axios from "axios";
import { fontSize } from "@mui/system";

import styles from "../../styles/pages/BlogPage/BlogPage.module.css";

function Blog() {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nftconstructer.com/api/blog")
      .then((res) => setPosts(res.data));
    setLoading(false);

    // fetch("https://api.nftconstructer.com/api/blog")
    //   .then((res) => res.json())
    //   .then(
    //     (result) => {
    //       setIsLoaded(true);
    //       setPosts(result);
    //     },
    //     (error) => {
    //       setIsLoaded(true);
    //       setError(error);
    //     }
    //   );
  }, []);

  if (loading) {
    return (
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
      />
    );
  }

  return (
    <>
      <Head>
        <title>
          Explore more about nft defi and blockchain fundamentals- NFT
          Constructer
        </title>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://nftconstructer.com/blog" />
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <link rel="canonical" href="https://nftconstructer.com/blog" />

        <meta
          name="description"
          content="Blockchain development is increasing day by day and business of nft development, metaverse development, DeFi development getting important…"
        ></meta>
        <meta
          name="og:description"
          content="Blockchain development is increasing day by day and business of nft development, metaverse development, DeFi development getting important…"
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Explore more about nft defi and blockchain fundamentals- NFT Constructer"
        />
        <meta property="og:image" content="assets/img/meta/blog.jpg" />
        <meta property="image" content="assets/img/meta/blog.jpg" />
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

      <section id="blog" className={`${styles.blog_page} cpy-6`}>
      <div className={styles.yellow_filter}></div>
        <div className={styles.blue_filter}></div>
        <div className="container">
          <div className={styles.section_title}>
            <p className={styles.sm_title}>My Blog</p>
            <h2 className={styles.sec_title}>Latest News</h2>
            <p className="sec-des">
              Get more software development information about exchange software
              wallet software derivate products and ETC
            </p>
          </div>

          <div className={styles.blog_container}>
            {posts.length == 0 ? (
              <Blocks
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
              />
            ) : (
              posts.map((post, index) => (
                <div className={styles.blog_post} key={index}>
                  <div className={styles.blog_img}>
                    <img
                      height="auto"
                      width="auto"
                      src={post.main_image}
                      alt={post.seo_title}
                    />
                  </div>
                  <div className={styles.about_blog}>
                    {/* <Link href={post.slug}>
                      <a className="urbanist-black-18">
                        {post.title.substring(0, 40)}
                      </a>
                    </Link> */}
                    <Link href={`/blog/${post.slug}`}>
                      <a className={styles.urbanist_black_18}>{post.title}</a>
                    </Link>
                    <p className={styles.raleway_grey_16}>
                      <span className={styles.author_name_post}>
                        {post.author}
                      </span>{" "}
                      <div className={styles.space}>|</div>
                      <span className="post-date">{post.created_date}</span>
                    </p>
                    <p
                      className="sm-des"
                      dangerouslySetInnerHTML={{
                        __html: post.description.substring(0, 100),
                      }}
                    ></p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}

Blog.layout = AppLayout;

export default Blog;
