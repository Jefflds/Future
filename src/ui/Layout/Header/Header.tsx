import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import TogglerButtonImg from "../../../assets/Images/Navbar/Button.svg";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Navbar expand="lg" fixed="top">
        <Container>
          <Navbar.Brand>Future</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="justify-content-end">
              <Nav.Item className="mx-3">Home</Nav.Item>
              <Nav.Item className="mx-3">Sobre Nós</Nav.Item>
              <Nav.Item className="mx-3">Contate-nos</Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;

import styled from "styled-components";
const TogglerButton: string = TogglerButtonImg;

export const HeaderContainer = styled.header`
  color: #fff;

  .navbar-brand {
    color: #fff;
    font-weight: bolder;
    font-size: 64px;
  }

  span.navbar-toggler-icon {
    background-image: url("${TogglerButton}")!important;
  }
`;
