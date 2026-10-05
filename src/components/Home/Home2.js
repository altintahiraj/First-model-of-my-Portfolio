import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

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
              I’m a Computer Engineering student and Full Stack Web Developer
              who enjoys turning ideas into clean, working products. I
              completed the Full-Stack Web Development program at Holberton
              School Albania, where I built front-end and back-end projects and
              learned to work with Git, code reviews and agile-style teamwork.
              <br />
              <br />
              I work with
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, Python, HTML &amp; CSS, and SQL{" "}
                </b>
              </i>
              — and I enjoy building across both the frontend and the backend.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, REST APIs,{" "}
                </b>
              </i>
              and adding smart features such as AI-based content moderation.
              I also love hackathons, where I’ve taken part in the Novartis
              Datathon and the Raiffeisen Bank Hackathon, and won first place
              in a Network Hackathon.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Vue.js </b> and{" "}
              <i>
                <b className="purple">Django</b> and{" "}
                <b className="purple">FastAPI</b>.
              </i>
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
