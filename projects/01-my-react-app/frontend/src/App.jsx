import { useState } from "react";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Extinguisher from "./components/Extinguisher";
import Pending from "./components/Pending";
import Inspection from "./components/Inspection";
import History from "./components/History";
import Report from "./components/Report";

function App() {

  
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="extintores" element={<Extinguisher />} />
            <Route path="pendientes" element={<Pending />} />
            <Route path="inspeccion" element={<Inspection />} />
            <Route path="home" element={<Home />} />
            <Route path="historial" element={<History />} />
            <Route path="reportes" element={<Report />} />
          </Route>
          <Route path="login" element={<div>Login</div>} />
        </Routes>
      </Router>
  );
}

export default App;
