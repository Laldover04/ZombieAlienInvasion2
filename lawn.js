//board
let tileSize = 32;
let rows = 16;
let columns = 16;

let board;
let boardWidth = tileSize * columns;
let boardHeight = tileSize * rows;
let context;

//plant
let plantWidth = tileSize; // 64px
let plantHeight = tileSize; // 32 px
let plantX = tileSize * columns / 2 - tileSize;
let plantY = boardHeight - tileSize * 3;

let plant = {
    x : plantX,
    y : plantY,
    width : plantWidth,
    height : plantHeight
}

let plantImg;
let plantVelocityX = tileSize;

 // zombies
 let zombieArray = [];
 let zombieWidth = tileSize; // 32px
 let zombieHeight = tileSize * 2; // 64px
 let zombieX = tileSize;
 let zombieY = tileSize;

 let zombieRows = 2;
 let zombieColumns = 3;
 let zombieCount = 0;
 let zombieVelocity = 1;


window.onload = function() {
    board = document.getElementById("board");
    board.width = boardWidth;
    board.height = boardHeight;
    context = board.getContext("2d");
    
    // draw initial plant
    context.fillStyle="green";
    context.fillRect(plant.x, plant.y, plant.width, plant.height);

    //load images
    plantImg = new Image();
    plantImg.src = "./Peashooter.png";
    plantImg.onload = function() {
        context.drawImage(plantImg, plant.x, plant.y, plant.width, plant.height);
    }

    zombieImg = new Image();
    zombieImg.src = "./zombie1.png";
    createZombies();
    
    requestAnimationFrame(update);
    document.addEventListener("keydown", moveplant);
}

function update() {
    requestAnimationFrame(update);

    context.clearRect(0, 0, board.width, board.height);

    //plant
    context.drawImage(plantImg, plant.x, plant.y, plant.width, plant.height);

    //zombie
    for(let i = 0; i < zombieArray.length; i++){
        let zombie = zombieArray[i];
        if(zombie.alive){
            zombie.x += zombieVelocity;
            context.drawImage(zombie.img, zombie.x, zombie.y, zombie.width, zombie.height);

        }
    }
}

function moveplant(e) {
    
    if (e.code == "ArrowRight" && plant.x + plant.width + plantVelocityX <= board.width) {
        plant.x += plantVelocityX;
    } else if ( e.code == "ArrowLeft" && plant.x - plantVelocityX >= 0) {
        plant.x -= plantVelocityX;
    }
    
}

function createZombies() {

        for (let r = 0; r < zombieRows; r++) {
            for (let c = 0; c < zombieColumns; c++) {
                    let zombie = {
                            img : zombieImg,
                            x : zombieX + c*zombieWidth,
                            y : zombieY + r*zombieHeight,
                            width : zombieWidth,
                            height : zombieHeight,
                            alive : true
                    }
                zombieArray.push(zombie)
            }
        }
        zombieCount = zombieArray.length;
}