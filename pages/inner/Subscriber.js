import React, { Component } from "react";
import axios from "axios";

class Subscriber extends Component {
  state = {
    email: "",
  };

  handelInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  Subscriber = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "https://api.nftconstructer.com/api/subscriber",
      this.state
    );
    if (res.data.status === 200) {
      console.log(res.data.message);
      this.setState({
        email: "",
      });
      alert(res.data.message);
    } else {
      console.log(res.data.message);
      alert(res.data.message);
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.Subscriber}>
          <div className="news-letter-from">
            <p>Enter your email</p>
            <div className="input-group-footer mb-3">
              <input
                type="email"
                className="form-control-newsletter"
                placeholder="abcd@gmail.com"
                required
                name="email"
                onChange={this.handelInput}
                value={this.state.email}
              />
              <button className="sbmt-btn" type="submit" id="button-addon2">
                Subscribe
              </button>
            </div>
          </div>
          {/* ===================Newsletter section end ================== */}
        </form>
      </>
    );
  }
}
export default Subscriber;
