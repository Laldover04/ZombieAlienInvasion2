//board
let tileSize = 32;
let rows = 16;
let columns = 16;

let board;
let boardWidth = tileSize * columns;
let boardHeight = tileSize * rows;
let context;

//peashooter
let peaShooterWidth = tileSize; // 64px
let peaShooterHeight = tileSize; // 32 px
let peaShooterX = tileSize * columns / 2 - tileSize;
let peaShooterY = boardHeight - tileSize * 3;
//let peaShooterVelocityX = tileSize;

let peaShooter = {
    x : peaShooterX,
    y : peaShooterY,
    width : peaShooterWidth,
    height : peaShooterHeight
}

let peaShooterImg;
let peaShooterVelocityX = tileSize;


window.onload = function() {
    board = document.getElementById("board");
    board.width = boardWidth;
    board.height = boardHeight;
    context = board.getContext("2d");
    
    // draw initial peashooter
    context.fillStyle="green";
    context.fillRect(peaShooter.x, peaShooter.y, peaShooter.width, peaShooter.height);

    //load images
    peaShooterImg = new Image();
    peaShooterImg.src = "./Peashooter.png";
    peaShooterImg.onload = function() {
        context.drawImage(peaShooterImg, peaShooter.x, peaShooter.y, peaShooter.width, peaShooter.height);
    }
    

    requestAnimationFrame(update);
}

function update() {
    requestAnimationFrame(update);

    //ship
    
}