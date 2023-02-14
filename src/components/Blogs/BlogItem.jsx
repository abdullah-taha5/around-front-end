import React from "react";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";

function BlogItem({ blog }) {
  const { t, i18n } = useTranslation();

  const toggleLike = async (blogId) => {
    try {
      await axios.put(
        `https://blue-violet-kingfisher-gear.cyclic.app/api/blogs/like/${blogId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
    } catch (error) {
      toast.error(t("pleaseSignIn"));
    }
  };
  return (
    <Link to={`/blogs/details/${blog._id}`}>
      <article className="card card-horizontal card-hover mb-grid-gutter">
        <Link
          className="card-img-top"
          to={`/blogs/details/${blog._id}`}
          style={{ backgroundImage: `url(${blog.image.url})` }}
        ></Link>

        <div className="card-body">
          <Link
            className="meta-link fs-sm mb-2"
            to={`/blogs/details/${blog._id}`}
          >
            {blog.category}
          </Link>
          <h6 className="h6 nav-heading mb-4">{blog.title}</h6>
          <h2 className="h4 nav-heading mb-4">{blog.description}</h2>
          <Link
            className="d-flex meta-link fs-sm align-items-center pt-3"
            to={`/blogs/details/${blog._id}`}
          >
            <img
              className="rounded-circle"
              src={`${blog.user.profilePhoto.url}`}
              alt={`${blog.user.username}`}
              width="36"
            />
            <div className="px-2 ms-1 mt-n1">
              <span className="fw-semibold ms-1">{blog.user.username}</span>
            </div>
          </Link>
          <div className="mt-3 text-end text-nowrap text-primary" role="button">
            <div
              className="meta-link fs-xs"
              onClick={() => toggleLike(blog._id)}
            >
              <i className="far fa-thumbs-up px-1"></i>&nbsp;{blog.likes.length}
            </div>

            <span className="meta-divider"></span>
            <div className="meta-link fs-xs" role="button">
              <i className="far fa-comment-alt px-1"></i>&nbsp;
              {blog.comments.length}
            </div>
            <span className="meta-divider"></span>
            <Link className="meta-link fs-xs" to={`/blogs/details/${blog._id}`}>
              <i className="far fa-calendar px-1 mt-n1"></i>&nbsp;
              {moment(blog.createdAt).fromNow()}
            </Link>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default BlogItem;
