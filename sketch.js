var bg
var target
var gunS
var gunL
var gunR
var Rgun
var gun
var bHImg
var cH, cHImg
var score=0
var timer=100

function preload(){
bg=loadImage("Target 1.jpg")
gunS=loadImage("Shooting Gun.png")
gunL=loadImage("Pointing Left.png")
gunR=loadImage("Pointing Right.png")
Rgun=loadImage("Reloding Gun.png")
bHImg=loadImage("Bullet Hole.png")
cHImg=loadImage("Cross Hair.png")

}







function setup(){
createCanvas(displayWidth, displayHeight-100)
gun=createSprite(width/2, height-200)
gun.scale=3
gun.addImage(gunS)
cH=createSprite(width/2,height/2)
cH.addImage(cHImg)
cH.scale=0.5
}
function draw(){
background(bg)
if (keyDown("left")){
    gun.addImage(gunL) 
    gun.scale=1
    gun.y=height-300 
    gun.x=width/2-50
    cH.x--
}
if (keyDown("right")){
    gun.addImage(gunR)
    gun.scale=1
    gun.y=height-300 
    gun.x=width/2-50
    cH.x++
}
if (keyDown("up")){
    gun.addImage(gunS)
    gun.scale=3
    gun.y=height-200 
    gun.x=width/2
    cH.y--
}
if (keyDown("down")){
    cH.y++
}
if (keyDown("r")){
    gun.addImage(Rgun)
}
if (keyDown("space")){
    var bH=createSprite(cH.x,cH.y)
    bH.addImage(bHImg)
    bH.scale=0.07
}
drawSprites()
}


