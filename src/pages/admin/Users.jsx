import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import SidebarAdmin from "../../components/SidebarAdmin";

function Users({ userData }) {
  const [users, setUsers] = useState([]);
  const { t, i18n } = useTranslation();

  const deleteUser = async (id) => {
    await axios.delete(`https://blue-violet-kingfisher-gear.cyclic.app/api/driver/profile/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  };
  const setAdmin = async (id) => {
    const { data } = await axios.put(
      `https://blue-violet-kingfisher-gear.cyclic.app/api/users/profile/${id}`,
      { adminRole: true },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  };
  const setDefaultUser = async (id) => {
    const { data } = await axios.put(
      `https://blue-violet-kingfisher-gear.cyclic.app/api/users/profile/${id}`,
      { adminRole: false },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  };
  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get(
        "https://blue-violet-kingfisher-gear.cyclic.app/api/users/profile",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setUsers(data);
    };
    getUsers();
  }, [users]);
  return (
    <Fragment>
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
          <div className="mt-5 col-lg-8" style={{overflowX: "auto"}}>
            <table className="table table-dark table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>

                  <th scope="col" className="text-center">
                    {t("email")}
                  </th>
                  <th scope="col">{t("username")}</th>
                  <th scope="col">Actions</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {users.map((item, i) => (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>

                    <td>{item.email}</td>
                    <td>{item.username}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deleteUser(item._id)}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </td>
                    <td>
                      {item.adminRole ? (
                        <button
                          type="button"
                          className="btn btn-warning"
                          onClick={() => setDefaultUser(item._id)}
                        >
                          Set Default User
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-warning"
                          onClick={() => setAdmin(item._id)}
                        >
                          Set Admin
                        </button>
                      )}
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

export default Users;
