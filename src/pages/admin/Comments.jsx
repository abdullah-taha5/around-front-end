import axios from "axios";
import moment from "moment";
import React, { Fragment, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import SidebarAdmin from "../../components/SidebarAdmin";

function Comments({ userData }) {
  const [comments, setComments] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const getBlogs = async () => {
      const { data } = await axios.get(`https://blue-violet-kingfisher-gear.cyclic.app/api/comments`);
      setComments(data);
    };
    getBlogs();
  }, [comments]);

  const deleteComment = async (id) => {
    const { data } = await axios.delete(
      `https://blue-violet-kingfisher-gear.cyclic.app/api/comments/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    if (data.message === "Comment deleted") return toast.success(data.message);
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
          <div className="table-responsive col-lg-8">
            <table className="table table-dark table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>{t("blogTitle")}</th>
                  <th>{t("blogCategory")}</th>
                  <th>{t("comment")}</th>
                  <th>{t("createdBy")}</th>
                  <th>{t("createdAt")}</th>
                  <th>{t("actions")}</th>
                </tr>
              </thead>
              <tbody>
                {comments.map((comment, i) => (
                  <tr key={comment._id}>
                    <th scope="row">{i + 1}</th>
                    <td>{comment.blogId.title}</td>
                    <td>{comment.blogId.category}</td>
                    <td>{comment.text}</td>
                    <td>{comment.user.username}</td>
                    <td>{moment(comment.createdAt).fromNow()}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteComment(comment._id)}
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

export default Comments;
