import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/home.js";
import Dashboard from "./pages/Dashboard/dashboard";
import Project from "./pages/Project/project";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer/footer";


function App() {
  return (
    <>
      <Router>
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
        <Footer />
      </Router>
    </>
  );
}

export default App;
