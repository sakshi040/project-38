var canvas;
var gameState=0;
var playerCount;
var database;
var form;
var game;
var player;
var allPlayers;
var car1;
var car2;
var car3;
var car4;
var cars;
var car1Image;
var car2Image;
var car3Image;
var car4Image;

function preload(){
car1Image=loadImage("blue car.png")
car2Image=loadImage("green car.png")
car3Image=loadImage("pink car.png")
car4Image-loadImage("red car.png")
}

function setup(){
    canvas=createCanvas(displayWidth-20,displayHeight-30)
    database=firebase.database()
    game=new Game()
    game.getState();
    game.start()
}

function draw(){
    if(playerCount===4){
game.update(1)
    }
    if(gameState===1){
clear();
game.play()
    }
    
    
}