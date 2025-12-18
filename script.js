const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const displayCount = document.getElementById("displayCount");

let count = 0;

increaseBtn.addEventListener("click", () => {
  count++;
  displayCount.innerHTML = count;
});

decreaseBtn.addEventListener("click", () => {
  count--;
  displayCount.innerHTML = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  displayCount.innerHTML = count;
});
