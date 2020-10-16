import React from "react";
import NavBar from "../components/NavBar"
import Project from "../components/Project"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Portfolio(){

    return <div> 
        <NavBar />
        <header class="col-md-4 col-xs" id="text">
          <h1>Here's a few apps I've worked on</h1>
        </header>
        <Project.js />
        </div>

}


export default Portfolio;