import styled, { keyframes } from "styled-components";
import {
  animateBorder,
  flexbox,
  getFont,
  putBorderAnimation,
} from "../mainStyles/main";

export const NavbarSTyle = styled.div`
  width: 100%;
  height: 100px;
  background: rgba(0, 0, 0, 0.3);
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
  ${flexbox("row", "space-between", "center")};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
`;

export const Logo = styled.div`
  font-size: 14pt;

  h1 {
    color: white;
    ${getFont("Medium")}
  }
`;

export const Menu = styled.ul`
  width: auto;
  height: auto;
  ${flexbox("row", "space-between", "center")};
  list-style: none;
  margin-right: 30px;
`;

export const MenuItem = styled.li`
  ${getFont("Medium")}
  font-size:11pt;
  margin-left: 10px;
  color: white;
  transition: 0.5s;
  cursor: default;
  padding: 10px;
  padding-right: 30px;
  padding-left: 30px;
  ${putBorderAnimation()}
`;
