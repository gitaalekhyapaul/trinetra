import React from "react";

import PrivateRoute from "./containers/PrivateRoute";
import PrivateRoute2 from "./containers/PrivateRoute2";

import homePage from "./containers/homepage";
import stuLogin from "./containers/loginstu";
import tecLogin from "./containers/logintec";
import stuSign from "./containers/signupstu";
import tecSign from "./containers/signuptec";
import stuhome from "./containers/homestu/homestu";
import stutable from "./containers/tablestu/tablestu";
import teachhome from "./containers/hometeach/hometeach";
import teachtable from "./containers/tableteach/tableteach";
import changetable from "./containers/changepage";
// import tecLogin from "./containers/logintec";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./containers/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={homePage} />

        <Route exact path="/student-login" component={stuLogin} />
        <Route exact path="/student-signup" component={stuSign} />
        <PrivateRoute exact path="/stuhome" component={stuhome} />
        <PrivateRoute exact path="/stutable" component={stutable} />

        <Route exact path="/teacher-signup" component={tecSign} />
        <Route exact path="/teacher-login" component={tecLogin} />
        <PrivateRoute2 exact path="/teachome" component={teachhome} />
        <PrivateRoute2 exact path="/teachtable" component={teachtable} />
        <PrivateRoute2 exact path="/changetable" component={changetable} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
