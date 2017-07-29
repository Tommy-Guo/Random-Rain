var droplets = [];
var dropletCount = 500;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  background(0);
  for (var i = 0; i < dropletCount; i++) {
    var nDrop = new Droplet();
    nDrop.setSize();
    droplets.push(nDrop);
  }
}

function draw() {
  background(0);
  for (var i = 0; i < droplets.length; i++) {
    droplets[i].rain();
    droplets[i].render();
  }
}

function Droplet() {

  var x = round(random(0, width));
  var y = round(random(-500, 0));
  var w;
  var h;
  var speed = round(random(10, 30));

  this.setSize = function() {
    w = round(random(4, 6));
    h = round(random(10, 30));
  }

  this.rain = function() {
    y += speed;
    if (y > height) {
      y = 0;
    }
  }

  this.render = function() {
    // noStroke();
    fill(random(0, 255), random(0, 255), random(0, 255), random(50, 255));
    // fill(0, 255, 80, random(50, 255));
    rect(x, y, w, h);
  }
}
