import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import Password from './components/resetPassword'
import NewPassword from './components/newPassword'
import ValidateCode from './components/validateCode'



const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/resetpassword" component={Password} />
          <Route exact path="/newpassword" component={NewPassword} />
          <Route exact path="/validatecode" component={ValidateCode} />
          <Route component={NotFound} />

        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
