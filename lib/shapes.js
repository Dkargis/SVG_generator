class Logo {
    constructor (shape, color, logo) {
        this.shape = shape;
        this.color = color;
        this.logo = logo;
    }
    Circle() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.color}" /><text x="150" y="125" font-size="48" text-anchor="middle" fill="white">SVG</text></svg>`
    }
    Square() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="${this.color}" /><text x="150" y="125" font-size="48" text-anchor="middle" fill="white">SVG</text></svg>`
    }
    Triangle() {
        return  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.color}" /><text x="150" y="125" font-size="48" text-anchor="middle" fill="white">SVG</text></svg>`
    }
    render() {
        if (this.shape === 'Circle') {
            return this.Circle();
        } else if (this.shape === 'Square') {
            return this.Square();
        } else if (this.shape === 'Triangle') {
            return this.Triangle();
        }
    }

}

module.exports = Logo;