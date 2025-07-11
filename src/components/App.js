// src/components/App.js
import React from "react";
import { app } from "../firebase"; 
import Signup from "./Signup";
import { Container } from "react-bootstrap";
function App() {


  return (
     <Container className="d-flex align-items-center 
     justify-content-center"
     style={{ minHeight: "100vh"}}>

    <div className="w-100">

    </div>
         <Signup/>
    </Container>
 

  )
 
}

export default App;
