import React from "react";
import { Navigate, redirect } from "react-router-dom";

const withAuth = (Component) => {
  
    const AuthRoute = () => {
        const isAuth = JSON.parse(localStorage.getItem("login_feito_com_sucesso"));
        if (isAuth) {
          return <Component />;
        } else {
          //return <Navigate to="/" replace></Navigate>
          return <div className="pt-3" ><h1>Acesso Negado</h1></div>
        }
      };
    
      return AuthRoute;
}

export default withAuth;