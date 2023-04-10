import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Menu } from "./pages/Menu";
import { Home } from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
