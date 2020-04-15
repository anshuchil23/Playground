let capture;
let mic, fft;

var balls = [];

function setup(){
  createCanvas(640, 480);
  pixelDensity(1);
  video = createCapture(VIDEO);
    mic = new p5.AudioIn();
video.hide();
   mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  // background(0,5);
  
  
  
        // let vol = mic.getLevel();

      // let h = map(vol, 0, 1, 10, 100);
        let spectrum = fft.analyze();
  
    // fill(c);
  // noStroke();

  for (i = 0; i < spectrum.length; i+=20) {
      let a = map(spectrum[i], 0, 255, height, -150);
      let c = video.get(i, a);
    stroke(c);
    noFill();
    rect(i, a, random(30),10);
  }
  // ellipse(x1+h,y1+h,h,h);
  // stroke(c);
  // strokeWeight(h);
  // point(x1, y1);
  //   }
  // }
// image(capture, 0, 0, width,height); 
}