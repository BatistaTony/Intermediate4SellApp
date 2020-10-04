import styled from "styled-components";
import { flexbox } from "../mainStyles/main";

export const ContentStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 25% 50% 25%;
  grid-template-rows: 100vh;
  align-items: flex-end;
`;

const name = "name";

export const AdsStyle = styled.div`
  width: 100%;
  height: 100%;
  ${flexbox("column", "flex-start", "center")}
`;

export const AdItem = styled.div`
  width: 90%;
  height: 210px;
  box-shadow: 0 0 5px;
  border-radius: 5px;
  background: url(/images/hero.png);
  background-size: cover;
  margin-top: 20px;
`;

export const ListPost = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 20px;
  float: left;
  overflow: auto;
  box-sizing: border-box;
  padding-right: 30px;
  padding-left: 30px;
`;
