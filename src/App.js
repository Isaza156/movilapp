import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Splash from "./components/Splash";
import Login from "./components/Login";
import Account from "./components/Account.jsx";
import Move from "./components/Move";
import Home from "./components/Home";
import Password from "./components/ResetPassword";
import NewPassword from "./components/NewPassword.jsx";
import ValidateCode from "./components/ValidateCode";
import Pqrs from "./components/Pqrs";
import Contact from "./components/Contact";
import Faqs from "./components/Faqs";
import Listen from "./components/Listen";
import Suggestions from "./components/Suggestions";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/move" component={Move} />
        <Route exact path="/resetpassword" component={Password} />
        <Route exact path="/newpassword" component={NewPassword} />
        <Route exact path="/validatecode" component={ValidateCode} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/faqs" component={Faqs} />
        <Layout>
          <Route exact path="/home" component={Home} />
          <Route exact path="/listen" component={Listen} />
          <Route exact path="/suggestions" component={Suggestions} />
          <Route exact path="/pqrs" component={Pqrs} />
          <Route component={NotFound} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
