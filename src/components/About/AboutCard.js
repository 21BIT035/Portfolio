import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
<blockquote className="blockquote mb-0">
  <p style={{ textAlign: "justify" }}>
    Hi everyone! I’m <span className="purple">SanthoshKumar</span>{" "}
    from <span className="purple">Coimbatore, Tamil Nadu</span>.
    <br />
    I’m a <span className="purple">Fresher</span> and an aspiring{" "}
    <span className="purple">Full Stack Developer</span>.
    <br />
    I’ve completed <span className="purple">3 Web Development Internships</span> at:
    <br /><br />
    <ul style={{ marginTop: "10px" , listStyleType:"none"}}>
      <li>🌐 <strong>Incisive Designs and Business Solutions</strong> – May 2025 to June 2025</li> <br />
      <li>💻 <strong>Cognifiz Technologies</strong> – April 2024 to May 2024</li><br />
      <li>🖥️ <strong>Gateway Solutions</strong> – March 2025 to April 2025</li>
    </ul>
    <br />
    Outside of coding, I love engaging in activities that keep me
    creative and inspired:
  </p>

  <ul>
    <li className="about-activity">
      <ImPointRight /> Playing Games 🎮
    </li>
    <li className="about-activity">
      <ImPointRight /> Writing Tech Blogs ✍️
    </li>
    <li className="about-activity">
      <ImPointRight /> Traveling and Exploring New Places 🌍
    </li>
  </ul>

  <p style={{ color: "rgb(155 126 172)" }}>
    "Strive to build things that make a difference!"{" "}
  </p>
  <footer className="blockquote-footer">SanthoshKumar</footer>
</blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
