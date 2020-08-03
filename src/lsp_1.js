class Shape {
    area() {}
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Square extends Shape {

    constructor(width) {
        super();
        this.width = width;
    }

    setWidth(width) {
        this.width = width;
    }

    area() {
        return this.width * this.width;
    }

}

function increaseRectangleWidth(rectangle) {
    rectangle.setWidth(rectangle.width + 1);
}

const rectangle1 = new Rectangle(10, 2);
const rectangle2 = new Rectangle(5, 5);
const square = new Square(5, 5);

increaseRectangleWidth(rectangle1);
increaseRectangleWidth(rectangle2);

console.log(rectangle1.area());
console.log(rectangle2.area());
console.log(square.area());
