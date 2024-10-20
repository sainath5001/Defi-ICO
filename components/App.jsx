import React from "react";

const App = () => {
  return (
    <section className="medium-padding120 responsive-align-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <header className="crumina-module crumina-heading heading--h2 heading--with-decoration">
              <div className="heading-sup-title">Top-5 Cryptocurrency</div>
              <h2 className="heading-title weight-normal">
                Statistic of currencies on{" "}
                <span className="weight-bold">all your deveices</span>
              </h2>

              <div className="heading-text">
              Access comprehensive currency statistics across all your devices, ensuring you stay informed wherever you are. 
              Our platform delivers real-time data on market trends, 
              price changes, and trading volumes, allowing you to monitor your investments effortlessly.
              </div>
            </header>

            <p>
            With a user-friendly interface and seamless synchronization,
             you can track currency performance from your desktop, tablet, or mobile phone.
             Empower your trading decisions with accurate insights and never miss a crucial market update.
            </p>

            <div className="btn-market-wrap mt60">
              <a
                href="#"
                className="btn btn--market btn--apple btn--with-icon btn--icon-left"
              >
                <svg className="woox-icon icon-apple">
                  <use xlinkHref="#icon-apple"></use>
                </svg>

                <div className="text">
                  <span className="sup-title">download on</span>
                  <span className="title">Apple Store</span>
                </div>
              </a>
              <a
                href="#"
                className="btn btn--market btn--apple btn--with-icon btn--icon-left"
              >
                <svg className="woox-icon icon-if-59-play-843782">
                  <use xlinkHref="#icon-if-59-play-843782"></use>
                </svg>

                <div className="text">
                  <span className="sup-title">download on</span>
                  <span className="title">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt30">
            <img className="responsive-width-50" src="img/phone.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
