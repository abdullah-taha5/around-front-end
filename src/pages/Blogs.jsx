import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import BlogsList from "../components/Blogs/BlogsList";
import Pagination from "../components/Pagination";
import SidebarBlogs from "../components/SidebarBlogs/SidebarBlogs";

const BLOG_PER_PAGE = 3;
function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [blogsCount, setBlogsCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const pages = Math.ceil(blogsCount / BLOG_PER_PAGE);

  useEffect(() => {
    const getBlogs = async () => {
      const { data } = await axios.get(
        `https://blue-violet-kingfisher-gear.cyclic.app/api/blogs?pageNumber=${currentPage}`
      );
      setBlogs(data);
    };
    const getBlogsCount = async () => {
      const { data } = await axios.get(`https://blue-violet-kingfisher-gear.cyclic.app/api/blogs/count`);
      setBlogsCount(data);
    };
    getBlogsCount();
    getBlogs();
  }, [blogs, currentPage]);

  return (
    <Fragment>
      <div className="sidebar-enabled mt-7">
        <div className="container">
          <div className="row">
            <SidebarBlogs />

            <div className="col-lg-9 content py-4 mb-2 mb-sm-0 pb-sm-5">
              <BlogsList blogs={blogs} />
              <Pagination
                pages={pages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Blogs;
