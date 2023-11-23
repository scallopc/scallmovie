import { createGlobalStyle } from "styled-components";
import { scroll } from "./scroll";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.default.high};
    color: ${(props) => props.theme.default.medium};
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
  }

  a {
    text-decoration: none;
    color: initial;
  }

  ${scroll}
`;
