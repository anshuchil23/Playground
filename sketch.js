//credit to Daniel Shiffman
// https://youtu.be/rNqaw8LT2ZU
// http://thecodingtrain.com

var video;

let mic;
var vScale = 16;

function setup() {
  alert("Play some music bruh");
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width / vScale, height / vScale);
    mic = new p5.AudioIn();
    mic.start();
video.hide();
}

function draw() {
  // frameRate(12);
  background(0,15);
  video.loadPixels();
  for (var y = 0; y < video.height; y++) {
    for (var x = 0; x < video.width; x++) {
      var index = (video.width - x + 1 + (y * video.width)) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var bright = (r + g + b) / 3;
      var w = map(bright, 0, 255, 0, vScale);
      let vol = mic.getLevel();

      let h = map(vol, 0, 1, 10, 500);
      // console.log(h);
      noFill();
      stroke(r,g,b);
      rectMode(CENTER);
      rect(x * vScale, y * vScale, w +sin(millis())*h, w +cos(millis())*h);
            // rect(x * vScale, y * vScale, noise(1000)*100, noise(1000)*100);
      // rect(50,50,50,50);
    }
  }

}
