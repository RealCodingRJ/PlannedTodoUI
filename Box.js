const check = document.getElementById("pill");
const coffee = document.getElementById("coffee");
const lblCheck = document.getElementById("pillLBL");
const lblCheck2 = document.getElementById("coffeeLBL2");
const shower = document.getElementById("shower");
const showerLBL = document.getElementById("showerLBL");
const deo = document.getElementById("deo");
const deoLBL = document.getElementById("deoLBL");

const lunch = document.getElementById("lunch");
const lunchLBL = document.getElementById("lunchLBL");

check.addEventListener("change", () => {
  if (check.checked) {
    lblCheck.textContent = "Need to Take Pill.";
    check.checked = false;
  }

  if (!check.checked) {
    lblCheck.textContent = "Pill Done..";
    check.checked = true;
  }
});

coffee.addEventListener("change", () => {
  //   alert("Completed");
  if (coffee.checked) {
    lblCheck2.textContent = "Need to Make Coffee.";
    coffee.checked = false;
  }

  if (!coffee.checked) {
    lblCheck2.textContent = "Coffee is Done..";
    coffee.checked = true;
  }
});

shower.addEventListener("change", () => {
  if (shower.checked) {
    showerLBL.textContent = "Need to Take Shower.";
    shower.checked = false;
  }

  if (!shower.checked) {
    showerLBL.textContent = "Shower Done..";
    shower.checked = true;
  }
});

deo.addEventListener("change", () => {
  if (deo.checked) {
    deoLBL.textContent = "Need to Put on Deoerant.";
    deo.checked = false;
  }

  if (!deo.checked) {
    deoLBL.textContent = "Deoerant Done..";
    deo.checked = true;
  }
});

lunch.addEventListener("change", () => {
  if (lunch.checked) {
    lunchLBL.textContent = "Need to Eat Lunch.";
    lunch.checked = false;
  }

  if (!lunch.checked) {
    lunchLBL.textContent = "Eaten Lunch Done..";
    lunch.checked = true;
  }
});
