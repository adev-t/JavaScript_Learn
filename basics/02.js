// title_________________

let score = "33";
// const {score} = req.body  [requested frontend to give the score. but it may/may not be of desired datatype.]


let value_in_number = Number(score);  // guarantee that the score is a number type.
console.log(typeof value_in_number);

// ============================================================================================

let kills = "33abc"
value_in_number_kills = Number(kills)

console.log(typeof kills);
console.log(typeof(kills));

// "33" --> 33
// "33erws" --> NaN (TYPE = NUMBER)
// true --> 1
// false --> 0
// Null --> 0

// what if number to boolean..?
// 1 - true, 0 - false
// "" - false, "nkdw" - true







