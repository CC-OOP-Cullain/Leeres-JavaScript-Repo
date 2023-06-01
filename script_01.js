// let testArr = ["1", "2", "3", "4"];

// console.log(testArr[testArr.length - 1]);


// let struc =
// {
//     level1:
//     {
//         level2:
//         {
//             param1: 3.14,
//             param2: 10.01
//         }
//     }
// };

// console.log(struc.level1.level2);

let num1 = parseInt(prompt("Erste Zahl"));
let num2 = parseInt(prompt("Zweite Zahl"));
let operation = prompt("summe oder differenz");

function rechner(num1, num2, operation) {
    let result;
  
    if (operation === "summe") {
      result = summe(num1, num2);
    } else if (operation === "differenz") {
      result = differenz(num1, num2);
    }
  
    return result;
  }
  
  function summe(a, b) {
    return a + b;
  }
  
  function differenz(a, b) {
    return a - b;
  }
  let ergebnis = rechner(num1, num2, operation);
  console.log('Das Ergebnis lautet: ' + ergebnis);