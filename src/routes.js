import React from "react";
import Layout from "./hoc/layout";
import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";
import RegisterLogin from "./components/Register_login";
import Register from "./components/Register_login/register";
import UserDashboard from "./components/User/index";
import Auth from "./hoc/auth";
import Shop from "./components/shop";
import AddProduct from "./components/User/Admin/add_products";
import ManageCategories from "./components/User/Admin/manage_categories";
import ProductPage from "./components/Product";
import UserCart from "./components/User/cart";
import UpdateProfile from "./components/User/update_profile";
import ManageSite from "./components/User/Admin/manage_site";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route
          path="/user/dashboard"
          exact
          component={Auth(UserDashboard, true)}
        />
        <Route path="/user/cart" exact component={Auth(UserCart, true)} />
        <Route
          path="/admin/add_product"
          exact
          component={Auth(AddProduct, true)}
        />
        <Route
          path="/admin/manage_categories"
          exact
          component={Auth(ManageCategories, true)}
        />
        <Route
          path="/admin/site_info"
          exact
          component={Auth(ManageSite, true)}
        />
        <Route
          path="/user/user_profile"
          exact
          component={Auth(UpdateProfile, true)}
        />
        <Route
          path="/product_detail/:id"
          exact
          component={Auth(ProductPage, null)}
        />

        <Route path="/register" exact component={Auth(Register, false)} />
        <Route path="/register_login" component={Auth(RegisterLogin, false)} />
        <Route path="/shop" exact component={Auth(Shop, null)} />

        <Route path="/" exact component={Auth(Home, null)} />
      </Switch>
    </Layout>
  );
};

export default Routes;
