const {Triangle} = require("./shapes");
const { Square } = require("./shapes");
const { Circle } = require("./shapes");

describe('Shapes and Colors', ()=> {
    describe("Triangle and color", () => {
      it("it should generate a blue triangle", () => {
        const shapeColor = "blue";
        const textColor = "white";
        const text = "CAG";
        const shape = new Triangle(shapeColor, textColor, text);
        
        expect(shape.render()).toEqual(
          `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon x="0" y="0" points="150, 0 265.5, 200 34.5, 200" fill="${shapeColor}"
            />
            <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">
                ${text}
            </text>
        </svg>`
        );
      });
    }),
    describe("Square color and text", () => {
      it("it should generate a blue square, white text, and letters CAG", () => {
        const shapeColor = "blue";
        const textColor = "white";
        const text = "CAG";
        const shape = new Square(shapeColor, textColor, text);

        expect(shape.render()).toEqual(
          `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect 
                x="50"
                y="0"  
                width="200" 
                height="200"
                fill="${shapeColor}"
            />
            <text 
                x="150" 
                y="120" 
                font-size="60" 
                text-anchor="middle" 
                fill="${textColor}"
            >
                ${text}
            </text>
        </svg>`
        );
      });
    }),
    describe("Triangle color and text", () => {
      it("it should generate a blue circle, white text, and letters CAG", () => {
        const shapeColor = "blue";
        const textColor = "white";
        const text = "CAG";
        const shape = new Circle(shapeColor, textColor, text);
        
        expect(shape.render()).toEqual(
          `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle 
                cx="150" 
                cy="75" 
                r="75" 
                fill="${shapeColor}"
            />
            <text 
                x="150" 
                y="100" 
                font-size="60" 
                text-anchor="middle" 
                fill="${textColor}"
            >
                ${text}
            </text>
        </svg>`
        );
      });
    })
      
})