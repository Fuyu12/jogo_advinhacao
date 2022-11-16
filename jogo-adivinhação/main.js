//variaveis
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1;


//eventos
btnTry.addEventListener('click', handleTryclick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', keyEnter)

//funções callback
function handleTryclick(event){

    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")
    if(Number(inputNumber.value) == randomNumber){
        toggleScreen()
        screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas`
    }

    if(Number(inputNumber.value) == ""){
        alert("informe um número")
        xAttempts --
    }

    if(inputNumber.value < 0){
        alert("somente numeros positivos de 0 a 10")
        xAttempts --
    }else if(Number(inputNumber.value) > 10){
        alert("somente numeros de 0 a 10")
        xAttempts--
    }



    inputNumber.value = ""
    xAttempts++

}

function handleResetClick (){
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function keyEnter(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        handleResetClick()
    }
}