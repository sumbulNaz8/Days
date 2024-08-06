"use strict";
// *Question:*
// Create three separate files. In the first file, define and export an interface Shape with properties name and area, and a method calculateArea(). In the second file, define and export a class Circle that implements the Shape interface. The class should have a property radius and implement the calculateArea method. In the third file, import the Circle class, create an instance of Circle, and print the name and area of the circle.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    name = "";
    area = "";
    calculteArea() {
        throw new Error("Method not implement ");
    }
    constructor(name, area) {
        this.name = name;
        this.area = area;
    }
}
exports.Circle = Circle;
