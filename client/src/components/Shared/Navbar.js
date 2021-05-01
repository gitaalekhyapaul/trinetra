import React, { useContext } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import HomePage from "../Homepage";
import {
  Login as studentLogin,
  Signup as studentSignup,
  Homepage as studentHomepage,
  Protected as StudentProtected,
  TableView as studentTable,
} from "../Student";
import { UserContext } from "../Store/UserContext";
// import PrivateRoute from "../PrivateRoute";
// import PrivateRoute2 from "../PrivateRoute2";
// import stuLogin from "./components/loginstu";
// import tecLogin from "./components/logintec";
// import stuSign from "./components/signupstu";
// import tecSign from "./components/signuptec";
// import stuhome from "./components/homestu/homestu";
// import stutable from "./components/tablestu/tablestu";
// import teachhome from "./components/hometeach/hometeach";
// import teachtable from "./components/tableteach/tableteach";
// import changetable from "./components/changepage";

function Navbar() {
  const userContext = useContext(UserContext);
  return (
    <>
      <Router>
        <nav
          className="navbar navbar-light"
          style={{ backgroundColor: "#e3f2fd" }}
        >
          <Link to="/" className="navbar-brand">
            {userContext.auth && userContext.user
              ? `Welcome ${userContext.user.role}, ${userContext.user.name}!`
              : "Trinetra"}
          </Link>
        </nav>
        <div className="site-content">
          <Switch>
            <Route exact path="/student/login" component={studentLogin} />
            <Route exact path="/student/signup" component={studentSignup} />
            <StudentProtected
              exact
              path="/student/home"
              component={studentHomepage}
            />
            <StudentProtected
              path="/student/table/:classId"
              component={studentTable}
            />
            {/*<Route exact path="/teacher-signup" component={tecSign} />
          <Route exact path="/teacher-login" component={tecLogin} />
          <PrivateRoute2 exact path="/teachome" component={teachhome} />
          <PrivateRoute2 exact path="/teachtable" component={teachtable} />
        <PrivateRoute2 exact path="/changetable" component={changetable} /> */}
            <Route exact path="/" component={HomePage} />
            <Route path="*" component={HomePage} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default Navbar;
