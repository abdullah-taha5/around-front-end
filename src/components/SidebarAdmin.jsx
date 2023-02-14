import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function SidebarAdmin({ userData }) {
  const { t, i18n } = useTranslation();

  return (
    <div className="col-lg-3 mb-4 mb-lg-0">
      <div className="bg-light rounded-3 shadow-lg" style={{overflowY: "auto", height: "100vh"}}>
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
          {userData.adminRole && (
            <Fragment>
              <h3 className="d-block bg-secondary fs-sm fw-semibold text-muted mb-0 px-4 py-3">
                {t("dashboard")}
              </h3>

              <NavLink
                to="/admin-dashboard/users"
                className="d-flex align-items-center nav-link-style px-4 py-3 border-top"
              >
                <i className="fas fa-users fs-lg opacity-60 px-2"></i>
                {t("users")}
              </NavLink>
              <NavLink
                to="/admin-dashboard/orders"
                className="d-flex align-items-center nav-link-style px-4 py-3 border-top"
              >
                <i className="fas fa-shopping-bag px-2"></i>
                {t("orders")}
              </NavLink>
              <h3 className="d-block bg-secondary fs-sm fw-semibold text-muted mb-0 px-4 py-3">
                {t("drivers")}
              </h3>
              <NavLink
                to="/admin-dashboard/add-driver"
                className="d-flex align-items-center nav-link-style px-4 py-3 border-top"
              >
                <i className="fas fa-plus fs-lg opacity-60 px-2"></i>
                {t("addDriver")}
              </NavLink>
              <NavLink
                to="/admin-dashboard/drivers"
                className="d-flex align-items-center nav-link-style px-4 py-3 border-top"
              >
                <i className="fas fa-users fs-lg opacity-60 px-2"></i>
                {t("drivers")}
              </NavLink>
              <h3 className="d-block bg-secondary fs-sm fw-semibold text-muted mb-0 px-4 py-3">
                {t("blogs")}
              </h3>

              <NavLink
                className="d-flex align-items-center nav-link-style px-4 py-3 border-top"
                to="/admin-dashboard/create-blog"
              >
                <i className="fas fa-plus fs-lg opacity-60 px-2"></i>
                {t("createBlog")}
              </NavLink>
              <NavLink
                className="d-flex align-items-center nav-link-style px-4 py-3 border-top"
                to="/admin-dashboard/create-category"
              >
                <i className="fas fa-plus fs-lg opacity-60 px-2"></i>
                {t("createCategory")}
              </NavLink>
              <NavLink
                className="d-flex align-items-center nav-link-style px-4 py-3 border-top"
                to="/admin-dashboard/all-blogs"
              >
                <i className="fas fa-square fs-lg opacity-60 px-2"></i>
                {t("allBlogs")}
              </NavLink>
              <NavLink
                className="d-flex align-items-center nav-link-style px-4 py-3 border-top"
                to="/admin-dashboard/comments"
              >
                <i className="fas fa-comments fs-lg opacity-60 px-2"></i>
                {t("comments")}
              </NavLink>
              <h3 className="d-block bg-secondary fs-sm fw-semibold text-muted mb-0 px-4 py-3">
              {t("frontEndSettings")}
            </h3>
            <NavLink
            className="d-flex align-items-center nav-link-style px-4 py-3 border-top"
            to="/admin-dashboard/front-end-settings/hero"
          >
            <i className="fas fa-edit fs-lg opacity-60 px-2"></i>
            Section Hero
          </NavLink>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

export default SidebarAdmin;
