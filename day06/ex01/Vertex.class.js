class Color {
    constructor(_red, _green, _blue) {
        this.red = parseInt(_red);
        this.green = parseInt(_green);
        this.blue = parseInt(_blue);
        this.color = new Array("red: " + this.red.toString(), " green: " + this.green, " blue: " + this.blue);
        this.verbose = false;
    }

    __toString() {
        return this.color;
    }

    intColor() {
        return this.color;
    }

    add(Color) {
        console.log('Colors have been added      -> ' + (this.red + Color.red) + ',' + (this.green + Color.green) + ',' + (this.blue + Color.blue));
    }

    sub(Color) {
        console.log('Colors have been subtracted -> ' + (this.red - Color.red) + ',' + (this.green - Color.green) + ',' + (this.blue - Color.blue));
    }

    mult(Color) {
        console.log('Colors have been multiplied -> ' + (this.red * Color.red) + ',' + (this.green * Color.green) + ',' + (this.blue * Color.blue));
    }
}



class Vertex {
    constructor(x, y, z, w, color) {
        this.x = parseInt(x);
        this.y = parseInt(y);
        this.z = parseInt(z);
        this.w = parseInt(w);
        this.color = color;
        this.array = new Array(this.x, this.y, this.z, this.w, this.color);

        this.verbose = false;
    }

    __toString() {
        console.log("Your stringafied vertex is   -> " + this.array.toString());
    }
}

let defaultW = 1.0;
let defaultColor = new Color(0,0,0);
let newVertex = new Vertex(1, 2, 3, defaultW, "Color( " + defaultColor.intColor());

console.log(newVertex.array)