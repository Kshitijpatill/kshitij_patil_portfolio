import React from "react";
import { Col, Row } from "react-bootstrap";
import winOs from "../../Assets/TechIcons/microsoft.svg";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={winOs} alt="winOs" className="tech-icon-images" />
        <div className="tech-icons-text">Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" className="img-fluid" style={{ maxHeight: "50px" }} />
        <div className="tech-icons-text" style={{fontSize: "12px", marginTop: "5px"}}>Postman</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
