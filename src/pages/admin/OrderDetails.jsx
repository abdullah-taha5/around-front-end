import React, { Fragment, useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import SidebarAdmin from "../../components/SidebarAdmin";
import axios from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function OrderDetails({ userData }) {
  const { t, i18n } = useTranslation();
  const [order, setOrder] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [driver, setDriver] = useState(null);
  const selectRef = useRef(null);
  const { id } = useParams();

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

  useEffect(() => {
    const getOrder = async () => {
      const { data } = await axios.get(
        `https://blue-violet-kingfisher-gear.cyclic.app/api/orders/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setOrder(data);
    };
    getOrder();
    getDrivers();
  }, [order]);

  const assignDriver = async (e) => {
    e.preventDefault();
    await axios.put(
      `https://blue-violet-kingfisher-gear.cyclic.app/api/orders/${id}`,
      { driver: selectRef.current.value },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    
  };

  const payOrder = async (e) => {
    e.preventDefault();
   const {data} = await axios.get(
      `https://blue-violet-kingfisher-gear.cyclic.app/api/orders/pay/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    window.location.href = data.urlPay;
  };
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
          <div className="mt-1 col-lg-8 bg-light container p-5 text-dark">
            <h3 className="h3 mb-4">
              {t("order")} #{order.orderId}
            </h3>
            <div className="d-flex justify-content-between my-4">
              <span className="text-success">
                <i className="fas fa-money-bill"></i> {order.amount}
              </span>
              <span
                className={`${
                  order.paymentStatus === "success"
                    ? "text-success"
                    : "text-danger"
                }`}
              >
                <i className="fas fa-circle"></i> {order.paymentStatus === "success" ? t("paid") : t("unPaid")}
              </span>
              <span className="text-muted">
                <i className="far fa-calendar-alt"></i>&nbsp;
                {new Date(order.createdAt).toLocaleString()}
              </span>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <Link
                role="button"
                className="text-info"
                to={`/admin-dashboard/order/invoice/${order._id}`}
              >
                <i className="fas fa-print"></i> {t("invoicePrint")}
              </Link>
              {order.driver == null && (
                <button
                  type="button"
                  className="btn btn-gradient"
                  data-bs-toggle="modal"
                  data-bs-target="#modalAssignDriver"
                >
                  {t("assignDriver")}
                </button>
              )}
              {order.paymentStatus !== "success" && (
                <button
                type="button"
                className="btn btn-success"
                onClick={payOrder}
              >
                {t("pay")}
              </button>
              )}
            
            </div>

            <div className="row mt-5">
              <div className="col-sm-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{t("customerInfo")}</h5>
                    <div className="d-flex meta-link fs-sm align-items-center pt-3">
                      <img
                        className="rounded-circle"
                        src={order?.user?.profilePhoto?.url}
                        alt={order?.user?.username}
                        width="36"
                      />
                      <div className="px-2 ms-1 mt-n1 text-dark">
                        <span className="fw-semibold ms-1">
                          {order?.user?.username}
                        </span>
                      </div>
                    </div>
                    <p className="card-text my-3 text-muted">
                      {order?.user?.email}
                    </p>
                    <p className="card-text my-3">
                    {t("fullAddress")}: {order?.user?.fullAddress}
                  </p>
                  <p className="card-text my-3">
                  {t("floorNumber")}: {order?.user?.floorNumber}
                </p>
                <p className="card-text my-3">
                {t("flatNumber")}: {order?.user?.flatNumber}
              </p>
              <p className="card-text my-3">
              {t("note")}: {order?.user?.note}
            </p>
                  </div>
                </div>
              </div>
              {order?.driver !== null && (
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{t("driverInfo")}</h5>
                      <div className="d-flex meta-link fs-sm align-items-center pt-3">
                        <img
                          className="rounded-circle"
                          src={order?.driver?.profilePhoto?.url}
                          alt={order?.driver?.username}
                          width="36"
                        />
                        <div className="px-2 ms-1 mt-n1 text-dark">
                          <span className="fw-semibold ms-1">
                            {order?.driver?.username}
                          </span>
                        </div>
                      </div>
                      <p className="card-text my-3 text-muted">
                        {order?.driver?.email}
                      </p>
                      <p className="card-text my-3">
                        {t("vehicleType")}: {order?.driver?.vehicle}
                      </p>
                      <p className="card-text my-3">
                        {t("vehicleColor")}: {order?.driver?.vehicleColor}
                      </p>
                      <p className="card-text my-3">
                        {t("vehicleNumber")}: {order?.driver?.vehicleNumber}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        tabIndex="-1"
        role="dialog"
        id="modalAssignDriver"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{t("assignDriver")}</h5>
            </div>
            <form className="modal-body" onSubmit={assignDriver}>
              <select
                className="form-select mb-3"
                id="select-input"
                onChange={(e) => setDriver(e.target.value)}
                value={driver || ""}
                ref={selectRef}
              >
                <option disabled value="Choose Driver">
                  Choose Driver
                </option>
                {drivers.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.username}
                  </option>
                ))}
              </select>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  data-bs-dismiss="modal"
                >
                  {t("close")}
                </button>
                <button type="submit" className="btn btn-primary btn-sm">
                  {t("saveChanges")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default OrderDetails;
