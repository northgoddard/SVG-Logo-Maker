const Square = require('./square.js');
const Circle = require('./circle.js');
const Triangle = require('./triangle.js');

describe('Square', () => {
    describe('Render Method', () => {
        it('should render the line to go in the SVG file properly',() =>{
            const color = "#0000ff";
            const square = new Square(color);
            expect(square.render()).toEqual('<rect x="100" y="65" width="100" height="100" fill="#0000ff" />')
        });
    });
});

describe('Circle', () => {
    describe('Render Method', () => {
        it('should render the line to go in the SVG file properly',() =>{
            const color = "#0000ff";
            const circle = new Circle(color);
            expect(circle.render()).toEqual('<circle cx="150" cy="115" r="50" fill="#0000ff" />')
        });
    });
});

describe('Triangle', () => {
    describe('Render Method', () => {
        it('should render the line to go in the SVG file properly',() =>{
            const color = "#0000ff";
            const triangle = new Triangle(color);
            expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="#0000ff" />')
        });
    });
});