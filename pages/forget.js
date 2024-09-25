import React, { useState, useContext } from "react";

const Forget = () => {
  return (
    <>
      <div className="form-body without-side">
        <div className="website-logo">
          <a href="index.html">
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
                <h3>Password Reset</h3>
                <p>
                  To reset your password, enter the email address you use to
                  sign in to iofrm
                </p>
                <form>
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    placeholder="E-mail Address"
                    required
                  />
                  <div className="form-button full-width">
                    <button
                      id="submit"
                      type="submit"
                      className="ibtn btn-forget"
                    >
                      Send Reset Link
                    </button>
                  </div>
                </form>
              </div>
              <div className="form-sent">
                <div className="tick-holder">
                  <div className="tick-icon"></div>
                </div>
                <h3>Password link sent</h3>
                <p>Please check your inbox iofrm@iofrmtemplate.io</p>
                <div className="info-holder">
                  <span>Unsure if that email address was correct?</span>{" "}
                  <a href="#">We can help</a>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forget;
