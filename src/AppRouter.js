import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import WOW from "wowjs";

import PrivateRoute from './routes/Private.route'

import Splash from "./pages/Splash";
import Login from "./pages/Login";
import Account from "./pages/Account";

import Move from "./pages/Move";
import Password from "./pages/ResetPassword";
import NewPassword from "./pages/NewPassword";
import ValidateCode from "./pages/ValidateCode";

import Home from "./pages/Home";
import Pqrs from "./pages/Pqrs";
import Contact from "./pages/Contact";
import Faqs from "./pages/Faqs";
import Listen from "./pages/Listen";
import Suggestions from "./pages/Suggestions";
import CreatePost from "./pages/CreatePost";

import FeedSugerencias from "./pages/Feed_sugerencias";
import FeedQuejas from "./pages/Feed_quejas";

import NotFound from "./pages/NotFound";
import Comments from "./components/Comments";


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

          <Route exact path="/resetpassword" component={Password} />
          <Route exact path="/newpassword" component={NewPassword} />
          <Route exact path="/validatecode" component={ValidateCode} />

          <PrivateRoute exact path="/move" component={Move} />

          <PrivateRoute exact path="/contact" component={Contact} />
          <PrivateRoute exact path="/faqs" component={Faqs} />

          <PrivateRoute exact path="/sugerencias" component={FeedSugerencias} />
          <PrivateRoute exact path="/quejas" component={FeedQuejas} />

          <PrivateRoute exact path="/pqrs" component={Pqrs} />
          <PrivateRoute exact path="/createpost" component={CreatePost} />

          <PrivateRoute exact path="/home" component={Home} />
          <PrivateRoute exact path="/listen" component={Listen} />
          <PrivateRoute exact path="/suggestions" component={Suggestions} />
          <PrivateRoute exact path="/post" component={CreatePost} />

          <Route exact path="/notfound" component={NotFound} />

          <Route>
            <Redirect to="/notfound" />
          </Route>

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
