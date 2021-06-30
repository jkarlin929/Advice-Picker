// javascript goes here
const URL = "https://api.adviceslip.com/advice";

function getResults() {
  fetch(URL)
    .then((resp) => resp.json())
    .then(function(data) {
      // console.log(data)
      for (const [key, value] of Object.entries(data)) {
        const adviceSlip = `${data.slip.advice}`;
        let adviceTag = document.querySelector('#advice');
        adviceTag.style.color = "#cfc8b9";
        adviceTag.innerHTML = adviceSlip;

      }
    })
    .catch(function(e) {
      console.log(e);
    });
};

function yesResults() {
  const yesButton = document.querySelector('#yes-button');
  yesButton.addEventListener("click", function(e) {
    getResults();
  });
};

function noResults() {
  const noButton = document.querySelector('#no-button');
  noButton.addEventListener("click", function(e) {
    console.log(e.length)
    let adviceTag = document.querySelector('#advice');
    let count = 0;
    adviceTag.style.color = "#FEF535";
    let noAnswers = ["Then why are you here?", "Come on, click Yes, you won't regret it", "Are you sure about that?", "Take a minute to think that over and maybe you'll change your mind.", "I think you should reconsider, but what do I know?"];
    var item = noAnswers[Math.floor(Math.random() * noAnswers.length)];
    adviceTag.innerHTML = item
  });
};
yesResults();
noResults();


//write a function
//if yes button is clicked, display advice results
//if no button is clicked, dispaly Are you Sure?
