import React from "react";
import styled from "styled-components";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import bgContent from "../assets/Images/Content/bg-content.webp";
import { Col, Container, Row } from "react-bootstrap";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import HomeImg1 from "../assets/Images/Home/HomeImg1.webp";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import HomeImg2 from "../assets/Images/Home/HomeImg2.webp";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import HomeImg3 from "../assets/Images/Home/HomeImg3.webp";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import HomeImg4 from "../assets/Images/Home/HomeImg4.webp";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import HomeImg5 from "../assets/Images/Home/HomeImg5.webp";
const bgImg: string = bgContent;

const Home: React.FC = () => {
  return (
    <HomeContainer className="wrapper">
      <ParallaxImg className="module parallax text-center">
        <Container>
          <Row>
            <Col sm={4}>
              <a href="">
                <StyledImage src={HomeImg1} alt="" className="img-fluid" />
              </a>
            </Col>
            <Col sm={4}></Col>
            <Col sm={4} className="mb-5">
              <a href="">
                <StyledImage src={HomeImg2} alt="" className="img-fluid" />
              </a>
            </Col>
            <Col sm={12} className="mt-5 mb-5">
              <h1>Welcome to the Future.</h1>
            </Col>
            <Col sm={4} className="mt-5">
              <a href="">
                <StyledImage src={HomeImg3} alt="" className="img-fluid" />
              </a>
            </Col>
            <Col sm={4} className="mt-5">
              <a href="">
                <StyledImage src={HomeImg4} alt="" className="img-fluid" />
              </a>
            </Col>
            <Col sm={4} className="mt-5">
              <a href="">
                <StyledImage src={HomeImg5} alt="" className="img-fluid" />
              </a>
            </Col>
          </Row>
        </Container>
      </ParallaxImg>
    </HomeContainer>
  );
};

export default Home;

export const HomeContainer = styled.section`
  h1 {
    font-weight: 900;
    color: #fff;
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    font-size: 48px;
    text-align: center;
    background: linear-gradient(45deg, #ff8c00, #ff6347);
    -webkit-background-clip: text;
    background-clip: text;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  &.wrapper {
    width: 100%;
    margin: 0 auto;
  }

  .container {
    width: 100%;
    max-width: 760px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .module p {
    margin-bottom: 40px;
    color: #fff;
  }

  .module:last-child {
    margin-bottom: 0;
  }

  .module.content {
    padding: 40px 0;
  }

  .module.parallax {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh !important;
    width: 100%;
    position: relative;
    overflow: hidden;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
  }
`;

export const ParallaxImg = styled.article`
  background-image: url("${bgImg}");
  align-items: center;
  justify-content: center;
`;

export const StyledImage = styled.img`
  border-radius: 50px;
  border: 2px solid #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
