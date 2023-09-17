const shape = require('./shape.js');

class Square extends shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `<rect x="100" y="65" width="100" height="100" fill="${this.color}" />`;
    }
}

module.exports = Square;