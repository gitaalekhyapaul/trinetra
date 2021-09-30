import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';

import HomePage from '../Homepage';
import {
  Login as studentLogin,
  Signup as studentSignup,
  Homepage as studentHomepage,
  Protected as StudentProtected,
  TableView as studentTable,
} from '../Student';
import {
  Login as teacherLogin,
  Signup as teacherSignup,
  Homepage as teacherHomepage,
  Protected as TeacherProtected,
  TableView as teacherTable,
  TableChange as teacherTableChange,
} from '../Teacher';
import { UserContext } from '../Store/UserContext';

function Navbar() {
  const userContext = useContext(UserContext);

  const history = useHistory();

  const logoutHandler = () => {
    history.replace('/');
  };

  return (
    <>
      <Router>
        <nav
          className='navbar navbar-light'
          style={{ backgroundColor: '#e3f2fd' }}>
          {userContext.auth && userContext.user ? (
            <Link
              to={`/${userContext.user.role}/home`}
              className='navbar-brand'>
              {`Welcome ${userContext.user.role}, ${userContext.user.name}!`}
            </Link>
          ) : (
            <Link to='/' className='navbar-brand'>
              <i className='fas fa-eye' style={{ fontSize: '0.75em' }}></i>
              <strong className='align-middle'> Trinetra</strong>
            </Link>
          )}
          {userContext.auth ? (
            <button className='btn btn-danger' onClick={() => logoutHandler()}>
              Logout
            </button>
          ) : (
            ''
          )}
        </nav>
        <div className='site-content'>
          <Switch>
            <Route exact path='/student/login' component={studentLogin} />
            <Route exact path='/teacher/login' component={teacherLogin} />
            <Route exact path='/student/signup' component={studentSignup} />
            <Route exact path='/teacher/signup' component={teacherSignup} />
            <StudentProtected
              exact
              path='/student/home'
              component={studentHomepage}
            />
            <TeacherProtected
              exact
              path='/teacher/home'
              component={teacherHomepage}
            />
            <TeacherProtected
              path='/teacher/table/change/:classId'
              component={teacherTableChange}
            />
            <StudentProtected
              path='/student/table/:classId'
              component={studentTable}
            />
            <TeacherProtected
              path='/teacher/table/:classId'
              component={teacherTable}
            />
            <Route exact path='/' component={HomePage} />
            <Route path='*' component={HomePage} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default Navbar;
