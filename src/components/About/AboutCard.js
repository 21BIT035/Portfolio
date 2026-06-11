import React from "react";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Santhosh Kumar P</span> from{" "}
            <span className="purple">Tamil Nadu, India</span>.
            <br />
            <br />
            I am a{" "}
            <span className="purple">
              Software Developer & Automation Engineer
            </span>{" "}
            with experience in building full-stack web applications,
            industrial automation solutions, and AI-powered systems.
            <br />
            <br />
            At <span className="purple">RVR Machineries</span>, I have worked on
            enterprise software, robot management platforms, industrial
            automation systems, and smart monitoring solutions using modern web
            technologies and Python-based frameworks.
            <br />
            <br />
            My expertise includes:
          </p>

          <ul style={{ listStyle: "none", paddingLeft: "0" }}>
            <li className="about-activity">
              <FaStar className="star-icon" />
              MERN Stack (MongoDB, Express.js, React.js, Node.js)
            </li>

            <li className="about-activity">
              <FaStar className="star-icon" />
              Python, Django & FastAPI Development
            </li>

            <li className="about-activity">
              <FaStar className="star-icon" />
              Computer Vision, YOLO & AI Model Training
            </li>

            <li className="about-activity">
              <FaStar className="star-icon" />
              Industrial Automation & Robotics Integration
            </li>

            <li className="about-activity">
              <FaStar className="star-icon" />
              Fairino Robot Management Systems
            </li>

            <li className="about-activity">
              <FaStar className="star-icon" />
              UWB Tracking & Smart Monitoring Solutions
            </li>

            <li className="about-activity">
              <FaStar className="star-icon" />
              REST APIs, Database Design & System Integration
            </li>
          </ul>

          <p style={{ textAlign: "justify", marginTop: "20px" }}>
            Beyond software development, I enjoy exploring emerging technologies
            in Artificial Intelligence, Robotics, Computer Vision, and
            Industrial Automation while building innovative solutions that solve
            real-world challenges.
          </p>

          <p
            style={{
              color: "rgb(199, 112, 240)",
              fontStyle: "italic",
              marginTop: "20px",
            }}
          >
            "Building intelligent software and automation solutions for the future."
          </p>

          <footer className="blockquote-footer">
            Santhosh Kumar P
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;