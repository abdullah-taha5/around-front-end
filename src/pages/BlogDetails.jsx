import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";

function BlogDetails({ userData }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [username, setUsername] = useState("");
  const [imageBlogSrc, setImageBlogSrc] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);
  const [createdAt, setCreatedAt] = useState("");
  const [textComment, setTextComment] = useState("");
  const { id } = useParams();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const getBlogData = async () => {
      const { data } = await axios.get(`https://blue-violet-kingfisher-gear.cyclic.app/api/blogs/${id}`);

      setTitle(data.title);
      setDescription(data.description);
      setImageBlogSrc(data.image.url);
      setComments(data.comments);
      setLikes(data.likes);
      setUsername(data.user.username);
      setProfilePicture(data.user.profilePhoto.url);
      setCreatedAt(data.createdAt);
    };
    getBlogData();
  }, [comments, likes]);
  const sendComment = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://blue-violet-kingfisher-gear.cyclic.app/api/comments",
        { blogId: id, text: textComment },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setTextComment("");
    } catch (error) {
      toast.error(t("pleaseSignIn"));
    }
  };

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
    <div className="sidebar-enabled mt-5">
      <ToastContainer />
      <div className="container">
        <div className="row">
          {/** Content */}
          <div className="col-lg-9 content py-4 mb-2 mb-sm-0 pb-sm-5">
            <div className="pb-4 " style={{ maxWidth: "38rem" }}>
              <h1 className="mt-5">{title}</h1>
            </div>
            {/** Post author */}
            <div className="row position-relative g-0 align-items-center border-top border-bottom mb-4">
              <div className="col-md-6 py-3 pe-md-3">
                <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                  <div className="d-flex align-items-center me-grid-gutter">
                    <a className="d-block" href="#">
                      <img
                        className="rounded-circle mx-1"
                        src={profilePicture}
                        alt="Emma Brown"
                        width="64"
                      />
                    </a>
                    <div className="ps-2">
                      <h6 className="nav-heading mb-1">
                        <a href="#">{username}</a>
                      </h6>
                      <div className="text-nowrap">
                        <div className="meta-link fs-xs">
                          <i className="far fa-calendar px-1 align-vertical"></i>
                          &nbsp;{moment(createdAt).fromNow()}
                        </div>
                        <span className="meta-divider"></span>
                        <a
                          className="meta-link fs-xs"
                          href="#comments"
                          data-scroll
                        >
                          <i className="far fa-comment-alt px-1 align-vertical"></i>
                          &nbsp;{comments.length}
                        </a>
                        <span className="meta-divider"></span>

                        <div
                          className="meta-link fs-xs"
                          role="button"
                          onClick={() => toggleLike(id)}
                        >
                          <i className="far fa-thumbs-up px-1"></i>
                          {likes.length}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Post content*/}
            <p className="py-3">{description}</p>
            <div>
              <img
                src={imageBlogSrc}
                className="img-fluid mb-3"
                style={{ maxHeight: "450px" }}
                alt={title}
              />
            </div>

            {/** Comments */}
            <div className="pb-4 mb-5" id="comments">
              <h2 className="h3 pb-4">
                {comments.length} {t("comments")}
              </h2>
              {comments.map((comment) => (
                <div className="comment" key={comment._id}>
                  <p>{comment.text}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle"
                        src={comment.profilePhoto}
                        alt="Tim Brooks"
                        width="42"
                      />
                      <div className="ps-2 ms-1">
                        <h4 className="fs-sm mb-0">{comment.username}</h4>
                        <span className="fs-xs text-muted">
                          {moment(comment.createdAt).fromNow()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <a
                className="btn btn-translucent-primary d-block w-100"
                href="#comment-form"
                data-bs-toggle="collapse"
              >
                {t("joinTheConversation")}
              </a>
              {/** Comment Form */}
              <div className="collapse" id="comment-form">
                <form
                  className="needs-validation bg-light rounded-3 shadow p-4 p-lg-5 mt-4"
                  onSubmit={sendComment}
                >
                  <div className="mb-3">
                    <label className="form-label" htmlFor="com-text">
                      {t("comment")}
                      <sup className="text-danger ms-1">*</sup>
                    </label>
                    <textarea
                      className="form-control"
                      id="com-text"
                      rows="6"
                      placeholder={t("writeYourCommentHere")}
                      onChange={(e) => setTextComment(e.target.value)}
                      required
                    ></textarea>
                    <div className="valid-feedback">Looks good!</div>
                  </div>
                  <button className="btn btn-primary" type="submit">
                    {t("postComment")}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
