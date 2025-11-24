import React from "react";
import { Col, Row } from "react-bootstrap";
import Python from "../../Assets/TechIcons/Python.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
// import Next from "../../Assets/TechIcons/Next.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import MySQL from "../../Assets/TechIcons/mysql.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg"; 

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Python & Backend */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" className="img-fluid" style={{ maxHeight: "50px" }} />
        <div className="tech-icons-text" >Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="Node.js" className="img-fluid" style={{ maxHeight: "50px" }} />
        <div className="tech-icons-text" >Node.js</div>
      </Col>
      
      {/* Frontend */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="JavaScript" className="img-fluid" style={{ maxHeight: "50px" }} />
        <div className="tech-icons-text" >JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React" className="img-fluid" style={{ maxHeight: "50px" }} />
        <div className="tech-icons-text" >React</div>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <img src={Next} alt="Next.js" className="img-fluid" style={{ maxHeight: "50px" }} />
        <div className="tech-icons-text" >Next.js</div>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="TypeScript" className="img-fluid" style={{ maxHeight: "50px" }} />
        <div className="tech-icons-text" >TypeScript</div>
      </Col>

      {/* Database & DevOps */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="MongoDB" className="img-fluid" style={{ maxHeight: "50px" }} />
        <div className="tech-icons-text" >MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={MySQL} alt="SQL" className="img-fluid" style={{ maxHeight: "20px" }} />
        <div className="tech-icons-text" >MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" className="img-fluid" style={{ maxHeight: "50px" }} />
        <div className="tech-icons-text" >Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="Docker" className="img-fluid" style={{ maxHeight: "50px" }} />
        <div className="tech-icons-text" >Docker</div>
      </Col>
    </Row>
  );
}

export default Techstack;