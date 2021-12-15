//List of arrays:
var carnivores = [];
var vehicles = [];
var eggs = [];
var food = [];
var foodSuper = [];
var foodJungle = [];
var debug;
var counter=0;
//River variables:
var riverWidth = 150;
var riverL = 600;
var riverR = riverL + riverWidth;
var riverM = riverL + (riverWidth/2);
//Mountain variables:
mountWidth = 150;
var mountL = 1600;
var mountR = mountL + mountWidth;
var mountM = mountL + (mountWidth/2)
//Map variables:
var mapWidth = 2400;
var mapHeight = 1100;
function preload(){

  imgStem=loadImage("Png til skole/Stem3.png.png");
  imgCarnivore=loadImage("Png til skole/Carnivore.png.png");
  imgCrawler=loadImage("Png til skole/Crawler.png");
  imgStalker=loadImage("Png til skole/Stalker.png");
  imgDweller=loadImage("Png til skole/Dweller.png");
  imgFly=loadImage("Png til skole/Fly.png");
  imgMAP=loadImage("png til skole/MAP.JPG");
  imgNomad=loadImage("Png til skole/Nomad.png");
  imgDwellerSand=loadImage("Png til skole/SandDweller.png");
  imgNomadSand=loadImage("Png til skole/SandNomad.png");
  imgFlySand=loadImage("Png til skole/SandFly.png");
  // EGG-pngs:
  imgEggStem = loadImage("Png til skole/EggStem.png");
  imgEggSand = loadImage("Png til skole/EggSand.png");
  imgEggGrass = loadImage("Png til skole/EggGrass.png");
  imgEggCarnivore = loadImage("Png til skole/EggCarnivore.png");
  imgEggStalker = loadImage("Png til skole/EggStalker.png");
  imgEggCrawler = loadImage("Png til skole/EggCrawler.png");
};

function setup() {
  createCanvas(mapWidth, mapHeight);
  frameRate(60);


  //Initial vehicle spawner:
  for (var i = 0; i < 45; i++) {
    var x = random(0, mapWidth);
    var y = random(height);
    vehicles[i] = new Vehicle(x, y);
  }

  //Initial carnivore spawner:
  for (var i = 0; i < 0; i++) {
    var x = random(riverR, mountL);
    var y = random(height);
    carnivores[i] = new Carnivore(x, y);
  }

  // CENTER MAP FOOD - Grasslands - Normal food:
  // var foodGrassMax = 40;
  // for (var i = 0; i < foodGrassMax; i++) {
  //   var x = random(riverR+25, mountL-25);
  //   var y = random(height-25, 25);
  //   food.push(createVector(x, y));
  // }
  // RIGHT MAP FOOD - Mountains - (less) Super food:
  var foodMountMax = 12;
  for (var i = 0; i < foodMountMax; i++) {
    var x = random(mountR+25, width-25);
    var y = random(height-25, 25);
    foodSuper.push(createVector(x, y));
  }
  // LEFT MAP FOOD - Jungles - (High concentration of food) Normal food):
  // var foodJungleMax = 50;
  // for (var i = 0; i < foodJungleMax; i++) {
  //   var x = random(25, riverL);
  //   var y = random(height-25, 25);
  //   food.push(createVector(x, y));
  // }
  debug = createCheckbox(); //

function timeIt(){ //This is a timer in seconds, will be displayed in console
    counter++;
  }
  function carniTimer(){
    textSize(32);
    text("Carnivores Alive: "+ carnivores.length, 10, 60);
    console.log("Time: "+counter);
    console.log('Carn'+counter+"  " + carnivores.length);
    fill(252, 3, 3);
  }
  function vehicleTimer(){
    textSize(32);
    text("Creatures Alive: "+ vehicles.length, 10, 30);
    console.log('Vehi'+counter+"  "+ vehicles.length);
    fill(252, 3, 3);
  }
   setInterval(timeIt,1000);
   setInterval(carniTimer,15000);
   setInterval(vehicleTimer,15000);
   setInterval(countVehicles,15000);
   setInterval(countCarnivores,15000);
}

function countCarnivores(){
  var stalker =0;
  var crawler=0;
  var regular=0;
  for(var carnivore of carnivores){


    if(carnivore.getTypeCarnivore()=="stalker"){
      stalker++;
    }
    if(carnivore.getTypeCarnivore()=="crawler"){
      crawler++;
    }
    if(carnivore.getTypeCarnivore()=="regular"){
      regular++;
    }
  }
  textSize(32);
  console.log('Stalker'+counter+"  " + stalker);
  textSize(32);
  console.log('Crawler'+counter+"  " + crawler);
  textSize(32);
  console.log('Regular'+counter+"  " + regular);
};

function countVehicles(){
  var dwellerSand =0;
  var flySand =0;
  var nomadSand=0;
  var dweller =0;
  var fly =0;
  var nomad=0;

  for(var vehicle of vehicles){
    if(vehicle.getType() =="dwellerSand"){
      dwellerSand++;
    }
    if(vehicle.getType()=="flySand"){
      flySand++;
    }
    if(vehicle.getType()=="nomadSand"){
      nomadSand++;
    }
    if(vehicle.getType() =="dweller"){
      dweller++;
    }
    if(vehicle.getType()=="fly"){
      fly++;
    }
    if(vehicle.getType()=="nomad"){
      nomad++;
    }
  }
  textSize(32);
  console.log('Sandweller'+counter +"  "+ dwellerSand);
  textSize(32);
  console.log('SandNomad'+counter+"  " + nomadSand);
  textSize(32);
  console.log('Sandfly'+counter+"  " + flySand);
  textSize(32);
  console.log('Dweller'+counter+"  " + dweller);
  textSize(32);
  console.log('Fly'+counter+"  " + fly);
  textSize(32);
  console.log('Nomad'+counter+"  " + nomad);

};
function mouseDragged() { //Testing vehicles by clicking mouse
  vehicles.push(new Vehicle(mouseX, mouseY));
}

// function mouseDragged() {
//   //Testing vehicles by clicking mouse
//   carnivores.push(new Carnivore(mouseX, mouseY));
// }

function draw() {
  background(51);
  image(imgMAP,0,0);


  for (i = 0; i < vehicles.length; i++){
      textSize(32);
      text("Creatures Alive: "+ vehicles.length, 10, 30);
      fill(252, 3, 3);
    }

  for (i = 0; i < carnivores.length; i++){
      textSize(32);
      text("Carnivores Alive: "+ carnivores.length, 10, 60);
      fill(252, 3, 3);
    }

  //Food growth - Jungles! (High spawn rate of normal food):
    if (random(1) < 0.4 && foodJungle.length < 60*4) {
      var x = random(25, riverL-25);
      var y = random(height-25, 25);
      foodJungle.push(createVector(x, y));
    }

    //Food growth - Grasslands! (normal):
    if (random(1) < 0.4 && food.length < 60*6) {
      var x = random(riverR+25, mountL-25);
      var y = random(height-25, 25);
      food.push(createVector(x, y));
    }

  //Food growth - Mountains! (Low spawn rate of super food):
    if (random(1) < 0.1 && foodSuper.length < 10*6) {
      var x = random(mountR+25, mapWidth-25);
      var y = random(height-25, 25);
      foodSuper.push(createVector(x, y));
      if (random(10) < 0.5) {
        var x = random(mountR-25, mountL-25);
        var y = random(500, 700);
        foodSuper.push(createVector(x, y));
        food.push(createVector(x, y));
        var x = random(riverR + 25, riverL + 25);
        var y = random(500, 700);
        foodJungle.push(createVector(x, y));
        food.push(createVector(x, y));
      }
    }
    //Predator from the jungle, prowls when enough vehicles are alive.
    if (random(500) < 1 && vehicles.length > 50) {
        var x = 80;               // lair position X
        var y = (mapHeight/2)+60; // lair position Y
        carnivores[i] = new Carnivore(x, y);
    }
  //Food visuals:
  for (var i = 0; i < food.length; i++) {
    fill(0, 200, 0);
    stroke(0,0,0);
    strokeWeight(2);
    ellipse(food[i].x, food[i].y, 8, 8);
  }
  // Super food visuals:
  for (var i = 0; i < foodSuper.length; i++) {
    fill(0, 0, 0);
    stroke(0,0,0);
    strokeWeight(2);
    ellipse(foodSuper[i].x, foodSuper[i].y, 6, 6);
  }
  //Jungle food visuals:
  for (var i = 0; i < foodJungle.length; i++) {
    fill(0, 200, 0);
    stroke(0,0,0);
    strokeWeight(2);
    ellipse(foodJungle[i].x, foodJungle[i].y, 8, 8);
  }
  for (var i = eggs.length - 1; i >= 0; i--) {
    eggs[i].update();
    eggs[i].display();
  }
  for (var i = eggs.length - 1; i >= 0; i--) {
    if (eggs[i].isDead) {
      eggs.splice(i, 1);
    }
  }

  for (var i = vehicles.length - 1; i >= 0; i--) {
    vehicles[i].boundaries();
    vehicles[i].behaviors(food, foodSuper, foodJungle);
    vehicles[i].update(); //Updates position of Vehicle
    vehicles[i].display(); // Visuals for Vehicle
    vehicles[i].layEgg();

    if (vehicles[i].dead()) {
      var x = vehicles[i].position.x;
      var y = vehicles[i].position.y;
      vehicles.splice(i, 1);
    }

  }

  for (var i = carnivores.length - 1; i >= 0; i--) {
    carnivores[i].boundaries();
    carnivores[i].layEgg();
    carnivores[i].behaviors(vehicles);
    carnivores[i].update(); //Updates position of Vehicle
    carnivores[i].display(); // Visuals for Vehicle

    // var newCarnivore = carnivores[i].clone();
    // if (newCarnivore != null) {
    //   carnivores.push(newCarnivore);
    // }

    if (carnivores[i].dead()) {
      var x = carnivores[i].position.x;
      var y = carnivores[i].position.y;
      carnivores.splice(i, 1);
    }
  }

}
