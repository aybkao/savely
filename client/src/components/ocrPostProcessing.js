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
    
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var date = yyyy.toString() + '-' + mm.toString() + '-' + dd.toString();
    
    var testDate = new Date(lowerCase);
    if (testDate.toString() !== 'Invalid Date') {
      date = testDate.toString(); 
    }

    if (lowerCase === 'total' || lowerCase === 'subtotal') {
      amountSpent.push(checkAmount(textArray[i + 1]));
      amountSpent.push(checkAmount(textArray[i - 1]));
    }

    var vendor = textArray[0];
  }
  
  const output = {
    "vendor": vendor, 
    "description": 'comfort food',
    "amount": Math.max.apply(Math, amountSpent),
    "date": date,
    "category": ''
  };
  return output;
};

export default matchItemToCategory;