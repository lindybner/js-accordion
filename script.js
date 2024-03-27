window.onload = () => {
  // VARIABLES
  const accordionUnit = document.querySelector(".accordion-unit");
  const accordionContent = document.querySelector(".accordion-content");

  // FUNCTIONS
  // hide accordionContent (on load)
  const hideContent = () => {
    accordionContent.classList.add("hideElement");
  };

  const clickAccordionUnit = () => {
    if (accordionContent.classList.contains("hideElement")) {
      accordionContent.classList.remove("hideElement");
    } else {
      accordionContent.classList.add("hideElement");
    }
  };

  // EVENT LISTENERS
  accordionUnit.addEventListener("click", clickAccordionUnit);

  // ON LOAD
  // hide accordionContent on load
  hideContent();
};
