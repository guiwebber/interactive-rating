const submit = document.querySelector("#submit");
const result = document.querySelectorAll(".balls");
const thanks = document.querySelector(".thanks");
const scorage = document.querySelector(".scorage");
const submitAgain = document.querySelector("#submitAgain");
const rating = document.querySelector("#rating");
let selectedRating = "";

submitAgain.addEventListener("click", () => {
  thanks.classList.add("hidden");
  scorage.classList.remove("hidden");
});

submit.addEventListener("click", () => {
  thanks.classList.remove("hidden");
  scorage.classList.add("hidden");
});

result.forEach((resulted) => {
  resulted.addEventListener("click", () => {
    console.log(resulted.innerHTML);
    selectedRating = resulted.innerHTML;
    rating.textContent = selectedRating;
  });
});
