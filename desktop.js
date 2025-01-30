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
