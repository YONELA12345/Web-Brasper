import React, { useState, useContext } from "react";

const Login = () => {
  return (
    <>
      <div className="form-body without-side">
        <div className="website-logo">
          <a href="/">
            <div className="logo">
              <img
                className="logo-size"
                src="/assets/images/logos/logo-light.svg"
                alt="Logo"
              />
            </div>
          </a>
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
                <h3>Login to account</h3>
                <p>
                  Access to the most powerful tool in the entire design and web
                  industry.
                </p>
                <form>
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    placeholder="E-mail Address"
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
                      Login
                    </button>
                    <a href="forget">Forget password?</a>
                  </div>
                </form>
                <div className="other-links social-with-title">
                  <div className="text">Or login with</div>
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
                  <a href="/singup">Register new account</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
