import { Routes, Route } from "react-router-dom";
import "./App.css";

import Selectperson from "./index";

import Stdhome from "./stdhome";
import Wardenpage from "./wardenpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Selectperson />}></Route>
        <Route path="student/" element={<Stdhome />}></Route>
        <Route path="warden/" element={<Wardenpage />}></Route>
        <Route path="clerk/" element={<Wardenpage />}></Route>
        <Route path="security/" element={<Wardenpage />}></Route>
      </Routes>
    </>
  );
}

export default App;
