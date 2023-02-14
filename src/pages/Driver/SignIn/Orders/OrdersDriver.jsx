import React, { Fragment, useEffect, useState } from "react";
import SidebarAccount from "../../../../components/SidebarAccount";
import axios from "axios";
import { useTranslation } from "react-i18next";

function OrdersDriver({ userData }) {
  const [orders, setOrders] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const getOrder = async () => {
      const { data } = await axios.get("https://blue-violet-kingfisher-gear.cyclic.app/api/driver", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setOrders(data.orders);
    };
    getOrder();
  }, [orders]);
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
          <div className="mt-5 col-lg-8" style={{overflowX: "auto"}}>
            <table className="table table-dark table-hover text-center">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col" className="text-center">
                    {t("order")}
                  </th>
                  <th scope="col">{t("date")}</th>
                  <th scope="col">{t("customer")}</th>
                  <th scope="col">{t("fullAddress")}</th>
                  <th scope="col">{t("floorNumber")}</th>
                  <th scope="col">{t("flatNumber")}</th>
                  <th scope="col">{t("note")}</th>
                  <th scope="col">{t("paymentStatus")}</th>
                  <th scope="col">{t("amount")}</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, i) => (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{order.orderId}</td>
                    <td>{new Date(order.createdAt).toLocaleString()}</td>
                    <td>{order.user.username}</td>
                    <td>{order.user.fullAddress}</td>
                    <td>{order.user.floorNumber}</td>
                    <td>{order.user.flatNumber}</td>
                    <td>{order.user.note}</td>
                    <td
                      className={`${
                        order.paymentStatus === "success"
                          ? "text-success"
                          : "text-danger"
                      }`}
                    >
                    {order.paymentStatus === "success" ? t("paid") : t("unPaid")}
                    </td>
                    <td>{order.amount}</td>
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

export default OrdersDriver;
