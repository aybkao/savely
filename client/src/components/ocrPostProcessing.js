
var matchItemToCategory = function (str) {

  // get vendor name if possible
  var vendor = str.split('\n')[0];
  var text = str.toLowerCase();
  var textArray = text.split('\n');
  var amountSpent = [0];
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

  // look for item names
  var items = '';
  var itemsList = [];
  var k = 0; 
  var getItems = false;
  
  while (getItems === false & k < textArray.length) {
    
    if (textArray[k][textArray[k].length-3] === '.') {
      
      var splitItemNames0 = textArray[k-1].split(' ');
      var splitItemNames1 = textArray[k+1].split(' ');
      var splitItemNames2 = textArray[k+2].split(' ');
      var splitItemNames3 = textArray[k+3].split(' ');
      var splitItemNames4 = textArray[k+4].split(' ');
      
      itemsList[0] = splitItemNames0[splitItemNames0.length-1];
      itemsList[1] = splitItemNames1[splitItemNames1.length-1];
      itemsList[2] = splitItemNames2[splitItemNames2.length-1];
      itemsList[3] = splitItemNames3[splitItemNames3.length-1];
      itemsList[4] = splitItemNames4[splitItemNames4.length-1];
      
      //console.log(itemsList)
      
      getItems = true;
    }   
    k++;
  }  
  
  for (var n = 0; n < itemsList.length; n++) {
    if (isNaN(itemsList[n])) {
      if (itemsList[n].indexOf('total') === -1 & 
        itemsList[n].indexOf('tax') === -1 & 
        itemsList[n][itemsList[n].length-3] !== '.' &
        itemsList[n][itemsList[n].length-3] !== ',') {
        items = items + itemsList[n] + ' & '; 
      }
    }
  }
  
  if (items === '') {
    items = 'items';
  } else {
    items = items.slice(0, items.length-2);
  }
  
  for (var i = 0; i < textArray.length; i++) {
    var lowerCase = textArray[i].toLowerCase();
    
    // get total amount spent
    if (lowerCase.indexOf('total') > -1 || lowerCase.indexOf('subtotal') > -1) {
      amountSpent.push(checkAmount(textArray[i + 1]));
      //amountSpent.push(checkAmount(textArray[i + 2]));
      amountSpent.push(checkAmount(textArray[i - 1]));
      //amountSpent.push(checkAmount(textArray[i - 2]));
    }
    
    if (date === '') {
      var words = textArray[i].split(' ');
      //console.log(words);
      words.forEach((word) => {
        // date string should be specific and hold year 2017 
        if (word.length > 6 & word.indexOf('17') > -1) {   
          //console.log("individual word", word);
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

  var amount = Math.max.apply(Math, amountSpent);
  if (amount === 0) {
    alert('Optical character recognition results may be inaccurate.');
  }

  var output = {
    "vendor": vendor, 
    "description": items,
    "amount": amount,
    "date": date,
    "category": ''
  };

  return output;
};

export default matchItemToCategory;















