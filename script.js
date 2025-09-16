// ------------------------------
// Part 2: JavaScript Functions (scope, parameters, return values)
// ------------------------------

// Global scope variable
let totalAreasCalculated = 0;

// A reusable function with parameters & return value
function calculateArea(width, height) {
  // local scope variable
  let area = width * height;
  totalAreasCalculated++;
  return area;
}

document.getElementById('calcBtn').addEventListener('click', () => {
  const width = parseFloat(document.getElementById('width').value);
  const height = parseFloat(document.getElementById('height').value);
  const area = calculateArea(width, height);
  document.getElementById('areaResult').textContent = area + 
    ` (Total Calculated: ${totalAreasCalculated})`;
});

// ------------------------------
// Part 3: Combining CSS Animations with JavaScript
// ------------------------------

const box = document.getElementById('animateBox');
const animateBtn = document.getElementById('animateBtn');

// Reusable function to trigger CSS animation
function triggerAnimation(element, animationClass) {
  element.classList.add(animationClass);

  // Remove the animation class after it ends so it can be retriggered
  element.addEventListener('animationend', () => {
    element.classList.remove(animationClass);
  }, { once: true });
}

animateBtn.addEventListener('click', () => {
  triggerAnimation(box, 'animate');
});
