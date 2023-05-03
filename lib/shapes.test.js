const Logo = require('./shapes');
 const { Circle, Square, Triangle } = require('./shapes');    
 
describe('Logo', () => {

describe('Circle',() => {
    it('should return a circle', () => {
    const shape = new Logo();
    expect(shape.Circle()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.color}" /><text x="150" y="125" font-size="48" text-anchor="middle" fill="white">SVG</text></svg>`)
    })
})

describe('Square',() => {
    it('should return a square', () => {
    const shape = new Logo();
    expect(shape.Square()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="${this.color}" /><text x="150" y="125" font-size="48" text-anchor="middle" fill="white">SVG</text></svg>`)
    })
})

describe('Triangle', () => {
    it('should return a triangle', () => {
    const shape = new Logo();
    expect(shape.Triangle()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.color}" /><text x="150" y="125" font-size="48" text-anchor="middle" fill="white">SVG</text></svg>`)
    })
})

 ;})
 