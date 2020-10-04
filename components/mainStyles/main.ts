import styled, { keyframes, css } from "styled-components";

export function getFont(font: string) {
  return `
    
  @font-face {
        src: url(/fonts/Poppins/Poppins-${font}.ttf);
        font-family: Poppins-${font};
    }    

    
    font-family: Poppins-${font};
    `;
}

export function flexbox(dir = "row", just = "center", align = "center") {
  return `
    
    display:flex;
    flex-direction:${dir};
    justify-content:${just};
    align-items:${align};
    `;
}

export const animateBorder = keyframes`

    0% {
    background-position: 0 100%, 0 0, 0 100%, 100% 0;
    background-size: 3px 0%, 100% 3px, 0% 3px,3px 0%;
    }
    40% {
    background-position: 0 100%, 100% 0, 100% 100%, 100% 0;
    background-size: 3px 0%, 100% 3px, 0% 3px,3px 100%;
    }
    60% {
    background-position: 0 100%, 100% 0, 100% 100%, 100% 100%;
    background-size: 3px 0%, 0% 3px, 100% 3px,3px 100%
    }
    70% {
    background-position: 0 100%, 100% 0, 0% 100%, 100% 100%;
    background-size: 3px 100%, 0% 3px, 100% 3px,3px 0%;
    }
    80% {
    background-position: 0% 0%, 0% 0, 0% 100%, 100% 100%;
    background-size: 3px 100%, 0% 3px, 0% 3px,3px 0%;
    }
    100% {
    background-position: 0% 0%, 0 0, 0 100%, 100% 100%;
    background-size: 3px 0%, 100% 3px, 0% 3px,3px 0%  
    }
  
`;

export function putBorderAnimation(
  bgColor: string = "white",
  size: number = 3
) {
  return css`
    position: relative;
    border: none;
    background-image: linear-gradient(${bgColor}, ${bgColor}),
      linear-gradient(${bgColor}, ${bgColor}),
      linear-gradient(${bgColor}, ${bgColor}),
      linear-gradient(${bgColor}, ${bgColor});
    background-position: 0 0, 0 0, 0 100%, 0 100%;
    background-size: ${size}px 0%, 0% ${size}px, 0% ${size}px, ${size}px 0%;
    background-repeat: no-repeat;
    transition: 0.2s linear;

    &:after {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
    }

    &:hover {
      background-color: transparent;
      background-position: 0 100%, 0 0, 0 100%, 100% 0;
      background-size: ${size}px 0%, 100% ${size}px, 0% ${size}px, ${size}px 0%;
      animation: ${animateBorder} 0.7s linear infinite 0.2s;
    }
  `;
}
