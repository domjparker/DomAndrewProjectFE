import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/home.js";
import Dashboard from "./pages/Dashboard/dashboard";
import Project from "./pages/Project/project";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/navbar"


function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/project">
            <Project />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
