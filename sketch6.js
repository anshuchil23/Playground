let capture;
let mic;

var balls = [];
function setup() {
  createCanvas(400, 400);
  
capture = createCapture(VIDEO);
  capture.hide();
  
    mic = new p5.AudioIn();
    mic.start();
  
  	for (var i = 0; i < 10; i++) {
    balls[i] = new Ball(width/2, height/2);
  }
}

function draw() {
  // background(0,5);
  let x1 = random(width);
  let y1 = random(height);
  
  
  
        let vol = mic.getLevel();

      let h = map(vol, 0, 1, 10, 100);
  

  
  let c = capture.get(x1,y1);
    fill(c);
  noStroke();
  // ellipse(x1+h,y1+h,h,h);
  // stroke(c);
  // strokeWeight(h);
  // point(x1, y1);
  //   }
  // }
// image(capture, 0, 0, width,height);
  
    for (var i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].display();
    balls[i].bounce();
  }
}


function mousePressed() {
  // with each mouse press, craa new ball at mouse location
  // this ball is added to the array
  balls.push( new Ball(mouseX, mouseY) );
}

// constructor function is the same.
// it's a blueprint for creating many balls.
function Ball(x, y) {
          let vol = mic.getLevel();

      let h = map(vol, 0, 1, 5, 100);
	this.x = x;
	this.y = y;
	this.sz = h ;
	this.xspeed = random(-5, 5);
	this.yspeed = random(-5, 5);
	this.update = function() {
		this.x += this.xspeed;
		this.y += this.yspeed;
	};
	
	this.display = function() {
      let c = capture.get(this.x, this.y);
      stroke(c);
      strokeWeight(h/3);
      noFill();
		ellipse(this.x, this.y, this.sz +h, this.sz+h);
	};
	
	this.bounce = function() {
		if (this.x > width || this.x < 0) {
			this.xspeed *= -1;
		}
		if (this.y > height || this.y < 0) {
			this.yspeed *= -1;
		}
	}
}