const repeatString = function(word, times) {
    let output = '';
    for (let i=0; i < times; i++){
        output += word;
    }
    return output;
};

repeatString('hey',3);
// Do not edit below this line
module.exports = repeatString;
