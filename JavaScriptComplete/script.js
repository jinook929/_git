// Coding Challenge 1

// var markMass = 75;
// var markHeight = 1.8;

// var johnMass = 60;
// var johnHeight = 1.7;

// var markBmi = markMass / markHeight ** 2;
// var johnBmi = johnMass / johnHeight ** 2;
// console.log("Mark's BMI : " + markBmi);
// console.log("John's BMI : " + johnBmi);

// var comp_mark_john = markBmi > johnBmi;
// console.log("Is Mark's BMI higher than John's? " + comp_mark_john);

// ternary operator
// var firstName = 'John';
// var age = 15;

// age >= 18 ? console.log(firstName + ' drinks coffee.') : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'coffee' : 'juice';
// console.log(drink);

// if - else
// if (age >= 18) {
//     var drink = 'coffee';
// } else {
//     var drink = 'juice';
// }
// console.log(drink)

// switch 1
// var job = 'instructor';
// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives a truck.');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites.');
//         break;
//     default:
//         console.log(firstName + ' does something unknown.')
// };

// switch 2
// age = 2;
// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man.');
//         break;
//     default:
//     console.log(firstName + ' is a man.');
// }


// Coding Challenge 2

// var [jGame1, jGame2, jGame3] = [89, 120, 103];
// jGame1 = 89;
// jGame1 = 120;
// jGame1 = 103;

// var [mGame1, mGame2, mGame3] = [116, 94, 123];
// var mGame1 = 116, mGame2 = 94, mGame3 = 123; 116, 94, 123
// var [rGame1, rGame2, rGame3] = [89, 120, 130];

// var jAvg = (jGame1 + jGame2 + jGame3) / 3;
// var mAvg = (mGame1 + mGame2 + mGame3) / 3;
// var rAvg = (rGame1 + rGame2 + rGame3) / 3;
// console.log(jAvg, mAvg, rAvg);

// if (jAvg > mAvg) {
//     console.log("The average of John's team is higher than that of Mike's.");
// } else if (jAvg < mAvg) {
//     console.log("The average of Mike's team is higher than that of John's.");
// } else {
//     console.log("The average of all teams is the same.");
// };

// if (jAvg > mAvg && jAvg > rAvg) {
//     console.log("John's team has the highest average score.");
// } else if (mAvg > jAvg && mAvg > rAvg) {
//     console.log("Mike's team has the highest average score.");
// } else if (rAvg > jAvg && rAvg > mAvg) {
//     console.log("Mary's team has the highest average score.");
// } else if (mAvg == jAvg && mAvg > rAvg) {
//     console.log("John's team and Mike's team has the highest average score.");
// } else if (rAvg == jAvg && jAvg > mAvg) {
//     console.log("John's team and Mary's team has the highest average score.");
// } else if (mAvg == rAvg && mAvg > jAvg) {
//     console.log("Mike's team and Mary's team has the highest average score.");
// } else if (jAvg == mAvg && mAvg == rAvg) {
//     console.log('The average scores of the all teams are the same.');
// };


/***************************************************************
 * Function
 */
// function f(x) {
//     return x ** 2 - 6 * x + 9;
// };

// var answerfor1 = f(1);
// var answerfor2 = f(2);
// var answerfor3 = f(3);
// var answerfor4 = f(4);
// var answerfor5 = f(5);

// // var answer = f(x);

// console.log(answerfor1);
// console.log(answerfor2);
// console.log(answerfor3);
// console.log(answerfor4);
// console.log(answerfor5);
// console.log(answerfor1, answerfor2, answerfor3, answerfor4, answerfor5);

// var myText = 'I am a string';
// var newString = myText.replace('string', 'sausage');
// console.log(newString);


// Coding Challenge 3

// var price = 124;
// var p2 = 48
// var p3 = 268
// console.log(price);
// var [p1, p2, p3] = [124, 48, 268]


// function tip(price) {
//     var tipResult;
//     if(price < 50) {
//         tipResult = price * 0.2;
//     } else if (price >= 50 && price < 200) {
//         tipResult = price * 0.15;
//     } else {
//         tipResult = price * 0.1;
//     };
//     return tipResult;
// };
// // console.log(tip(100));

// var price = [124, 48, 268];
// var tips = [tip(price[0]), tip(price[1]), tip(price[2])];
// var totals = [
//     price[0] + tips[0],
//     price[1] + tips[1],
//     price[2] + tips[2],
// ];

// console.log(tips);
// console.log(totals);
// console.log('----------------------')

function tip(bill) {
    if(bill < 50) {
        return bill * .2;
    } else if(bill >= 50 && bill < 200){
        return bill * .15;
    } else {
        return bill * .1;
    }
}

function total(bill) {
    if(bill < 50) {
        return bill + tip(bill);
    } else if(bill >= 50 && bill < 200){
        return bill + tip(bill);
    } else {
        return bill + tip(bill);
    }
}

console.log(tip(124), tip(48), tip(268));
console.log(total(124), total(48), total(268));

console.log(' ');
console.log('----------------------')

var bill = [100, 20, 200];
var ti = [tip(bill[0]), tip(bill[1]), tip(bill[2])];
var to = [total(bill[0]), total(bill[1]), total(bill[2])];
console.log(ti);
console.log(to);

console.log(' ');
console.log('----------------------');

var bill = [100, 20, 200];
console.log(tip(bill[0]), tip(bill[1]), tip(bill[2]));
console.log(total(bill[0]), total(bill[1]), total(bill[2]));

console.log(' ');
console.log('----------------------');

for(var i = 0; i < bill.length; i++) {
    console.log('Bill = ' + bill[i] + ' & Tip = ' + tip(bill[i]) + ' // Total = ' + total(bill[i]));
};

