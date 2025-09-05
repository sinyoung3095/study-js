// JS에서 false로 취급되는 값
// 0, "", null, undefined

// 두 정수의 덧셈, 결과 출력
// const add = (number1, number2, callback) => {
//     if (callback) {
//         callback(number1 + number2);
//         return;
//     }
//     return number1 + number2;
// };

// let result = add(1, 3, (result) => {
//     console.log(result);
// });
// console.log(result);

// 두 정수의 곱셈, 결과에 2를 곱해서 출력
// const multiply = (number1, number2, callback) => {
//     if (callback) {
//         callback(number1 * number2);
//         return;
//     }
//     return number1 * number2;
// };

// const print = (result) => {
//     console.log(result * 2);
// };

// let result = multiply(3, 5);
// console.log(result);

// 성씨와 이름을 전달받아서 전체 이름을 만든 뒤 "000님" 출력
// const makeFullName = (firstName, lastName, callback) => {
//     let fullName = lastName + firstName;
//     if (callback) {
//         callback(fullName);
//     }
//     return fullName;
// };

// const printFullName = (fullName) => {
//     console.log(`${fullName}님`);
// };

// makeFullName("동석", "한", printFullName);

// 상품 1개 가격과 총 합을 입력받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true 아니면 false 리턴

// const count = (oneprice, allprice, callback) => {
//     let result = allprice / oneprice;
//     if (callback) {
//         return callback(result);
//     }
//     return result;
// };

// const result = (result) => {
//     return result <= 5;
// };

// let con = count(3000, 30000, result);
// console.log(con);
// 상품 1개 가격과 총 가격을 입력받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true 아니면 false 리턴
// const getCount = (price, total, callback) => {
//     let count = total / price;

//     if (callback) {
//         return callback(count);
//     }
//     return count;
// };

// const checkLessEqualsThan5 = (count) => {
//     return count <= 5;
// };

// let condition = getCount(2000, 10000, checkLessEqualsThan5);
// console.log(condition);

// 농장에서 축사 대청소를 하려고 한다.
// 소와 돼지의 총 마리 수를 각각 비교해 가축 중 수가 적은 쪽을 출력
// 두 수는 절대 같지 않다.

// const compare = (cownumber, pignumber, callback) => {
//     let more = cownumber > pignumber ? "cow" : "pig";
//     if (callback) {
//         return callback(more);
//     }
//     return more;
// };
// function compare(cownumber, pignumber, callback) {
//     let more = cownumber > pignumber ? "cow" : "pig";
//     if (callback) {
//         return callback(more);
//     }
//     return more;
// }

// const print = (result) => {
//     console.log(result);
// };

// compare(3, 6, print);

// const compareCowWithPig = (cowCount, pigCount, callback) => {
//     let result = cowCount > pigCount;
//     if (callback) {
//         return callback(result);
//     }

//     return result;
// };

// let message = compareCowWithPig(100, 40, (result) => (result ? "소" : "돼지"));

// console.log(message);

// 학생의 국어, 영어, 수학 점수를 전달받아서 평균을 구한 뒤
// 정확히 60점일 경우 합격, 아니면 불합격

// const average = (korean, english, math, callback) => {
//     let result = (korean + english + math) / 3;
//     if (callback) {
//         return callback(result);
//     }
//     return result;
// };

// const result = (average) => {
//     average === 60
//         ? console.log(`${average} 합격`)
//         : console.log(`${average} 불합격`);
// };

// average(80, 60, 50, result);

// const getAverage = (korean, english, math, callback) => {
//     let total = korean + english + math;
//     let average = total / 3;

//     if (callback) {
//         return callback(average);
//     }

//     return average;
// };

// const checkScore = (average) => (average === 60 ? "합격" : "불합격");

// let message = getAverage(30, 0, 100, checkScore);

// console.log(message);

// const sum = (n, callback) => {
//     let result = 0;
//     for (let i = 0; i < n; i++) {
//         result += i + 1;
//     }
//     if (callback) {
//         return callback(result);
//     }
//     return result;
// };

// const compare = (result) => {
//     return result >= 5000 ? result - 5000 : result;
// };

// let message = sum(100, compare);
// console.log(message);

// const getTotal = (end, callback) => {
//     let total = 0;

//     for (let i = 0; i < end; i++) {
//         total += i + 1;
//     }

//     if (callback) {
//         return callback(total);
//     }

//     return total;
// };

// let result = getTotal(100, (total) => total - (total >= 5000 && 5000));

// console.log(result);

// n ~ m에서 첫 번째로 짝수인 숫자를 찾고, 그 숫자가 10 이상이면 true 아니면 false

// const find = (firstNumber, lastNumber, callback) => {
//     let result = 0;

//     for (let i = firstNumber; i <= lastNumber; i++) {
//         if (i % 2 == 0) {
//             result = i;
//             break;
//         }
//     }
//     if (callback) {
//         return callback(result);
//     }
//     return result;
// };

// const compare = (result) => {
//     return result >= 10 ? true : false;
// };

// let message = find(10, 19, compare);
// console.log(message);

// 두 정수의 뺄셈 결과와 두 정수의 곱셈 결과가 각각 5이상 50이상이면 true
// 하나라도 false라면 false

const result = (number1, number2, callback1, callback2) => {
    let result1 = false;
    let result2 = false;

    if (callback1) {
        return (result1 = callback1(number1, number2));
    }

    if (callback2) {
        return (result2 = callback2(number1, number2));
    }
    return result1 && result2 ? true : false;
};

const check1 = (a, b) => {
    return a - b >= 5 ? true : false;
};

const check2 = (a, b) => {
    return a * b >= 50 ? true : false;
};
let message = result(10, 6, check1, check2);
console.log(message);

// // 두 정수의 뺄셈 결과와 두 정수의 곱셈 결과가 각각 5이상 50이상이면 true
// // 하나라도 false라면 false
// const subtract = (number1, number2, callback) => {
//     if (callback) {
//         return callback(number1 - number2);
//     }
// };

// const multiply = (number1, number2, callback) => {
//     if (callback) {
//         return callback(number1 * number2);
//     }
// };

// const subtractCheck = (result) => result >= 5;
// const multiplyCheck = (result) => result >= 50;

// const check = (number1, number2, callback1, callback2) => {
//     if (callback1 && callback2) {
//         return (
//             callback1(number1, number2, subtractCheck) &&
//             callback2(number1, number2, multiplyCheck)
//         );
//     }
// };

// let condition = check(10, 6, subtract, multiply);

// console.log(condition);
