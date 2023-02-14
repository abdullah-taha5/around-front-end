import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SidebarBlogs from "../components/SidebarBlogs/SidebarBlogs";
import moment from "moment";

function Category() {
  const [blogsByCategory, setBlogsByCategory] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const getBlogsByCategories = async () => {
      const { data } = await axios.get(
        `https://blue-violet-kingfisher-gear.cyclic.app/api/blogs?category=${category}`
      );
      setBlogsByCategory(data);
    };
    getBlogsByCategories(blogsByCategory);
  }, [blogsByCategory]);
  const toggleLike = async (blogId) => {
    await axios.put(
      `https://blue-violet-kingfisher-gear.cyclic.app/api/blogs/like/${blogId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  };
  return (
    <div className="sidebar-enabled mt-7">
      <div className="container">
        <div className="row">
          <SidebarBlogs />
          <div className="col-lg-9 content py-4 mb-2 mb-sm-0 pb-sm-5">
            {blogsByCategory.map((blog) => {
              return (
                <article
                  className="card card-horizontal card-hover mb-grid-gutter"
                  key={blog._id}
                >
                  <Link
                    className="card-img-top"
                    to={`/blogs/details/${blog._id}`}
                    style={{ backgroundImage: `url(${blog.image.url})` }}
                  ></Link>
                  <div className="card-body">
                    <a className="meta-link fs-sm mb-2" href="#">
                      {blog.category}
                    </a>
                    <h6 className="h6 nav-heading mb-4">
                      <a href="blog-single-ls.html">{blog.title}</a>
                    </h6>
                    <h2 className="h4 nav-heading mb-4">
                      <a href="blog-single-ls.html">{blog.description}</a>
                    </h2>
                    <a
                      className="d-flex meta-link fs-sm align-items-center pt-3"
                      href="#"
                    >
                      <img
                        className="rounded-circle"
                        src={`${blog.user.profilePhoto.url}`}
                        alt="Emma Brown"
                        width="36"
                      />
                      <div className="ps-2 ms-1 mt-n1">
                        by
                        <span className="fw-semibold ms-1">
                          {blog.user.username}
                        </span>
                      </div>
                    </a>
                    <div
                      className="mt-3 text-end text-nowrap text-primary"
                      role="button"
                    >
                      <div
                        className="meta-link fs-xs"
                        onClick={() => toggleLike(blog._id)}
                      >
                        <i className="far fa-thumbs-up me-1"></i>&nbsp;
                        {blog.likes.length}
                      </div>

                      <span className="meta-divider"></span>
                      <div className="meta-link fs-xs">
                        <i className="far fa-comment-alt me-1"></i>&nbsp;
                        {blog.comments.length}
                      </div>
                      <span className="meta-divider"></span>
                      <a className="meta-link fs-xs" href="#">
                        <i className="far fa-calendar me-1 mt-n1"></i>&nbsp;{" "}
                        {moment(blog?.createdAt).fromNow()}
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
