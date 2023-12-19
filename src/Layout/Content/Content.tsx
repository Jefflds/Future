import React from "react";
import styled from "styled-components";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import bgContent from "../../assets/Images/Content/bg-content.webp"


const bgImg: string = bgContent;

const Content: React.FC = () => {
  return <MainContainer>Main</MainContainer>;
};

export default Content;

export const MainContainer = styled.main`
  background-image: url("${bgImg}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
`;
