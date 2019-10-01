import React from "react";
import WOW from "wowjs";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Splash from "./pages/Splash";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Move from "./pages/Move";
import Home from "./pages/Home";
import Password from "./pages/ResetPassword";
import NewPassword from "./pages/NewPassword";
import ValidateCode from "./pages/ValidateCode";
import Pqrs from "./pages/Pqrs";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import Listen from "./pages/Listen";
import Suggestions from "./pages/Suggestions";
import CreatePost from "./pages/CreatePost";
import PqrsTwo from "./pages/PqrsTwo";
import NotFound from "./pages/NotFound";

class App extends React.Component {
  componentDidMount() {
    new WOW.WOW({
      live: false
    }).init();
  }
  render() {
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
          <Route exact path="/pqrstwo" component={PqrsTwo} />
          <Layout>
            <Route exact path="/home" component={Home} />
            <Route exact path="/listen" component={Listen} />
            <Route exact path="/suggestions" component={Suggestions} />
            <Route exact path="/pqrs" component={Pqrs} />
            <Route exact path="/post" component={CreatePost} />
            <Route component={NotFound} />
          </Layout>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
