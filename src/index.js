module.exports = function toReadable(number) {
    let hundreds = Math.floor(number / 100);
    let tens = Math.floor(number % 100 / 10) * 10;
    let ones = number % 10;
    let answer = '';
    const digitsToText = {        
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred'
    }

    answer = hundreds ? (digitsToText[hundreds] + ' hundred') : '';
    if (tens > 10) {
        answer += tens ? ' ' + digitsToText[tens] : '';
        answer += ones ? ' ' + digitsToText[ones] : '';
    } else {
        answer += number % 100 ? ' ' + digitsToText[number % 100] : '';
    }
    return number ? answer.trim() : 'zero';
}
