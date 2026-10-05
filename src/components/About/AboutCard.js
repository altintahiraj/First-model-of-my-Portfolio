import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Altin Tahiraj</span>{" "}
            from <span className="purple">Tirana, Albania</span>.
            <br />
            I’m a <span className="purple">Computer Engineering</span> student
            at <span className="purple">European University of Tirana</span>{" "}
            with a GPA of 9.74, and I completed the{" "}
            <span className="purple">Full-Stack Web Development</span> program
            at <span className="purple">Holberton School Albania</span>.
            <br />I also hold a Cisco Network Essentials certificate, speak{" "}
            <span className="purple">English (C1)</span> and{" "}
            <span className="purple">German (B1)</span>, and I’m looking for a
            Working Student role at an international technology company.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Taking part in Hackathons 🏆
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Full-Stack Web Apps 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Networking & IT Solutions 🌐
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Altin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
