window.onload = function () {

    let header = document.getElementById("header")
    let dice_1 =document.getElementById("dice1")
    let dice_2 =document.getElementById("dice2")


    let random_dice_1 = Math.floor((Math.random() * 6) + 1);
    let random_dice_2 = Math.floor((Math.random() * 6) + 1);

    let result_1 = random_dice_1;
    let result_2 = random_dice_2;


    if  (result_1 == 1) {
        dice1.innerHTML = '<img src="./images/1.jpg" >';
    }

    else if  (result_1 == 2) {
        dice1.innerHTML = '<img src="./images/2.jpg" >';
    }

    else if  (result_1 == 3) {
        dice1.innerHTML = '<img src="./images/3.jpg" >';
    }

    else if  (result_1 == 4) {
        dice1.innerHTML = '<img src="./images/4.jpg" >';
    }

    else if  (result_1 == 5) {
        dice1.innerHTML = '<img src="./images/5.jpg" >';
    }

    else if  (result_1 == 6) {
        dice1.innerHTML = '<img src="./images/6.jpg" >';
    }


    // 

    if  (result_2 == 1) {
        dice2.innerHTML = '<img src="./images/1.jpg" >';
    }

    else if  (result_2 == 2) {
        dice2.innerHTML = '<img src="./images/2.jpg" >';
    }

    else if  (result_2 == 3) {
        dice2.innerHTML = '<img src="./images/3.jpg" >';
    }

    else if  (result_2 == 4) {
        dice2.innerHTML = '<img src="./images/4.jpg" >';
    }

    else if  (result_2 == 5) {
        dice2.innerHTML = '<img src="./images/5.jpg" >';
    }

    else if  (result_2 == 6) {
        dice2.innerHTML = '<img src="./images/6.jpg" >';
    }


    if (result_1 > result_2) {
        header.innerHTML =  "👌 Player 1 Wins";
    }

    else if (result_1 < result_2) {
        header.innerHTML ="  Player 2 Wins 👌";
    }

    else if (result_1 == result_2) {
        header.innerHTML = "Draw 😑";
    }
}