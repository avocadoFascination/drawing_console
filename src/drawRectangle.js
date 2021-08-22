/**
 * 
 * @param {*} x1 
 * @param {*} y1 
 * @param {*} x2 
 * @param {*} y2 
 * @param {*} canvasArr 
 * @param {*} width 
 * @returns 
 */
 const rectangle = (x1, y1, x2, y2, canvasArr, width) => {
    let x = x2 - x1;
    let y = y2 - y1;
    let xLine = x1;
    if (isNaN(x1)) {
        throw new Error(`Canvas cannot be built as x1 is invalid`);
    } else if (isNaN(y1)) {
        throw new Error(`Canvas cannot be built as y1 is invalid`);
    } else if (isNaN(x2)) {
        throw new Error(`Canvas cannot be built as x2 is invalid`);
    } else if (isNaN(y2)) {
        throw new Error(`Canvas cannot be built as y2 is invalid`);
    }
    try {
        for (let i = 0; i < (x + 1); i++) {
            canvasArr[(width * y1) + xLine] = 'x';
    
            canvasArr[(width * y2) + xLine] = 'x';
            xLine += 1;
        }
        for (let j = 0; j < y1; j++) {
            if (y !== 0) {
                canvasArr[width * (y1 + 1) + x1] = 'x';
    
                canvasArr[width * (y1 + 1) + x2] = 'x';
            }
        }
        return canvasArr;
    } catch(err) {
        throw new Error('Rectangle cannot be drawn!');
    }
}

module.exports = {
    rectangle,
  };
