import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";

export default function Auth() {
  return (
    <Router>
      <div>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
      </div>
    </Router>
  );
}
