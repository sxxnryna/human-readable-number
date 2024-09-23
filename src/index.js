module.exports = function toReadable(number) {
    const ones = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number === 0) {
        return ones[number];
    }

    let readableString = "";

    if (Math.floor(number / 100) > 0) {
        readableString += ones[Math.floor(number / 100)] + " hundred";
        number %= 100;
        if (number > 0) {
            readableString += " ";
        }
    }

    if (number >= 20) {
        readableString += tens[Math.floor(number / 10)];
        number %= 10;
        if (number > 0) {
            readableString += " ";
        }
    } else if (number >= 10 && number <= 19) {
        readableString += teens[number - 10];
        number = 0;
    }

    if (number > 0 && number < 10) {
        readableString += ones[number];
    }

    return readableString.trim();
};
