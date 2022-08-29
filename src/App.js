import React from "react";
import {Routes, Route} from "react-router-dom";
import Landingpage from "./components/landingpage";
import Login from "./components/login";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landingpage />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
