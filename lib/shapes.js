class Logo {
    constructor (shape, color, logo) {
        this.shape = shape;
        this.color = color;
        this.logo = logo;
    }
    Circle() {
        return `<circle cx="150" cy="150" r="80" fill="${this.color}" />`
    }
    Square() {
        return `<rect x="15" y="15" width="270" height="270" fill="${this.color}" />`
    }
    Triangle() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
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