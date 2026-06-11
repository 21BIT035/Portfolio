import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myPhoto from "../../Assets/image.jpeg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">

          {/* LEFT SIDE */}
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", fontWeight: "700" }}>
              LET ME <span className="purple">INTRODUCE</span> MYSELF
            </h1>

            <p className="home-about-body">
              Hi, I'm <b className="purple">Santhosh Kumar P</b>, a{" "}
              <b className="purple">
                Software Developer & Automation Engineer
              </b>{" "}
              passionate about building scalable web applications,
              intelligent automation systems, and AI-powered solutions.
              <br />
              <br />

              I have experience working with
              <b className="purple">
                {" "}
                MERN Stack, Python, Django, FastAPI, MongoDB, MySQL, and REST APIs
              </b>
              , developing enterprise applications and industrial automation platforms.

              <br />
              <br />

              My expertise includes developing
              <b className="purple">
                {" "}
                Robot Management Systems, UWB Tracking Solutions, Smart Monitoring
                Platforms, and Industrial Automation Applications
              </b>
              .

              <br />
              <br />

              I am also passionate about
              <b className="purple">
                {" "}
                Computer Vision, YOLO, AI Model Training, Object Detection, and
                Robotics Integration
              </b>
              .

              <br />
              <br />

              Some of the key projects I have worked on include
              <b className="purple">
                {" "}
                HealPay, Vehicle Warranty Management System, Fairino Robot
                Management System, UWB Tracking System, and Smart Dustbin
                Management System
              </b>
              .

              <br />
              <br />

              I enjoy transforming innovative ideas into reliable software
              products and continuously exploring emerging technologies in
              <b className="purple">
                {" "}
                Artificial Intelligence, Robotics, Automation, and Full-Stack
                Development
              </b>
              .
            </p>
          </Col>

          {/* RIGHT SIDE IMAGE */}
          <Col
            md={4}
            className="d-flex justify-content-center align-items-center"
          >
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
              <div className="profile-image-wrapper">
                <img
                  src={myPhoto}
                  alt="Santhosh Kumar"
                  className="profile-image"
                />
              </div>
            </Tilt>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Home2;