import React from 'react'
import Styles from '../../styles/pages/AboutPage/AboutPage.module.css'
const SolvingProblem = () => {
  return (
    <>

{/* {/ <!-- ================ Solving Problem Services start ================ --> /} */}
        <section className="solving-problem-service cpt-7">
          <div className="container">
            <div className="solving-problem-service-wrapper">
              <div className={Styles.solving_problem_service_content}>
                <h3>Solving Problem By the Services</h3>
                <p>
                  NFT Constructer is a blockchain development company that has
                  been providing innovative solutions to clients around the
                  world for the past five years. With a team of more than 100
                  experienced and passionate team of developers, designers &
                  marketing experts , NFT Constructer offers a wide range of
                  services that cover the entire blockchain Web3 development
                  process. From smart contract development and NFT development
                  to DeFi development, Metaverse development, website design,
                  marketing, and website analysis, they have the expertise and
                  resources to deliver on any project.NFT Constructer is
                  committed to staying up-to-date on the latest blockchain and
                  web3 technologies, and has developed a comprehensive suite of
                  tools and resources to ensure that their services remain at
                  the highest level. They also focus on providing a secure and
                  reliable environment for their clients and have implemented
                  stringent security measures to ensure the safety and privacy
                  of their data.
                </p>
              </div>
              <div className={`${Styles.solving_problem_video} cpy-6`}>
                <div className={Styles.video_wrapper}>
                    <video
                      className={Styles.video_controls}
                      controls
                      src="https://res.cloudinary.com/ddu4x2opv/video/upload/v1683695137/nft-constructer/NFT_Constructer_Promo_wf7cmp.mp4"
                    ></video>
                  </div>
              </div>
            </div>
          </div>
        </section>
        {/* {/ <!-- ================ Solving Problem Services end ================ --> /} */}
    </>
  )
}

export default SolvingProblem