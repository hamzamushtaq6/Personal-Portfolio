import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Type from './Type';
import Home2 from './Home2';
import myImg from "../../assets/PFIMG.jpg";
import Tilt from "react-parallax-tilt"


function Home(){
  return (
 <section>
 <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">

    <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello World!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
    <h1 className="heading-name">
                I'm
                <strong className="main-name"> Hamza Mushtaq</strong>
              </h1>          
    <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
                <Tilt>
                  <img src={myImg} className="img-fluid" alt="avatar" style={{ backgroundColor: "transparent", borderRadius: "50%" }} />
                </Tilt>
                
              </div>  
              </Col> 
              </Row>
        </Container>
      </Container>
      <Home2 />       
 
 </section> 
  );
}

export default Home
