import React from "react";
import logoIcon from "../images/logo-icon.png";

function Footer() {
  return (
    <footer className="footer bg-dark pt-5 pb-4">
      <div className="container pb-2 text-center text-md-start">
        <div className="row pt-md-3 pb-3">
          <div className="col-lg-3 col-md-2">
            <a
              className="d-block mx-auto mb-4"
              href="index.html"
              style={{ width: "70px" }}
            >
              <img src={logoIcon} alt="Around" />
            </a>
          </div>
          <div className="col-lg-3 col-md-4 pb-4">
            <div className="widget widget-light">
              <h4 className="widget-title mb-3">Contacts</h4>
              <ul>
                <li>
                  <a className="widget-link" href="mailto:contact@example.com">
                    contact@example.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 pb-4">
            <div className="widget widget-light">
              <h4 className="widget-title mb-3">Collaboration</h4>
              <ul>
                <li>
                  <a className="widget-link" href="tel:9107848015">
                    910-784-8015
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 pb-4">
            <div className="widget widget-light">
              <h4 className="widget-title mb-3">Follow</h4>
              <a
                className="btn-social bs-outline bs-light bs-facebook bs-lg me-2 mb-2"
                href="#"
              >
                <i className="ai-facebook"></i>
              </a>
              <a
                className="btn-social bs-outline bs-light bs-twitter bs-lg me-2 mb-2"
                href="#"
              >
                <i className="ai-twitter"></i>
              </a>
              <a
                className="btn-social bs-outline bs-light bs-instagram bs-lg me-2 mb-2"
                href="#"
              >
                <i className="ai-instagram"></i>
              </a>
              <a
                className="btn-social bs-outline bs-light bs-google bs-lg mb-2"
                href="#"
              >
                <i className="ai-google"></i>
              </a>
            </div>
          </div>
        </div>
        <p className="fs-sm text-center mb-0">
          <span className="text-light opacity-50">
            © All rights reserved. Made by{" "}
          </span>
          <a
            className="nav-link-style nav-link-light"
            href="https://createx.studio/"
            target="_blank"
            rel="noopener"
          >
            Stackdeans
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
