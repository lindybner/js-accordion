window.onload = () => {
  // VARIABLES
  const accordionHeading = document.querySelector(".accordion-container");
  const accordionContent = document.querySelector(".accordion-content");

  // FUNCTIONS
  // hide accordionContent on load
  const hideContent = () => {
    accordionContent.classList.add("hideElement");
  };

  hideContent();
};
