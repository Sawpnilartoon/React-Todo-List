import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import Home from './Component/Home';


const ProtectedRoute = ({
  Component,
  Protect
}) => {
  if(Protect){

    if (localStorage.getItem("Login_Emial")) {
      return <Component/>;
  
    }
    else{
      return <Navigate to="/Login" />
    }
  }
  else{
    return localStorage.getItem("Login_Emial")?<Home/> :<Component/>
  }

};

export default ProtectedRoute;
