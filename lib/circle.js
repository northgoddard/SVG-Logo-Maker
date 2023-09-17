const shape = require('./shape.js');

class Circle extends shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<circle cx="150" cy="115" r="50" fill="${this.color}" />`;
    }
}

module.exports = Circle;