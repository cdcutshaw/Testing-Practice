function analyzeArray (array) {
    if(array.length === 0) {
        return{
            average: null, 
            min: null,
            max: null, 
            length: 0
        };
    }

    const sum = array.reduce((acc, num) => acc + num, 0);
    const average = sum / array.length; 
    const min = Math.min(...array);
    const max = Math.max(...array);
    const length = array.length;

    return {
        average, 
        min, 
        max, 
        length
    };

}

module.exports = analyzeArray;