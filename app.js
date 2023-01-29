let score = document.getElementById('score');
let timeLeft = document.getElementById('timeleft');
let squares = document.querySelectorAll('.square');
let result = 0;
let hitposition;
let timerID = null;
let timeCounter = 60;

function boxCheck(){
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSelect = squares[Math.floor(Math.random() *9)] 
     randomSelect.classList.add('mole') 
     hitposition = randomSelect.id


     
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
            if(square.id === hitposition){
                result= result + 1;
                score.innerText = result;
                hitposition = null;
            }
            
    })
})
}
function moveMole() {
   
    timerID = setInterval(boxCheck, 1000)

}

moveMole()

function counter(){
    timeCounter --;
    timeLeft.textContent = timeCounter;

    if(timeCounter === 0){


        clearInterval(timerID)
        alert('Game Over! Your Score is: ' + result)
        location.reload()
}
}


setInterval(counter, 1000)



