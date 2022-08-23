import React from "react";
import {Routes, Route} from "react-router-dom";
import Landingpage from "./components/landingpage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landingpage />}></Route>
      </Routes>
    </>
  );
}

export default App;
