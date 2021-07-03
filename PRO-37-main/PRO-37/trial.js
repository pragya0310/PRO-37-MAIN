var questions;
var index;
var background1;
var score=0;
function preload(){

    background1=loadImage("MAIN.jpg")
}

function setup(){
createCanvas(1200,800,800,800)

_1=createSprite(40,367,20,20)
_3=createSprite(40,445,20,20)
_2=createSprite(512,370,20,20)
_4=createSprite(512,448,20,20)
    questions=[
        ["NAME ONE WORD STARTING AND ENDING WITH 'W'"," WEAR","WOW ","WEAVER"," WORST",2],
        ["WHAT IS THE FAVOURITE FOOD OF DORAEMON?"," NOODLES"," PIES","LEMON PIE"," DORACAKE",4],
        ["WHO IS NOBITA'S BEST FRIEND?"," SHIZUKA"," GYAN","SUNIO","ALL OF THE ABOVE ",4],
        [" THE GADGET THAT HELPS ALL DORAEMONS FRIEND TO FLY IS CALLED?","ANYWHERE DOOR"," BAMBOO COPTER","SMALL LIGHT"," RESERVATION TUNNEL",2],
        ["WHAT KIND OF BOY NOBITA IS?","INTELLIGENT"," SMART","HELPING HAND "," NONE OF THE ABOVE",4],
        ["WHO IS THE MOST INTELLIGENT FRIEND OF NOBITA ?"," DACKYSUGI"," KOTAMA","GYAN"," SUNIO",1],
        ["WHAT NOBITA LIKES TO EAT MOST ?"," GINGER BREAD"," FISH CURRY ","CABBAGE"," NONE OF THE ABOVE",2],
        ["WHAT SHIZUKA LOVE TO DO?","STUDY"," COOKING","PLAYING VOILEN","ALL OF THE ABOVE",4],
        ["NOBITA IS AFRAID OF WHOM?"," HIS MOM"," GYAN ","NONE OF THE ABOVE","ALL OF THE ABOVE",4],
        ["DO YOU LOVE WATCHING DORAEMON?"," ALOT"," I USED TO LOVE","NO WAY"," A LITTLE ",3]
    ]
index=0
}
function draw(){
background(645)
image(background1,0,0,width,height)

if(index<questions.length){

textSize(30)
fill("#2a9df4")
text(questions[index][0],10,295)

text("score "+score,651,71)

text(questions[index][1],60,380)
text(questions[index][2],540,380)
text(questions[index][3],62,457)
text(questions[index][4],524,457)
text(mouseX+","+mouseY,mouseX,mouseY)

if(mouseIsOver(_1)&&mouseWentDown("leftButton")){
    checkAnswer(1)
}
if(mouseIsOver(_2)&&mouseWentDown("leftButton")){
    checkAnswer(2)
}
if(mouseIsOver(_3)&&mouseWentDown("leftButton")){
    checkAnswer(3)
}
if(mouseIsOver(_4)&&mouseWentDown("leftButton")){
    checkAnswer(4)
}
drawSprites();
}
else if (index==questions.length){
    fill("#2a9df4")
    textSize(50)
    text("SCORES "+score+"/10",331,424)
}
}
function checkAnswer(a){
    console.log(a)
    if(a==questions[index][5]){
        score+=1
    }
    index+=1
}