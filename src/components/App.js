// src/components/App.js
import React from "react";
import { app } from "../firebase"; 
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import AuthProvider  from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard"
import Login from "./Login";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Container 
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <Switch>


              <Route exact path="/" component={Dashboard} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login}/>
              
              {/* Add more routes here as needed */}
            </Switch>
          </div>
        </Container>
      </AuthProvider>
    </Router>
  );
}

export default App;