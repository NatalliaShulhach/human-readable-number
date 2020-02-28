module.exports = function toReadable(number) {


    const NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five',
        'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
        'twelve', 'thirteen', 'fourteen', 'fifteen',
        'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];

    const ROUND_NUMBERS = ['', '', 'twenty', 'thirty', 'forty', 'fifty',
        'sixty', 'seventy', 'eighty', 'ninety'
    ];

    if (number < 20) {
        return NUMBERS[number];
    } 
    
    if (number < 100) {
    let units = number % 10;
        let dozens = Math.trunc(number / 10);
        if (units === 0) {
            return `${ROUND_NUMBERS[dozens]}`
        }
        return `${ROUND_NUMBERS[dozens]} ${NUMBERS[units]}`

    } else if (number < 1000) {

        let units = number % 10;
        let dozens = Math.trunc(number % 100 / 10);
        let hundreds = Math.trunc(number / 100);

        if (dozens === 0) {
            return `${NUMBERS[hundreds]} hundred${units === 0 ? '' : ' ' + NUMBERS[units]}`;
        } else if (dozens === 1) {
            return `${NUMBERS[hundreds]} hundred ${NUMBERS[units + 10]}`;
        } else {

            return `${NUMBERS[hundreds]} hundred ${ROUND_NUMBERS[dozens]}${units === 0 ? '' : ' ' + NUMBERS[units]}`;
        }

    }
}
