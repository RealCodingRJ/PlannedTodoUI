const check = document.getElementById("pill");
const coffee = document.getElementById("coffee");
const lblCheck = document.getElementById("pillLBL");
const lblCheck2 = document.getElementById("coffeeLBL2");
const shower = document.getElementById("shower");
const showerLBL = document.getElementById("showerLBL");

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
