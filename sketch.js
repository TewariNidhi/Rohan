var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;
var object1, object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  gameObject1=createSprite(100, 300, 50, 50);
  gameObject1.shapeColor="green";

  gameObject2=createSprite(200, 300, 50, 50);
  gameObject2.shapeColor="green";

  gameObject3=createSprite(300, 400, 50, 50);
  gameObject3.shapeColor="green";
  
  gameObject4=createSprite(400, 300, 50, 50);
  gameObject4.shapeColor="green";

  gameObject3.velocityX=3;
  fixedRect.velocityX=-3;
}

function draw() {
  background(0,0,0);  
 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;

 if(isTouching(movingRect, gameObject2))
 {
	movingRect.shapeColor = "red";
	gameObject2.shapeColor = "red";
	gameObject2.destroy();
 }
 else{
	movingRect.shapeColor = "green";
	gameObject2.shapeColor = "green";
 }
   drawSprites();
   bounceOff(fixedRect, gameObject3);
}

function isTouching(object1, object2){
	if (object1.x - object2.x < object2.width/2 + object1.width/2
		&& object2.x - object1.x < object2.width/2 + object1.width/2
		&& object1.y - object2.y < object2.height/2 + object1.height/2
		&& object2.y - object1.y < object2.height/2 + object1.height/2) {
	  return true;
	}
	else {
	 return false;
	}

}

function bounceOff(object1, object2){
	if (object1.x - object2.x < object2.width/2 + object1.width/2
		&& object2.x - object1.x < object2.width/2 + object1.width/2){
			object1.velocityX *= (-1);
			object2.velocityX *= (-1);
		}
	if(object1.y - object2.y < object2.height/2 + object1.height/2
		&& object2.y - object1.y < object2.height/2 + object1.height/2){
			object1.velocityY *= (-1);
			object2.velocityY *= (-1);
		}
}