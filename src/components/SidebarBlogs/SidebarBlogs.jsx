import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

function SidebarBlogs() {
  const [categories, setCategories] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const getAllCategories = async () => {
      const { data } = await axios.get("https://blue-violet-kingfisher-gear.cyclic.app/api/categories");
      setCategories(data);
    };

    getAllCategories();
  }, [categories]);
  return (
    <Fragment>
      <div className="sidebar col-lg-3 pt-lg-5">
        <div className="offcanvas offcanvas-collapse" id="blog-sidebar">
          <div className="offcanvas-header navbar-shadow px-4 mb-3">
            <h5 className="mt-1 mb-0">{t("categories")}</h5>
            <button
              className="btn-close lead"
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div
            className="offcanvas-body px-4 pt-3 pt-lg-0 ps-lg-0 pe-lg-2 pe-xl-4"
            data-simplebar
          >
            <div className="widget widget-categories mb-5">
              <ul>
                {categories.map((category) => (
                  <li key={category._id}>
                    <Link
                      className="d-flex align-items-center nav-link-style py-2"
                      to={`/blogs/${category.title}`}
                    >
                      {category.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    className="d-flex align-items-center nav-link-style py-2"
                    to="/blogs"
                  >
                    {t("allBlogs")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button
        className="btn btn-primary btn-sm d-lg-none position-fixed bottom-0 start-0 w-100 border-0"
        style={{ zIndex: "999999" }}
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#blog-sidebar"
      >
        {t("categories")}
      </button>
    </Fragment>
  );
}

export default SidebarBlogs;
