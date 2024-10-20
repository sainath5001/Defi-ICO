import React from "react";

const Hero = ({ transferNativeToken }) => {
  return (
    <section
      data-settings="particles-1"
      className="main-section crumina-flying-balls particles-js bg-1"
    >
      <div className="container">
        <div className="row medium-padding120 align-center">
          <div className="col-lg-8 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12">
            <header className="crumina-module crumina-heading heading--h2 heading--with-decoration">
              <div className="heading-sup-title">Coin Market</div>
              <h2 className="heading-title heading--half-colored">
                Created Liqudity Marketplace
              </h2>
              <div className="heading-text">
              Welcome to our Created Liquidity Marketplace, where seamless trading meets innovative technology.
               Our platform empowers users to easily access and manage liquidity across various assets. 
               With real-time data and user-friendly features, we’re redefining the way you engage with financial markets. 
               Join us to explore endless possibilities in liquidity trading!


              </div>
            </header>

            <a
              onClick={() => transferNativeToken()}
              // href="#buyWoox"
              className="btn btn--large btn--primary btn--transparent"
            >
              Get LiquidityHub Token Now!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
