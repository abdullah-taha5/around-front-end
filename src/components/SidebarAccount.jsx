import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function SidebarAccount({ userData }) {
  const { t, i18n } = useTranslation();
  const signOut = () => {
    localStorage.removeItem("token");
    window.location.pathname = "/signin";
  };
  return (
    <div className="col-lg-4 mb-4 mb-lg-0">
      <div className="bg-light rounded-3 shadow-lg">
        <div className="px-4 py-4 mb-1 text-center">
          <img
            className="d-block rounded-circle mx-auto my-2"
            src={userData.profilePhoto.url}
            alt={userData.username}
            width="110"
          />
          <h6 className="mb-0 pt-1">{userData.username}</h6>
          <span className="text-muted fs-sm">{userData.email}</span>
        </div>
        <div className="d-lg-none px-4 pb-4 text-center">
          <a
            className="btn btn-primary px-5 mb-2"
            href="#account-menu"
            data-bs-toggle="collapse"
          >
            <i className="fas fa-outdent px-2"></i>
            {t("accountMenu")}
          </a>
        </div>
        <div className="d-lg-block collapse pb-2" id="account-menu">
          <h3 className="d-block bg-secondary fs-sm fw-semibold text-muted mb-0 px-4 py-3">
            {t("dashboard")}
          </h3>
          <NavLink
            className="d-flex align-items-center nav-link-style px-4 py-3"
            to={`${
              userData.adminRole === false || userData.adminRole === true
                ? "/user/orders"
                : "/driver/orders"
            }`}
          >
            {t("orders")}
          </NavLink>
          <h3 className="d-block bg-secondary fs-sm fw-semibold text-muted mb-0 px-4 py-3">
            {t("accountSettings")}
          </h3>
          <NavLink
            className="d-flex align-items-center nav-link-style px-4 py-3"
            to="/profile/profile-info"
          >
            {t("profileInfo")}
          </NavLink>
          {userData.adminRole === false ||
            (userData.adminRole === true && (
              <NavLink
                className="d-flex align-items-center nav-link-style px-4 py-3"
                to="/profile/my-location"
              >
                {t("myLocation")}
              </NavLink>
            ))}

          <div
            className="d-flex align-items-center nav-link-style px-4 py-3 border-top"
            onClick={signOut}
            role="button"
          >
            <i className="fas fa-sign-out fs-lg opacity-60 px-2"></i>
            {t("signOut")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarAccount;
