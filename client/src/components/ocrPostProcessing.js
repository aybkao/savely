
var matchItemToCategory = function (str) {
  //console.log(str)
  var textArray = str.split('\n');
  var amountSpent = [];
  var date = '';

  var checkAmount = (amountStr) => {
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
    
    // get total amount spent
    if (lowerCase.indexOf('total') > -1 || lowerCase.indexOf('subtotal') > -1) {
      amountSpent.push(checkAmount(textArray[i + 1]));
      amountSpent.push(checkAmount(textArray[i + 2]));
      amountSpent.push(checkAmount(textArray[i - 1]));
      amountSpent.push(checkAmount(textArray[i - 2]));
    }
    
    // get vendor name if possible
    var vendor = textArray[0];
    
    // check if text has date format
    // var dateString = new Date(lowerCase);
    // if (dateString.toString() !== 'Invalid Date') {
    //   date = dateString.toString(); 
    // }
    if (date === '') {
      var words = textArray[i].split(' ');
      console.log(words);
      words.forEach((word) => {
        if (word.length > 6) {   
          console.log("individual word", word);
          var convertToDate = new Date(word);
          if (convertToDate.toString() !== 'Invalid Date') {
            date = convertToDate.toString().slice(4, 15);
          }
        }
      });
    }  
  }

  if (date === '') {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    date = yyyy.toString() + '-' + mm.toString() + '-' + dd.toString();  
  }

  var output = {
    "vendor": vendor, 
    "description": 'comfort food',
    "amount": Math.max.apply(Math, amountSpent),
    "date": date,
    "category": ''
  };

  return output;
};

export default matchItemToCategory;















