import React, { useEffect, useRef } from "react";
import { Fragment } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useTranslation } from "react-i18next";
import SidebarAdmin from "../../components/SidebarAdmin";

function CreateBlog({ userData }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const inputImageRef = useRef();
  const { t, i18n } = useTranslation();

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (title.trim() === "") return toast.error("Blog Title is required");
    if (description.trim() === "")
      return toast.error("Blog Description is required");
    if (category.trim() === "") return toast.error("Blog Category is required");
    if (!file) return toast.error("Blog Image is required");

    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);

    await axios.post("https://blue-violet-kingfisher-gear.cyclic.app/api/blogs", formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    toast.success("Created The Blog Successfully");
    window.location.pathname = "/blogs";
  };

  useEffect(() => {
    const getAllCategories = async () => {
      const { data } = await axios.get(
        `https://blue-violet-kingfisher-gear.cyclic.app/api/categories`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setCategories(data);
    };
    getAllCategories();
  }, [categories]);

  return (
    <Fragment>
      <div>
        <ToastContainer />
      </div>

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
          <div className="col-lg-8">
            <form onSubmit={formSubmitHandler}>
              <input
                className="form-control mb-3"
                type="text"
                placeholder={t("blogTitle")}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                minLength={2}
              />
              <select
                className="form-select mb-3"
                id="select-input"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                <option disabled value="">
                  {t("chooseCategory")}
                </option>
                {categories.map((item) => (
                  <option key={item._id} value={item.title}>
                    {item.title}
                  </option>
                ))}
              </select>
              <textarea
                className="form-control mb-3"
                id="textarea-input"
                rows="5"
                placeholder={t("blogDescription")}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                minLength={10}
              ></textarea>
              <input
                className="form-control mb-3"
                type="file"
                id="file-input"
                onChange={(e) => setFile(e.target.files[0])}
                ref={inputImageRef}
              />
              <button type="submit" className="btn btn-success float-end">
                {t("create")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CreateBlog;
