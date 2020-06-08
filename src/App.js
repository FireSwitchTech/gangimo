import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./Containers/Layout";
import Alerts from "./Containers/Alerts";
import BaseRouter from "./routes";

const App = () => {
  return (
    <Router>
      <Layout>
        <Alerts />
        <BaseRouter></BaseRouter>
      </Layout>
    </Router>
  );
};

export default App;
