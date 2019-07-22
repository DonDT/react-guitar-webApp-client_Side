import React from "react";
import MyButton from "../utils/button";

const RegisterLogin = () => {
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            <h1>New Customers</h1>
            <p>
              We highly respect user information and are quite upfront with our
              customers about our policy and use of data. We gurarantee your
              information is secure with us and shall never be used by any third
              party for watever purpose. Create an account with us and for we
              guarantee you the best services.{" "}
            </p>
            <MyButton
              type="default"
              title="Create an account"
              linkTo="/register"
              addstyles={{ margin: "10px 0 0 0" }}
            />
          </div>
          <div className="right">
            <h2>Register customers</h2>
            <p>If you have an account, please login</p>
            LOGIN
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;
