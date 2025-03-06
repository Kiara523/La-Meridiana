const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav-toggle");
const hamburger = document.querySelector(".hamburger");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
  hamburger.classList.toggle("hamburger-active");
});

/* const retrieveDataReviews = async () => {
  try {
    const response = await fetch("./reviews.json");

    if (!response.ok) {
      console.log("An error occurred while fetching the data", error.state);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log("An error occurred while fetching the data", error.state);
  }
};

retrieveDataReviews();
 */
