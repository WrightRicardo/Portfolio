import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Wright Ricardo </span>
            from <span className="purple"> New York, USA.</span>
            <br /> I'm a Full Stack developer having experience of over 6 years and have developed large scale web applications using Javascript ES5/ES6, React, Vue and
            Angular,Node.js. I also worked on SQL,MySQL, PostgreSQL, MongoDB.
            <br />
            Additionally, I am currently employed as a full stack developer at
            Honeywell.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Wright Ricardo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
