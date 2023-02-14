import React, { Fragment } from "react";
import BlogItem from "./BlogItem";
import { useTranslation } from "react-i18next";

function BlogsList({ blogs }) {
  const { t, i18n } = useTranslation();

  return (
    <Fragment>
      <h1 className="mb-5">{t("allBlogs")}</h1>
      {blogs.map((item) => (
        <BlogItem blog={item} key={item._id} />
      ))}
    </Fragment>
  );
}

export default BlogsList;
