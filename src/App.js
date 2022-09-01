import React from "react";
import {Routes, Route} from "react-router-dom";
import Landingpage from "./components/landingpage";
import Login from "./components/login";
import Signup from "./components/signup";
import User from "./components/userpage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landingpage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>
    </>
  );
}

export default App;
