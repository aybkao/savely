const matchItemToCategory = (str) => {
  //console.log(str)
  const textArray = str.split('\n');
  const amountSpent = [];
  
  const checkAmount = (amountStr) => {
    if (amountStr[0] === '$') {
      amountStr = amountStr.slice(1, amountStr.length);
    }
    if (!isNaN(amountStr)) {
      return Number(amountStr);
    } else {
      return 0;
    }
  };
  
  for (var i = 0; i < textArray.length; i++) {
    var lowerCase = textArray[i].toLowerCase();
    if (lowerCase === 'total' || lowerCase === 'subtotal') {
      amountSpent.push(checkAmount(textArray[i + 1]));
      amountSpent.push(checkAmount(textArray[i - 1]));
    }
  }
  
  const output = {
    "vendor": 'TBD', 
    "description": 'some cool item',
    "amount": Math.max.apply(Math, amountSpent)
  };
  return output;
};

export default matchItemToCategory;