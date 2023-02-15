import React, { useEffect, useState } from "react";
// import bgPeople from "../images/people.png";
// import heroBg from "../images/hero-bg.jpg";
import axios from "axios";

function Hero() {
  const [backgroundUrl, setBackgroundUrl] = useState(null);
  const [h1Text, setH1Text] = useState(null);
  const [spanOneText, setSpanOneText] = useState(null);
  const [spanTwoText, setSpanTwoText] = useState(null);
  const [buttonText, setButtonText] = useState(null);
  useEffect(() => {
    const getHero = async () => {
      const { data } = await axios.get(
        "https://blue-violet-kingfisher-gear.cyclic.app/api/section/hero"
      );
      setBackgroundUrl(data.background.url);
      setH1Text(data.h1);
      setSpanOneText(data.spanOne);
      setSpanTwoText(data.spanTwo);
      setButtonText(data.button);
    };
    getHero();
  }, [backgroundUrl, spanOneText, spanTwoText, buttonText]);

  return (
    <section
      className={`bg-size-cover overflow-hidden pt-5 pt-md-6 pt-lg-7`}
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        height: "100vh",
      }}
    >
      <div className="container position-relative zindex-5 pt-2 pb-4 pb-md-2">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-7 col-md-8 text-center">
            {h1Text !== "null" && (
              <h1 className="display-4 text-light mb-4">{h1Text}</h1>
            )}

            {spanOneText !== "null" && (
              <div className="d-inline-flex align-items-center mx-1 px-3 mb-4">
                <span className="text-light">{spanOneText}</span>
              </div>
            )}

            {spanTwoText !== "null" && (
              <div className="d-inline-flex align-items-center mx-1 px-3 mb-4">
                <span className="text-light">{spanTwoText}</span>
              </div>
            )}

            {buttonText !== "null" && (
              <div className="pt-2">
                <a className="btn btn-success" href="#tickets" data-scroll>
                  {buttonText}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
