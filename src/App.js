import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Suggestions from "./components/Suggestions";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Suggestions} />>
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
