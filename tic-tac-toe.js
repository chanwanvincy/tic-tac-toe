var boxes = document.querySelector('#boxes')
var box1 = document.querySelector('#box1')
var box2 = document.querySelector('#box2')
var box3 = document.querySelector('#box3')
var box4 = document.querySelector('#box4')
var box5 = document.querySelector('#box5')
var box6 = document.querySelector('#box6')
var box7 = document.querySelector('#box7')
var box8 = document.querySelector('#box8')
var box9 = document.querySelector('#box9')
var announce = document.querySelector('#announcement')
var counter = 0
var p1WinDisplay = document.querySelector('#p1-wins h2')
var p2WinDisplay = document.querySelector('#p2-wins h2')
var tiesDisplay = document.querySelector('#ties h2')
var p1WinCount = 0
var p2WinCount = 0
var tieCount = 0
var newGameBtn = document.querySelector('#newGameBtn')
var startOverBtn = document.querySelector('#startOverBtn')


// announcement of results 
function player1Wins () {
    announce.style.color ='#1a3a73'
    announce.textContent = 'player 1 wins!'
    p1WinCount += 1
    p1WinDisplay.textContent = p1WinCount
}

function player2Wins () {
    announce.style.color ='#955c36'
    announce.textContent = 'player 2 wins!'
    p2WinCount += 1
    p2WinDisplay.textContent = p2WinCount
}

function draw () {
    announce.style.color ='#267e65'
    announce.textContent = "it's a draw."
    tieCount += 1
    tiesDisplay.textContent = tieCount
}

// if winning combinations are triggered, who is the winner
function whoWins1 () {
    if (box1.className === 'player1') {
        player1Wins ()
    } else if (box1.className === 'player2') {
        player2Wins ()  
    }
}

function whoWins2 () {
    if (box2.className === 'player1') {
        player1Wins () 
    } else if (box2.className === 'player2') {
        player2Wins () 
    }
}

function whoWins3 () {
    if (box3.className === 'player1') {
        player1Wins () 
    } else if (box3.className === 'player2') {
        player2Wins () 
    }
}

function whoWins4 () {
    if (box4.className === 'player1') {
        player1Wins ()
    } else if (box4.className === 'player2') {
        player2Wins ()
    }
}

function whoWins7 () {
    if (box7.className === 'player1') {
        player1Wins ()
    } else if (box7.className === 'player2') {
        player2Wins ()
    }
}

boxes.addEventListener('click', function (event) {
    var clicked = event.target
    
    if (announce.textContent !== '') {
        return
    }
    
    if (clicked.className === '' && clicked.tagName === 'ARTICLE') {
        if (counter % 2 == 0) {
            var clicked = event.target
            clicked.classList.add('player1')
            counter +=1

        } else {
            var clicked = event.target
            clicked.classList.add('player2')
            counter +=1
        }
    }

    var winScenarios = [
        (box1.className !== '' && box1.className === box2.className && box2.className === box3.className),
        (box1.className !== '' && box1.className === box4.className && box4.className === box7.className),
        (box1.className !== '' && box1.className === box5.className && box5.className === box9.className),
        (box2.className !== '' && box2.className === box5.className && box5.className === box8.className),
        (box3.className !== '' && box3.className === box6.className && box6.className === box9.className),
        (box3.className !== '' && box3.className === box5.className && box5.className === box7.className),
        (box4.className !== '' && box4.className === box5.className && box5.className === box6.className),
        (box7.className !== '' && box7.className === box8.className && box8.className === box9.className)
    ]

    if (winScenarios[0] === true || winScenarios[1] === true || winScenarios[2] === true) {
        whoWins1 ()
    } else if (winScenarios[3] === true) {
        whoWins2 ()
    } else if (winScenarios[4] === true || winScenarios[5] === true) {
        whoWins3 ()
    } else if (winScenarios[6] === true) {
        whoWins4 ()
    } else if (winScenarios[7] === true) {
        whoWins7 ()
    } else if (counter === 9) {
        draw ()
    }
})

newGameBtn.addEventListener('click', function () {
    for (n = 0; n < boxes.childElementCount; n++) {
        boxes.children[n].className = ""
        counter = 0
    }
    announce.textContent = ''
})

startOverBtn.addEventListener('click', function (){
    for (n = 0; n < boxes.childElementCount; n++) {
        boxes.children[n].className = ""
        counter = 0
    }
    p1WinCount = 0
    p2WinCount = 0
    tieCount = 0
    p1WinDisplay.textContent = p1WinCount
    p2WinDisplay.textContent = p2WinCount
    tiesDisplay.textContent = tieCount
    announce.textContent = ''
})
