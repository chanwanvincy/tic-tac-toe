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


//counter will determine whose turn it is
var counter = 0

function player1 () {
    
}

function player2 () {
    
}

// this will alternate assigning divs a class name player1 and player2 each time a box is clicked (this works)
boxes.addEventListener('click', function (event) {
    if (counter % 2 == 0) {
        // will store these in function player1 once done
        var clicked = event.target
        clicked.classList.add('player1')
        counter +=1
        console.log(counter)
    } else {
        var clicked = event.target
        clicked.classList.add('player2')
        counter +=1
        console.log(counter)
    }

})

if (box1.className === box2.className && box2.className === box3.className) {
// need to list possible win scenarios (8 unique scenarios) as if statements
// once these conditions are fulfilled then the game ends and it will announce who wins

// (wonder if it's possible to store the scenarios into an array? if not will store them in a function)
} else {
// if none of these conditions are fulfilled it's a draw
}
