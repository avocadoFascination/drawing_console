const createCanvas = require('./createCanvas');
const drawLine = require('./drawLine');
const drawRectangle = require('./drawRectangle');
const fillCanvas = require('./fillCanvas');

let canvas;
let canvasArr;
let width;

/**
 * 
 * @param {*} arr 
 * @param {*} index 
 * @returns 
 */
const converToString = (arr, index) => {
    let checkCanvas = arr.join('');
    for (let i = 0; i < 6; i++) {
        checkCanvas = [checkCanvas.slice(0, index), '\n', checkCanvas.slice(index)].join('');
        index += 23;
    }
    const regex = new RegExp(0, 'g');
    const stringCanvas = checkCanvas.replace(regex, ' ');
    return stringCanvas;
}

/**
 * 
 * @param {*} values 
 * @returns 
 */
 const runCommands = (values) => {
    let canvasValues = values.split(' ');
    try {
        if (canvasValues[0] === 'C') {
            const w = Number(canvasValues[1]);
            const h = Number(canvasValues[2]);
            width = Number(canvasValues[1]) + 2;
            canvasArr = createCanvas.drawCanvas(w, h);
            canvas = converToString(canvasArr, width);
            console.log(canvas);
            return;
        } else if (canvasValues[0] === 'L' && canvasArr) {
            const x1 = Number(canvasValues[1]);
            const y1 = Number(canvasValues[2]);
            const x2 = Number(canvasValues[3]);
            const y2 = Number(canvasValues[4]);

            canvasArr = drawLine.line(x1, y1, x2, y2, canvasArr, width);
            canvas = converToString(canvasArr, width);
            console.log(canvas);
            return;
        } else if (canvasValues[0] === 'R' && canvasArr) {
            const x1 = Number(canvasValues[1]);
            const y1 = Number(canvasValues[2]);
            const x2 = Number(canvasValues[3]);
            const y2 = Number(canvasValues[4]);

            canvasArr = drawRectangle.rectangle(x1, y1, x2, y2, canvasArr, width);
            canvas = converToString(canvasArr, width);
            console.log(canvas);
            return;
        } else if (canvasValues[0] === 'B' && canvasArr) {
            const x = Number(canvasValues[1]);
            const y = Number(canvasValues[2]);
            const c = canvasValues[3];

            canvasArr = fillCanvas.fill(x, y, c, canvasArr, width);
            canvas = converToString(canvasArr, width);
            console.log(canvas);
            return;
        }
    } catch(err) {
        throw new Error('Unable to draw canvas!');
    }
}

module.exports = {
    converToString,
    runCommands,
  };
