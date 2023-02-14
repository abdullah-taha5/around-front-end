import React, { Fragment } from "react";
import imgSpeakerOne from "../images/02.jpg";
import bgVideo from "../images/video-bg.jpg";
import partnerOneColor from "../images/01_color.png";
import partnerOneGray from "../images/01_gray.png";
import mapImg from "../images/map.png";
import locationImg from "../images/01.jpg";
import Footer from "../components/Footer";
import Blogs from "./Blogs";
import Hero from "../components/Hero";

function Home() {
  return (
    <Fragment>
      {/** Hero */}
      <Hero />
      {/** Speakers */}
      <section className="container pt-5 pb-4 pb-md-5 pb-lg-6 pt-md-6 pt-lg-7">
        <h2 className="text-center pt-2 pt-md-0 mb-5">Speakers</h2>
        <div className="row pb-3 pb-md-0">
          <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
            <div
              className="card card-curved-body card-hover border-0 shadow mx-auto"
              style={{ maxWidth: "20rem" }}
            >
              <a className="card-floating-icon" href="#">
                <i className="ai-instagram"></i>
              </a>
              <div className="card-img-top card-img-gradient">
                <img src={imgSpeakerOne} alt="Sarah Cole" />
              </div>
              <div className="card-body text-center">
                <h3 className="h6 card-title mb-2">Sarah Cole</h3>
                <p className="fs-xs text-body mb-0">Social media strategist</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
            <div
              className="card card-curved-body card-hover border-0 shadow mx-auto"
              style={{ maxWidth: "20rem" }}
            >
              <a className="card-floating-icon" href="#">
                <i className="ai-instagram"></i>
              </a>
              <div className="card-img-top card-img-gradient">
                <img src={imgSpeakerOne} alt="Charlie Welch" />
              </div>
              <div className="card-body text-center">
                <h3 className="h6 card-title mb-2">Charlie Welch</h3>
                <p className="fs-xs text-body mb-0">Instagram expert</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
            <div
              className="card card-curved-body card-hover border-0 shadow mx-auto"
              style={{ maxWidth: "20rem" }}
            >
              <a className="card-floating-icon" href="#">
                <i className="ai-instagram"></i>
              </a>
              <div className="card-img-top card-img-gradient">
                <img src={imgSpeakerOne} alt="Emma Brown" />
              </div>
              <div className="card-body text-center">
                <h3 className="h6 card-title mb-2">Emma Brown</h3>
                <p className="fs-xs text-body mb-0">Content creator</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mb-grid-gutter">
            <div
              className="card card-curved-body card-hover border-0 shadow mx-auto"
              style={{ maxWidth: "20rem" }}
            >
              <a className="card-floating-icon" href="#">
                <i className="ai-instagram"></i>
              </a>
              <div className="card-img-top card-img-gradient">
                <img src={imgSpeakerOne} alt="Rosalie Lyons" />
              </div>
              <div className="card-body text-center">
                <h3 className="h6 card-title mb-2">Rosalie Lyons</h3>
                <p className="fs-xs text-body mb-0">Social media educator</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/** Video */}
      <section className="bg-secondary">
        <div className="row g-0">
          <div
            className="col-md-6 jarallax py-7"
            data-jarallax
            data-speed="0.3"
          >
            <span
              className="position-absolute top-0 start-0 w-100 h-100 bg-black"
              style={{ opacity: "40%" }}
            ></span>
            <div
              className="jarallax-img"
              style={{ backgroundImage: `url(${bgVideo})` }}
            ></div>
            <div className="position-relative zindex-5 d-flex flex-column align-items-center justify-content-center h-100 px-3 py-4 py-lg-7">
              <a
                className="btn-video mb-3"
                href="https://www.youtube.com/watch?v=zpmRmIFnO6c"
                data-sub-html='&lt;h6 className="fs-sm text-light"&gt;Instagram Marketing Conference 2020&lt;/h6&gt;'
              ></a>
              <span className="fw-medium text-light">
                Click me to watch video!
              </span>
            </div>
          </div>
          <div className="col-md-6 px-3 pe-xl-0 ps-lg-5 ps-xl-6 py-2 py-lg-4">
            <div
              className="ms-sm-4 py-5 my-sm-0 py-md-6 py-lg-7"
              style={{ maxWidth: "520px" }}
            >
              <h2 className="mb-5">Why you should join the event?</h2>
              <div className="d-flex align-items-start mb-grid-gutter">
                <img className="d-block mt-1" src="" alt="Icon" width="43" />
                <div className="ps-4 ms-2">
                  <h3 className="h5 mb-1">Latest technology &amp; Content</h3>
                  <p className="fs-sm mb-0">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-grid-gutter">
                <img className="d-block mt-1" src="" alt="Icon" width="43" />
                <div className="ps-4 ms-2">
                  <h3 className="h5 mb-1">Creativity &amp; Storytelling</h3>
                  <p className="fs-sm mb-0">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia occaecati cupiditate non provident.
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <img className="d-block mt-1" src="" alt="Icon" width="43" />
                <div className="ps-4 ms-2">
                  <h3 className="h5 mb-1">Monetization &amp; Commerce</h3>
                  <p className="fs-sm mb-0">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/** Digits */}

      <section className="container py-4 pt-md-6 pt-lg-7 pb-md-5">
        <div className="row pb-lg-4 pt-3">
          <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center mb-grid-gutter">
            <h3 className="display-2 fw-normal mb-0">3</h3>
            <p className="text-muted fs-lg mb-0">Days</p>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center mb-grid-gutter">
            <h3 className="display-2 fw-normal mb-0">10</h3>
            <p className="text-muted fs-lg mb-0">
              Daily
              <br />
              workshops
            </p>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center mb-grid-gutter">
            <h3 className="display-2 fw-normal mb-0">6+</h3>
            <p className="text-muted fs-lg mb-0">
              Group
              <br />
              discussions
            </p>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center mb-grid-gutter">
            <h3 className="display-2 fw-normal mb-0">8</h3>
            <p className="text-muted fs-lg mb-0">Speakers</p>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center mb-grid-gutter">
            <h3 className="display-2 fw-normal mb-0">5</h3>
            <p className="text-muted fs-lg mb-0">Countries</p>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4 col-6 text-center mb-grid-gutter">
            <h3 className="display-2 fw-normal mb-0">900</h3>
            <p className="text-muted fs-lg mb-0">Guests</p>
          </div>
        </div>
      </section>

      {/** Tickers */}
      <section
        className="container position-relative zindex-5 mt-2 mt-md-5"
        id="tickets"
      >
        <div className="row justify-content-center">
          <div className="col-lg-10 col-md-11">
            <div className="bg-gradient rounded-3 pt-5 px-4 pb-4 p-sm-5">
              <div className="px-md-4">
                <h2 className="text-light text-center pb-4">Buy tickets</h2>
                <div className="d-sm-flex justify-content-between align-items-center bg-light rounded-3 px-3 py-4 p-sm-4 mb-grid-gutter text-center text-sm-start">
                  <div className="me-sm-3 mb-4 mb-sm-0">
                    <h3 className="h6 mb-2">Full conference pass</h3>
                    <p className="mb-0">3 days full access + Lunch + Gifts</p>
                  </div>
                  <a className="btn btn-primary" href="#">
                    Buy Now
                  </a>
                </div>
                <div className="d-sm-flex justify-content-between align-items-center bg-light rounded-3 px-3 py-4 p-sm-4 mb-grid-gutter text-center text-sm-start">
                  <div className="me-sm-3 mb-4 mb-sm-0">
                    <h3 className="h6 mb-2">1 day pass</h3>
                    <p className="mb-0">1 day full access + Lunch + Gifts</p>
                  </div>
                  <a className="btn btn-primary" href="#">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/** Partners */}
      <section
        className="position-relative bg-secondary pt-5 pb-4 pb-md-5 pt-md-6 pt-lg-7"
        style={{ marginTop: "-260px" }}
      >
        <div style={{ height: "260px" }}></div>
        <div className="shape shape-top shape-curve bg-body">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
            <path
              fill="currentColor"
              d="M3000,185.4V0H0v185.4C496.4,69.8,996.4,12,1500,12S2503.6,69.8,3000,185.4z"
            ></path>
          </svg>
        </div>
        <div className="container pt-3 pt-md-0 pb-md-2">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-3 col-sm-4 col-6 text-center">
                  <a className="swap-image mb-grid-gutter" href="#">
                    <img
                      className="swap-to"
                      src={partnerOneColor}
                      alt="Logo"
                      width="176"
                    />
                    <img
                      className="swap-from"
                      src={partnerOneGray}
                      alt="Logo"
                      width="176"
                    />
                  </a>
                </div>
                <div className="col-md-3 col-sm-4 col-6 text-center">
                  <a className="swap-image mb-grid-gutter" href="#">
                    <img
                      className="swap-to"
                      src={partnerOneColor}
                      alt="Logo"
                      width="176"
                    />
                    <img
                      className="swap-from"
                      src={partnerOneGray}
                      alt="Logo"
                      width="176"
                    />
                  </a>
                </div>
                <div className="col-md-3 col-sm-4 col-6 text-center">
                  <a className="swap-image mb-grid-gutter" href="#">
                    <img
                      className="swap-to"
                      src={partnerOneColor}
                      alt="Logo"
                      width="176"
                    />
                    <img
                      className="swap-from"
                      src={partnerOneGray}
                      alt="Logo"
                      width="176"
                    />
                  </a>
                </div>
                <div className="col-md-3 col-sm-4 col-6 text-center">
                  <a className="swap-image mb-grid-gutter" href="#">
                    <img
                      className="swap-to"
                      src={partnerOneColor}
                      alt="Logo"
                      width="176"
                    />
                    <img
                      className="swap-from"
                      src={partnerOneGray}
                      alt="Logo"
                      width="176"
                    />
                  </a>
                </div>
                <div className="col-md-3 col-sm-4 col-6 text-center">
                  <a className="swap-image mb-grid-gutter" href="#">
                    <img
                      className="swap-to"
                      src={partnerOneColor}
                      alt="Logo"
                      width="176"
                    />
                    <img
                      className="swap-from"
                      src={partnerOneGray}
                      alt="Logo"
                      width="176"
                    />
                  </a>
                </div>
                <div className="col-md-3 col-sm-4 col-6 text-center">
                  <a className="swap-image mb-grid-gutter" href="#">
                    <img
                      className="swap-to"
                      src={partnerOneColor}
                      alt="Logo"
                      width="176"
                    />
                    <img
                      className="swap-from"
                      src={partnerOneGray}
                      alt="Logo"
                      width="176"
                    />
                  </a>
                </div>
                <div className="col-md-3 col-sm-4 col-6 text-center">
                  <a className="swap-image mb-grid-gutter" href="#">
                    <img
                      className="swap-to"
                      src={partnerOneColor}
                      alt="Logo"
                      width="176"
                    />
                    <img
                      className="swap-from"
                      src={partnerOneGray}
                      alt="Logo"
                      width="176"
                    />
                  </a>
                </div>
                <div className="col-md-3 col-sm-4 col-6 text-center">
                  <a className="swap-image mb-grid-gutter" href="#">
                    <img
                      className="swap-to"
                      src={partnerOneColor}
                      alt="Logo"
                      width="176"
                    />
                    <img
                      className="swap-from"
                      src={partnerOneGray}
                      alt="Logo"
                      width="176"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5 py-md-6 py-lg-7">
        <div className="row py-3">
          <div className="col-lg-4 col-md-5 mb-5 mb-md-0">
            <h2 className="mb-3">Location</h2>
            <p className="fs-sm mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <h3 className="h6">Hotel Oranfe</h3>
            <ul className="list-unstyled mb-5">
              <li className="mb-0">2703 Evergreen Lane</li>
              <li className="mb-0">Los Angeles, California</li>
            </ul>
            <ul className="list-unstyled mb-5">
              <li className="d-flex align-items-center mb-2">
                <i className="ai-check-square fs-xl me-2"></i>
                <span className="fw-semibold ps-1">Parking for free</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="ai-check-square fs-xl me-2"></i>
                <span className="fw-semibold ps-1">Cafe and restaurant</span>
              </li>
              <li className="d-flex align-items-center">
                <i className="ai-check-square fs-xl me-2"></i>
                <span className="fw-semibold ps-1">Book room</span>
              </li>
            </ul>
            <div className="gallery" lg-uid="lg0">
              <a
                className="gallery-item map-popup rounded-circle text-center"
                href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26435.920790306365!2d-118.41704346384354!3d34.08258320225705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2C%20USA!5e0!3m2!1sen!2sua!4v1589884573291!5m2!1sen!2sua"
                data-iframe="true"
                data-sub-html='<h6 class="fs-sm text-light">2703  Evergreen Lane, Los Angeles, CA</h6>'
              >
                <img src={mapImg} alt="Map" />
                <span className="gallery-caption">
                  <i className="ai-maximize-2 fs-xl mt-n1 me-2"></i>Expand the
                  map
                </span>
              </a>
            </div>
          </div>
          <div className="col-xl-6 col-md-7 offset-xl-2 offset-lg-1 px-sm-3">
            <div className="row mx-n2 mx-sm-n3 gallery" lg-uid="lg1">
              <div className="col-6 px-2 px-md-3">
                <a
                  className="gallery-item rounded-3 mb-3 mb-md-0"
                  href="img/demo/event-landing/gallery/01.jpg"
                  data-sub-html='<h6 class="fs-sm text-light">Conference restaurant</h6>'
                >
                  <img src={locationImg} alt="Gallery thumbnail" />
                  <span className="gallery-caption">Conference restaurant</span>
                </a>
                <div className="d-none d-md-block mb-grid-gutter"></div>
                <a
                  className="gallery-item rounded-3"
                  href="img/demo/event-landing/gallery/03.jpg"
                  data-sub-html='<h6 class="fs-sm text-light">Confernce cafe</h6>'
                >
                  <img src={locationImg} alt="Gallery thumbnail" />
                  <span className="gallery-caption">Confernce cafe</span>
                </a>
              </div>
              <div className="col-6 px-2 px-md-3 pt-md-6">
                <a
                  className="gallery-item rounded-3 mb-3 mb-md-0"
                  href="img/demo/event-landing/gallery/02.jpg"
                  data-sub-html='<h6 class="fs-sm text-light">Main auditorium</h6>'
                >
                  <img src={locationImg} alt="Gallery thumbnail" />
                  <span className="gallery-caption">Main auditorium</span>
                </a>
                <div className="d-none d-md-block mb-grid-gutter"></div>
                <a
                  className="gallery-item rounded-3"
                  href="img/demo/event-landing/gallery/04.jpg"
                  data-sub-html='<h6 class="fs-sm text-light">Meeting room</h6>'
                >
                  <img src={locationImg} alt="Gallery thumbnail" />
                  <span className="gallery-caption">Meeting room</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/** Blogs */}
      <Blogs />
      <Footer />
    </Fragment>
  );
}

export default Home;
