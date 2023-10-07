import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Styles from '../../styles/section/Footer.module.css'

function Footer() {
  const [posts, setPosts] = useState([]);
  const [facebook, setFacebook] = useState([]);
  const [twitter, setTwitter] = useState([]);
  const [linledin, setLinkedin] = useState([]);
  const [youtube, setYoutube] = useState([]);

  useEffect(() => {
    axios.get('https://api.nftconstructer.com/api/social')
    // axios.get('http://127.0.0.1:8000/api/social')
    .then((res)=> {
      setFacebook(res.data.data.find(res => res.slug == 'facebook'))
      setTwitter(res.data.data.find(res => res.slug == 'twitter'))
      setLinkedin(res.data.data.find(res => res.slug == 'linkedin'))
      setYoutube(res.data.data.find(res => res.slug == 'youtube'))
    });
  }, []);

  const [sticky, setStickys] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setStickys(true);
      } else {
        setStickys(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    fetch("https://api.nftconstructer.com/api/latest/there")
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });
  }, []);

  return (
    <>
      <div className={`${Styles.footer_area}`}>
        <div className="container">
          <footer className={Styles.footer_wrapper}>
            <div className={Styles.footer_list}>
              <h3 className={Styles.footer_item_title}>NAVIGATE</h3>
              <div className={Styles.footer_item_List}>
                <Link href={"/"}>
                 Home
                </Link>
                <Link href={"/about"}>
                  About Us
                </Link>
                <Link href={"/blog"}>
                 Blog
                </Link>
                <Link href={"/contact"}>
                  Contact Us
                </Link>
                <Link href={"/portfolio"}>
                  Our works
                </Link>
              </div>
            </div>
            <div className={Styles.footer_list}>
              <h3 className={Styles.footer_item_title}>Services</h3>
              <div className={Styles.footer_item_List}>
                <Link href={"/nft-website-development"}>
                NFT Development 
                </Link>
                <Link href={"/defi-development"}>
                DeFi Development
                </Link>
                <Link href={"/metaverse"}>
                Metaverse Development
                </Link>
                <Link href={"/marketing"}>
                Marketing
                </Link>
                <Link href={"/website-design"}>
                Website Design
                </Link>
                <Link href={"/smart-contract"}>
                Smart Contact Development
                </Link>
              </div>
            </div>
            <div className={Styles.footer_list}>
              <h3 className={Styles.footer_item_title}>Marketing Talent</h3>
              <div className={Styles.footer_item_List}>
                <Link href={"/privacy-policy"}>
                 Privacy Policy
                </Link>
                <Link href={"/cookies-policy"}>
                  Cookies Policy
                </Link>
                <Link href={"/refund-policy"}>
                  Refund Policy
                </Link>
                <Link href={"/contact"}>
               Customer Support
                </Link>
                <Link href={"/terms"}>
                 Terms & Conditions
                </Link>
              </div>
            </div>

            <div className={Styles.footer_list}>
              <h3 className={Styles.footer_item_title}>Follow Us</h3>
              <div className={Styles.footer_item_List}>
                <Link
                  href="https://www.facebook.com/nftconstructer"
                  target={"_blank"}
                >
                 Facebook
                </Link>
                <Link href="https://twitter.com/NftConstructer" target={"_blank"}>
                 Twitter
                </Link>
                <Link
                  href="https://instargam.com/NftConstructer"
                  target={"_blank"}
                >
                  Instagram
                </Link>
                <Link href="https://discord.gg/2HEujEtWnE" target={"_blank"}>
                 Discord
                </Link>
                <Link href="https://Linkedin.com/NftConstructer" target={"_blank"}>
                Linkedin
                </Link>
              </div>
            </div>
          </footer>
        </div>

        <div className={`${Styles.last_footer} cpb-6`}>
          <div className="container">
            <div className={Styles.rowf}>
              <div className="col-md-6">
                <div className={Styles.last_footer_content}>
                  <p>30N Gould Street</p>
                  <p>Sheridan WY 82801</p>
                  <p>+13025977087,United States</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className={Styles.right_footer_social}>
                  <div className={Styles.last_footer_content}>
                    <div className={Styles.footer_links}>
                      <Link href='https://www.facebook.com/nftconstructer' target="_blank">
                        <div>
                          <svg
                            width="8"
                            height="14"
                            viewBox="0 0 8 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.08398 7.9375L7.43945 5.60156H5.17969V4.07812C5.17969 3.41797 5.48438 2.80859 6.5 2.80859H7.54102V0.802734C7.54102 0.802734 6.60156 0.625 5.71289 0.625C3.85938 0.625 2.64062 1.76758 2.64062 3.79883V5.60156H0.558594V7.9375H2.64062V13.625H5.17969V7.9375H7.08398Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </Link>
                      <Link href="https://twitter.com/NftConstructer" target={"_blank"}>
                        <div>
                          <svg
                            width="13"
                            height="12"
                            viewBox="0 0 13 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.6543 3.48438C12.1621 3.10352 12.6191 2.64648 12.9746 2.11328C12.5176 2.31641 11.9844 2.46875 11.4512 2.51953C12.0098 2.18945 12.416 1.68164 12.6191 1.04688C12.1113 1.35156 11.5273 1.58008 10.9434 1.70703C10.4355 1.17383 9.75 0.869141 8.98828 0.869141C7.51562 0.869141 6.32227 2.0625 6.32227 3.53516C6.32227 3.73828 6.34766 3.94141 6.39844 4.14453C4.18945 4.01758 2.20898 2.95117 0.888672 1.35156C0.660156 1.73242 0.533203 2.18945 0.533203 2.69727C0.533203 3.61133 0.990234 4.42383 1.72656 4.90625C1.29492 4.88086 0.863281 4.7793 0.507812 4.57617V4.60156C0.507812 5.89648 1.42188 6.96289 2.64062 7.2168C2.4375 7.26758 2.18359 7.31836 1.95508 7.31836C1.77734 7.31836 1.625 7.29297 1.44727 7.26758C1.77734 8.33398 2.76758 9.0957 3.93555 9.12109C3.02148 9.83203 1.87891 10.2637 0.634766 10.2637C0.40625 10.2637 0.203125 10.2383 0 10.2129C1.16797 10.9746 2.56445 11.4062 4.08789 11.4062C8.98828 11.4062 11.6543 7.36914 11.6543 3.83984C11.6543 3.71289 11.6543 3.61133 11.6543 3.48438Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </Link>
                      <Link  href="https://Linkedin.com/NftConstructer" target={"_blank"}>
                        <div>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M2.53906 12V4.4082H0.177734V12H2.53906ZM1.3457 3.39258C2.10742 3.39258 2.7168 2.75781 2.7168 1.99609C2.7168 1.25977 2.10742 0.650391 1.3457 0.650391C0.609375 0.650391 0 1.25977 0 1.99609C0 2.75781 0.609375 3.39258 1.3457 3.39258ZM11.3496 12H11.375V7.83594C11.375 5.80469 10.918 4.23047 8.53125 4.23047C7.38867 4.23047 6.62695 4.86523 6.29688 5.44922H6.27148V4.4082H4.01172V12H6.37305V8.24219C6.37305 7.25195 6.55078 6.3125 7.76953 6.3125C8.98828 6.3125 9.01367 7.42969 9.01367 8.31836V12H11.3496Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </Link>
                      <Link href={'/'}>
                        <div>
                          <svg
                            width="15"
                            height="10"
                            viewBox="0 0 15 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.9395 1.79883C13.7871 1.18945 13.3047 0.707031 12.7207 0.554688C11.6289 0.25 7.3125 0.25 7.3125 0.25C7.3125 0.25 2.9707 0.25 1.87891 0.554688C1.29492 0.707031 0.8125 1.18945 0.660156 1.79883C0.355469 2.86523 0.355469 5.15039 0.355469 5.15039C0.355469 5.15039 0.355469 7.41016 0.660156 8.50195C0.8125 9.11133 1.29492 9.56836 1.87891 9.7207C2.9707 10 7.3125 10 7.3125 10C7.3125 10 11.6289 10 12.7207 9.7207C13.3047 9.56836 13.7871 9.11133 13.9395 8.50195C14.2441 7.41016 14.2441 5.15039 14.2441 5.15039C14.2441 5.15039 14.2441 2.86523 13.9395 1.79883ZM5.89062 7.20703V3.09375L9.49609 5.15039L5.89062 7.20703Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </Link>
                    </div>
                    <p>© Nft Constructer 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${sticky ? "is-stickys" : ""} ${Styles.end_footer}`}>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className={Styles.end_footer_content}>
                  <h3>Let’s Get Started Today</h3>

                  <button
                    className={Styles.find_expert_btn}
                    onClick={(e) => {
                      e.preventDefault(); // Prevent the default link behavior
                      Tawk_API.toggle(); // Your JavaScript code here
                    }}
                  >
                    Find an Expert
                    <svg
                      width="24"
                      height="16"
                      viewBox="0 0 24 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23.7071 8.53132C24.0976 8.1408 24.0976 7.50763 23.7071 7.11711L17.3431 0.753149C16.9526 0.362625 16.3195 0.362625 15.9289 0.75315C15.5384 1.14367 15.5384 1.77684 15.9289 2.16736L21.5858 7.82422L15.9289 13.4811C15.5384 13.8716 15.5384 14.5048 15.9289 14.8953C16.3195 15.2858 16.9526 15.2858 17.3431 14.8953L23.7071 8.53132ZM8.74228e-08 8.82422L23 8.82422L23 6.82422L-8.74228e-08 6.82422L8.74228e-08 8.82422Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
