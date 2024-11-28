// Scroll-triggered animations
document.addEventListener("DOMContentLoaded", () => {
  const animatedSections = document.querySelectorAll(".section");

  const handleScroll = () => {
    const scrollPos = window.scrollY + window.innerHeight;
    animatedSections.forEach((section) => {
      if (section.offsetTop < scrollPos - 100) {
        section.classList.add("animated");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Trigger animations on load
});
