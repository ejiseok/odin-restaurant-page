import "./styles.css";

import { homeContent } from "./homeContent.js";
import { menuContent } from "./menuContent.js";
import { aboutContent } from "./aboutContent.js";

const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");

const content = document.querySelector("#content");

homeBtn.addEventListener("click", () => {
  content.textContent = "";
  content.append(homeContent);
});

menuBtn.addEventListener("click", () => {
  content.textContent = "";
  content.append(menuContent);
});

aboutBtn.addEventListener("click", () => {
  content.textContent = "";
  content.append(aboutContent);
});

content.append(homeContent);
