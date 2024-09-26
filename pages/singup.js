import React from "react";
import Link from "next/link";

const Pricing = () => {
  return (
    <>
      <div className="form-body without-side">
        <div className="website-logo">
          <Link href="/" legacyBehavior>
            <a>
              <div className="logo">
                <img
                  className="logo-size"
                  src="/assets/images/logos/logo-light.svg"
                  alt="Logo"
                />
              </div>
            </a>
          </Link>
        </div>
        <div className="iofrm-layout">
          <div className="img-holder">
            <div className="bg"></div>
            <div className="info-holder">
              <img src="/assets/images/logos/graphic3.svg" alt="Graphic" />
            </div>
          </div>
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <h3>Register new account</h3>
                <p>
                  Access to the most powerful tool in the entire design and web
                  industry.
                </p>
                <form>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                  />
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="E-mail Address"
                    required
                  />
                
                  <input
                    className="form-control"
                    type="number"
                    name="number"
                    placeholder="+xx "
                    required
                  />
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                  <div className="form-button">
                    <button id="submit" type="submit" className="ibtn">
                      Register
                    </button>
                  </div>
                </form>
                <div className="other-links social-with-title">
                  <div className="text">Or register with</div>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>Facebook
                  </a>
                  <a href="#">
                    <i className="fab fa-google"></i>Google
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>Linkedin
                  </a>
                </div>
                <div className="page-links">
                  <Link href="/login" legacyBehavior>
                    <a>Login to account</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Pricing;
