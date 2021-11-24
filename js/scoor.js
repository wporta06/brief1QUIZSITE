const quizscoorbtn = document.querySelector("#quizscoorbtn");
// const backscreen = document.querySelector(".backscreen");
const closebtn = document.querySelector("#closebtn");
const bestscoorname = document.querySelector("#bestscoorname");
const bestscoor = document.querySelector("#bestscoor");
const lowscoorname = document.querySelector("#lowscoorname");
const lowscoor = document.querySelector("#lowscoor");
// console.log(bestscoor);
bestscoorname.innerText = "Name: " + JSON.parse(localStorage.getItem("score1")).name;
bestscoor.innerText = "Scoor: " + JSON.parse(localStorage.getItem("score1")).score;
lowscoorname.innerText = "Name: " + JSON.parse(localStorage.getItem("score2")).name;
lowscoor.innerText = "Scoor: " + JSON.parse(localStorage.getItem("score2")).score;



// open quiz scoor popup
quizscoorbtn.addEventListener("click", (eo) => {

    console.log("clickeed");
    backscreen.style.transform = "translate(0)";

});
// close quiz scoor popup
closebtn.addEventListener("click", (eo) => {

    console.log("clickeed");
    backscreen.style.transform = "translate(-110vw)";

})