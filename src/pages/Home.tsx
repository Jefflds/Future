import React from "react";
import styled from "styled-components";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import bgContent from "../assets/Images/Content/bg-content.webp";

const bgImg: string = bgContent;

const Home: React.FC = () => {
  return <HomeContainer></HomeContainer>;
};

export default Home;

export const HomeContainer = styled.section`
  background-image: url("${bgImg}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
`;
