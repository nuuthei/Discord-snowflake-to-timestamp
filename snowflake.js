const readline = require("readline"); // For terminal operation.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function convert(number) { // Converts a decimal snowflake into binary.
    return number.toString(2);
}

rl.question("Insert snowflake ID: ", function(snowflake, number) {
    number = parseInt(snowflake, 10);
    let binarySnowflake = (convert(number));

    if (binarySnowflake.length < 64) { // Snowflake-to-date function.
        n = 63 - binarySnowflake.length;
        zero = "0";
        const sfbitSnowflake = (zero.repeat(n) + binarySnowflake); // Adds zeros as needed to format into 64-bit.

        let binaryTimestamp = sfbitSnowflake.slice(0,41);
        const timestamp = ((parseInt(binaryTimestamp, 2)) + 1420070400000);

        var date = new Date(timestamp);
        console.log(date.toString());

    } else { // Will be a long time until this ever happens...
        let binaryTimestamp = binarySnowflake.slice(0,41);
        
        const timestamp = ((parseInt(binaryTimestamp, 2)) + 1420070400000);

        var date = new Date(timestamp);
        console.log(date.toString());
    };
});