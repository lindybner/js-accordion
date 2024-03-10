window.onload = () => {
  // VARIABLES
  const accordionHeading = document.querySelector(".accordion-container");
  const accordionContent = document.querySelector(".accordion-content");

  // FUNCTIONS
  // hide accordionContent on load
  const hideContent = () => {
    accordionContent.classList.add("hideElement");
  };

  const clickAccordionHeading = () => {
    if (accordionContent.classList.contains("hideElement")) {
      accordionContent.classList.remove("hideElement");
    } else {
      accordionContent.classList.add("hideElement");
    }
  };

  // EVENT LISTENERS
  accordionHeading.addEventListener("click", clickAccordionHeading);

  // ON LOAD
  // hide accordionContent on load
  hideContent();
};
