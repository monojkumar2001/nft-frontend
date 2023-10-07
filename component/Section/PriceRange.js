import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import ReactWhatsapp from "react-whatsapp";
import styles from "../../styles/pages/HomePage/PriceRangeSlider.module.css"
function valuetext(value) {
  return `${value}USD`;
}

export default function DiscreteSlider({ valuetext }) {
  const [value, setValue] = React.useState(5000);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section>
      <div className={styles.price_range}>
        <div className="container">
          <div className={`section-title ${styles.price_range_width}`}>
            <h2 className="sec-title">
              Customize <span>pricing</span> and quafsdasdfotation methods.
            </h2>

            <p className="sec-des">
              Use our personalized pricing plans to bring in high-caliber for
              your project. Our pricing plan service combines the work of top
              team of developers from across the globe with technology that has
              been specifically designed for the purpose.
            </p>
          </div>
          <div className={styles.range_area}>
            <div className={styles.left_range}>
              <h3 className={styles.range_title}>What is your spending budget?</h3>
              <h2 className={styles.range_total}>$1k - $100k</h2>
              <Box className={styles.price_slider}>
                <Slider
                  aria-label="Temperature"
                  defaultValue={500}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  onChange={handleChange}
                  step={5000}
                  marks
                  min={1000}
                  max={100000}
                />
              </Box>
              <p>
                $5k - $10k $10k - $20k $20k - $40k $40k - $60k $60k - $100k
                $100k
              </p>
            </div>
            <div className={styles.right_telk}>
              <h2 className={styles.month_price}>
                ${value}/<span className="price-text">mo</span>
              </h2>
              <ReactWhatsapp
                number="+13025977087"
                message={`Hello, I chose this price ${value} USD for my project. Please contact me as soon as possible. Thank you`}
              >
                <div type="submit" className={styles.get_start_btn}>
                  Get Started
                </div>
              </ReactWhatsapp>
              <p>
                One time payment, no setup fees, pay only when you want to get
                started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
