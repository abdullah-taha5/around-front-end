import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import SidebarAccount from "../components/SidebarAccount";
import { useLocation } from "react-router-dom";

function OrdersUser({ userData }) {
  const [orders, setOrders] = useState([]);
  const { t, i18n } = useTranslation();
  const search = useLocation().search;
  const token = new URLSearchParams(search);

  useEffect(() => {
    const getOrder = async () => {
      const { data } = await axios.get(
        `https://blue-violet-kingfisher-gear.cyclic.app/api/users/profile/${userData.id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setOrders(data.orders);
    };

    getOrder();
  }, [orders]);
  const payOrder = async (id) => {
    const { data } = await axios.get(
      `https://blue-violet-kingfisher-gear.cyclic.app/api/orders/pay/${id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log(data);
    window.location.href = data.urlPay;
  };

  
    const paymentStatus = async () => {
      const { data } = await axios.get(
        `https://blue-violet-kingfisher-gear.cyclic.app/api/orders/pay/status/${id}`
      );
    console.log(data);
  }
  paymentStatus();

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
          <SidebarAccount userData={userData} />
          <div className="mt-5 col-lg-8" style={{ overflowX: "auto" }}>
            <table className="table table-dark table-hover text-center">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col" className="text-center">
                    {t("order")}
                  </th>
                  <th scope="col">{t("date")}</th>
                  <th scope="col">{t("driver")}</th>
                  <th scope="col">{t("paymentStatus")}</th>
                  <th scope="col">{t("amount")}</th>

                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, i) => (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{order.orderId}</td>
                    <td>{new Date(order.createdAt).toLocaleString()}</td>
                    <td>{order?.driver?.username}</td>
                    <td
                      className={`${
                        order.paymentStatus === "success"
                          ? "text-success"
                          : "text-danger"
                      }`}
                    >
                      {order.paymentStatus === "success"
                        ? t("paid")
                        : t("unPaid")}
                    </td>
                    <td>{order.amount}</td>
                    <td>
                      {order.paymentStatus !== "success" && (
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={() => payOrder(order._id)}
                        >
                          {t("pay")}
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

export default OrdersUser;
