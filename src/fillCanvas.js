/**
 * Paint fill algorithm taken from the following blog:
 * https://learnersbucket.com/examples/algorithms/flood-fill-algorithm-in-javascript/
 * @param {*} x 
 * @param {*} y 
 * @param {*} newColor 
 * @param {*} canvasArr 
 * @param {*} width 
 * @returns 
 */
 const fill = (x, y, newColor, canvasArr, width) => {
    if (isNaN(x)) {
        throw new Error(`Canvas cannot be built as x is invalid`);
    } else if (isNaN(y)) {
        throw new Error(`Canvas cannot be built as y is invalid`);
    } else if (typeof newColor !== 'string') {
        throw new Error(`Canvas cannot be built as c is not a color`);
    }
    const currentPixel = (y * width)+ x;
    const current = canvasArr[currentPixel];
    try {
        if(current === newColor){
            return canvasArr;
        }
        colorFill(canvasArr, x, y, newColor, current, width);
        return canvasArr;
    } catch(err) {
        throw new Error('Canvas cannot be filled!');
    }
};

const colorFill = (canvasArr, x, y, newColor, current, width) => {
    const currentPixel = (y * width)+ x;
    if (x < 0){
        return;
    }
    if (y < 0){
        return;
    }
    if (x > canvasArr.length - 1) {
        return;
    }
    if (y > canvasArr.length - 1) {
        return;
    }
    if (canvasArr[currentPixel] !== current) {
        return;
    }

     //Update the new color
     canvasArr[currentPixel] = newColor;

     //Fill in all four directions
     colorFill(canvasArr, x - 1, y, newColor, current, width);
     colorFill(canvasArr, x + 1, y, newColor, current, width);
     colorFill(canvasArr, x, y - 1, newColor, current, width);
     colorFill(canvasArr, x, y + 1, newColor, current, width);
}

module.exports = {
    fill,
  };
