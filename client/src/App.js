import React, { useState } from "react";
import stuLogin from "./containers/loginstu";
import tecLogin from "./containers/logintec";
import stuSign from "./containers/signupstu";
import tecSign from "./containers/signuptec";
// import tecLogin from "./containers/logintec";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/student-login" component={stuLogin} />
      <Route exact path="/teacher-login" component={tecLogin} />
      <Route exact path="/student-signup" component={stuSign} />
      <Route exact path="/teacher-signup" component={tecSign} />
    </BrowserRouter>
  );
}

export default App;
