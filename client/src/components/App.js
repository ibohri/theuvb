import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CommonModule, AuthModule, ShoppingModule } from "../modules";

export default function App() {
  return (
    <CommonModule.AuthProvider>
      <Router>
        <div>
          <Route exact path="/login" component={AuthModule} />
          <CommonModule.AuthRoute path="/" component={ShoppingModule} />
        </div>
      </Router>
    </CommonModule.AuthProvider>
  );
}
