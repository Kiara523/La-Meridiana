const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav-toggle");
const hamburger = document.querySelector(".hamburger");
const reviewRoot = document.getElementById("root");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
  hamburger.classList.toggle("hamburger-active");
});

const retrieveDataReviews = async () => {
  try {
    const response = await fetch("./reviews.json");

    if (!response.ok) {
      console.log("An error occurred while fetching the data", response.state);
    }
    const data = await response.json();
    console.log(data);
    createCardReview(data);
    return data;
  } catch (error) {
    console.log("An error occurred while fetching the data", error);
  }
};

retrieveDataReviews();

function createCardReview(data) {
  data.map((review) => {
    console.log(review);
    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "review-card");
    reviewRoot.append(cardDiv);
    cardDiv.innerHTML = `<div class="star__container">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="review-details">
                      <div class="name-date">
                        <p class="name">${review.name}</p>
                        <p class="date"><time datetime="2024-06-12 20:00">${review.date}</time></p>
                      </div>
                      <p class="title">${review.title}</p>
                    </div>
                    <p class="text text--reviews">
                      <i class="fa-solid fa-quote-left fa-lg"></i>
                      ${review.text}
                      <i class="fa-solid fa-quote-right fa-lg"></i>
                    </p>
                  </div>`;
  });
}
