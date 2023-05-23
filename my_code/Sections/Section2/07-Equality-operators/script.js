const age = Number (prompt ("What's your age?"));

//The === means that JS is going to compare strictly both side 
//without convert any of them
// '18' === 18 ? NO
if (age === 18) console.log ("I'm a strict equality operator"); //false

//The == means that JS is going to compare both side trying
//to convert them 
// '18' === 18 ? NO, but JS is going to convert one of them into the other
//and them compare them
// 18 == 18 ? SI
// '18' == '18' ? SI
if (age == '18') console.log ("I'm NOT a strict equality operator"); //true
