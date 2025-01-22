const palindromes = function (input) {
    let letters = [];
    let reverse = [];

    for(let i=0; i < input.length; i++){
        if (input[i].toUpperCase() != input[i].toLowerCase() || Number.parseInt(input[i])){
            letters.push(input[i].toLowerCase());
        }
    }

    for(let i=input.length-1; i >= 0; i--){
        if (input[i].toUpperCase() != input[i].toLowerCase() || Number.parseInt(input[i])){
            reverse.push(input[i].toLowerCase());
        }
    }

    if (JSON.stringify(letters) === JSON.stringify(reverse)){
        return true
    } else {
        return false
    }
};

palindromes('r3ace3car');

// Do not edit below this line
module.exports = palindromes;
