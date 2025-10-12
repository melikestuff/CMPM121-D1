//import exampleIconUrl from "./Grass_Block_JE7_BE6.png"; //src/Grass_Block_JE7_BE6.png
import "./style.css";

//document.body.innerHTML = `<p>Example image asset: <img src="${exampleIconUrl}" class="icon" /></p>`;

//-------------------------------------------
// CLickable button that adds to your currency

const button = document.createElement("button");

// Button Settings
// Step's require emote in the text box, soooo
button.textContent = "🍎";

button.style.fontSize = "60px";
button.style.display = "block";
button.style.margin = "100px auto";

// On button Press
button.addEventListener("click", () => {
  console.log("BUTTON BEEN PRESSED!");
});

// Add Button to page
document.body.appendChild(button);
