import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Splash from "./components/Splash";
import Login from './components/Login';
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Splash} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
