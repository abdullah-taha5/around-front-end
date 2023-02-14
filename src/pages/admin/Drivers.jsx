import React, { Fragment, useEffect, useState } from "react";
import SidebarAdmin from "../../components/SidebarAdmin";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Drivers({ userData }) {
  const [drivers, setDrivers] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const getDrivers = async () => {
      const { data } = await axios.get(
        "https://blue-violet-kingfisher-gear.cyclic.app/api/driver/profile",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setDrivers(data);
    };
    getDrivers();
  }, [drivers]);
  const deleteDriver = async (id) => {
    const { data } = await axios.delete(
      `https://blue-violet-kingfisher-gear.cyclic.app/api/driver/profile/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    toast.success(data.message);
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
          <div className="mt-5 col-lg-8 text-center" style={{overflowX: "auto"}}>
            <table className="table table-dark table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>

                  <th scope="col">{t("email")}</th>
                  <th scope="col">{t("username")}</th>
                  <th scope="col">{t("vehicleType")}</th>
                  <th scope="col">{t("vehicleColor")}</th>
                  <th scope="col">{t("vehicleNumber")}</th>
                  <th scope="col">{t("actions")}</th>
                </tr>
              </thead>
              <tbody>
                {drivers.map((item, i) => (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>

                    <td>{item.email}</td>
                    <td>{item.username}</td>
                    <td>{item.vehicle}</td>
                    <td>{item.vehicleColor}</td>
                    <td>{item.vehicleNumber}</td>

                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => deleteDriver(item._id)}
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

export default Drivers;
