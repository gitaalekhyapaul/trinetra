import React from "react";

import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="site-container">
        <Navbar />
      </div>
      <Footer />
    </>
  );
}

export default App;
