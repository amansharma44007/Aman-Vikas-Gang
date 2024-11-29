var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2500);
}

function toggleNav() {
  var navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("show"); // Toggle the "show" class
}

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.5 } // Adjust this threshold as needed
  );

  const serviceBoxes = document.querySelectorAll(".service-box");
  serviceBoxes.forEach((box) => observer.observe(box));
});

document.addEventListener("DOMContentLoaded", () => {
  const logos = document.querySelectorAll(".logo-item");
  logos.forEach((logo, index) => {
    logo.style.animationDelay = `${index * 0.3}s`; // Adjust delay time for staggered effect
  });
});

// Sample properties data for dynamic cards
const properties = [
  {
    // image: "https://via.placeholder.com/400x180", // Replace with actual image URLs
    image: "images/service2.jpg", // Replace with actual image URLs
    image2: "images/willdelete.png", // Replace with actual image URLs
    name: "M3M CAPITAL",
    type: "Commercial",
    location: "Sector 113 , On Main Dwarka Expressway",
    price: "₹ 2.94 Cr*",
  },
  {
    image: "https://via.placeholder.com/400x180", // Replace with actual image URLs
    image2: "images/willdelete1.png", // Replace with actual image URLs
    name: "SMART WORLD ORCHARD",
    type: "Commercial",
    location: "Sector-61, Gurgaon",
    price: "₹ 1.52 Cr*",
  },
  {
    image: "https://via.placeholder.com/400x180", // Replace with actual image URLs
    image2: "images/willdelete2.png", // Replace with actual image URLs
    name: "Smart World One DXP",
    type: "Commercial",
    location: "On Dwarka Expressway",
    price: "On Request",
  },
  {
    image: "https://via.placeholder.com/400x180", // Replace with actual image URLs
    image2: "images/willdelete3.png", // Replace with actual image URLs
    name: "DLF Gardencity Enclave",
    type: "Commercial",
    location: "Sector 93, Gurugram",
    price: "₹ 1.45 Cr*",
  },
];

const residential = [
  {
    image: "https://via.placeholder.com/400x180", // Replace with actual image URLs
    image2: "images/willdelete1.png", // Replace with actual image URLs
    name: "SMART WORLD ORCHARD",
    type: "Residential",
    location: "Sector-61, Gurgaon",
    price: "₹ 1.52 Cr*",
  },
  {
    // image: "https://via.placeholder.com/400x180", // Replace with actual image URLs
    image: "images/service2.jpg", // Replace with actual image URLs
    image2: "images/willdelete.png", // Replace with actual image URLs
    name: "M3M CAPITAL",
    type: "Residential",
    location: "Sector 113 , On Main Dwarka Expressway",
    price: "₹ 2.94 Cr*",
  },
  {
    image: "https://via.placeholder.com/400x180", // Replace with actual image URLs
    image2: "images/willdelete3.png", // Replace with actual image URLs
    name: "DLF Gardencity Enclave",
    type: "Residential",
    location: "Sector 93, Gurugram",
    price: "₹ 1.45 Cr*",
  },
  {
    image: "https://via.placeholder.com/400x180", // Replace with actual image URLs
    image2: "images/willdelete2.png", // Replace with actual image URLs
    name: "Smart World One DXP",
    type: "Residential",
    location: "On Dwarka Expressway",
    price: "On Request",
  },
];

// Function to create a card
function createCard(property) {
  const card = document.createElement("div");
  card.classList.add("card");

  const picFrame = document.createElement("div");
  picFrame.classList.add("picframe");

  const spanOverlay = document.createElement("span");
  spanOverlay.classList.add("overlay");

  const pfText = document.createElement("span");
  pfText.classList.add("pfText");

  const projectName = document.createElement("span");
  projectName.classList.add("projectName");
  projectName.textContent = property.name;
  pfText.appendChild(projectName);
  spanOverlay.appendChild(pfText);
  picFrame.appendChild(spanOverlay);

  const image = document.createElement("img");
  image.classList.add("image-container");
  image.src = property.image;
  image.alt = property.name;
  picFrame.appendChild(image);

  card.appendChild(picFrame);

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  const imageCenter = document.createElement("img");
  imageCenter.src = property.image2;
  imageCenter.alt = property.name;
  cardContent.appendChild(imageCenter);

  const titleRow = document.createElement("div");
  titleRow.classList.add("card-titleRow");

  const title = document.createElement("h3");
  title.textContent = property.name;
  titleRow.appendChild(title);

  const price = document.createElement("h4");
  price.textContent = property.price;
  price.classList.add("price");
  titleRow.appendChild(price);

  cardContent.appendChild(titleRow);

  const type = document.createElement("h5");
  type.textContent = property.type;
  cardContent.appendChild(type);

  const locationRow = document.createElement("div");
  titleRow.classList.add("card-locationRow");

  const location = document.createElement("p");
  location.classList.add("location");
  const locationIcon = document.createElement("i");
  locationIcon.classList.add("fa", "fa-map-marker"); // location icon css
  location.appendChild(locationIcon);

  const locationText = document.createTextNode(` ${property.location}`);
  location.appendChild(locationText);
  // cardContent.appendChild(location);
  locationRow.appendChild(location);

  const button = document.createElement("span");
  button.classList.add("knowMore");
  const a = document.createElement("a");
  //   button.classList.add("a");
  //a.href = "/Property-main/knowMorePage/knowMore.html";
  a.href="/knowMorePage/knowMore.html" 
  a.target = "_black";
  a.textContent = "Know More";

  button.appendChild(a);
  locationRow.appendChild(button);
  cardContent.appendChild(locationRow);

  card.appendChild(cardContent);

  return card;
}

// Populate the cards in the card container
const cardContainer = document.getElementById("cardContainer");
properties.forEach((property) => {
  const card = createCard(property);
  cardContainer.appendChild(card);
});

// *******************************-------------Customer slider----------*****************************************

const slider = document.getElementById("Cslider");
const cards = document.querySelectorAll(".Ccard");
const totalCards = cards.length;
const visibleCards = 3; // Number of cards visible at a time
const cardWidth = 100 / visibleCards; // Each card width as a percentage
let currentIndex = 0;

// Duplicate the cards to create an infinite sliding effect
for (let i = 0; i < visibleCards; i++) {
  const clone = cards[i].cloneNode(true);
  slider.appendChild(clone);
}

const slideCards = () => {
  currentIndex++;

  // Smoothly slide the cards
  slider.style.transform = `translateX(-${currentIndex * cardWidth}%)`;
  slider.style.transition = "transform 0.5s ease-in-out";

  // Reset to the start seamlessly when reaching the cloned cards
  if (currentIndex === totalCards) {
    setTimeout(() => {
      slider.style.transition = "none";
      slider.style.transform = `translateX(0)`;
      currentIndex = 0;
    }, 500); // Wait for the animation to complete
  }
};

// Auto-slide every 3 seconds
setInterval(slideCards, 4000);

// *******************************-------------Dynamic buttons show cards----------*******************************

function populateCards(propertyArray) {
  const cardContainer = document.getElementById("cardContainer");

  // Clear existing cards
  cardContainer.innerHTML = "";

  // Create and append new cards
  propertyArray.forEach((property) => {
    const card = createCard(property);
    cardContainer.appendChild(card);
  });
}

document.getElementById("commercial").addEventListener("click", () => {
  populateCards(properties);

  // Update button active states
  document.getElementById("commercial").classList.add("active");
  document.getElementById("residential").classList.remove("active");
});

document.getElementById("residential").addEventListener("click", () => {
  populateCards(residential);

  // Update button active states
  document.getElementById("residential").classList.add("active");
  document.getElementById("commercial").classList.remove("active");
});

// Initial population with commercial properties
populateCards(properties);
document.getElementById("commercial").classList.add("active");

// Navigate to Contact HTML
function navigateToPage() {
  window.location.href = "/knowMorePage/contact.html"; // Replace with the URL of your page
}
