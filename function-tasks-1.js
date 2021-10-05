console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  {
    function returnFirstElement(array) {
      return array[0];
    }
  }
}
arrayNum = [1, 2, 3, 4, 5];
arrayStr = ['vienas', 'du', 'trys', 'keturi', 'penki'];

console.log(returnFirstElement(arrayNum));
console.log(returnFirstElement(arrayStr));
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
  {
    function removeFirstElement(array) {
      return array.shift();
    }
  }
  console.log(removeFirstElement(arrayNum));
  // google: mdn remove first array element
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  {
    function removeLastElement(array) {
      return array.slice(-1);
    }
  }
  console.log(removeLastElement(arrayNum));
  // google: js last array element
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
  function returnLastElement(array) {
    return array.pop();
  }
  console.log(returnLastElement(arrayStr));
  // google: js last array element
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  function returnQuantity(array) {
    return array.length;
  }
  console.log(returnQuantity(arrayNum));
  // google: js element count in array
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  function returnLastIndex(array) {
    return array.length - 1;
  }

  console.log(returnLastIndex(arrayNum));
  // google: js last array element index
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  const numbers = [1, 2, 3, 4, 5, 6];
  let aEveryElement;
  function everyIndex(a) {
    for (let i = 0; i < a.length; i++) {
      aEveryElement = a[i];
      console.log(a.indexOf(aEveryElement));
    }
  }
  everyIndex(numbers);
}

console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
const numbers = [1, 2, 3, 4, 5];
const strings = ['vienas', 'du', 'trys', 'keturi', 'penki'];
{
  function inLine(a) {
    for (let i = 0; i < a.length; i++) {
      console.log(a[i]);
    }
  }
}
inLine(strings);
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  let element;
  function inLineIndex(a) {
    for (let i = 0; i < a.length; i++) {
      element = a[i];
      console.log(`[${a.indexOf(element)}] => ${numbers[i]}`);
    }
  }
  inLineIndex(numbers);
  // google: js string literal
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  let element;
  function inLineReverse(a) {
    for (let i = a.length - 1; i >= 0; i--) {
      console.log(a[i]);
    }
  }
  inLineReverse(numbers);
  // google: js iterate through array reverse
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  const elementInd = [];
  function inLineIndexes(a) {
    for (let i = 0; i < a.length; i++) {
      elementInd.push(i);
    }
    console.log(...elementInd);
  }

  // google: js string literal
  // ARBA
  // google: js join array elements with separator
}
inLineIndexes(strings);
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
  let oneLine;
  function inOneLine(arr) {
    console.log(arr.join(' '));
  }
}
inOneLine(strings);
// google: js string literal
// ARBA
// google: js join array elements with separator
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ...
{
  const indexAndElement = [];
  function inLineIndexPair(arr) {
    let indexAndElement = [];
    for (let i = 0; i < arr.length; i++) {
      indexAndElement.push(`[${arr.indexOf(arr[i])}] => ${arr[i]}`);
    }
    console.log(indexAndElement.join(' '));
  }
}
inLineIndexPair(numbers);
// google: js string literal
// IR
// google: js join array elements with separator

console.groupEnd();
