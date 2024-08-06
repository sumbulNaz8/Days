// *Question:*
// Create three separate files. In the first file, define and export an interface Shape with properties name and area, and a method calculateArea(). In the second file, define and export a class Circle that implements the Shape interface. The class should have a property radius and implement the calculateArea method. In the third file, import the Circle class, create an instance of Circle, and print the name and area of the circle.

// *Hint:*
// - Use export to export the interface in the first file.
// - Use export to export the class in the second file.
// - Use named imports to bring the interface and class into the third file.
// - Ensure that the file paths are correctly specified when importing.


//Answer
//Second file:Export class circle and imlement the shape interface


//First file: Export interface
export interface Shape {
    name:string,
    area:string,
    calculteArea():void
}

// echo "# Days" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/sumbulNaz8/Days.git
// git push -u origin main