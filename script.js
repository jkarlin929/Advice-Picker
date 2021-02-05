// javascript goes here
const advice = document.getElementById('advice');
const URL = "https://api.adviceslip.com/advice";


fetch(URL)
.then((resp) => resp.json())
  .then(function(data) {
    console.log(data)
    for (const [key, value] of Object.entries(data)) {
      console.log(data.slip.advice);
      const adviceSlip = `${data.slip.advice}`;
    }


  })
.catch((er) => {

});
