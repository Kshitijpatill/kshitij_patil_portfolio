import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import voxup from "../../Assets/Projects/voxup.png";
import comfynest from "../../Assets/Projects/comfynest.png";
import moviesearch from "../../Assets/Projects/moviesearch.png";
import vyapaarmitra from "../../Assets/Projects/vyapaarmitra.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Project 1: VoxUP */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voxup}
              isBlog={false}
              title="VoxUP"
              description="Architected and developed a full-stack, voice-powered, gamified education platform using the MERN stack and NLP. This project led a 4-member team to the Grand Finale of the Smart India Hackathon 2024. Engineered over 90% of the frontend (React) and backend (Node.js, MongoDB) systems, integrating AI tools and gamification to enhance user engagement and accessibility."
              ghLink="https://github.com/Kshitijpatill/VoxUP"
            // If you have a live demo link, put it here, otherwise delete the line below
            // demoLink="https://voxup-demo.vercel.app/" 
            />
          </Col>

          {/* Project 2: ComfyNest */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comfynest}
              isBlog={false}
              title="ComfyNest"
              description="An accessible e-commerce solution built with a focus on furniture display. I led the development of a highly responsive and modular frontend using pure HTML, CSS, JavaScript, and Bootstrap. Features include advanced product filtering, robust user authentication, and a clean, user-centric shopping interface."
              ghLink="https://github.com/mangeshpawar1122/furniture-website"
            />
          </Col>



        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <h3 style={{ color: "white" }}>
            Mini Project's
          </h3>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moviesearch}
              isBlog={false}
              title="Movie-search App"
              description="A mini project , Basic Movie Search App Using React and OMDB "
              ghLink="https://github.com/Kshitijpatill/Movie-search-app"
              demoLink="https://movie-search-app-001.netlify.app/"

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vyapaarmitra}
              isBlog={false}
              title="Vyapaar Mitra AI"
              description="A mini project , Vyapaar Mitra AI to assist MSME sellers on daily basis."
              ghLink="https://github.com/Kshitijpatill/VyapaarMitra"
              demoLink="https://vyapaarmitraai.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;