import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import Splash from "./components/Splash";
import Login from './components/Login';
import NotFound from "./pages/NotFound";
import Account from './components/Account'
import Password from './components/resetPassword'
import NewPassword from './components/newPassword'
import ValidateCode from './components/validateCode'
import CreatePost from './components/createPost'



const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/resetpassword" component={Password} />
          <Route exact path="/newpassword" component={NewPassword} />
          <Route exact path="/validatecode" component={ValidateCode} />
          <Route exact path="/createpost" component={CreatePost} />
          <Route component={NotFound} />
          
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
