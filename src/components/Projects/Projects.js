import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/canteen_resized.png";
import emotion from "../../Assets/Projects/zacrm_resized.png";
import editor from "../../Assets/Projects/whether_resized.png";
import chatify from "../../Assets/Projects/visa_resized.png";
import suicide from "../../Assets/Projects/aiiop_resized.png";
import bitsOfCode from "../../Assets/Projects/realestate_resized.png";

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
  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={chatify}
      isBlog={false}
      title="VMS Dashboard"
      description="Responsive visitor management system built with React and Node.js, offering smooth UX and API integration."
      ghLink="https://github.com/soumyajit4419/Chatify"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={bitsOfCode}
      isBlog={false}
      title="Real Estate"
      description="MERN stack app with AI chatbot for property searches and seamless navigation."
      ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={editor}
      isBlog={false}
      title="Weather App"
      description="MERN stack weather app using OpenWeather API for live forecasts and location-based updates."
      ghLink="https://github.com/soumyajit4419/Editor.io"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={leaf}
      isBlog={false}
      title="Canteen System"
      description="MERN stack ordering system for managing menus, orders, and real-time updates."
      ghLink="https://github.com/soumyajit4419/Plant_AI"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={suicide}
      isBlog={false}
      title="AI Chat App"
      description="Flutter-based mock app showcasing AI-driven chatbot interactions."
      ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
      // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={emotion}
      isBlog={false}
      title="CRM Dashboard"
      description="Next.js, SQL, and Express-based CRM for order tracking and customer management."
      ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"

    />
  </Col>
</Row>

      </Container>
    </Container>
  );
}

export default Projects;
