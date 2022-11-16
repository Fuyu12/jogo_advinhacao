let result = prompt('advinhe o numero que estou pensando? está entre 0 a 10')
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1;


while(Number(result) != randomNumber){
    result = prompt("erro, tente novamente")
    xAttempts++
}

if(xAttempts == 1){
    alert(`parabens o numero que eu pensei foi ${randomNumber} e Você advinhou o numero em ${xAttempts} tentativa`)
}else{
    alert(`parabens o numero que eu pensei foi ${randomNumber} e Você advinhou o numero em ${xAttempts} tentativas`)
}

