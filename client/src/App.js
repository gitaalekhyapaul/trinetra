import React from "react";
import homePage from "./containers/homepage";
import stuLogin from "./containers/loginstu";
import tecLogin from "./containers/logintec";
import stuSign from "./containers/signupstu";
import tecSign from "./containers/signuptec";
import stuhome from "./containers/homestu/homestu";
import stutable from "./containers/tablestu/tablestu";
// import tecLogin from "./containers/logintec";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./containers/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={homePage} />
      <Route exact path="/student-login" component={stuLogin} />
      <Route exact path="/teacher-login" component={tecLogin} />
      <Route exact path="/student-signup" component={stuSign} />
      <Route exact path="/teacher-signup" component={tecSign} />
      <Route exact path="/stuhome" component={stuhome} />
      <Route exact path="/stutable" component={stutable} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
