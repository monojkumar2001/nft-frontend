import React from 'react'
import Styles from "../../styles/pages/SmartContractPage/beniFitsService.module.css"
import Image from 'next/image'
const BenifitsServiceItem = () => {
  return (
    <>
        <section>
        <div className="bene cpt-6">
          <div className="container">
            <div
              className="section-title"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p className="sm-title">BENIFITS OF</p>
              <h2 className="sec-title">Smart Contract Development Services</h2>
              <p className="sec-des">
                Our unique approach of developing smart contrats gives
                businesses the confidence of bigger investment. in blockchain
                technology.
              </p>
            </div>

            <div className="benefit-container cpt-7">
              <div className={Styles.benefit_box}>
                <div
                  className={Styles.benefit_item} 
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className={Styles.benefit_img}>
                    <Image
                      height={135}
                      width={134}
                      src="/assets/img/icon/4.png"
                      alt="nft constructer"
                    />
                  </div>
                  <div className={Styles.benefit_de}>
                    <h2>Secure & Safe</h2>
                    <p>
                      We offer highly secured protection against malicious
                      activities and fraud in the NFT craze.
                    </p>
                  </div>
                </div>

                <div
                  className={`${Styles.benefit_item} ${Styles.c_derection}`}
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className={Styles.benefit_de}>
                    <h2>Customized Solutions</h2>
                    <p>
                      All our smart contracts are completely built from scratch
                      & also tested with our developers team.
                    </p>
                  </div>
                  <div className={Styles.benefit_img}>
                      <Image
                      height={135}
                      width={134}
                      src="/assets/img/icon/5.png"
                      alt="nft constructer"
                    />
                  </div>
                </div>
                <div
                  className={Styles.benefit_item} 
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className={Styles.benefit_img}>
                  <Image
                      height={135}
                      width={134}
                      src="/assets/img/icon/6.png"
                      alt="nft constructer"
                    />
                  </div>
                  <div className={Styles.benefit_de}>
                    <h2>Highly Scalable</h2>
                    <p>
                      We will design an NFT Marketplace that can cope with newly
                      added listings and an expanding pool of customers
                    </p>
                  </div>
                </div>
                <div
                  className={`${Styles.benefit_item} ${Styles.c_derection}`}
                  data-aos="fade-up"
                  data-aos-duration="2500"
                >
                  <div className={Styles.benefit_de}>
                    <h2>Post-launch Support</h2>
                    <p>
                      NFT CONSTRUCTOR believes in customer satisfaction and
                      hence we provide on going support even after deployment.
                    </p>
                  </div>
                  <div className={Styles.benefit_img}>
                  <Image
                      height={135}
                      width={134}
                      src="/assets/img/icon/7.png"
                      alt="nft constructer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}

export default BenifitsServiceItem