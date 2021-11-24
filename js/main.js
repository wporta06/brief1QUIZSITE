const allanswercnt = document.querySelector("#allanswercnt");
const quiztitle = document.querySelector("#quiztitle");
const scoor = document.querySelector(".scoor");
const progressbar = document.querySelector("#progressbar");
const backscreen = document.querySelector(".backscreen");
const saveScoorBtn = document.querySelector("#saveScoorBtn");
const scoorinput = document.querySelector(".scoorinput");
const myscoor = document.querySelector(".myscoor");


// console.log(scoorinput);

let scoorpoits = 0;
let r = 1;

var allquestions = {

    "questions": [{
            "question": "What is the scientific name of a butterfly?1",
            "answers": [
                "Apis",
                "Coleoptera",
                "Formicidae",
                "Rhopalocera"
            ],
            "correctIndex": 2
        },
        {
            "question": "What are the school colors of the University of Texas at Austin?2",
            "answers": [
                "Black, Red",
                "Blue, Orange",
                "White, Burnt Orange",
                "White, Old gold, Gold"
            ],
            "correctIndex": 2
        },
        {
            "question": "Who are the actors in The Internship?3",
            "answers": [
                "Ben Stiller, Jonah Hill",
                "Courteney Cox, Matt LeBlanc",
                "Kaley Cuoco, Jim Parsons",
                "Vince Vaughn, Owen Wilson"
            ],
            "correctIndex": 3
        },
        {
            "question": "Who are the actors in The Internship?",
            "answers": [
                "Ben Stiller, Jonah Hill",
                "Courteney Cox, Matt LeBlanc",
                "Kaley Cuoco, Jim Parsons",
                "Vince Vaughn, Owen Wilson"
            ],
            "correctIndex": 3
        },
        {
            "question": "What is the capital of Spain?",
            "answers": [
                "Berlin",
                "Buenos Aires",
                "Madrid",
                "San Juan"
            ],
            "correctIndex": 2
        },
        {
            "question": "What are the school colors of the University of Texas at Austin?",
            "answers": [
                "Black, Red",
                "Blue, Orange",
                "White, Burnt Orange",
                "White, Old gold, Gold"
            ],
            "correctIndex": 2
        },
        {
            "question": "What is 70 degrees Fahrenheit in Celsius?",
            "answers": [
                "18.8889",
                "20",
                "21.1111",
                "158"
            ],
            "correctIndex": 2
        }
    ]
}
let numberofquestions = allquestions.questions.length;
// console.log("numberof Q: " + numberofquestions);

let j = 0;
//QUIZ TITLE HERE
quiztitle.innerText += allquestions.questions[j].question;
//QUIZ ANSWERS HERE
for (let i = 0; i < allquestions.questions[j].answers.length; i++) {

    let answer =
        `<div class="answerbtn title allanswrs"><button type="button" value="${i}" class="btn-primary btn btn-lg btn-block sltbtn2">${allquestions.questions[j].answers[i]}</button></div>`
    allanswercnt.innerHTML += answer;
}
let correctIndex = allquestions.questions[j].correctIndex;


let progress = 0;
// let test1 = progressbar.style.width = +progress + "%";

const answerbtn = document.querySelectorAll(".answerbtn");
answerbtn.forEach(item => {
    item.addEventListener("click", (eo) => {
        // console.log("clickeddd");

        // check if Q is correct
        if (item.firstChild.value == correctIndex) {
            if (r < numberofquestions) {

                // to avoid add scoor with clicks too many times
                // item.firstChild.value = "";

                // change progressbar width 
                progress += 100 / numberofquestions;
                progressbar.style.width = +progress + "%";
                console.log("progressbar :" + progress);

                // add 10 poin to scoor
                scoorpoits += 10;
                scoor.innerText = "SCOOR: " + scoorpoits;

                // remove color from btns and add correct color
                item.firstChild.classList.remove("btn-primary");
                item.firstChild.classList.add("btn-success");

                // console.log("numberofquestions= " + numberofquestions);
                // timeout to hide Qs after 1s
                setTimeout(function() {
                    // item.parentNode.textContent = '';

                    quiztitle.textContent = '';
                    j++;
                    // console.log("answer correct");
                    //QUIZ TITLE HERE
                    quiztitle.innerText += allquestions.questions[j].question;
                    //QUIZ ANSWERS HERE
                    for (let i = 0; i < allquestions.questions[j].answers.length; i++) {
                        // btn colors
                        item.firstChild.classList.remove("btn-success");
                        item.firstChild.classList.add("btn-primary");
                        // remove color from btns
                        answerbtn[i].firstChild.classList.remove("btn-danger");
                        answerbtn[i].firstChild.classList.add("btn-primary");

                        // add new answers and the index in value
                        allanswercnt.children[i].firstChild.innerText = allquestions.questions[j].answers[i];
                        allanswercnt.children[i].firstChild.value = i;
                    }
                    // update correctIndex for the new Q
                    correctIndex = allquestions.questions[j].correctIndex;

                    r++;
                    // if (r == numberofquestions) {
                    //     console.log(fiinn);
                    // }
                    // console.log("progress is: " + progress);
                }, 1000);

            } else {
                item.firstChild.classList.remove("btn-primary");
                item.firstChild.classList.add("btn-success");
                // add 10 poin to scoor
                scoorpoits += 10;
                scoor.innerText = "SCOOR: " + scoorpoits;

                progress += 100 / numberofquestions;
                progressbar.style.width = +progress + "%";
                console.log("progressbar :" + progress);

                // save in localStorage
                // let theScoorPoits = scoorpoits;
                localStorage.setItem("theScoor", scoorpoits)
                myscoor.innerText = "YOUR SCOOR: " + localStorage.getItem("theScoor")

                setTimeout(function() {

                    backscreen.style.transform = "translate(0)"
                }, 500);
            }
        } else {
            // console.log("answer not correct");
            // remove color from btns
            item.firstChild.classList.add("btn-danger");
            item.firstChild.classList.remove("btn-primary");
            if (r < numberofquestions) {

                // to avoid add scoor with clicks too many times
                item.firstChild.value = "";

                // change progressbar width 
                progress += 100 / numberofquestions;
                progressbar.style.width = +progress + "%";
                console.log("progressbar :" + progress);

                // add 10 poin to scoor
                scoorpoits += 0;
                scoor.innerText = "SCOOR: " + scoorpoits;

                // remove color from btns and add correct color
                item.firstChild.classList.remove("btn-primary");
                item.firstChild.classList.add("btn-success");

                // console.log("numberofquestions= " + numberofquestions);
                // timeout to hide Qs after 1s
                setTimeout(function() {
                    // item.parentNode.textContent = '';

                    quiztitle.textContent = '';
                    j++;
                    // console.log("answer correct");
                    //QUIZ TITLE HERE
                    quiztitle.innerText += allquestions.questions[j].question;
                    //QUIZ ANSWERS HERE
                    for (let i = 0; i < allquestions.questions[j].answers.length; i++) {
                        // btn colors
                        item.firstChild.classList.remove("btn-success");
                        item.firstChild.classList.add("btn-primary");
                        // remove color from btns
                        answerbtn[i].firstChild.classList.remove("btn-danger");
                        answerbtn[i].firstChild.classList.add("btn-primary");

                        // add new answers and the index in value
                        allanswercnt.children[i].firstChild.innerText = allquestions.questions[j].answers[i];
                        allanswercnt.children[i].firstChild.value = i;
                    }
                    // update correctIndex for the new Q
                    correctIndex = allquestions.questions[j].correctIndex;

                    r++;
                    // if (r == numberofquestions) {
                    //     console.log(fiinn);
                    // }
                    // console.log("progress is: " + progress);
                }, 1000);

            } else {
                item.firstChild.classList.remove("btn-primary");
                item.firstChild.classList.add("btn-success");
                // add 10 poin to scoor
                scoorpoits += 0;
                scoor.innerText = "SCOOR: " + scoorpoits;

                progress += 100 / numberofquestions;
                progressbar.style.width = +progress + "%";
                console.log("progressbar :" + progress);

                // save in localStorage
                // let theScoorPoits = scoorpoits;
                localStorage.setItem("theScoor", scoorpoits)
                myscoor.innerText = "YOUR SCOOR: " + localStorage.getItem("theScoor")

                setTimeout(function() {

                    backscreen.style.transform = "translate(0)"
                }, 500);
            }

        }

    })
})

saveScoorBtn.addEventListener("click", (eo) => {

    let scoorinputname = scoorinput.value;

    var scores1 = JSON.parse(localStorage.getItem('score1'))
    var scores2 = JSON.parse(localStorage.getItem('score2'))
    if (scoorpoits > scores1.score) {
        let score1 = {
            name: scoorinputname,
            score: scoorpoits
        };
        localStorage.setItem("score1", JSON.stringify(score1))
    } else if (scoorpoits < scores1.score && scoorpoits > scores2.score) {
        let score2 = {
            name: scoorinputname,
            score: scoorpoits
        };
        localStorage.setItem("score2", JSON.stringify(score2))
    }


})