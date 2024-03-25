import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import './style.css';
import svgImage1 from '../../Assets/Images/aboutus.svg';

function About() {
  return (
    <div>
      <Container>
        <section clasname="AboutUseSection">
          <Row>
            <div className="about-content-area">
              <Col>
                <img src={svgImage1} alt="About Us Page" className='about-image' />
              </Col>
              <Col>
                <h1 className='about-heading'>Know More About Us</h1>
                <p>
                  At Toolswebsite, we're dedicated to providing you with an extensive array of tools to simplify and enhance your online experience. Whether you're a seasoned developer, a creative designer, or a curious enthuast, our platform offers a diverse range of utilities designed to meet your needs.
                  Our mission is to empower users by offering intuitive and innovative tools that streamline tasks, boost productivity, and spark creativity. From code generators and design resources to productivity enhancers and data visualization tools, we strive to be your go-to destination for all things digital.
                  Backed by a team of passionate developers and designers, we're committed to continuously expanding our toolkit to keep pace with evolving technologies and emerging trends. Our goal is to equip you with the resources you need to succeed in your projects, no matter the scale or complexity.
                  Join our community of users and discover the possibilities that await you. Whether you're looking to prototype a new idea, optimize your workflow, or simply have fun experimenting with new tools, ToolsWebsite is here to support you every step of the way.
                </p>
              </Col>
            </div>
          </Row>
        </section>
      </Container>
    </div>
  );
}

export default About;
