import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assests/img/proj-1.png";
import projImg2 from "../assests/img/proj-2.png";
import colorSharp2 from "../assests/img/color-sharp2.jpeg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const project1 = [
    {
      title: "Online Code Editor",
      description: "Full-stack project",
      imgUrl: projImg1,
      detailsDesc: "Real-Time HTML, CSS and JavaScript Compiler",
      techStack: "Typescript, Tailwind CSS, Node.js, Express.js, MongoDB",
      firstPoint:
        "• Intuitive environment for writing and editing code directly in the browser.",
      secondPoint:
        "• Manage data flow and server-side operations, ensuring seamless performance.",
      thirdPoint: "• Efficiently store and retrieve code snippets.",
      Link: "https://coderun-compiler.netlify.app/",
    },
  ];

  const project2 = [
    {
      title: "E-Commerce Website",
      description: "Full-stack project",
      imgUrl: projImg2,
      detailsDesc: "Easily accessible e-com website.",
      techStack: "React, Tailwind CSS, Node.js, Express.js, MongoDB",
      firstPoint: "• Interactive and responsive user interfaces.",
      secondPoint: "• API integrations and database operations.",
      thirdPoint:
        "• Product catalog with search and filter, shopping cart and user authorization using JWT.",
      Link: "https://nearu.netlify.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>I am a versatile developer with experience in web and mobile development, data visualization, and API design. My projects showcase a commitment to creating user-friendly, scalable solutions. From building real-time compiler to interactive dashboards, I focus on delivering quality and impactful results. Explore my portfolio to see how I bring ideas to life.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <div>
                          {project1.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {project2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
