import exampleIconUrl from "./Grass_Block_JE7_BE6.png";
import "./style.css";

//document.body.innerHTML = `<p>Example image asset: <img src="${exampleIconUrl}" class="icon" /></p>`;

// Counter variable to track how many pts/clicks player has made
let counter: number = 0;
// The time.deltatime of unity lol kinda
let lastTime = performance.now(); // Track time since last frame.
// AMT of blocks gained automatically per second avg
let rate = 0; // blocks per second (starts at 0)

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

const clickButton = document.createElement("button");

// Button Settings
// Step's require emote in the text box, soooo

clickButton.style.background = "none";
clickButton.style.fontSize = "60px";
clickButton.style.display = "block";
clickButton.style.margin = "100px auto";
clickButton.style.border = "none";

// Change button to hold an image
const img = document.createElement("img");
img.src = exampleIconUrl;
img.alt = "Grass Block";
img.style.width = "100px";
img.style.height = "100px";
img.style.objectFit = "cover";
clickButton.appendChild(img);

// On button Press
clickButton.addEventListener("click", () => {
  console.log("BUTTON BEEN PRESSED!");
  counter++;
  updateDisplay();
});

//-------------------------------------------
// Upgrade purchase button
const upgradeButton = document.createElement("button");

//Settings for upgrade button
upgradeButton.textContent = "Buy Upgrade (+1 block/sec)";
upgradeButton.style.display = "block";
upgradeButton.style.margin = "20px auto";
upgradeButton.style.padding = "10px 20px";
upgradeButton.style.fontSize = "18px";
upgradeButton.disabled = true; // starts locked

// On click event for upgrade button
upgradeButton.addEventListener("click", () => {
  const cost = 10;
  if (counter >= cost) {
    counter -= cost;
    rate += 1; // increase growth rate
    updateDisplay();
  }
});

// Display function so more usability
// If block count > 10, display and let player click on the upgrade button
// Both manuel clicks and automatic clicks trigger this function.
function updateDisplay() {
  counterDisplay.textContent = `${counter.toFixed(2)} blocks`;
  upgradeButton.disabled = counter < 10;
}

// Continuous growth per frame
function update(currentTime: number) {
  const deltaTime = (currentTime - lastTime) / 1000;
  lastTime = currentTime;

  // Add automatic income based on rate
  counter += rate * deltaTime;

  updateDisplay();
  requestAnimationFrame(update);
}

requestAnimationFrame(update);
// Add anything to display to the page
document.body.appendChild(clickButton);
document.body.appendChild(counterDisplay);
document.body.appendChild(upgradeButton);
