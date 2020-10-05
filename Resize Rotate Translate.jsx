var document = app.documents.add();
document.documentColorSpace = DocumentColorSpace.RGB;
var layer = document.layers[0];

var fillColour = new RGBColor();
fillColour.red = 230;
fillColour.green = 50;
fillColour.blue = 0;

// for rectangle (top, left, width, height)
var rectangle = layer.pathItems.rectangle(document.height*.5+75, document.width*.5-75, 150, 150);
rectangle.fillColor = fillColour;
rectangle.filled = true;

// resize
rectangle.resize(350, 350);

// rotate
rectangle.rotate(45);

// translate
// (deltaX, deltaY)
rectangle.translate(100, 50);