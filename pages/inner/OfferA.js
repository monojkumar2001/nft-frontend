import { useState, useEffect } from "react";
import Link from "next/link";
function OfferA() {
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPopup(true);
    }, 1000);
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
              <div className="popup-top-img">
                <img
                  height="auto"
                  width="auto"
                  src="assets/images/popup/top-img.png"
                  alt=""
                />
              </div>
              <div className="popup-line-img">
                <img
                  height="auto"
                  width="auto"
                  src="assets/images/popup/line.webp"
                  alt=""
                />
              </div>
              <div className="popup-bottom-img">
                <img
                  height="auto"
                  width="auto"
                  src="assets/images/popup/bottom.png"
                  alt=""
                />
              </div>
              <h2>Got An <span>Idea</span> In Your Mind?</h2>
              <p>But You Are For <span>Confused </span> About  DevOps <span>Agile Methodology?</span></p>
            </div>
            <div className="popop-content-right">
              <h2>Schedule A Meeting</h2>
              <p>Our team of experts will guide you to achieve the goals  to launch a billion-dollar start-up on the NFT Fintech and Crypto Platform with its new, exciting features and capabilities.</p>
              <div className="popop-list">
                <p><span><svg width="18" height="18" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="13.9707" cy="13.5236" r="13.0176" fill="#6C54EA" />
                  <path d="M12.5614 18.0593C12.4302 18.0596 12.3001 18.0339 12.1788 17.9838C12.0575 17.9337 11.9472 17.8601 11.8544 17.7673L7.61243 13.5243C7.51685 13.4321 7.4406 13.3218 7.3881 13.1999C7.33561 13.0779 7.30793 12.9467 7.30668 12.8139C7.30544 12.6811 7.33065 12.5494 7.38084 12.4265C7.43103 12.3036 7.50521 12.1919 7.59903 12.0979C7.69286 12.004 7.80446 11.9296 7.92732 11.8793C8.05018 11.8289 8.18184 11.8035 8.31462 11.8046C8.44739 11.8056 8.57863 11.8331 8.70067 11.8854C8.82271 11.9378 8.93311 12.0139 9.02543 12.1093L12.5604 15.6443L18.9254 9.2813C19.1129 9.09366 19.3673 8.98819 19.6326 8.9881C19.8978 8.988 20.1523 9.09329 20.3399 9.2808C20.5276 9.46831 20.633 9.72268 20.6331 9.98795C20.6332 10.2532 20.5279 10.5077 20.3404 10.6953L13.2684 17.7673C13.1756 17.8601 13.0654 17.9337 12.944 17.9838C12.8227 18.0339 12.6927 18.0596 12.5614 18.0593Z" fill="white" />
                </svg>
                </span>
                  Fill in your brief
                </p>
                <p><span><svg width="18" height="18" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="13.9707" cy="13.5236" r="13.0176" fill="#6C54EA" />
                  <path d="M12.5614 18.0593C12.4302 18.0596 12.3001 18.0339 12.1788 17.9838C12.0575 17.9337 11.9472 17.8601 11.8544 17.7673L7.61243 13.5243C7.51685 13.4321 7.4406 13.3218 7.3881 13.1999C7.33561 13.0779 7.30793 12.9467 7.30668 12.8139C7.30544 12.6811 7.33065 12.5494 7.38084 12.4265C7.43103 12.3036 7.50521 12.1919 7.59903 12.0979C7.69286 12.004 7.80446 11.9296 7.92732 11.8793C8.05018 11.8289 8.18184 11.8035 8.31462 11.8046C8.44739 11.8056 8.57863 11.8331 8.70067 11.8854C8.82271 11.9378 8.93311 12.0139 9.02543 12.1093L12.5604 15.6443L18.9254 9.2813C19.1129 9.09366 19.3673 8.98819 19.6326 8.9881C19.8978 8.988 20.1523 9.09329 20.3399 9.2808C20.5276 9.46831 20.633 9.72268 20.6331 9.98795C20.6332 10.2532 20.5279 10.5077 20.3404 10.6953L13.2684 17.7673C13.1756 17.8601 13.0654 17.9337 12.944 17.9838C12.8227 18.0339 12.6927 18.0596 12.5614 18.0593Z" fill="white" />
                </svg>
                </span>
                  Include points of engagement
                </p>          <p><span><svg width="18" height="18" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="13.9707" cy="13.5236" r="13.0176" fill="#6C54EA" />
                  <path d="M12.5614 18.0593C12.4302 18.0596 12.3001 18.0339 12.1788 17.9838C12.0575 17.9337 11.9472 17.8601 11.8544 17.7673L7.61243 13.5243C7.51685 13.4321 7.4406 13.3218 7.3881 13.1999C7.33561 13.0779 7.30793 12.9467 7.30668 12.8139C7.30544 12.6811 7.33065 12.5494 7.38084 12.4265C7.43103 12.3036 7.50521 12.1919 7.59903 12.0979C7.69286 12.004 7.80446 11.9296 7.92732 11.8793C8.05018 11.8289 8.18184 11.8035 8.31462 11.8046C8.44739 11.8056 8.57863 11.8331 8.70067 11.8854C8.82271 11.9378 8.93311 12.0139 9.02543 12.1093L12.5604 15.6443L18.9254 9.2813C19.1129 9.09366 19.3673 8.98819 19.6326 8.9881C19.8978 8.988 20.1523 9.09329 20.3399 9.2808C20.5276 9.46831 20.633 9.72268 20.6331 9.98795C20.6332 10.2532 20.5279 10.5077 20.3404 10.6953L13.2684 17.7673C13.1756 17.8601 13.0654 17.9337 12.944 17.9838C12.8227 18.0339 12.6927 18.0596 12.5614 18.0593Z" fill="white" />
                </svg>
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

export default OfferA;
