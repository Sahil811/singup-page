import React from "react";
import "./index.scss";
import InputValidation from "../../components/InputValidation";

const Signup = () => {
  return (
    <div className="signup">
      <div className="signup_container">
        <div className="signup_container_images">
          <img
            className="signup_container_images_cover"
            src={require("../../assets/images/cover.png").default}
            alt="cover"
          />
          <img
            className="signup_container_images_logo"
            src={require("../../assets/svg/logo.svg").default}
            alt="logo"
          />
        </div>

        <div className="signup_content">
          <div className="signup_content_heading">Let's Get Started.</div>
          <div className="signup_content_subHeading">
            Discover the best places in the world at your fingertips!
          </div>

          <div className="signup_content_inputContainers">
            <InputValidation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
