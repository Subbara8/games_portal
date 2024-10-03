const canvas2 = document.getElementById("gameCanvas2");
const ctx2 = canvas2.getContext("2d");

canvas2.width = 480;
canvas2.height = 320;

let playerX = canvas2.width / 2 - 15;
let playerY = canvas2.height - 30;
let playerWidth = 30;
let playerHeight = 30;
let rightPressed = false;
let leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
    }
}

function drawPlayer() {
    ctx2.beginPath();
    ctx2.rect(playerX, playerY, playerWidth, playerHeight);
    ctx2.fillStyle = "#0095DD";
    ctx2.fill();
    ctx2.closePath();
}

function draw() {
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    drawPlayer();

    if (rightPressed && playerX < canvas2.width - playerWidth) {
        playerX += 5;
    } else if (leftPressed && playerX > 0) {
        playerX -= 5;
    }
}

setInterval(draw, 10);
