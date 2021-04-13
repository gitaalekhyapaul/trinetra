import React from "react";
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
      <Route exact path="/teachhome" component={teachhome} />
      <Route exact path="/teachtable" component={teachtable} />
      <Route exact path="/changetable" component={changetable} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
