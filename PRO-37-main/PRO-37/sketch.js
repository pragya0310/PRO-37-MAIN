var gameState=0;
var db;
var game,player,form;
var playerCount=null;
var playerInfo;
var background;
function preload(){

    background=loadImage("MAIN.jpg")
}
function setup(){
createCanvas(displayWidth,displayHeight)
db=firebase.database()

game=new Game()
game.getstate()
game.start()

}
function draw(){


if(
    playerCount==4
)
{gameState=1;game.updateState(gameState)}
if(gameState==1){game.play()}
}