const charval = document.getElementById("textarea");
let totalCount = document.getElementById("total-conter");
let remainingCoutn = document.getElementById("remaining-counter");

let userChar = 0;

const updateCounter = () => {
  userChar = charval.value.length;

  totalCount.innerText = userChar;

  remainingCoutn.innerText = 150 - userChar;
};

charval.addEventListener("keyup", () => updateCounter());


const copyText = () => {
  charval.select();
  charval.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(charval.value);
};