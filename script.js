"use strict";

// Revealing Section on Scroll
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section__hidden");
  // unobserving
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section__hidden");
});

// Getting input and sending
const entryForm = document.querySelectorAll(".hero__form");

// console.log(entryForm);
function sendMail(mail) {
  const data = { email: mail };

  fetch("https://courageous-yak-veil.cyclic.app/waitlist/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.JSON())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
