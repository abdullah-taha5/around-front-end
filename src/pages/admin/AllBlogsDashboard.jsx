import axios from "axios";
import moment from "moment";
import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import SidebarAdmin from "../../components/SidebarAdmin";

function AllBlogsDashboard({ userData }) {
  const [allblogs, setAllBlogs] = useState([]);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const getBlogs = async () => {
      const { data } = await axios.get(`https://blue-violet-kingfisher-gear.cyclic.app/api/blogs`);
      setAllBlogs(data);
    };

    getBlogs();
  }, [allblogs]);

  const deleteBlog = async (id) => {
    const { data } = await axios.delete(
      `https://blue-violet-kingfisher-gear.cyclic.app/api/blogs/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (data.message === "Blog deleted successfully")
      return toast.success(data.message);
  };

  return (
    <Fragment>
      <ToastContainer />
      <div
        className="position-relative bg-gradient"
        style={{ height: "480px" }}
      >
        <div className="shape shape-bottom shape-slant bg-secondary d-none d-lg-block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 260">
            <polygon
              fill="currentColor"
              points="0,257 0,260 3000,260 3000,0"
            ></polygon>
          </svg>
        </div>
      </div>
      <div
        className="container position-relative zindex-5 pb-4 mb-md-3"
        style={{ marginTop: "-350px" }}
      >
        <div className="row">
          <SidebarAdmin userData={userData} />
          <div className="col-lg-8" style={{overflowX: "auto"}}>
            <table className="table table-dark table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>{t("image")}</th>
                  <th>{t("title")}</th>
                  <th>{t("category")}</th>
                  <th>{t("createdBy")}</th>
                  <th>{t("createdAt")}</th>
                  <th>{t("actions")}</th>
                </tr>
              </thead>
              <tbody>
                {allblogs.map((blog, i) => (
                  <tr key={blog._id}>
                    <th scope="row">{i + 1}</th>
                    <td>
                      <img
                        src={blog.image.url}
                        alt={blog.title}
                        width="50px"
                        height="50px"
                        className="rounded"
                      />
                    </td>
                    <td>{blog.title}</td>
                    <td>{blog.category}</td>
                    <td>{blog.user.username}</td>
                    <td>{moment(blog.createdAt).fromNow()}</td>
                    <td>
                      <button
                        className="btn btn-danger mx-2"
                        onClick={() => deleteBlog(blog._id)}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AllBlogsDashboard;
