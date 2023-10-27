/**
 * class Rect
 */

class Rect {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }

  draw() {
    console.log(`Rect(width=${this.w}, height=${this.h})를 그렸습니다.`);
  }
}

// test
const rect1 = new Rect(10, 20);
const rect2 = new Rect(100, 200);

rect1.draw();
rect2.draw();

/**
 * cf. 생성자 함수(prototype 기반)
 */
const Circle = function (x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
};

Circle.prototype.draw = function () {
  console.log(`Circle(x=${this.x}, y=${this.y}, r=${this.r})을 그렸습니다.`);
};

// test
const circle1 = new Circle(10, 20, 5);
const circle2 = new Circle(100, 200, 50);

circle1.draw();
circle2.draw();

/**
 * extends
 */
class Shape {
  constructor(fillColor, lineColor) {
    this.fillColor = fillColor;
    this.lineColor = lineColor;
  }

  draw() {
    console.log("그릴 수 없습니다.");
  }

  area() {
    console.log("구할 수 없습니다.");
  }
}

class RectTangle extends Shape {
  constructor(w, h, fillColor, lineColor) {
    super(fillColor, lineColor);
    this.w = w;
    this.h = h;
  }

  // @Override
  draw() {
    console.log(
      `Rectangle(w=${this.w}, h=${this.h}, fillColor=${this.fillColor}, lineColor=${this.lineColor})을 그렸습니다.`
    );
  }
}

const shape1 = new RectTangle(10, 20, "red", "black");
shape1.draw();
