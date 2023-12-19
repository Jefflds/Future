import React from "react";
import styled from "styled-components";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import bgContent from "../assets/Images/Content/bg-content.webp";
const bgImg: string = bgContent;

const Home: React.FC = () => {
  return (
    <HomeContainer className="wrapper">
      <ParallaxImg className="module parallax text-center">
          <h1>Welcome to the Future.</h1>
      </ParallaxImg>
    </HomeContainer>
  );
};

export default Home;

export const HomeContainer = styled.section`
  h1 {
    font-weight: 900;
    color: #fff;
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
  .module.parallax:after {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 8;
    background: -moz-linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0) 40%,
      #000 100%
    );
    background: -webkit-linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0) 40%,
      #000 100%
    );
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0,
      rgba(0, 0, 0, 0) 40%,
      #000 100%
    );
  }
`;

export const ParallaxImg = styled.article`
  background-image: url("${bgImg}");
  align-items: center;
  justify-content: center;
`;
