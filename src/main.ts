import exampleIconUrl from "./Grass_Block_JE7_BE6.png"; //src/Grass_Block_JE7_BE6.png
import "./style.css";

document.body.innerHTML = `
  <p>Example image asset: <img src="${exampleIconUrl}" class="icon" /></p>
`;

const button = document.createElement("button");
button.textContent = "Open Dialog";
button.addEventListener("click", () => {
  alert("Dialog would appear here!");
});

// Add it to the page
document.body.appendChild(button);
