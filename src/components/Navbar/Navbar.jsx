import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo-dark.png";
import logoIcon from "../../images/logo-icon.png";
import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";

function Navbar({ userData }) {
  const { t, i18n } = useTranslation();
  const changeLang = () => {
    document
      .getElementsByTagName("html")[0]
      .setAttribute("lang", i18n.language);
  };
  changeLang();
  return (
    <div className={`container px-0 px-xl-3 ${styles.navArabic}`}>
      <button
        className="navbar-toggler ms-n2 me-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#primaryMenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <NavLink
        className="navbar-brand flex-shrink-0 order-lg-1 mx-auto ms-lg-0 pe-lg-2 me-lg-4"
        to="/"
      >
        <img
          className="d-none d-lg-block"
          width="153"
          src={logo}
          alt="Around"
        />
        <img className="d-lg-none" width="58" src={logoIcon} alt="Around" />
      </NavLink>

      <div className="d-flex align-items-center order-lg-3 ms-lg-auto">
        {userData ? (
          <div className="navbar-tool">
            <NavLink className="navbar-tool-icon-box" to="/profile">
              <img
                className="navbar-tool-icon-box-img"
                src={userData.profilePhoto.url}
                alt={userData.username}
              />
            </NavLink>
            <NavLink className="navbar-tool-label" to="/profile">
              <small>{t("hello")}</small>
              {userData.username}
            </NavLink>
          </div>
        ) : (
          <Fragment>
            <NavLink className="nav-link-style fs-sm text-nowrap" to="/signin">
              <i className="far fa-user fs-xl mx-2 align-middle"></i>
              {t("signIn")}
            </NavLink>
            <NavLink
              className={`btn btn-primary ms-grid-gutter d-none d-lg-inline-block ${styles.btnSignIn}`}
              to="/signup"
            >
              {t("signUp")}
            </NavLink>
          </Fragment>
        )}
      </div>

      <div
        className={`offcanvas offcanvas-collapse order-lg-2`}
        id="primaryMenu"
        style={{ visibility: "hidden" }}
        aria-hidden="true"
      >
        <div
          className={`offcanvas-header navbar-shadow ${styles.navMenuHeaderArabic}`}
        >
          <h5 className="mt-1 mb-0">{t("menu")}</h5>
          <button
            className="btn-close lead"
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                {t("home")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/blogs">
                {t("blogs")}
              </NavLink>
            </li>
            {userData && (
              <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/profile">
                  {t("viewProfile")}
                </NavLink>
              </li>
              {userData.adminRole && (
                <li className="nav-item">
                <NavLink className="nav-link" to="/admin-dashboard">
                  {t("adminDashboard")}
                </NavLink>
              </li>
              )}
              </>
            )}
            <li className="nav-item">
              {i18n.language === "en" && (
                <button
                  type="button"
                  className="btn btn-secondary nav-link"
                  onClick={() => {
                    i18n.changeLanguage("ar");
                  }}
                >
                  العربية
                </button>
              )}
              {i18n.language === "ar" && (
                <button
                  type="button"
                  className="btn btn-secondary nav-link"
                  onClick={() => {
                    i18n.changeLanguage("en");
                  }}
                >
                  English
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
