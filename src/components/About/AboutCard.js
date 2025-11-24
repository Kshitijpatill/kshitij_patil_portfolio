import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kshitij Patil </span>
            from <span className="purple"> Pune, India.</span>
            <br />
            I am currently a 3rd-year student pursuing a BE in Computer Engineering at PVPIT.
            <br />
            I am 2X <span className="purple">Smart India Hackathon Finalist</span> and a tech enthusiast passionate about building scalable web solutions.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to Open Source
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring AI Tools
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Translate strong analytical skills into effective engineering solutions!"{" "}
          </p>
          <footer className="blockquote-footer">Kshitij</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;