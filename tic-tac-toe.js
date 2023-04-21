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


// announcement of results 
function player1Wins () {
    announce.textContent = 'player1 wins'
}

function player2Wins () {
    announce.textContent = 'player2 wins'
}

function draw () {
    announce.textContent = "it's a draw"
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
//it's a draw - can I wrap it outside of event listener as while loop??
    // for (b = 0; b < boxes.childElementCount; b++) {
    //     if (announce.textContent === '' && boxes.children[b].className !== '') {
    //     }
    // }
    
    if (announce.textContent !== '') {
        return
    }
    
    if (clicked.className === '') {
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
    if (announce.textContent === '' && boxes.children[0].className !== '' && boxes.children[1].className !== '' && boxes.children[2].className !== '' && boxes.children[3].className !== '' && boxes.children[4].className !== '' && boxes.children[5].className !== '' && boxes.children[6].className !== '' && boxes.children[7].className !== '' && boxes.children[8].className !== '') {
        draw ()
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
    }
})






        // console.log("it's a draw")
    // if none of these conditions are fulfilled it's a draw