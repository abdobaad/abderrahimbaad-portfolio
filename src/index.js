import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./ContextApi/Reducer";
import Router from "./Router";


ReactDOM.render(
 
    <BrowserRouter>
        <AppProvider>
           <Router />
        </AppProvider>
  </BrowserRouter>
 ,
  document.getElementById("root")
);
