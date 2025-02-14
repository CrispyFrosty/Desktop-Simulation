document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.style.position = "absolute"; // Make it positionable
    card.style.cursor = "grab"; // Show grab cursor
    let offsetX,
      offsetY,
      isDragging = false;

    card.addEventListener("mousedown", (event) => {
      isDragging = true;
      offsetX = event.clientX - card.getBoundingClientRect().left;
      offsetY = event.clientY - card.getBoundingClientRect().top;
      card.style.cursor = "grabbing";
      card.style.zIndex = 1000; // Bring the dragged card to the front
    });

    document.addEventListener("mousemove", (event) => {
      if (!isDragging) return;
      card.style.left = `${event.clientX - offsetX}px`;
      card.style.top = `${event.clientY - offsetY}px`;
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
      card.style.cursor = "grab";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("block3").onclick = function () {
    window.open(
      "https://www.google.com",
      "_blank",
      "location=yes,height=570,width=520,scrollbars=yes,status=yes"
    );
  };
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("block2").onclick = function () {
    window.open(
      "C:/Users/alexa/OneDrive/Documents/Desktop%20Simulation/Desktop-Simulation/TestPDF.pdf"
    );
  };
});

// Manually create a dialog
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("block1").onclick = function () {
    // Check if the dialog already exists
    let dialog = document.getElementById("dialog");

    if (!dialog) {
      // Create the dialog element
      dialog = document.createElement("dialog");
      dialog.id = "dialog";

      // Append the dialog to the body
      document.body.appendChild(dialog);

      // Add event listener for closing
      document.getElementById("close").onclick = () => dialog.close();
    }

    // Show the dialog
    dialog.showModal();
  };
});

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

function startDay() {
  const today = new Date();
  let d = today.getDate();
  let mo = today.getMonth() + 1;
  let y = today.getFullYear();
  document.getElementById("day").innerHTML = y + "/" + mo + "/" + d;
}

document.addEventListener("DOMContentLoaded", function () {
  const iconContainer = document.getElementById("time-icon");

  // Sun and Moon SVGs
  const sunSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <circle cx="12" cy="12" r="5" fill="yellow" stroke="orange" stroke-width="2"/>
    <line x1="12" y1="2" x2="12" y2="6" stroke="orange" stroke-width="2"/>
    <line x1="12" y1="18" x2="12" y2="22" stroke="orange" stroke-width="2"/>
    <line x1="2" y1="12" x2="6" y2="12" stroke="orange" stroke-width="2"/>
    <line x1="18" y1="12" x2="22" y2="12" stroke="orange" stroke-width="2"/>
    <line x1="4.2" y1="4.2" x2="7" y2="7" stroke="orange" stroke-width="2"/>
    <line x1="17" y1="17" x2="19.8" y2="19.8" stroke="orange" stroke-width="2"/>
    <line x1="4.2" y1="19.8" x2="7" y2="17" stroke="orange" stroke-width="2"/>
    <line x1="17" y1="7" x2="19.8" y2="4.2" stroke="orange" stroke-width="2"/>
  </svg>`;

  const moonSVG = `<svg
          id="time-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          stroke-width="0"
          fill="currentColor"
          stroke="currentColor"
          class="moon">
          <path
            d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
          ></path>
          <path
            d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"
          ></path>
        </svg>`;

  // Get current hour (0-23)
  const hour = new Date().getHours();

  // If it's between 6 AM - 6 PM, show the Sun, otherwise show the Moon
  if (hour >= 6 && hour < 18) {
    iconContainer.innerHTML = sunSVG;
  } else {
    iconContainer.innerHTML = moonSVG;
  }
});

// Original code viewBox="0 0 16 16"
function start() {
  startTime();
  startDay();
}

function openDialog() {
  const dialog = document.getElementById("dialog");
  dialog.showModal(); // This opens the dialog
}

// Function to close the dialog
function closeDialog() {
  const dialog = document.getElementById("dialog");
  dialog.close(); // This closes the dialog
}

// Add event listener for double click on the card
const card = document.getElementById("card1");
card.addEventListener("dblclick", openDialog);
