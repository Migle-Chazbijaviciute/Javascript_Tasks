console.groupCollapsed("1. Sukurkite funkciją, kuri atspausdiną tekstą didžiosiomis raidėmis");
{
  // Funkcijos deklaravimas
  function printCapital(str) {
    console.log(str.toUpperCase());
  }
  console.log('---');
  console.log("abcd");
  printCapital("abcd");
  console.log("AAAA");
  printCapital("AAAA");
  console.log("aBcD");
  printCapital("aBcD");
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("2. Sukurkite funkciją, kuri atspausdina tekstą mažosiomis raidėmis");
{
  // Funkcijos deklaravimas
  function printLower(str) {
    console.log(str.toLowerCase());
  }
  console.log('---');
  console.log("ABCD");
  printLower("abcd");
  console.log("AAAA");
  printLower("AAAA");
  console.log("aBcD");
  printLower("aBcD");
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("3. Sukurkite funkciją, kuri atspausdina pirmojo parametro pirmają raidę");
{
  // Funkcijos deklaravimas
  function printFirstLetter(str) {
    console.log(str[0]);
  }
  console.log('---');
  console.log("ABCD");
  printFirstLetter("abcd");
  console.log("AAAA");
  printFirstLetter("AAAA");
  console.log("aBcD");
  printFirstLetter("aBcD");
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("4. Sukurkite funkciją, kuri atspausdina pirmojo parametro paskutinę raidę");
{
  // Funkcijos deklaravimas
  function printLastLetter(str) {
    console.log(str[str.length - 1]);
  }
  console.log('---');
  printLastLetter('Labas');
  printLastLetter('Ate');
  printLastLetter('Brieda');
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("5. Sukurkite funkciją, kuri atspausdina pirmojo parametro viduriniają raidę");
{
  // Funkcijos deklaravimas
  function printMiddleLetter(str) {
    console.log(str[Math.floor((str.length / 2))]);
  }
  console.log('---');
  printMiddleLetter('Labas');
  printMiddleLetter('Ate');
  printMiddleLetter('Brieda');
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("6. Sukurkite funkciją, kuri grąžina simbolių darinio raidžių skaičių");
{
  function getDoubleLetterCount(str) {
    return str.length;
  }
  console.log('---');
  console.log({
    'labas': getDoubleLetterCount('labas'),
    'kranas': getDoubleLetterCount('kranas'),
    'kebabas': getDoubleLetterCount('kebabas'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("7. Sukurkite funkciją, kuri grąžina simbolių darinio raidžių skaičių padaugintą iš dviejų");
{
  function getDoubleLetterCount(str) {
    return str.length * 2;

  }
  console.log('---');
  console.log({
    'labas': getDoubleLetterCount('labas'),
    'kranas': getDoubleLetterCount('kranas'),
    'kebabas': getDoubleLetterCount('kebabas'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("8. Sukurkite funkciją, kuri grąžina pirmo ir antro parametro bendrą simbolių skaičių");
{
  function getArgsLetterSum(a, b) {
    return a.length + b.length;
  }
  console.log('---');
  console.log({
    'labas, abc': getArgsLetterSum('labas', 'abc'),
    'kranas, jonas': getArgsLetterSum('kranas', 'jonas'),
    'kebabas, kefyras': getArgsLetterSum('kebabas', 'kefyras'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("9. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 'a' raidė, priešingu atveju <false>");
{
  function containsLetterA(str) {
    return str.includes('a');
  };
  console.log('---');
  console.log({
    'labas': containsLetterA('labas'),
    'kempė': containsLetterA('kempė'),
    'Finakolė': containsLetterA('Finakolė'),
  })
  console.log('---');
};
console.groupEnd();
console.log();

console.groupCollapsed("10. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra 2 parametru perduoda raidė, priešingu atveju false");
{
  function containsLetter(str, letter) {
    return str.includes(letter);
  }
  console.log('---');
  console.log({
    'labas, a': containsLetter('labas', 'a'),
    'kempė, a': containsLetter('kempė', 'a'),
    'Finakolė, u': containsLetter('Finakolė', 'u'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("11. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių");
{
  function isEvenNumberOfLetters(str) {
    if (str.length % 2 === 0) {
      return '<true>'
    } else {
      return '<false>'
    }
  }
  console.log('---');
  console.log({
    'labas': isEvenNumberOfLetters('labas'),
    'kempės': isEvenNumberOfLetters('kempės'),
    '123123': isEvenNumberOfLetters('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("12. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje");
//is stackoverflow pasigilint sprendima sita https://stackoverflow.com/questions/29450399/counting-number-of-vowels-in-a-string-with-javascript
{
  const getNumberOfVowels = (str) => Array.from(str)
    .filter(letter => 'aąeęėiįyouųū'.includes(letter)).length;

  console.log('---');
  console.log({
    'aaaaa': getNumberOfVowels('aaaaa'),
    'sasasasa': getNumberOfVowels('sasasasa'),
    'aeyuioąčė': getNumberOfVowels('aeyuioąčė'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("13. Sukurkite funkciją, kuri grąžina priebalsių kiekį žodyje");
{
  const getNumberOfConsonants = (str) => Array.from(str)//susikuriu masyva is stringo,t.y.'l','a','b','a','s'
    .filter(letter => 'bcčdfghjklmnprsštvzž'.includes(letter)).length;//o cia atrinkineja visas raides,kurios ieina i nurodyta priebalsiu masyva ir taip tarsi sukaupia priebalsiu kieki zodyje.

  console.log('---');
  console.log({
    'aaaaa': getNumberOfConsonants('aaaaa'),
    'sasasasa': getNumberOfConsonants('sasasasa'),
    'aeyuioąčė': getNumberOfConsonants('aeyuioąčė'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("14. Sukurkite funkciją, kuri grąžina <true>, jeigu NĖRA skaičių");
{
  function isOnlyLetters(str) {
    return /^[a-zA-ZĄąČčĘęĖėĮįŠšŲųŪūŽž]+$/.test(str);
  }
  //Regex metodu:
  // ^-nustato,kad tikrintu nuo stringo pradzios
  // nuo a-z
  //nuo A-Z
  //tada nurodomi papildomi simboliai,siuo atveju lietuviskos raides
  //+$ nustato string pabaigos pozicija
  //.test(str),nurodom ka norim tikrint
  console.log('---');
  console.log({
    'labas': isOnlyLetters('labas'),
    'kempės': isOnlyLetters('kempės'),
    '123123': isOnlyLetters('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("15. Sukurkite funkciją, kuri grąžina 'a' raidžių kiekį žodyje");
{
  function letterACount(str) {
    return Array.from(str).filter(letter => 'a'.includes(letter)).length;
  }
  console.log('---');
  console.log({
    'labas': letterACount('labas'),
    'kempės': letterACount('kempės'),
    '123123': letterACount('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("16. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje");
{
  function letterCount(str, searchLetter) {
    return [...str].filter(letter => searchLetter.includes(letter)).length;
  }
  console.log('---');
  console.log({
    'labas, a': letterCount('labas', 'a'),
    'kempės, k': letterCount('kempės', 'k'),
    '123123, z': letterCount('123123', 'z'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("17. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) 'a' raidės vietą žodyje");
{
  function lastIndexOfLetterA(str) {
    return [...str].findIndex(letter => letter === 'a')
  }
  console.log('---');
  console.log({
    'labas': lastIndexOfLetterA('labas'),
    'kempės': lastIndexOfLetterA('kempės'),
    '123123': lastIndexOfLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("18. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) vartotojo perduotos raidės vietą žodyje");
{
  function lastIndexOfLetter(str, searchLetter) {
    return [...str].findIndex(letter => letter === searchLetter);
  }
  console.log('---');
  console.log({
    'labas, a': lastIndexOfLetter('labas', 'a'),
    'kempės, k': lastIndexOfLetter('kempės', 'k'),
    '123123, z': lastIndexOfLetter('123123', 'z'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("19. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais 'a' raidės pasikartojimais žodyje");
{
  function indexesOfLetterA(str) {
    const allIndexes = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'a') {
        allIndexes.push([i])
      }
    }
    return allIndexes;
  }
  console.log('---');
  console.log({
    'labas': indexesOfLetterA('labas'),
    'kempės': indexesOfLetterA('kempės'),
    '123123': indexesOfLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("20. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais vartotojo įvestos raidės pasikartojimais žodyje");
{
  function indexesOfLetter(str, searchLetter) {
    const allIndexesOfRandom = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === searchLetter) {
        allIndexesOfRandom.push([i])
      }
    }
    return allIndexesOfRandom;
  }
  console.log('---');
  console.log({
    'labas, a': indexesOfLetter('labas', 'a'),
    'kempės, m': indexesOfLetter('kempės', 'm'),
    '123123, 2': indexesOfLetter('123123', '2'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("21. Sukurkite funkciją, kuri ištrintų pirmą surastą 'a' raidę žodyje ir grąžintų pakeistą žodį");
{
  function removeFirstLetterA(str) {
    return str.replace('a', '');
  }
  console.log('---');
  console.log({
    'labas': removeFirstLetterA('labas'),
    'kempiniukas': removeFirstLetterA('kempiniukas'),
    '123123': removeFirstLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("22. Sukurkite funkciją, kuri ištrintų paskutinę surastą 'a' raidę žodyje ir grąžintų pakeistą žodį");
{
  function removeLastLetterA(str) {
    let lastIndex = str.lastIndexOf('a');
    if (lastIndex === -1) {
      return str
    }
    return str.substr(0, lastIndex) + str.substr(lastIndex + 1);
  }
  console.log('---');
  console.log({
    'labas': removeLastLetterA('labas'),
    'kempiniukas': removeLastLetterA('kempiniukas'),
    '123123': removeLastLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("23. Sukurkite funkciją, kuri ištrintų visus 'a' raidės pasikartojimus žodyje");
{
  function removeAllOccurencesOfLetterA(str) {
    return str.replaceAll('a', '');
  }
  console.log('---');
  console.log({
    'labas': removeAllOccurencesOfLetterA('labas'),
    'kempiniukas': removeAllOccurencesOfLetterA('kempiniukas'),
    '123123': removeAllOccurencesOfLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("24. Sukurkite funkciją, kuri ištrintų visus, vartotojo įvestos raidės pasikartojimus žodyje");
{
  function removeAllOccurencesOfLetter(str, letter) {
    return str.replaceAll(letter, '');
  }
  console.log('---');
  console.log({
    'labas, a': removeAllOccurencesOfLetter('labas', 'a'),
    'kempiniukas, i': removeAllOccurencesOfLetter('kempiniukas', 'i'),
    '123123, 3': removeAllOccurencesOfLetter('123123', '3'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

// 25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.
//  Ši funkcija turi žodyje ištrinti visas raides, kurios perduotos antruoju parametru.
//  Atlikus veiksmus, grąžinti pakeistą žodį
console.groupCollapsed("25. Sukurkite funkciją, kuri pirmu parametru priimtų žodį, o antruoju - masyvą su raidėmis.");
{
  // debugger;
  // function filterLetters(str, lettersToRemove) {
  // // let strArr = [...str];
  // let newArr = str;
  // for (let i = 0; i < str.length; i++) {
  //   for (let j = 0; j < lettersToRemove.length; j++) {
  //     if (str[i] !== lettersToRemove[j]) {
  //       newArr.push(str[i]);
  //     }
  //   }
  // }
  // return newArr;
  // }

  function filterLetters(str, lettersToRemove) {
    for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < lettersToRemove.length; j++) {
        if (str[i] === lettersToRemove[j]) {
          str = str.replace(str[i], '')
          break;
          // kitas metodas:
          //str = str.slice(0,i) + str.slice(i+1);
          // i--;    // 'Brangakmienio paveikslas'
          // break;  //  0123456789
        }

      }
    }
    return str;
  }
  console.log('---');
  const str = filterLetters('Brangakmienio paveikslas', ['a', 'i']);
  console.log(str);
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("26. Sukurkite funkciją, kuri pirmu parametrų priimą sakinį, kiekvieną tarpą pakeičia brūkšneliu ir grąžina pakeistą sakinį");
{
  function replaceSpaceWithDash(str) {
    return str.trim().replaceAll(' ', '-');
  }
  console.log('---');
  console.log({
    'viens du trys': replaceSpaceWithDash('viens du trys'),
    'as tave myliu': replaceSpaceWithDash('as tave myliu'),
    'Bairis seniuk': replaceSpaceWithDash('Bairis seniuk'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("27. Sukurkite funkciją, kuri pirmu parametru priima sakinį, ir kiekvieno žodžio pirmają raidę padaro didžiąja");
{
  function capitalize(str) {
    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
  }
  console.log('---');
  console.log({
    'viens du trys': capitalize('viens du trys'),
    'as tave myliu': capitalize('as tave myliu'),
    'Bairis seniuk': capitalize('Bairis seniuk'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.groupCollapsed("28. Sukurkite funkciją, kuri atspausdina žodį atvirkščiai 'abc' -> 'cba'");
{
  function strReverse(str) {
    console.log(str.split('').reverse().join(''));
  }
  console.log('---');
  strReverse('viens du trys');
  strReverse('as tave myliu');
  strReverse('Bairis seniuk');
  console.log('---');
}
console.groupEnd();
console.log();


// 29. Sukurkite funkciją, kuri grąžina <true>, jeigu žodis yra palindromas (taip pat skaitosi iš abiejų pusių)
//  mama -> false
//  mamam -> true
//  123321 -> true
//  123456 -> false
console.groupCollapsed("29. Sukurkite funkciją, kuri grąžina <true>, jeigu žodis yra palindromas (taip pat skaitosi iš abiejų pusių)");
{
  function isPalyndrome(str) {
    if (str === str.split('').reverse().join('')) {
      return true;
    }
  }
  //let i=0;
  //let k=str.length-1;
  //while(i<k){
  //if(str[i]!==str[k]) return false;
  //}
  //return true;

  console.log('---');
  console.log({
    'mama': isPalyndrome('mama'),
    'mamam': isPalyndrome('mamam'),
    '123321': isPalyndrome('123321'),
    '123456': isPalyndrome('123456'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

// 30. Sukurkite funkciją, kuri taiso pastraipos klaidas:
//  Pirma sakinio raidė didžioji
//  Po skiriamojo ženklo tarpas, o prieš skiriamajį ženklą nėra tarpo (skiriamieji ženklai: .,!?)
//  Bet kokį kiekį tapų pakeičia vienu tarpu
//    mėgstu pieną , bet medų nelabai.labanakt. -> Mėgstu pieną, bet medų nelabai. Labanakt.
console.groupCollapsed("30. Sukurkite funkciją, kuri taiso pastraipos klaidas");
{

  function capitalizeFirstWord(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  /* 
  2.1 atskirti pagal sakinio baigimo zenklus ir juos isiminti
  2.2 pasalinti tarpus is krastu,
  2.3 grazinti objekta su dviem masyvais:
  {
    sentence: [sentence1,sentence2...],
    seperator: [!,?...visi]
  } */

  function splitIntoSentences(paragraph) {
    const result = {
      sentences: [],
      separators: [],
    };
    let sentenceStart = 0;
    for (let i = 0; i < paragraph.length; i++) {
      const elem = paragraph[i];
      if (['.', '?', '!'].includes(elem)) {
        //The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate. Includes yra case sensitive
        const sentence = capitalizeFirstWord(paragraph.slice(sentenceStart, i).trim()); //susikuriam sentence ir jam priskiriam paragrapho slice'a nuo pradzios iki skirybos zenklo,kuris yra itasis elementas for loope
        result.sentences.push(sentence);
        result.separators.push(elem);
        sentenceStart = i + 1; //sita pasirasau,kad sekantis loopas prasidetu nuo ten kur aptiktas kirybos zenklas+1,t.y.,kad eitu paragrafu toliau 
      }
    }
    return result;
  }

  function reduceEmptySpaces(str) {
    for (let i = str.length - 1; i >= 0; i--) { //iteruojam nuo stringo pabaigos i prieki
      const letter = str[i];    // susikuriam kintamaji letter,kuris yra itasis ciklo elementas
      const prevLetter = str[i - 1]; //dar vienas kintamasis kuris yra elementas esantis pries iteruojama elementa,pvz.:labas->s yra [i],o a yra [i-1]
      if ([' ', ','].includes(letter) && prevLetter === ' ') { //'jeigu paimtas stringas kuriame yra '  ' ar ',' savyje turi raide ir pries ta raide taip pat yra tarpas'
        str = str.slice(0, i - 1) + str.slice(i); //tai iskerpa tik raide? ir likusia stringo dali i desine puse,pvz '   labas'-> 'l'+'abas'='labas'??
      }
    }
    return str;
  };

  function fixParagraph(paragraph) {
    const { sentences, separators } = splitIntoSentences(paragraph); //cia yra du masyvai tarsi istraukiami is funkcijas,kurioje buvo sukurti,tam kad galima juos butu naudoti funkcijoje
    let result = ''; //cia nurodom,kad resultatas bus stringas
    for (let i = 0; i < sentences.length; i++) { //iteruojam per sentences masyva
      const sentence = reduceEmptySpaces(sentences[i]); //sukuriam kintamaji sentence,kuris tampa sutvarkytu ituoju elementu(sakiniu su normaliais tarpais)
      result += sentence + separators.shift() + ' '; //i stringa pridedam sutvarkyta sakini ir jo gale pridedam skiriamaji zenkla ir tarpa po jo.
    }
    return result;
  }
  /*1.isskaidyti i sakinius: string=>[sakinys1,sakinys2...],[separator1,separator2..]tam yra kvieciame splitIntoSentence funkcija
  3.redaguoti kiekviena sakini naudojant funkcija reduceEmptySpaces
  4.redaguoti kiekviena sakini naudojant funkcija capitalizeFirstLetter
  5.Sujungti sakinius su atitinkamais sakiniu skiriamaisiais zenklais
  6.grazinti rezultata*/


  const paragraph = '    labas , as jonas . Tave      vadina Kęstu? Taip ir žinojau  !    ';
  const fixedParagraph = fixParagraph(paragraph);

  console.log(fixedParagraph);
  console.log(paragraph);

  console.log('---');
}
console.groupEnd();
console.log();

// 31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą:
//  labas, aš esu grybas -> ['labas', 'aš', 'esu', 'grybas']
console.groupCollapsed("31. Sukurkite funkciją, kuri pirmu parametru priima sakinį ir sudeda atskirus sakinio žodžius į masyvą");
{
  function splitSentence(sentence) {
    return sentence.split(' ')
  }
  console.log('---');
  console.log({
    'Labas aš Jonas': splitSentence('Labas aš Jonas'),
    'Kėgliai yra gerai': splitSentence('Kėgliai yra gerai'),
  })
  console.log('---');
}
console.groupEnd();
console.log();


// 32. Sukurkite funkciją, kuri pirmu parametru priimą <string>'ą, o antruoju skiriklį
//  Ši funkcija turi grąžinti masyvą sudarytą iš atskirtų dalių:
//  explode('Man patinka sniegas', ' ');  -> ['man', 'patinka', 'sniegas'];  
//  explode('home/about/13', '/');        -> ['home', 'about', '13'];  
console.groupCollapsed("32. Sukurkite funkciją, kuri pirmu parametru priimą <string>'ą, o antruoju skiriklį");
{
  function explode(str, separator) {
    return str.split(separator);
  }
  console.log('---');
  console.log({
    "'Man patinka sniegas', ' '": explode('Man patinka sniegas', ' '),
    "'home/about/13', '/'": explode('home/about/13', '/'),
  })
  console.log('---');
}
console.groupEnd();
console.log();
