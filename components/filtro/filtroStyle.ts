import styled from "styled-components";
import { flexbox, getFont } from "../mainStyles/main";

export const FilterStyle = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  ${flexbox("column", "flex-start", "center")}
`;

export const Title = styled.h1`
  font-size: 12pt;
  color: black;
  width: 90%;
  margin-top: 20px;
  ${getFont("Regular")}
`;

export const FormGroup = styled.div`
  width: 90%;
  height: 35px;
  border-radius: 5px;
  overflow: hidden;
  border: 2px solid gray;
  margin-top: 10px;

  input {
    font-size: 11pt;
    outline: none;
    border: none;
    ${getFont("Medium")};
    height: 100%;
    padding-left: 10px;
    box-sizing: border-box;
    width: 100%;
    color: black;
  }
`;

export const SelectGroup = styled.div`
  width: 90%;
  height: auto;
  position: relative;
  margin-top: 20px;
`;

export const ButtonSelect = styled.button`
  width: 100%;
  height: 40px;
  border: 5px solid white;
  background: white;
  box-shadow: 0 0 5px;
  padding-left: 10px;
  border-radius: 5px;
  text-align: left;
  outline: none;
  font-size: 11pt;
  ${getFont("Medium")};
`;

export const CategoryList = styled.ul`
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  padding-bottom: 30px;
  background: white;
  box-shadow: 0 0 5px;
  border-radius: 5px;
  list-style: none;
`;

export const ItemCategory = styled.li`
  width: 100%;
  font-size: 11pt;
  ${getFont("Medium")};
  padding-top: 8px;
  box-sizing: border-box;
  padding-left: 10px;
  padding-bottom: 8px;
  border-bottom: 0.3px solid rgba(0, 0, 0, 0.2);
  cursor: default;
`;
