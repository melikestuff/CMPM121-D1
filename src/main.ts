import exampleIconUrl from "./Grass_Block_JE7_BE6.png";
import "./style.css";

//document.body.innerHTML = `<p>Example image asset: <img src="${exampleIconUrl}" class="icon" /></p>`;

// Counter variable to track how many pts/clicks player has made
let counter: number = 0;

// ---------------------------------------------
// Create a display to showcase pts/clicks so far

const counterDisplay = document.createElement("div");

// Settings for display
counterDisplay.textContent = `${counter} blocks`;
counterDisplay.style.fontSize = "24px";
counterDisplay.style.textAlign = "center";
counterDisplay.style.marginTop = "20px";

//-------------------------------------------
// Step 1: CLickable button that adds to your currency

const button = document.createElement("button");

// Button Settings
// Step's require emote in the text box, soooo

button.style.background = "none";
button.style.fontSize = "60px";
button.style.display = "block";
button.style.margin = "100px auto";
button.style.border = "none";

// Change button to hold an image
const img = document.createElement("img");
img.src = exampleIconUrl;
img.alt = "Grass Block";
img.style.width = "100px";
img.style.height = "100px";
img.style.objectFit = "cover";
button.appendChild(img);

// On button Press
button.addEventListener("click", () => {
  console.log("BUTTON BEEN PRESSED!");
  counter++;
  counterDisplay.textContent = `${counter} blocks`;
});

// The setinterval functino, runs every second
setInterval(() => {
  counter++;
  counterDisplay.textContent = `${counter} blocks`;
}, 1000);

// Add anything to display to the page
document.body.appendChild(button);
document.body.appendChild(counterDisplay);
