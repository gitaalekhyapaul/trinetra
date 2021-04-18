/* eslint-disable react/prop-types */
import React, { useEffect, useState, Component } from "react";
import { Redirect, Route } from "react-router-dom";
import axios from "axios";

export default function PrivateRoute({ component: Component, ...rest }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9000/techlogin")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const isLoggedIn = posts;
  return (
    <Route
      {...rest}
      component={(props) =>
        isLoggedIn ? (
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
