import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

function Home2 () {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              
              <span className="purple">Work Experience </span>
            </h1>
            <p className="home-about-body">
              At Invisible Technologies, I worked as Advanced AI Trainer and played a key role in two major AI projects:
              </p>
              <br />
              <ul className="purple-one">
  <li><b className="purple">Amazon Phoenix Project</b> – Fine-tuning LLMs, reinforcement learning, and response optimization.</li>
  <li><b className="purple">Walmart SKU Enrichment</b> – Training AI for better product categorization and content generation.</li>
</ul>

              <br />
              <br />
              
              <p className='home-about-body'>
                At yellow.ai I worked as a Software Engineer focused on delivering quality chatbots for clients like:
              </p>
              <br />
              

                 <ul className="purple-one">
                  <li><b className='purple-one'> Hero Bangladesh</b>-integrated Maps API along with payment gateway API for real time data retention.</li>
                  <li><b className='purple-one'> Royal Enfield</b>-integrated Maps API to get the location of the service centers.</li>
                  <li><b className='purple-one'> GTPL Hathway</b>-Whatsapp bot to get new broadband connections.</li>
                  <li><b className='purple-one'> BMRCL</b>- Bot to book metro tickets on WhatsApp Bot.</li> 
                </ul>
                
                  
              <br />
              <br />
              <h3>What's in store for 2025?</h3>
              <p>As a dedicated professional with a passion for building impactful products, I am actively seeking product management roles where I can leverage my skills, experience, and strategic mindset to drive meaningful outcomes.</p>
              <p>With a keen eye for user experience, a strong analytical mindset, and a results-oriented approach, I am confident that my expertise aligns with the needs of innovative organizations looking to scale and optimize their products. My ability to bridge the gap between business goals and technical execution allows me to contribute to both strategic vision and day-to-day product operations.
I continuously upskill according to market trends in product lifecycle development and product management tools like Figma, Jira, Power BI, and other industry-standard platforms. This enables me to effectively collaborate with cross-functional teams, streamline workflows, and make data-driven decisions that enhance product success.</p>
            {/* </b> */}
          </Col>
          <Col md={4} className="myAvtar">
            {/* <Tilt>
<img src={myImg} className="img-fluid" alt="avatar" style={{ backgroundColor: "transparent", borderRadius: "50%" }} /> */}

            {/* </Tilt> */}
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hamzamushtaq6"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/hamza01100080?t=_fNi6ArOtptb4pdR8QHrMA&s=08"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaXTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hamzamushtaq/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/hamzahmushtaq5?igsh=dGM4NXp6OWgzY2ly"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaInstagram />

                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}


export default Home2
