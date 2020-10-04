import styled from "styled-components";
import { flexbox, getFont, putBorderAnimation } from "../mainStyles/main";

export const HeroStyle = styled.div`
  width: 100%;
  height: 100vh;
  background: url(/images/hero.png);
  background-size: cover;
  ${flexbox()};
`;

export const ApresentationContainer = styled.div`
  width: 60%;
  height: 60%;
  ${flexbox("column")};
`;

export const Title = styled.div`
  ${getFont("Medium")}
  font-size:18pt;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
`;

export const Text = styled.p`
  ${getFont("Regular")}
  font-size:13pt;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 10px;
  padding-left: 13px;
  padding-right: 13px;

  border-radius: 5px;
  text-align: center;
  margin-top: 20px;
`;

export const BtnContainer = styled.div`
  margin-top: 50px;
  height: auto;
  width: auto;
  ${flexbox()}
`;

export const Button = styled.button`
  width: 250px;
  height: 50px;
  background: green;
  border-radius: 5px;
  outline: none;
  padding: 10px;
  ${getFont("Medium")}
  font-size:12pt;
  margin-right: 50px;

  color: white;
  ${putBorderAnimation("white", 5)}
`;
