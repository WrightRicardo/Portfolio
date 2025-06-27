import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/codeEditor-overlay.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="DropBox"
              description="Introducing DropBox, a cutting-edge data storage solution designed to cater to all your storage needs. Built using the robust capabilities of React JS, complemented by the aesthetic flexibility of HTML and CSS, DropBox ensures an impeccable user experience combined with uncompromised efficiency."
              ghLink="https://github.com/WrightRicardo/dropbox-main"
              demoLink="https://dropbox-main-wheat.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ibl-education"
              description="Welcome to IBL-Education, a groundbreaking educational platform sculpted to address and facilitate all your academic requirements. Crafted meticulously using the dynamic capabilities of React JS, and enhanced with the visual appeal of HTML and CSS, IBL-Education stands as a testament to what's possible when technology meets pedagogy."
              ghLink="https://github.com/WrightRicardo/ibleeducation-main"
              demoLink="https://ibleeducation-main.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Password generator"
              description="A Random Password Generator is a tool that creates secure and unpredictable passwords by randomly selecting characters, numbers, and symbols, ensuring a high level of security for user accounts.Crafted meticulously using the dynamic capabilities of HTML, CSS and javascript."
              ghLink="https://github.com/WrightRicardo/random-password-generator"
              demoLink="https://random-password-generator-beta-eight.vercel.app/"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="E-Com Store"
              description=" E-com store built with Next.js is a platform that offers a seamless and dynamic shopping experience, leveraging the power of React, server-side rendering, and static site generation. Crafted meticulously using the capabilities of Next.js, HTML, CSS, and JavaScript, it ensures fast loading times."
              ghLink="https://github.com/WrightRicardo/E-com"
             
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Book Store"
              description="A Book Store built using the MERN stack is a robust platform that combines the power of JavaScript on both the client and server side. With MongoDB as the database, Express.js for backend routing, React for building dynamic user interfaces, and Node.js for server-side logic."
              ghLink="https://github.com/WrightRicardo/bookStore-MERN-Full-Stack"
             
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
