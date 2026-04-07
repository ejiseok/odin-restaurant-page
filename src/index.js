import "./styles.css";

const content = document.querySelector("#content");

const homeContent = document.createElement("h2");
homeContent.textContent = "멋진 레스토랑!";

const menuContent = document.createElement("h2");
menuContent.textContent = "맛있는 음식!";

const aboutContent = document.createElement("h2");
aboutContent.textContent = "예쁜 연락처!";

content.append(homeContent);
content.append(menuContent);
content.append(aboutContent);