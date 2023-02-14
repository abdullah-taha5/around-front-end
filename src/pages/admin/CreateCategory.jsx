import axios from "axios";
import React, { Fragment, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import SidebarAdmin from "../../components/SidebarAdmin";



function CreateCategory({ userData }) {
  const [title, setTitle] = useState("");
  const {t, i18n} = useTranslation();
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (title.trim() === "") return toast.error("Blog Title is required");
    const { data } = await axios.post(
      "https://blue-violet-kingfisher-gear.cyclic.app/api/categories",
      { title },
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    setTitle("");
  };
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
                placeholder={t("category")}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                minLength={2}
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

export default CreateCategory;
