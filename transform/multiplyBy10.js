// Wrap everything in a function (no global variable pollution)
// variable "input" contains data passed by openhab
(function(inputData) {
    // on read: the polled number as string
    // on write: openHAB command as string
    var MULTIPLY_BY = 10;
    return Math.round(parseFloat(inputData, 10) * MULTIPLY_BY);
})(input)