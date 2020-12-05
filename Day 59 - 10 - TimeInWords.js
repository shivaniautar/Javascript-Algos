
/**
 * @param {number} hours
 * @param {number} minutes
 */

function timeInWords(hours, minutes) {
    function timeInWords(hours, minutes) {
        let numbersToWords = {
            0: "zero",
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine",
            10: "ten",
            11: "eleven",
            12: "twelve",
            13: "thirteen",
            14: "fourteen",
            15: "fifteen",
            16: "sixteen",
            17: "seventeen",
            18: "eighteen",
            19: "nineteen",
            20: "twenty",
            21: "twenty-one",
            22: "twenty-two",
            23: "twenty-three",
            24: "twenty-four",
            25: "twenty-five",
            26: "twenty-six",
            27: "twenty-seven",
            28: "twenty-eight",
            29: "twenty-nine",
        }
        let specialMinutes = {
            0: "o'clock",
            15: "quarter",
            30: "half past",
        };
        let solutionStr;
        if (minutes === 0) {
            solutionStr = numbersToWords[hours.toString()] + " " + specialMinutes["0"];
        }
        if (minutes === 30) {
            solutionStr = specialMinutes["30"] + " " + numbersToWords[hours.toString()];
        }
        if (minutes < 30) {
            if (specialMinutes.hasOwnProperty(minutes)){
                solutionStr = specialMinutes[minutes.toString()] + " past " + numbersToWords[hours.toString()];
            }
            else {
                solutionStr = numbersToWords[minutes.toString()] + " minutes past " + numbersToWords[hours.toString()];
            }
        }
        if (minutes > 30 && minutes < 60) {
            let newMinutes = 60 - minutes;
            if (newMinutes === 15) {
                solutionStr = specialMinutes[newMinutes.toString()] + " to " + numbersToWords[((hours+1)%24).toString()];
            }
            else {
                solutionStr = numbersToWords[newMinutes.toString()] + " minutes to " + numbersToWords[((hours+1)%24).toString()];
            }
        }
        return solutionStr;
    }