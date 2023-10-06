/*let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft+=900;
});

backBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -=900;
});
*/

// Select the HTML element with the class "gallery" and store it in the variable "scrollContainer".
let scrollContainer = document.querySelector(".gallery");

// Select the HTML element with the id "backBtn" and store it in the variable "backBtn".
let backBtn = document.getElementById("backBtn");

// Select the HTML element with the id "nextBtn" and store it in the variable "nextBtn".
let nextBtn = document.getElementById("nextBtn");

// Add an event listener to the "scrollContainer" element for the "wheel" event.
scrollContainer.addEventListener("wheel", (evt) => {
    // Prevent the default behavior of the mouse wheel (prevents page scrolling).
    evt.preventDefault();

    // Adjust the horizontal scroll position of "scrollContainer" by the amount of the vertical mouse wheel scroll (evt.deltaY).
    scrollContainer.scrollLeft += evt.deltaY;
});

// Add an event listener to the "nextBtn" element for the "click" event.
nextBtn.addEventListener("click", () => {
    // Set the scroll behavior of "scrollContainer" to "smooth" for smooth scrolling animation.
    scrollContainer.style.scrollBehavior = "smooth";

    // Increment the horizontal scroll position of "scrollContainer" by 900 pixels.
    scrollContainer.scrollLeft += 900;
});

// Add an event listener to the "backBtn" element for the "click" event.
backBtn.addEventListener("click", () => {
    // Set the scroll behavior of "scrollContainer" to "smooth" for smooth scrolling animation.
    scrollContainer.style.scrollBehavior = "smooth";

    // Decrement the horizontal scroll position of "scrollContainer" by 900 pixels.
    scrollContainer.scrollLeft -= 900;
});
