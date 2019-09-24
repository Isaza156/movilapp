import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Splash from "./components/Splash";
import Login from "./components/Login";
import Account from './components/Account.jsx';
import Move from './components/Move';
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/move" component={Move} />
        <Layout>
          
          <Route component={NotFound} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
