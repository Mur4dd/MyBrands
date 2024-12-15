

export default function HandleUserNumber(number) {
        if (number.length == 13) {
            let newnumber = "";
            number.split('').forEach((char, i) => {
                if(i < number.length-1) {
                    newnumber += char;
                } 
            });
            return newnumber;
        }
    
        if (number.length == 9 || number.length == 2 || number.length == 6) {
            number = number + "-";
        }
        
        return number
}


export function isValidNumber(input) {
    if (input.length != 9) {
        return false;
    }

    for (let char of input) {
        if (isNaN(parseInt(char))) {
            return false;
        }
    }

    return true;
}
