import React, { useState } from "react";
import Styles from "../../styles/section/NftDevelopmentTechStack.module.css";

import {
  BlockChainPlatformData,
  StoragePlatformData,
  NFTStandardsData,
  FrontEndFrameworksData,
  ProgrammingLanguagesData,
  CloudPlatformsData,
} from "../../pages/Data/NftTeckStackData/NftTeckStackData";
import Image from "next/image";
const NftDevelopmentTechStack = ({ short_dis }) => {
  const [service, setService] = useState(1);
  return (
    <>
      {/* ===================development track ================== */}
      <section className={`${Styles.development_track} cpt-6`} id="nft-development">
        <div className="container">
          <div className="section-title">
            <p className="sm-title">Best services</p>
            <h2 className="sec-title">NFT Development Tech Stack</h2>
            <p>{short_dis}</p>
          </div>
          <div
            className={Styles.options}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div
              className={
                service === 1
                  ? `${Styles.option} ${Styles.active}`
                  : `${Styles.option}`
              }
              onClick={() => {
                setService(1);
              }}
            >
              <p>BlockChain Platform</p>
            </div>
            <div
              className={
                service === 2
                  ? `${Styles.option} ${Styles.active}`
                  : `${Styles.option}`
              }
              onClick={() => {
                setService(2);
              }}
            >
              <p>Storage Platform</p>
            </div>
            <div
              className={
                service === 3
                  ? `${Styles.option} ${Styles.active}`
                  : `${Styles.option}`
              }
              onClick={() => {
                setService(3);
              }}
            >
              <p>NFT Standards</p>
            </div>
            <div
              className={
                service === 4
                  ? `${Styles.option} ${Styles.active}`
                  : `${Styles.option}`
              }
              onClick={() => {
                setService(4);
              }}
            >
              <p>Front End Frameworks</p>
            </div>
            <div
              className={
                service === 5
                  ? `${Styles.option} ${Styles.active}`
                  : `${Styles.option}`
              }
              onClick={() => {
                setService(5);
              }}
            >
              <p>Programming Languages</p>
            </div>
            <div
              className={
                service === 6
                  ? `${Styles.option} ${Styles.active}`
                  : `${Styles.option}`
              }
              onClick={() => {
                setService(6);
              }}
            >
              <p>Cloud Platforms</p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <div
              className={
                service === 1
                  ? `${Styles.coins} ${Styles.active}`
                  : `${Styles.coins}`
              }
            >
              {BlockChainPlatformData.map((item, i) => {
                return (
                  <div className={Styles.nft_coin} key={i}>
                    <Image
                      height={50}
                      width={50}
                      src={item.img}
                      alt="nft-constructer"
                    />
                    <p>{item.title}</p>
                  </div>
                );
              })}
            </div>
            <div
              className={
                service === 2
                  ? `${Styles.coins} ${Styles.active}`
                  : `${Styles.coins}`
              }
            >
              {StoragePlatformData.map((item, i) => {
                return (
                  <div className={Styles.nft_coin} key={i}>
                    <Image
                      height={50}
                      width={50}
                      src={item.img}
                      alt="nft-constructer"
                    />
                    <p>{item.title}</p>
                  </div>
                );
              })}
            </div>
            <div
              className={
                service === 3
                  ? `${Styles.coins} ${Styles.active}`
                  : `${Styles.coins}`
              }
            >
              {NFTStandardsData.map((item, i) => {
                return (
                  <div className={Styles.nft_coin} key={i}>
                    <Image
                      height={50}
                      width={50}
                      src={item.img}
                      alt="nft-constructer"
                    />
                    <p>{item.title}</p>
                  </div>
                );
              })}
            </div>

            <div
              className={
                service === 4
                  ? `${Styles.coins} ${Styles.active}`
                  : `${Styles.coins}`
              }
            >
              {FrontEndFrameworksData.map((item, i) => {
                return (
                  <div className={Styles.nft_coin} key={i}>
                    <Image
                      height={50}
                      width={50}
                      src={item.img}
                      alt="nft-constructer"
                    />
                    <p>{item.title}</p>
                  </div>
                );
              })}
            </div>

            <div
              className={
                service === 5
                  ? `${Styles.coins} ${Styles.active}`
                  : `${Styles.coins}`
              }
            >
              {ProgrammingLanguagesData.map((item, i) => {
                return (
                  <div className={Styles.nft_coin} key={i}>
                    <Image
                      height={50}
                      width={50}
                      src={item.img}
                      alt="nft-constructer"
                    />
                    <p>{item.title}</p>
                  </div>
                );
              })}
            </div>

            <div
              className={
                service === 6
                  ? `${Styles.coins} ${Styles.active}`
                  : `${Styles.coins}`
              }
            >
              {CloudPlatformsData.map((item, i) => {
                return (
                  <div className={Styles.nft_coin} key={i}>
                    <Image
                      height={50}
                      width={50}
                      src={item.img}
                      alt="nft-constructer"
                    />
                    <p>{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={Styles.red_filter}></div>
      </section>
    </>
  );
};

export default NftDevelopmentTechStack;
