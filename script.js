// javascript goes here
const URL = "https://api.adviceslip.com/advice";

function getResults() {
  fetch(URL)
    .then((resp) => resp.json())
    .then(function(data) {
      // console.log(data)
      for (const [key, value] of Object.entries(data)) {
        // console.log(data.slip.advice);
        const adviceSlip = `${data.slip.advice}`;
        let adviceTag = document.querySelector('#advice');
        adviceTag.style.color = "#cfc8b9";
        adviceTag.innerHTML = adviceSlip
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

yesResults();

function noResults() {
  const noButton = document.querySelector('#no-button');
  noButton.addEventListener("click", function(e) {
    console.log(e.length)
    let adviceTag = document.querySelector('#advice');
    let count = 0;
    adviceTag.style.color = "#FEF535";
    adviceTag.innerHTML = "Are you sure?"
  });
};

noResults();


//write a function
//if yes button is clicked, display advice results
//if no button is clicked, dispaly Are you Sure?
