var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d4d3f3fb-d458-4fb3-b969-15ec22f74442","f9f6887b-017b-4c8b-ad96-2a3a021072af"],"propsByKey":{"d4d3f3fb-d458-4fb3-b969-15ec22f74442":{"name":"mouse_1","sourceUrl":"assets/api/v1/animation-library/gamelab/JiNH1fnncYd5VrE5Js_QJMmE4Vm1Lt2p/category_animals/mouse.png","frameSize":{"x":61,"y":37},"frameCount":2,"looping":true,"frameDelay":2,"version":"JiNH1fnncYd5VrE5Js_QJMmE4Vm1Lt2p","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":122,"y":37},"rootRelativePath":"assets/api/v1/animation-library/gamelab/JiNH1fnncYd5VrE5Js_QJMmE4Vm1Lt2p/category_animals/mouse.png"},"f9f6887b-017b-4c8b-ad96-2a3a021072af":{"name":"cheese_1","sourceUrl":null,"frameSize":{"x":50,"y":48},"frameCount":1,"looping":true,"frameDelay":12,"version":"JfYXF2yZ1YVWGOUyZ4BgEx10UyznUuEV","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":48},"rootRelativePath":"assets/f9f6887b-017b-4c8b-ad96-2a3a021072af.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creating Mouse
var player = createSprite(365, 200, 20, 20);
player.setAnimation("mouse_1");

//create Moving Blocks of cheese
var cheese1 = createSprite(284,124,20,20);
var cheese2 = createSprite(220,220,20,20);
var cheese3 = createSprite(180,50,20,20);
var cheese4 = createSprite(90,150,20,20);
var cheese5 = createSprite(30,230,20,20);
var cheese6 = createSprite(340,50,20,20);
var cheese7 = createSprite(90,310,20,20);
var cheese8 = createSprite(170,370,20,20);
var cheese9 = createSprite(270,305,20,20);
var cheese10 = createSprite(370,370,20,20);

cheese1.setAnimation("cheese_1");
cheese2.setAnimation("cheese_1");
cheese3.setAnimation("cheese_1");
cheese4.setAnimation("cheese_1");
cheese5.setAnimation("cheese_1");
cheese6.setAnimation("cheese_1");
cheese7.setAnimation("cheese_1");
cheese8.setAnimation("cheese_1");
cheese9.setAnimation("cheese_1");
cheese10.setAnimation("cheese_1");

//creating Score
var Score = 0;

function draw() {
  background("white");
  //Create Instructions and winner text
  text("Collect All the Peices of Cheese", 0, 15);
  
  
  //Increase Score as it Touches the cheese
  if (player.isTouching(cheese1)) {
    Score = Score+1;
    cheese1.destroy(player);
    
  }
  
  if (player.isTouching(cheese2)) {
    Score = Score+1;
    cheese2.destroy(player);
  }
  
  if (player.isTouching(cheese3)) {
    Score = Score+1;
    cheese3.destroy(player);
  }
  
  if (player.isTouching(cheese4)) {
    Score = Score+1;
    cheese4.destroy(player);
  }
  
  if (player.isTouching(cheese5)) {
    Score = Score+1;
    cheese5.destroy(player);
  }
  
  if (player.isTouching(cheese6)) {
    Score = Score+1;
    cheese6.destroy(player);
  }
  
  if (player.isTouching(cheese7)) {
    Score = Score+1;
    cheese7.destroy(player);
  }
  
  if (player.isTouching(cheese8)) {
    Score = Score+1;
    cheese8.destroy(player);
  }
  
  if (player.isTouching(cheese9)) {
    Score = Score+1;
    cheese9.destroy(player);
  }
  
  if (player.isTouching(cheese10)) {
    Score = Score+1;
    cheese10.destroy(player);
  }
  
  //If the Score becomes 10, the player wins
  if (Score==10) {
  textSize(50);
  text("You Win", 200, 200);
  
  }
  
  //Allowing player to move by the arrow keys
  if (keyDown(DOWN_ARROW)) {
    player.y=player.y+1;
  }
  
  if (keyDown(UP_ARROW)) {
    player.y=player.y-1;
  }
  
  if (keyDown(RIGHT_ARROW)) {
    player.x=player.x+1;
  }
  
  if (keyDown(LEFT_ARROW)) {
    player.x=player.x-1;
  }
  

  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
