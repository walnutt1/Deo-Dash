/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
// Written by ??? 
/*******************************************************/
console.log("%c t01_create_sprite", "color: blue;");

const SCREEN_WIDTH = 600;
const SCREEN_HEIGHT = 300;
const PLAYER_HEIGHT = 30;
const PLAYER_WIDTH = 30;


const OBSTACLE_HEIGHT = PLAYER_HEIGHT;
const OBSTACLE_WIDTH = PLAYER_WIDTH;

var spawnDist = 0+1;
var nextSpawn = 0;
var score = 0;
var obstacles;

var screenSelector = "start";
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
    console.log("setup: ");
    cnv= new Canvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    player = new Sprite(100, 100, 30, 30, 'd');
    player.color = color("red");
    
    obstacles = new Group();

    floor =  new Sprite(SCREEN_WIDTH/2,  SCREEN_HEIGHT, SCREEN_WIDTH, 4, 's');
    floor.color = color("black");
    world.gravity.y = 80;
    
    document.addEventListener("keydown", 
        function(event) {
            console.log("Key pressed!"+player.y);
            screenSelector = "game"
            if(player.y > 184 ){// 184 - found from testing - floor level
                console.log("Key pressed!");
                player.vel.y = -20;
            }
    });

    player.collides(obstacles, youDead);
    
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
    obstacle.color = color("yellow");
    obstacle.vel.x = -10;
    obstacles.add(obstacle);
}

function youDead(_player, _obstacle){
screenSelector = "end";    
}

// Main screen functions

function startScreen(){
    console.log("Start screen")
    background("gray");

    allSprites.visible = false;
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("Welcome to the game", 150, 150);
    textSize(24);
    text("Press any key to start", 180, 170);
}

function gameScreen(){
    background("black");
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
    console.log("End screen")
    background("gray");

    allSprites.visible = false;
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("You died! Too bad :-(", 150, 150);
    textSize(24);
    text("your score was: "+score, 50, 110);
    textSize(14);
    //text("press any key to restart", 50, 150);
}
/*******************************************************/
//  END OF APP
/*******************************************************/
