
document.addEventListener("DOMContentLoaded", function(){
    const images = ["images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png", "images/6.png"];
    const Dice1 = document.getElementById('dice1');
    const Dice2 = document.getElementById('dice2');
    const button = document.getElementById('rollbutton');


    button.addEventListener('click', function(){
        let randomNumberOne = Math.floor(Math.random()*6)+1;
        let randomNumberTwo = Math.floor(Math.random()*6)+1;

        Dice1.src = images[randomNumberOne -1];
        Dice2.src = images[randomNumberTwo -1];
    })
})

