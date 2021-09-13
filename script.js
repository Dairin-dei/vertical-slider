const container = document.querySelector(".container");

const leftSide = document.querySelector(".left-side")
const rightSide = document.querySelector(".right-side")


const downButton = document.querySelector(".down-button");

const upButton = document.querySelector(".up-button");

currentNumber = 0;

numberslides = document.querySelectorAll(".left-side-text").length;


downButton.addEventListener("click", () => changeImage("down"));
upButton.addEventListener("click",  () => changeImage("up"));


function changeImage(direction){
    clientHeight = container.clientHeight;
    switch (direction){
        case "up":
            currentNumber++;
            if (currentNumber>numberslides-1){
                currentNumber = 0;
            };
            break;
        ;
        case "down":
            currentNumber--;
            if (currentNumber<0){
                currentNumber = numberslides-1;
            };
            break;   
    };
    rightSide.style.transform = `translateY(-${currentNumber*clientHeight}px)`;
    leftSide.style.transform = `translateY(${currentNumber*clientHeight}px)`;
}
