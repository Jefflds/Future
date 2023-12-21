import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
import Logo from "../../../assets/Images/Footer/logoDark.svg";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <FooterContainer className="d-flex flex-wrap justify-content-between align-items-center py-3">
      <div className="col-md-4 d-flex align-items-center">
        <a
          href="/"
          className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
        >
          <img src={Logo} alt="" width={32} />
        </a>
        <span className="mb-3 mb-md-0">© 2022 Company, Inc</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a href="#">
            <FaTwitter size={24} />
          </a>
        </li>
        <li className="ms-3">
          <a href="#">
            <FaInstagram size={24} />
          </a>
        </li>
        <li className="ms-3">
          <a href="#">
            <FaFacebook size={24} />
          </a>
        </li>
      </ul>
    </FooterContainer>
  );
};

export default Footer;

import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 50px;
  background: rgb(116, 11, 110);
  background: linear-gradient(
    90deg,
    rgba(116, 11, 110, 1) 0%,
    rgba(4, 15, 43, 1) 35%,
    rgba(46, 52, 152, 1) 100%
  );
 

  span {
    color: #fff;
  }

  svg {
    fill: #fff;
  }
`;
