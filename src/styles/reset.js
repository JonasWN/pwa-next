import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;
  touch-action: manipulation;
  scroll-behavior: smooth;
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
ul,
ol {
  padding: 0;
}
body,
h1,
h2,
h3,
h4,
p,
ul,
ol,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}
body {
  background: ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.font};
  min-height: 100vh;
  scroll-behavior: smooth;
  line-height: 1.5;
  font-family: 'Barlow', sans-serif;
  -ms-overflow-style: none;
}
 
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
img {
  max-width: 100%;
  display: block;
  height: auto;
}
input,
button,
textarea,
select {
  font: inherit;
}
`
