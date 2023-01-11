
const URL = "https://api.adviceslip.com/advice";

function getResults() {
  fetch(URL)
    .then((resp) => resp.json())
    .then(function(data) {
      for (const [key, value] of Object.entries(data)) {
        const adviceSlip = `${data.slip.advice}`;
        let adviceTag = document.querySelector('#advice');
        adviceTag.style.color = "#ffffff";
        adviceTag.innerHTML = adviceSlip;
      }
    })
    .catch(function(e) {
      console.log(e);
    });
};

function hideYesNo() {
  const yesButton = document.querySelector('#yes-button');
  const noButton = document.querySelector('#no-button');
  const resetButton = document.querySelector('#reset-button');
  yesButton.style.display = "none";
  noButton.style.display = "none";
  resetButton.style.display = "block";
};

function showYesNo() {
  const yesButton = document.querySelector('#yes-button');
  const noButton = document.querySelector('#no-button');
  const resetButton = document.querySelector('#reset-button');
  yesButton.style.display = "block";
  noButton.style.display = "block";
  resetButton.style.display = "none";
};

function reset() {
  const resetButton = document.querySelector('#reset-button');
  resetButton.addEventListener("click", function(e) {
    showYesNo();
  });
};

function yesResults() {
  const yesButton = document.querySelector('#yes-button');
  yesButton.addEventListener("click", function(e) {
    getResults();
    hideYesNo();
    reset();
  });
};

function noResults() {
  const noButton = document.querySelector('#no-button');
  noButton.addEventListener("click", function(e) {
    let adviceTag = document.querySelector('#advice');
    let count = 0;
    adviceTag.style.color = "#23272a";
    let noAnswers = ["Then why are you here?", "Come on, you won't regret it", "You should start over.", "Are you sure about that?", "Take a minute to think that over and maybe you'll change your mind.", "I think you should reconsider, but what do I know?"];
    var item = noAnswers[Math.floor(Math.random() * noAnswers.length)];
    adviceTag.innerHTML = item
    hideYesNo();
    reset();
  });
};

yesResults();
noResults();
