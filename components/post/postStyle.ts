import styled from "styled-components";
import { flexbox, getFont } from "../mainStyles/main";

export const PostStyled = styled.div`
  width: 100%;
  height: auto;
  box-shadow: 0 0 10px gray;
  border-radius: 10px;
  background: white;
  overflow: hidden;
  margin-bottom: 50px;
`;

export const PostHeader = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  padding-bottom: 20px;
  ${flexbox("row", "space-between", "flex-start")};
  background: whitesmoke;
`;

export const PostInfo = styled.div`
  ${flexbox("row", "flex-start", "flex-start")};
`;

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background: url(/images/hero.png);
  background-size: cover;
  margin-right: 10px;
`;

export const UserName = styled.h1`
  font-size: 11pt;
  color: black;
  ${getFont("Medium")}
  padding-top:2px;
`;

export const ProductCategory = styled.div`
  font-size: 9pt;
  color: gray;
  ${getFont("Regular")};
  ${flexbox("row", "flex-start", "center")};

  span {
    width: 3px;
    height: 3px;
    background: gray;
    border-radius: 100%;
    margin-right: 5px;
    margin-left: 5px;
  }

  img {
    width: 13px;
    height: 13px;
  }
`;

export const PostDate = styled(ProductCategory)``;

export const MenuOptions = styled.div`
  ${flexbox("row", "center", "center")};
  margin-top: 10px;
  position: relative;

  .my-node-enter {
    opacity: 0;
    display: block;
  }

  .my-node-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }

  .my-node-exit {
    opacity: 1;
  }

  .my-node-exit-active {
    opacity: 0;
    display: none;
  }

  .buttonDot {
    width: 25px;
    height: 20px;
    ${flexbox("row", "space-between", "center")};

    .dot {
      width: 6px;
      height: 6px;
      background: black;
      border-radius: 5px;
    }
  }

  .divModalOPtions {
    position: absolute;
    top: 0;
    margin-top: 25px;
    margin-right: 165px;
    width: 200px;
    height: 200px;
    border-radius: 5px;
    box-shadow: 0 0 5px;
    background: white;
  }
`;

export const PostText = styled.div`
  padding: 20px;
  color: gray;
  font-size: 11pt;
  ${getFont("Regular")}
`;

export const PostGallery = styled.ul`
  list-style: none;
  width: 100%;
  height: 150px;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-row: 100%;
  grid-gap: 20px;
`;

export const ProductPicture = styled.li`
  width: 100%;
  height: 100%;
  background: url(${({ img }) => img});
  background-size: cover;
  border-radius: 10px;
`;

export const PostFooter = styled(PostHeader)`
  margin-top: 20px;
`;

export const ButtonInterest = styled.div`
  ${flexbox()}

  img {
    width: 20px;
    height: 20px;
    transition: 0.5s;
  }

  &:hover {
    img {
      transform: scale(1.2);
    }
  }

  span {
    font-size: 12pt;
    color: black;
    ${getFont("Medium")};
    margin-left: 5px;
  }
`;
