var minDate = new Date();
minDate.setDate(minDate.getDate() - 36525); // 100 years ago.

var maxDate = new Date();
maxDate.setDate(maxDate.getDate() - 730); // 2 years ago.


console.log(minDate)
console.log(maxDate)
