class Triagle extends Shape {
  constructor() {
    super();
    this.points = '150, 18 244, 182 56, 182';
  }
  render() {
    return `<polygon points="${this.points}" fill="${this.color}" />`;
  }
}

module.exports = Triagle;

class Sqaure extends Shape {
  constructor() {
    super();
    this.points = '150, 18 244, 182 56, 182';
  }
  render() {
    return `<polygon points="${this.points}" fill="${this.color}" />`;
  }
}

module.exports = Sqaure;

class Circle extends Shape {
    constructor() {
        super();
        this.points = '150, 18 244, 182 56, 182';
    }
    render() {
        return `<polygon points="${this.points}" fill="${this.color}" />`;
    }
    }

module.exports = Circle;