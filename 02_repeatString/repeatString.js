const repeatString = function(str, num) {
    if (num < 0) return "ERROR"; // Manejo del caso de números negativos
    let repeatedString = "";
    for (let i = 0; i < num; i++) {
        repeatedString += str; // Agrega la cadena al resultado en cada iteración
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
