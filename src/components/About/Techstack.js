import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVuedotjs, SiDjango, SiFastapi } from "react-icons/si";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaHtml5 fontSize={"24px"} />
        <div className="tech-icons-text">HTML5</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt fontSize={"24px"} />
        <div className="tech-icons-text">CSS3</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVuedotjs fontSize={"24px"} />
        <div className="tech-icons-text">Vue.js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="python" />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiDjango fontSize={"24px"} />
        <div className="tech-icons-text">Django</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi fontSize={"24px"} />
        <div className="tech-icons-text">FastAPI</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="SQL" />
        <div className="tech-icons-text">SQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
    </Row>
  );
}

export default Techstack;
