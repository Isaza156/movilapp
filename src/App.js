import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Splash from "./components/Splash";
import Login from "./components/Login";
import Account from './components/Account.jsx';
import Move from './components/Move';
import Home from './components/Home';
import Password from './components/ResetPassword'
import NewPassword from './components/NewPassword.jsx'
import ValidateCode from './components/ValidateCode'
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
        <Layout>
        <Route exact path="/home" component={Home} />
          <Route component={NotFound} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
