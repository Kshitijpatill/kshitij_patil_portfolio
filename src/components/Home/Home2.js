import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
// import {
//   AiFillGithub,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a <b className="purple">Aspiring Full Stack Python Developer</b> driven by the thrill of solving complex engineering problems.
              <br />
              <br />I have honed my skills in
              <i>
                <b className="purple"> Python, React, and AIML tools. </b>
              </i>
              <br />
              <br />
              My passion lies in building &nbsp;
              <i>
                <b className="purple">Scalable Web Architectures </b> and
                integrating{" "}
                <b className="purple">
                  AI & NLP models
                </b>
                {" "}to create intelligent user experiences.
              </i>
              <br />
              <br />
              I enjoy architecting products from scratch, leveraging <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
              , while maintaining a strong foothold in <b className="purple">Django/FastAPI</b> for backend efficiency.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}
export default Home2;