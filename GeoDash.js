/*******************************************************/
// P5.play: t01_create_sprite
// Create a sprite
// Written by ??? 
/*******************************************************/
console.log("%c t01_create_sprite", "color: blue;");

const SCREEN_WIDTH = 500;
const SCREEN_HEIGHT = 250;

/*******************************************************/
// setup()
/*******************************************************/
function setup() {
  console.log("setup: ");
  cnv = new Canvas(SCREEN_WIDTH, SCREEN_HEIGHT);
  
  PLAYER = new Sprite(30, 30, 30, 30, 'd');
  PLAYER.color = 'cyan';
  world.gravity.y = 7;
  
  floor = new Sprite(SCREEN_WIDTH/2, SCREEN_HEIGHT, SCREEN_WIDTH, 5, 's');
  floor.color = 'red';
  
document.addEventListener("keydown", 
    function(event) {
       console.log("Key pressed!");
       if (event.code === 'ArrowLeft') {
       }else {
    }
});

}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
  background('black');
}

/*******************************************************/
//  END OF APP
/*******************************************************/