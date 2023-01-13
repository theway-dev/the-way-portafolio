import { createGlobalStyle } from "styled-components";

export const fontFamily1 = `'Cairo', sans-serif`;
export const fontFamily2 = `'Space Grotesk', sans-serif`;
export const fontFamily3 = `'Cormorant', serif`;

export const GlobalStyles = createGlobalStyle`
:root {
  --font-family-one: "Montserrat", sans-serif;
  --font-family-two: sans-serif;
  --color-primary: #201021;
  --color-secondary: #eee3d9;
  --color-tertiary: #ff825a;
  --color-fourth: #0b2749;
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  font-family: ${fontFamily1};
}

html {
  font-family: ${fontFamily1};
  font-size: 62.5%;
  scroll-behavior: smooth;
}


body {
  box-sizing: border-box;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0;
  margin: 0;
  scroll-behavior: smooth;
  overflow-x: hidden;
  background-color: var(--color-primary);
  color: var(--color-secondary);
}

a {
  &,
  &:link,
  &:visited,
  &:active {
    font-family: ${fontFamily1};
    text-decoration: none;
    color: inherit;
    outline: none;
  }
}

nav ul {
  list-style: none;
}

button {
  font-family: ${fontFamily1};
  width: auto;
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
}

input,
textarea,
button,
select,
a {
  -webkit-tap-highlight-color: hsla(0, 0%, 0%, 0);
}

img
{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
p {
  font-size: 1.7rem;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: normal;
}

span {
  color: inherit;
}

::selection {
  background-color:var(--color-tertiary);
  color: var(--color-primary);
}
`;
