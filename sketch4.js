//credit to Daniel Shiffman
// https://youtu.be/rNqaw8LT2ZU
// http://thecodingtrain.com

var video;
let mic, fft;
var vScale = 10;

function setup() {
  createCanvas(640, 480);
  frameRate(12);
  pixelDensity(1);
  video = createCapture(VIDEO);
  mic = new p5.AudioIn();
  video.size(width / vScale, height / vScale);
  video.hide();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  background(0, 15);
  video.loadPixels();
  // let dis = map(mouseX, 0, width, 1,5 );
  for (var y = 0; y < video.height; y += 3) {
    for (var x = 0; x < video.width; x += 3) {
      var index = (video.width - x + 1 + (y * video.width)) * 4;
      var r = video.pixels[index + 0];
      var g = video.pixels[index + 1];
      var b = video.pixels[index + 2];
      var bright = (r + g + b) / 3;
      var w = map(bright, 0, 255, 0, vScale);
      noFill();
      strokeWeight(5);
      fill(r, g, b);
      rectMode(CENTER);
      let vol = mic.getLevel();

      let h = map(vol, 0, 1, 10, 100);

      // let spectrum = fft.analyze();

      // beginShape();
      // for (i = 0; i < spectrum.length; i+=20) {
      // let g = map(spectrum[i], 0, 255, height, 0);
      // let f = map(spectrum[i], 0, 255, 50, 5);
      // vertex(i*vScale, g);

      // let f = g*0.1

      // f>80 for dif effect
      // if(f>70){
      //  r=random(100); 
      //   g=random(255);
      //   b=random(255);
      // }else{
      //    r = video.pixels[index + 0];
      //    g = video.pixels[index + 1];
      //    b = video.pixels[index + 2];
      // }
      // fill(g,r,b,40);
      // rect(x * vScale , y * vScale , spectrum[i], spectrum[i]);
      noStroke();
      ellipse(x * vScale, y * vScale, w * 5, h * 5);
      // stroke(g, r, b);
      stroke(255);
      push();
      strokeWeight(3);
      rotate(h * 10);
      point(x * vScale + h, y * vScale + h);
      pop();


    }
    // endShape();

    // rect(x * vScale, y * vScale, w *h, w*h);

  }
  // }


}