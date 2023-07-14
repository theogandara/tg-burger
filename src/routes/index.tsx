import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const Routes = () => {
  return (
    <>
      <ToastContainer position="top-center" autoClose={1000} />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </>
  );
};
