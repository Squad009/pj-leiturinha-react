import React from "react";
import { Navigate, redirect } from "react-router-dom";

const withAuth = (Component) => {
  
    const AuthRoute = () => {
        const isAuth = JSON.parse(localStorage.getItem("login_feito_com_sucesso"));
        if (isAuth) {
          return <Component />;
        } else {
          return <Navigate to="/login" replace></Navigate>

        }
      };
    
      return AuthRoute;
}

export default withAuth;