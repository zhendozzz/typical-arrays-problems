exports.min = function min(array) {
    let min = 0;
    if (Array.isArray(array)) {
        array.forEach(element => {
            if (min > element) {
                min = element;
            }
        });
    }
    return min;
}

exports.max = function max(array) {
    let max = 0;
    if (Array.isArray(array)) {
        array.forEach(element => {
            if (max < element) {
                max = element;
            }
        });
    }
    return max;
}

exports.avg = function avg(array) {
    let avg = 0;
    if (Array.isArray(array) && (array.length != 0)) {
        let sum = array.reduce((accum, value) => {
            return accum + value;
        }, 0);
        avg = sum / array.length;
    }
    return avg;
}
