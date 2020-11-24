import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { AdminProvider } from './utils/adminContext';
// import registerServiceWorker from "./registerServiceWorker";


ReactDOM.render(
    <AdminProvider>
        <App />
    </AdminProvider>
    
    , document.getElementById("root"));
// registerServiceWorker();
