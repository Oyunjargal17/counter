const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const displayCount = document.getElementById("displayCount");

let count = 0;

increaseBtn.addEventListener("click", () => {
  count++;
  displayCount.innerHTML = count;
  update();
});

decreaseBtn.addEventListener("click", () => {
  count--;
  displayCount.innerHTML = count;
  update();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  displayCount.innerHTML = count;
  update();
});

function update() {
  displayCount.innerHTML = count;
  if (count > 0) {
    displayCount.style.color = "green";
  } else if (count < 0) {
    displayCount.style.color = "red";
  } else if (count === 0) {
    displayCount.style.color = "black";
  }
}
