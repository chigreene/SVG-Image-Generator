const inquirer = require('inquirer')
const { Triangle, Circle, Square } = require('./shapes');


const fs = require('fs');
//questions for prompt
const questions = [
  {
    type: "list",
    name: "shape",
    message: "please select a shape for you logo",
    choices: ["square", "circle", "triangle"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "please enter the color you would like for your shape, you can also input hexadecimal color codes (include the #). If the entered color is not recognized then it will default to black.",
  },
  {
    type: "input",
    name: "letters",
    message:
      "please enter up to three letters to be displayed in the middle of the log",
    validate: function (input) {
      if (input.length > 3) {
        return "Please enter no more than three letters";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "textColor",
    message: "please enter the color you would like for your text",
  },
];


//class so it can be used in index.js file
class CLI{
    saveSVGToFile(data){
        let shape;
        const shapeColor = data.shapeColor;
        const textColor = data.textColor;
// add choose color choice to inquirer, 'data.color'
//since we are only choosing one shape to render a switch statement can be used
        switch(data.shape){
            case 'triangle':
                shape = new Triangle(shapeColor, textColor, data.letters);
                break;
            case 'circle':
                shape = new Circle(shapeColor, textColor, data.letters);
                break;
            case 'square':
                shape = new Square(shapeColor, textColor, data.letters);
                break;
        default:
            console.error("unknown shape", "Unknown color", data.shape, "unknown color");
            return;
        }

        const svgContent = shape.render()

        fs.writeFile('output.svg', svgContent, (err)=>{
            if (err) {
                console.error('Error writing to file:', err)
            } else {
                console.log('SVG saved to output.svg')
            }
        })
    }

    

    run(){
        return inquirer
            .prompt(questions)
            .then((data) => {
                this.saveSVGToFile(data);
            })
    }
    
}

module.exports = CLI