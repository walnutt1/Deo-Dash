/*******************************************************/
// P5.play: GeoDash
// Create a game
// Written by ??? 
/*******************************************************/
// preload()
// Called by P5 before setup
/*******************************************************/
function preload() {
  console.log("preload: ");

  imgSS   = loadImage('https://codehs.com/uploads/a2da425053367a87da09a47092414651');
  
  imgGS   = loadImage('https://codehs.com/uploads/cc28d58ba276a177cc4afaa536a49a1e');
  
}
/*******************************************************/
console.log("%c t01_create_sprite", "color: blue;");

const SCREEN_WIDTH = 700;
const SCREEN_HEIGHT = 300;
const PLAYER_HEIGHT = 30;
const PLAYER_WIDTH = 30;


const OBSTACLE_HEIGHT = PLAYER_HEIGHT;
const OBSTACLE_WIDTH = PLAYER_WIDTH;

var spawnDist = 0;
var nextSpawn = 0;
var score = 0;

var screenSelector = "start";  

var obstacles;
var player;
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
    console.log("setup: ");
    cnv= new Canvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    
    obstacles = new Group();

    floor =  new Sprite(SCREEN_WIDTH/2,  SCREEN_HEIGHT, SCREEN_WIDTH, 4, 's');
    floor.color = color("black");
    world.gravity.y = 80;
    
    document.addEventListener("keydown", 
        function(event) {
            if(screenSelector == "start"||screenSelector == "end"){
                screenSelector = "game"
                resetGame();
            }else{
                if(player.y > 184 ){// 184 - found from testing - floor level
                    console.log("Key pressed!");
                    player.vel.y = -20;
                }
            }
    });

}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    if(screenSelector=="game"){
        gameScreen();
    }else if(screenSelector=="end"){
        endScreen();
    }else if(screenSelector=="start"){
        startScreen();
    }else{
        text("wrong screen - you shouldnt get here", 50, 50);
        console.log("wrong screen - you shouldnt get here")
    }
}

function newObstacle(){
    obstacle = new Sprite((SCREEN_WIDTH -100),  SCREEN_HEIGHT - OBSTACLE_HEIGHT/2, OBSTACLE_WIDTH, OBSTACLE_HEIGHT, 'k');
    obstacle.color = color("blue");
    obstacle.vel.x = -10;
    
    obstacles.add(obstacle);
}

function youDead(_player, _obstacle){
    screenSelector = "end";
    player.remove();
    obstacles.removeAll();
}

// Main screen functions

function startScreen(){
    background(imgSS);

    allSprites.visible = false;
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("Welcome to the game", 170, 150);
    textSize(24);
    text("Press any key to start", 5, 295);
}

function gameScreen(){
    background(imgGS);
    allSprites.visible = true;
    score++;
    if(frameCount> nextSpawn){
        newObstacle();
        nextSpawn = frameCount + random(10,100);
    }
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text(score, 50, 50);
}

function endScreen(){
    background(imgSS);

    allSprites.visible = false;
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("You died! Too bad :-(", 170, 150);
    textSize(24);
    text("your score was: "+score, 220, 190);
    textSize(24);
    text("press any key to restart", 5, 295);
}

function resetGame(){
    player = new Sprite(PLAYER_WIDTH*1.2,  SCREEN_HEIGHT/2, PLAYER_WIDTH, PLAYER_HEIGHT, 'd');
    player.color = color("purple");
    player.collides(obstacles, youDead);
    score = 0;
}

/*******************************************************/
//  END OF APP
/*******************************************************/
