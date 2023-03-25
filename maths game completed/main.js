const problemElement = document.querySelector(".problem")
const ourForm = document.querySelector(".our-form")
const ourField = document.querySelector(".our-field")
const pointsNeeded = document.querySelector(".points-needed")
const mistakesAllowed = document.querySelector(".mistakes-allow")
const progressBar = document.querySelector(".progress-inner")
const endMess = document.querySelector(".end-message")
const resetBtn = document.querySelector(".reset-btn")


let state = {
    score: 0,
    wrongAns: 0
}

function updatePro() {
    state.currentProblem = generateProblem()
    problemElement.innerHTML = `${state.currentProblem.numberOne} ${state.currentProblem.operator} ${state.currentProblem.numberTwo}`

    ourField.value = ""
    ourField.focus()
}

updatePro()


function generateNo(max){
    return Math.floor(Math.random() * (max + 1))
}

function generateProblem(){
    return {
        numberOne: generateNo(20),
        numberTwo: generateNo(20),
        operator: ['+', '-', 'x'][generateNo(2)]
    }
}

ourForm.addEventListener("submit", handleSubmit)

function handleSubmit(e){
    e.preventDefault() //

    let correctAnswer
    const p = state.currentProblem
    if(p.operator =="+") correctAnswer = p.numberOne + p.numberTwo
    if(p.operator =="-") correctAnswer = p.numberOne - p.numberTwo
    if(p.operator =="x") correctAnswer = p.numberOne * p.numberTwo

    if(parseInt(ourField.value, 10) === correctAnswer){
        //alert("good job")
        state.score++
        pointsNeeded.textContent = 10 - state.score
        updatePro()
        renderProgressBar()
    }
    else{
        //alert("try again")
        state.wrongAns++
        mistakesAllowed.textContent = 2 - state.wrongAns
        problemElement.classList.add("animate-wrong")
        setTimeout( () => problemElement.classList.remove("animate-wrong"), 451 )
    }

    checkLogic()

}

function checkLogic() {
    if(state.score === 10){
        endMess.textContent = "Congrats! You won."
        document.body.classList.add("overlay-is-open")
        setTimeout( () => resetBtn.focus(), 331)       
    }

    if(state.wrongAns === 3){
        endMess.textContent = "Sorry! You lost."
        document.body.classList.add("overlay-is-open")
        setTimeout( () => resetBtn.focus(), 331) 
        

    }
}

resetBtn.addEventListener("click", resetGame)

function resetGame(){
    document.body.classList.remove("overlay-is-open")
    updatePro()
    state.score = 0
    state.wrongAns = 0
    pointsNeeded.textContent = 10
    mistakesAllowed.textContent = 2
    renderProgressBar()

}

function renderProgressBar() {
    progressBar.style.transform = `scaleX(${state.score / 10})`
}


document.querySelector(".btn1").addEventListener("click", () => {
    document.body.classList.remove("twilight")
    document.body.classList.remove("forest")
    document.body.classList.remove("sunset")
    document.body.classList.remove("goldenHues")
    document.body.classList.toggle("pastel");
  });
  
  document.querySelector(".btn2").addEventListener("click", () => {
    document.body.classList.remove("forest")
    document.body.classList.remove("sunset")
    document.body.classList.remove("goldenHues")
    document.body.classList.toggle("twilight");
  });
  
  document.querySelector(".btn3").addEventListener("click", () => {
    document.body.classList.remove("sunset")
    document.body.classList.remove("goldenHues")
    document.body.classList.toggle("forest");
  });
  
  document.querySelector(".btn4").addEventListener("click", () => {
    document.body.classList.remove("goldenHues")
    document.body.classList.toggle("sunset");
  });
  
  document.querySelector(".btn5").addEventListener("click", () => {
    document.body.classList.toggle("goldenHues");
  });