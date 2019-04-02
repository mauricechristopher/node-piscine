class Color {
    constructor(_red, _green, _blue) {
        this.red = parseInt(_red);
        this.green = parseInt(_green);
        this.blue = parseInt(_blue);
        this.color = new Array(this.red, this.green, this.blue);
        this.verbose = false;
    }

    __toString() {
        console.log("Your stringafied color is   -> " + this.color.toString());
    }

    intColor() {
        console.log('Your int color is           -> ' + this.color);
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

let newColor = new Color(21, 21, 21);
let newColor1 = new Color(6, 7, 21);
let newColor2 = new Color(7, 6, 2);

newColor.__toString();
newColor.intColor();

newColor.add(newColor1);
newColor.sub(newColor1);
newColor1.mult(newColor2);