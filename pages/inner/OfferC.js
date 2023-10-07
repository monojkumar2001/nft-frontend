import { useState, useEffect } from "react";
import Link from "next/link";
import Check from "../../component/svg/Check";
function OfferC() {
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPopup(true);
    }, 3000);
  }, []);

  const ClosePopup = () => {
    setPopup(false);
  };

  return (
    <div>
      <div className={`${popup ? "active" : ""} offer-a`}>
        <div className="popup-width-item">
          <button className="close-btn" onClick={ClosePopup}>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.87305 1.73169L18.9141 18.7722" stroke="#000" strokeWidth="4" />
              <path d="M1.87305 18.7726L18.9136 1.73157" stroke="#000" strokeWidth="4" />
            </svg>
          </button>
          <div className="popup-area-item">
            <div className="popop-content-left">
              <h2>Got An <span>Idea</span> In Your Mind?</h2>
              <p>But You Are For <span>Confused </span> About  DevOps <span>Agile Methodology?</span></p>
            </div>
            <div className="popop-content-right">
              <h2>Schedule A Meeting</h2>
              <p>Our team of experts will guide you to achieve the goals  to launch a billion-dollar start-up on the NFT Fintech and Crypto Platform with its new, exciting features and capabilities.</p>
              <div className="popop-list">
                <p><span>
                    <Check />
                </span>
                  Fill in your brief
                </p>
                <p><span>
                    <Check />
                </span>
                  Include points of engagement
                </p>          
                <p><span>
                    <Check />
                </span>
                  Tell us exactly what you need
                </p>
              </div>
              <div className="popup-content-input">
                <Link href={"/connect"}>
                  <button className="submit-btn popup-btn" type="button" onClick={ClosePopup}>
                    Get 1 Hour Free Consulation
                  </button>
                </Link>
              </div>
            </div>
          </div>

          

        </div>
      </div>
    </div>
  );
}

export default OfferC;
