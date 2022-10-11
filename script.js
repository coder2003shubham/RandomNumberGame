//add shaking effect in input if wrong
//add animation of ballon for victory
const input = document.querySelector("#txt");
const submit = document.querySelector(".submit");
const chanceleft = document.querySelector(".chanceleft");
const inputform = document.querySelector(".input_form");
const answer = document.querySelector(".answer");
const actual = document.querySelector(".actualval");
const extra = document.querySelector(".extrapara");
const actualval = Math.floor(Math.random() * 10);
let i = 0;
inputform.addEventListener("submit", (e) => {
  e.preventDefault(); //prevent to submit the form
  i++;//the number of times it clicked 
  const scoreval = document.createElement("p");
  if (input.value == "") {
    alert("Input field can't be null");
    scoreval.style.display = "none";
    scoreval.innerHTML = "";
    i--;
  } else if (input.value == actualval) {
    input.disabled = "true";
    chanceleft.innerHTML = "";
    scoreval.innerHTML = `You scored ${100 - i * 10} out of 100`;
    answer.style.display="flex";
    extra.append(scoreval);
    extra.style.display = "flex";
    extra.style.style = "red";
    extra.style.textAlign = "center";
    submit.disabled="true";

    // inputform.addEventListener("submit", (e) => {

    //   alert("You already get score \n Refresh to play Again")
    //   e.preventDefault();
    // });
  } 
  else if(input.value==isNaN)
  {
    alert("Only enters number");
  }
  else {
    if (i == 10) {
      actual.append(`The actual value is ${actualval}`);
      let wrongval = document.createElement("p");
      wrongval.innerHTML = "You loose😌";
      extra.append(wrongval);
      extra.style.color = "red";
      input.disabled = "true";
      chanceleft.innerHTML="Your chance is expired";
      submit.addEventListener("click", () => {
        alert("Game Over\n Please restart it");
        chanceleft.style.display="none";
        chanceleft.innerHTML="Your chance is expired";
        actualval.style.color="red";
      });
    }
    chanceleft.innerHTML = `You have ${10 - i} chance left`;
  }
});
