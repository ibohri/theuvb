import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";

export default function Shopping() {
  return (
    <Router>
      <div>
        <Route path="/" component={Home} />
        {/* <Route exact path="/auth/register" component={Register} />
        <Route exact path="/auth/forgot-password" component={ForgotPassword} /> */}
      </div>
    </Router>
  );
}
