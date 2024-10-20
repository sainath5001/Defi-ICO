import React, { useState } from "react";

import { Input } from "./index";

const ICOSale = ({ tokenSale, nativeToken, buyToken }) => {
  const [tokenQuantity, setTokenQuantity] = useState();

  const precentage =
    `${tokenSale?.tokenSold / tokenSale?.tokenSaleBalance}` * 100;
  return (
    <section
      id="tokenBuy"
      className="medium-padding120 responsive-align-center"
    >
      <div className="container" id="buyWoox">
        <div className="row bg-2">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mb30">
            <header className="crumina-module crumina-heading heading--h2 heading--with-decoration">
              <img src="img/dots.png" className="responsive-dots mb30" alt="" />
              <h2 className="heading-title weight-normal">
                Hurry to investe
                <span className="weight-bold"> in cryptocurrency</span>
              </h2>

              <div className="heading-text">
              Don’t miss out on the opportunity to invest in the future of finance! 
              Hurry and secure your stake in the booming cryptocurrency market today!
              </div>
            </header>

            <p>
            With unprecedented growth potential and innovative technology driving the cryptocurrency landscape,
             now is the perfect time to act. Join a community of forward-thinking investors who are embracing this digital revolution. 
             Our platform offers you the tools and insights to make informed investment decisions. 
             Dive into the world of cryptocurrency and unlock your financial potential today!


            </p>

            <div className="crumina-module crumina-counter-item counter--icon-left mt60">
              <svg className="woox-icon">
                <use xlinkHref="#icon-group"></use>
              </svg>

              <div className="counter-content">
                <div className="counter-numbers counter">
                  <span>{nativeToken?.tokenTotalSupply}</span>
                  <div className="units">+</div>
                </div>

                <h4 className="counter-title">{nativeToken?.tokenSymbol}</h4>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-lg-offset-0 col-sm-12 col-xs-12">
            <div className="widget w-distribution-ends countdown-bg1">
              <h5 className="title">Woox token for sale</h5>

              <div className="new_center_img mt30">
                <img
                  src="img/nopool.png"
                  className="responsive-width-50"
                  alt=""
                />
              </div>

              <Input
                placeholder={"token Quantity"}
                handleClick={(e) => setTokenQuantity(e.target.value)}
              />

              <a
                onClick={() => buyToken(tokenQuantity)}
                className="btn btn--large btn--green-light"
              >
                Buy Woox Tokens
              </a>

              <div className="crumina-module crumina-skills-item skills-item--bordered">
                <div className="skills-item-info">
                  <span className="skills-item-title">
                    {tokenSale?.tokenSold}

                    <span className="skills-item-count c-primary">
                      <span className="count-animate"></span>
                      <span className="units">
                        Balance: {nativeToken?.tokenBalance}
                      </span>
                    </span>
                  </span>
                </div>

                <div className="skills-item-meter">
                  <span
                    className="skills-item-meter-active bg-primary-color"
                    style={{ width: `${precentage}%` }}
                  ></span>
                </div>

                <span className="add-info">
                  <span>
                    <span className="c-link-color">Market Cap: </span>
                    {tokenSale?.tokenPrice * tokenSale?.tokenSaleBalance}
                  </span>

                  <span className="c-link-color">Matic</span>
                </span>
              </div>

              <div className="price-wrap">
                <div className="token-price">
                  Token Price:
                  <div className="price-value">{tokenSale?.tokenPrice}</div>
                </div>

                <div className="token-total">
                  Total {nativeToken?.tokenSymbol} Tokens:
                  <div className="price-value">
                    {tokenSale?.tokenSaleBalance}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ICOSale;
