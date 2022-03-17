import { add } from "./math.js";

const root = document.querySelector("#root");
const p = document.createElement("p");
p.innerText = add(5, 3);
root.appendChild(p);
