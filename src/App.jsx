import React from "react";
import "./App.css";
//import config from "./config.js";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

//const cors = require("cors");


function App() {
 // App.use(cors(config.application.cors.server));

  return (
    <Router>
      <Routes />
    </Router>
  );
}
export default App;



