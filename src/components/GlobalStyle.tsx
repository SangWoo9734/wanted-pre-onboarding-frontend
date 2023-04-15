import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* reset */
  *{margin:0;padding:0;font:inherit;color:inherit;}
  *,:after, :before {box-sizing:border-box;flex-shrink:0;}
  :root {-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%;text-size-adjust:100%;cursor:default;line-height:1.5;overflow-wrap:break-word;-moz-tab-size:4;tab-size:4}
  html {font-size: 80%; scroll-behavior: smooth;  background:#41ce9140}
  body {background: white;}
  html, body { position: relative; width: 100%; height:100%; max-width: 600px; margin: auto;  &::-webkit-scrollbar {
    display: none;
  }}
  img, picture, video, canvas, svg {display: block;max-width:100%;};
  button {background:none;border:0;cursor:pointer;}
  a {text-decoration:none}
  table {border-collapse:collapse;border-spacing:0}

  * { font-family: 'Spoqa Han Sans Neo', 'sans-serif'; ::-webkit-scrollbar {
    display: none;
  }}
`;

export const PageContainer = styled.div`
  padding: 20px 10px;
`;

export const PageTitle = styled.p`
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 3rem;
`;

export const DefaultInput = styled.input`
  flex: auto;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  background: #41ce9140;
  font-size: 1.2rem;
`;

export const DefaultButton = styled.button<{ isFlexible?: boolean }>`
  flex: ${(props) => (props.isFlexible === true ? "auto" : "none")};
  margin-left: ${(props) => (props.isFlexible === true ? "0px" : "10px")};
  padding: 10px;
  border-radius: 5px;
  background: #41ce91;
  color: white;
  font-size: 1.2rem;
`;
