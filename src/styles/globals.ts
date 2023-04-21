import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Quicksand", sans-serif;
  color: #111827;
}
html {
  font-size: 10px;
}
body {
  background-color: #f8f9fa;
  background: url("https://irmakdak.github.io/JWT-auth/public/images/Ellipses.png");
}
h2 {
  display: block;
  text-align: left !important;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
}
a {
  cursor: pointer;
  text-decoration: none;
}
a:hover {
  color: #090909;
  transition-duration: 0.3s;
}
li {
  transform: translate(10px, 0px);
  font-weight: 200;
}
.active {
  text-decoration: underline;
  text-decoration-color: #4f46e5;
  line-height: 96px;
}
.invalid-feedback {
  color: red;
  font-size: 1.5rem;
  padding: 8px 0px;
}
.container {
  padding: 0px 30px;
}
.drop-content {
  display: none;
  position: absolute;
  min-width: 60px;
  z-index: 5;
  right: 0px;
  top: 40px;
}
.drop-menu {
  display: none;
  position: absolute;
  min-width: 60px;
  z-index: 5;
  right: 0px;

  padding: 15px;
  top: 50px;
  border: 1px solid #acaaaa;
  background: #fff;
}
@media (max-width: 768px) {
  html {
    font-size: 9px;
  }
}
@media (max-width: 576px) {
  .container {
    padding: 0px 20px;
  }
  .drop-content {
    top: 50px;
  }
}
`;
