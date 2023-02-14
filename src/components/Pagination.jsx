import React from "react";
import { useTranslation } from "react-i18next";

function Pagination({ pages, currentPage, setCurrentPage }) {
  const { t, i18n } = useTranslation();

  const generatedPages = [];
  for (let i = 1; i <= pages; i++) {
    generatedPages.push(i);
  }
  return (
    <div className="d-md-flex justify-content-center align-items-center pt-3 pb-2">
      <nav className="mb-4" aria-label="Page navigation">
        <ul className="pagination justify-content-center">
          <button
            className="page-item border-0"
            onClick={() => setCurrentPage((current) => current - 1)}
            disabled={currentPage === 1}
          >
            <i
              className={`fas ${
                i18n.language === "en" ? "fa-chevron-left" : "fa-chevron-right"
              }`}
            ></i>
          </button>
          {generatedPages.map((page) => (
            <li
              className={`${
                currentPage === page ? "page-item active" : "page-item"
              } d-none d-sm-block`}
              key={page}
              onClick={() => setCurrentPage(page)}
              role="button"
            >
              <span className="page-link">{page}</span>
            </li>
          ))}

          <button
            className="page-item border-0"
            onClick={() => setCurrentPage((current) => current + 1)}
            disabled={currentPage === pages}
          >
            <i
              className={`fas ${
                i18n.language === "en" ? "fa-chevron-right" : "fa-chevron-left"
              }`}
            ></i>
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
