module.exports = function toReadable(number) {


    const NUMBERS_1 = ['zero', 'one', 'two', 'three', 'four', 'five',
        'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
        'twelve', 'thirteen', 'fourteen', 'fifteen',
        'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];

    const NUMBERS_2 = ['', '', 'twenty', 'thirty', 'forty', 'fifty',
        'sixty', 'seventy', 'eighty', 'ninety'
    ];

    if (NUMBERS_1 < 20) {
        return NUMBERS_1[number];

    } else if (number < 100) {
        let units = number % 10;
        let dozens = Math.trunc(number / 10);
        if (units === 0) {
            return `${NUMBERS_1[hundreds]} ${NUMBERS_2[dozens]}`
        }
        return `${NUMBERS_2[dozens]} ${NUMBERS_1[units]}`

    } else if (number < 1000) {

        let units = number % 10;
        let dozens = Math.trunc(number % 100 / 10);
        let hundreds = Math.trunc(number / 100);

        if (dozens === 0) {
            return `${NUMBERS_1[hundreds]} hundred ${units === 0 ? '' : '' + NUMBERS_1[units]}`;
        } else if (dozens === 1) {
            return `${NUMBERS_1[hundreds]} hundred ${NUMBERS_1[units + 10]}`;
        } else {

            return `${NUMBERS_1[hundreds]} hundred ${NUMBERS_2[dozens]}${units === 0 ? '' : ' ' + NUMBERS_1[units]}`;
        }

    }
}
