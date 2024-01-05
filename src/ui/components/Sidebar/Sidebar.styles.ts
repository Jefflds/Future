import styled from "styled-components";

export const SidebatContainer = styled.aside`
  hr {
    width: 100%;
    color: #ffffff;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  :after {
    content: "";
  }

  body {
    line-height: 1.4;
  }

  nav {
    float: left;
    position: relative;
    top: 0;
    left: 0;
    background: rgb(18, 86, 142);
    background: linear-gradient(
      0deg,
      rgba(18, 86, 142, 1) 0%,
      rgba(53, 2, 30, 1) 50%,
      rgba(178, 27, 90, 1) 100%
    );
    height: 100vh;
  }

  nav ul {
    text-align: center;
  }

  nav ul li {
    position: relative;
    width: 70px;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.4s ease-out;
  }

  nav ul li:after {
    position: absolute;
    background: white;
    top: 0;
    left: 70px;
    width: 70px;
    height: 100%;
    opacity: 0.5;
    transform: perspective(400px) rotateY(90deg);
    transform-origin: 0 100%;
    transition: all 0.4s ease-out;
  }

  nav ul li:nth-child(1):after {
    content: "Home";
    line-height: 88px;
  }
  nav ul li:nth-child(2):after {
    content: "About";
    line-height: 88px;
  }
  nav ul li:nth-child(3):after {
    content: "Work";
    line-height: 85px;
  }
  nav ul li:nth-child(4):after {
    content: "Say hi";
    line-height: 70px;
  }

  nav ul li:hover {
    transform: translateX(-70px);
  }

  nav ul li:hover:after {
    opacity: 1;
    transform: perspective(400px) rotateY(0deg) scale(1);
  }

  nav ul li > div {
    display: inline-block;
    padding: 25px 0;
    background: transparent;
  }

  nav ul li div {
    position: relative;
  }

  .roof {
    width: 0;
    height: 0;
    top: 2px;
    border-style: solid;
    border-width: 0 21px 15px 21px;
    border-color: transparent transparent #ffffff transparent;
  }

  .roof-edge {
    position: absolute;
    z-index: 20;
    left: -17px;
    top: 3px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 17px 12px 17px;
    border-color: transparent transparent transparent;
  }

  .roof-edge:after {
    position: absolute;
    left: -14.5px;
    top: 3px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 14.5px 10px 14.5px;
    border-color: transparent transparent white transparent;
  }

  .front {
    position: relative;
    top: 3px;
    width: 28.5px;
    height: 20px;
    margin: 0 auto;
    background: white;
  }

  .front:after {
    position: absolute;
    background: #12568e;
    width: 11px;
    height: 13px;
    bottom: 0;
    left: 9px;
  }

  .head {
    width: 32px;
    height: 35px;
    background: white;
    border-radius: 8px;
  }

  .head:after {
    width: 4px;
    height: 10px;
    background: white;
    position: absolute;
    border-radius: 4px 0 0 4px;
    top: 21px;
    left: 14px;
    transform: rotate(270deg);
  }

  .eyes {
    width: 8px;
    height: 5px;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    left: 5px;
    background: #12568e;
  }

  .eyes:after {
    width: 8px;
    height: 5px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 14px;
    background: #12568e;
  }

  .beard {
    width: 32px;
    height: 17px;
    background: #12568e;
    border: 2px solid white;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 0 0 8px 8px;
  }

  .beard:after {
    position: absolute;
    top: -2px;
    left: 11px;
    background: white;
    width: 6px;
    height: 4px;
    border-left: 1px solid #12568e;
    border-right: 1px solid #12568e;
  }

  .paper {
    position: relative;
    height: 32px;
    width: 29px;
    background: white;
    border: 2px solid white;
  }

  .paper:after {
    position: absolute;
    top: 1px;
    left: 0;
    width: 25px;
    height: 29px;
    background: white;
    border-top: 4px solid #12568e;
  }

  .lines {
    position: absolute;
    top: 36px;
    left: 5px;
    width: 11px;
    box-shadow: 0 0 0 1px #12568e;
  }

  .lines:after {
    position: absolute;
    top: 4px;
    left: 3px;
    width: 14px;
    box-shadow: 0 0 0 1px #12568e;
  }

  .lines:nth-child(2) {
    position: absolute;
    top: 44px;
    left: 8px;
    width: 11px;
  }

  .lines:nth-child(2):after {
    position: absolute;
    top: 4px;
    left: -3px;
    width: 11px;
  }

  .lines:nth-child(3) {
    position: absolute;
    top: 52px;
    left: 8px;
    width: 14px;
  }

  .lines:nth-child(3):after {
    display: none;
  }

  .mail-base {
    position: relative;
    width: 32px;
    height: 18px;
    background: white;
  }

  .mail-top {
    position: absolute;
    z-index: 20;
    left: 0;
    top: 0;
    width: 0;
    height: 0;
    transform: rotate(180deg);
    border-style: solid;
    border-width: 0 16px 11px 16px;
    border-color: transparent transparent #12568e transparent;
  }

  .mail-top:after {
    position: absolute;
    z-index: 20;
    left: -16px;
    top: 3px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 16px 9px 16px;
    border-color: transparent transparent white transparent;
  }
`;
