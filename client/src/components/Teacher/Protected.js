/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import { UserContext } from "../Store/UserContext";

export default function Protected({ component: Component, ...rest }) {
  const userContext = useContext(UserContext);
  return (
    <Route
      {...rest}
      component={(props) =>
        userContext.auth &&
        userContext.user &&
        userContext.user.role === "teacher" ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  );
}
