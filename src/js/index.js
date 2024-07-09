<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha384-NXA3D1GyB4wpjR9Rtk8VkmFXKm2FjONkcw5JOA6o5FS5D5nkjwtnN5N5aCo5RQ+/r5QoP2G+Rx3HJgK5O6c+5CQ==" crossorigin="anonymous" />

import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);

