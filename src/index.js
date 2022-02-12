module.exports = function toReadable (number) {

    const units = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    }
      
    const tens = {
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }
      
    const exceptions = {
        0: 'ten',
        1: 'eleven',
        2: 'twelve',
        3: 'thirteen',
        4: 'fourteen',
        5: 'fifteen',
        6: 'sixteen',
        7: 'seventeen',
        8: 'eighteen',
        9: 'nineteen'
    }
      
    const largeNumbers = {
        0: '',
        1: 'thousand',
        2: 'million',
        3: 'milliard',
        4: 'billion',
        5: 'billiard',
        6: 'trillion',
        7: 'quadrillion',
        8: 'quintillion',
        9: 'Sextillion'
    }

    if (number == 0) {
        return('zero');
    }

    let readableNumber = [];
  
    let j = String(number).length - 1;
    
    let index = 0;
    const convert = (value) => {    
      return value[String(number)[i]];
    }
    const addUnits = () => { 
      if (convert(units) == 0) {
        return;
      }
      if (index == 0) {
        readableNumber.unshift(convert(units));
      } else {
        readableNumber.unshift(convert(units)  + ' ' + largeNumbers[index]);
      }      
    }
  
    const addHundreds = () => {
      if (convert(units) == 0) {
        return;
      }
      readableNumber.unshift(convert(units) + ' hundred');
    }
  
    const addTens = () => {
      readableNumber.unshift(convert(tens));
    }
  
    const addExceptions = () => {
      readableNumber.shift();
      if (index == 1) {
        readableNumber.unshift(exceptions[String(number)[i + 1]]);
      } else {
        readableNumber.unshift(exceptions[String(number)[i + 1]]  + ' ' + largeNumbers[index - 1]);
      }      
    }
  
    for (i = String(number).length - 1; i >= 0; i--) {    
      if (i == j) {             
        addUnits();            
        j -= 3;
        index += 1;            
      }
  
      if (i - 1 == j) {
        addHundreds();
      }
  
      if (i - 2 == j) {
        if (String(number)[i] > 1) {
          addTens();
        }
  
        if (String(number)[i] == 1) {
          addExceptions();
        }      
      }
    }
    return(readableNumber.join(' '));
}
