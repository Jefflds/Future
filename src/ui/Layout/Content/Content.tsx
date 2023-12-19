import React from "react";
import styled from "styled-components";
import Home from "../../../pages/Home";

const Content: React.FC = () => {
  return (
    <MainContainer>
      <Home />
    </MainContainer>
  );
};

export default Content;

export const MainContainer = styled.main``;
