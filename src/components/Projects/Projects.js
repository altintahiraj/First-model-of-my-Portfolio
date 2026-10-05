import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import reviewsFront from "../../Assets/Projects/reviews-front.png";
import reviewsBack from "../../Assets/Projects/reviews-back.png";
import spamDetection from "../../Assets/Projects/spam-detection.png";
import novartis from "../../Assets/Projects/novartis-datathon.png";
import holberton from "../../Assets/Projects/holberton-web.png";

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
              imgPath={reviewsFront}
              isBlog={false}
              title="AI-Powered Review Moderation (Frontend)"
              description="Vue.js frontend built with Vite and Tailwind CSS for an AI-based review moderation system. Users can submit product reviews and get real-time content moderation and spam detection feedback, connected to the backend through a configurable API base URL."
              ghLink="https://github.com/altintahiraj/reviews-front"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reviewsBack}
              isBlog={false}
              title="AI-Powered Review Moderation (Backend)"
              description="Django backend (Python) that receives and stores product reviews and exposes the API used by the Vue.js frontend. It integrates with a spam detection microservice to classify every submitted review automatically."
              ghLink="https://github.com/altintahiraj/reviews-back"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spamDetection}
              isBlog={false}
              title="Spam Detection Microservice"
              description="FastAPI microservice powered by a Hugging Face text classification model that labels user reviews as spam or not spam. It is integrated with the Django review platform to support automatic content moderation."
              ghLink="https://github.com/altintahiraj/spam-detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={novartis}
              isBlog={false}
              title="Novartis Datathon"
              description="Hackathon project developed in a multidisciplinary team to design and prototype a digital solution. Contributed to the technical implementation and the final presentation, and the team achieved a top ranking among the competing teams."
              ghLink="https://github.com/altintahiraj/novartis-datathon"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={holberton}
              isBlog={false}
              title="Holberton School Web Development"
              description="Collection of my full-stack web development projects and exercises from Holberton School Albania, covering front-end and back-end work, Git workflows, teamwork and peer code reviews."
              ghLink="https://github.com/altintahiraj/holbertonschool-web-development"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
