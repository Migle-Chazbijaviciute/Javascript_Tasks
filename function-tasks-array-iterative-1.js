const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false
  }
];
console.groupCollapsed('1. Atspausdinkite visus žmones eilutėmis');

function fullName(arr) {
  console.log(arr)
};

people.forEach(fullName);
console.groupEnd();

console.groupCollapsed('2. Atpausdinkite visus žmonių varus ir pavardes, atskirtus brūkšneliu');
{
  people.forEach((item) => { console.log(item.name + '-' + item.surname) });
}
console.groupEnd();

console.groupCollapsed('3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą');
{
  people.forEach(item => console.log(item.name, item.surname, 'is married:', item.married));
  //console.log(`${person.name} ${person.surname}: ${person.married ? 'married' : 'not married'} `);
}
console.groupEnd();

console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  function sexAndIncome(a) {
    return {
      sex: a.sex,
      income: a.income
    }
  };
};
const newPeopleArray = people.map(sexAndIncome);
console.table(newPeopleArray);
console.groupEnd();

console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');

const nameSurnameSex = people.map(function (person) {
  return {
    name: person.name,
    surname: person.surname,
    sex: person.sex
  }
});

console.table(nameSurnameSex);
console.groupEnd();

console.groupCollapsed('6. Atspausdinkite visus vyrus');

function isMale(item) {
  if (item.sex === 'male') {
    console.log(item);
  }
};
let malesOnly = people.forEach(isMale);

console.groupEnd();

console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  function isFemale(item) {
    if (item.sex === 'female') {
      console.log(item);
    }
  };
  let femalesOnly = people.forEach(isFemale);
}
console.groupEnd();

console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  function hasCar(person) {
    if (person.hasCar) {
      console.log(person.name, person.surname)
    }
  }
}
let haveCar = people.forEach(hasCar);
console.groupEnd();

console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  function isMarried(person) {
    if (person.married) {
      console.table(person)
    }
  }
};
let areMarried = people.forEach(isMarried);
console.groupEnd();

console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  let drivers = {
    males: 0,
    females: 0,
  }
  function driversBySex(person) {
    if (person.hasCar) {
      if (person.sex === 'male') drivers.males++;
      else drivers.females++;
    }
  }
  people.forEach(driversBySex);
  console.log(drivers);
}
console.groupEnd();

console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  function changeIncomeToSalary({ income, ...other }) {
    return {
      ...other,
      salary: income
    }
  }
}
let salary = people.map(changeIncomeToSalary);
console.table(salary);
console.groupEnd();

console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
  function deleteSexNameSurname({ sex, name, surname, ...other }) {
    return {
      ...other
    }
  }
}
let withoutInfo = people.map(deleteSexNameSurname);
console.table(withoutInfo);
console.groupEnd();

console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  function joinNameSurname({ surname, name, ...other }) {
    return {
      ...other,
      fullname: surname + ' ' + name
    }
  }
}
let joinedNameSur = people.map(joinNameSurname);
console.table(joinedNameSur);
console.groupEnd();

