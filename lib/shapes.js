class Shapes {
  constructor(shapeColor, textColor, text) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.text = text;
  }
}

class Triangle extends Shapes {
  constructor(shapeColor, textColor, text) {
    super(shapeColor, textColor, text);
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon x="0" y="0" points="150, 0 265.5, 200 34.5, 200" fill="${this.shapeColor}"
            />
            <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">
                ${this.text}
            </text>
        </svg>`;
  }
}

class Circle extends Shapes {
  constructor(shapeColor, textColor, text) {
    super(shapeColor, textColor, text);
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle 
                cx="150" 
                cy="75" 
                r="75" 
                fill="${this.shapeColor}"
            />
            <text 
                x="150" 
                y="100" 
                font-size="60" 
                text-anchor="middle" 
                fill="${this.textColor}"
            >
                ${this.text}
            </text>
        </svg>`;
  }
}

class Square extends Shapes {
  constructor(shapeColor, textColor, text) {
    super(shapeColor, textColor, text);
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect 
                x="50"
                y="0"  
                width="200" 
                height="200"
                fill="${this.shapeColor}"
            />
            <text 
                x="150" 
                y="120" 
                font-size="60" 
                text-anchor="middle" 
                fill="${this.textColor}"
            >
                ${this.text}
            </text>
        </svg>`;
  }
}

module.exports = {
    Triangle,
    Circle,
    Square
};
