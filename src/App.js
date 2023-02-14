import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/Signin/SignIn.jsx";
import SignUp from "./pages/Signup/SignUp";
import jwt_decode from "jwt-decode";
import Profile from "./pages/Profile";
import CreateBlog from "./pages/admin/CreateBlog";
import CreateCategory from "./pages/admin/CreateCategory";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import Header from "./components/Header";
import Category from "./pages/Category";
import Comments from "./pages/admin/Comments";
import AllBlogsDashboard from "./pages/admin/AllBlogsDashboard";
import Users from "./pages/admin/Users";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddDriver from "./pages/admin/addDriver/AddDriver";
import DriverSignIn from "./pages/Driver/SignIn/DriverSignIn";
import Orders from "./pages/admin/Orders";
import OrderDetails from "./pages/admin/OrderDetails";
import Drivers from "./pages/admin/Drivers";
import Invoice from "./pages/admin/Invoice";
import OrdersDriver from "./pages/Driver/SignIn/Orders/OrdersDriver";
import OrdersUser from "./pages/OrdersUser";
import MyLocation from "./pages/MyLocation";
import SectionHero from "./pages/admin/FrontEndSettings/SectionHero";

function App() {
  const token = localStorage.getItem("token");
  let userData;

  if (token) {
    userData = jwt_decode(token);
  }

  return (
    <BrowserRouter>
      <Header userData={userData} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:category" element={<Category />} />
        <Route
          path="/blogs/details/:id"
          element={<BlogDetails userData={userData} />}
        />
        <Route
          path="/profile"
          element={
            localStorage.getItem("token") ? (
              <Profile userData={userData} />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/profile/profile-info"
          element={
            localStorage.getItem("token") ? (
              <Profile userData={userData} />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/profile/my-location"
          element={
            localStorage.getItem("token") ? (
              <MyLocation userData={userData} />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/user/orders"
          element={
            localStorage.getItem("token") ? (
              <OrdersUser userData={userData} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/admin-dashboard"
          element={
            localStorage.getItem("token") && userData.adminRole ? (
              <AdminDashboard userData={userData} />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/admin-dashboard/users"
          element={
            localStorage.getItem("token") && userData.adminRole ? (
              <Users userData={userData} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/admin-dashboard/create-blog"
          element={
            localStorage.getItem("token") && userData.adminRole ? (
              <CreateBlog userData={userData} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/admin-dashboard/create-category"
          element={
            localStorage.getItem("token") && userData.adminRole ? (
              <CreateCategory userData={userData} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/admin-dashboard/comments"
          element={
            localStorage.getItem("token") && userData.adminRole ? (
              <Comments userData={userData} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/admin-dashboard/all-blogs"
          element={
            localStorage.getItem("token") && userData.adminRole ? (
              <AllBlogsDashboard userData={userData} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/admin-dashboard/add-driver"
          element={
            localStorage.getItem("token") && userData.adminRole ? (
              <AddDriver userData={userData} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/admin-dashboard/drivers"
          element={
            localStorage.getItem("token") && userData.adminRole ? (
              <Drivers userData={userData} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/admin-dashboard/orders"
          element={
            localStorage.getItem("token") && userData.adminRole ? (
              <Orders userData={userData} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/admin-dashboard/orders/:id"
          element={
            localStorage.getItem("token") && userData.adminRole ? (
              <OrderDetails userData={userData} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/admin-dashboard/order/invoice/:id"
          element={
            localStorage.getItem("token") && userData.adminRole ? (
              <Invoice />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
        path="/admin-dashboard/front-end-settings/hero"
        element={
          localStorage.getItem("token") && userData.adminRole ? (
            <SectionHero userData={userData} />
          ) : (
            <Navigate to="/" />
          )
        }
      />

        <Route path="/driver/signin" element={<DriverSignIn />} />
        <Route
          path="/driver/orders"
          element={
            localStorage.getItem("token") ? (
              <OrdersDriver userData={userData} />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
