const Square = require('./lib/square.js');
const Circle = require('./lib/circle.js');
const Triangle = require('./lib/triangle.js');

function generate(data) {
    if(data.shape[0] === "triangle"){

        var s = new Triangle(data.shapeColor)
    }
    else if (data.shape[0] === "square"){
        var s = new Square(data.shapeColor)
    }
    else{
        var s = new Circle(data.shapeColor)
    }
    
    if(data.text === ""){data.text = 'svg'}
    if(data.textColor === ""){data.textColor = 'white'}

    var svgTemplate = `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    ${s.render()}
    <text x="150" y="125" font-size="50" text-anchor="middle" fill="${data.textColor}">${data.text}</text>
</svg>`

    return svgTemplate;
}

module.exports = generate;