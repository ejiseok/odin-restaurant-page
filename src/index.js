import "./styles.css";

import { homeContent } from "./homeContent.js";
import { menuContent } from "./menuContent.js";
import { aboutContent } from "./aboutContent.js";

const content = document.querySelector("#content");

content.append(homeContent);
content.append(menuContent);
content.append(aboutContent);