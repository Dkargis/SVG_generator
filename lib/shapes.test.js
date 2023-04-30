const shapes = require('./shapes');
 const { Circle, Square, Triangle } = require('./shapes');        

discribe('Circle', () => {
    it('should return a circle', () => {
    const shape = new Circle ();
    shape.setColor('red');
    expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`)
    })
})

discribe('Square', () => {
    it('should return a square', () => {
    const shape = new Square ();
    shape.setColor('red');
    expect(sqaure.render()).toEqual(`<rect x="15" y="15" width="270" height="270" fill="${this.color}" />`)
    })
})

discribe('Triangle', () => {
    it('should return a triangle', () => {
    const shape = new Triangle ();
    shape.setColor('red');
    expect(circle.render()).toEqual(`<circle cx="150" cy="150" r="80" fill="${this.color}" />`)
    })
})




