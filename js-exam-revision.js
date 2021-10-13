//---------------------1 DALIS-------------------------------------
peopleArray = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    age: 18,
    heigth: 1.90,
    weight: 85,
    sex: 'male',
  },
  {
    name: 'Valdas',
    surname: 'Valdaitis',
    age: 30,
    heigth: 1.65,
    weight: 55,
    sex: 'male',
  },
  {
    name: 'Skaistė',
    surname: 'Skaistaitė',
    age: 23,
    heigth: 1.65,
    weight: 85,
    sex: 'female',
  },
  {
    name: 'Janina',
    surname: 'Janinienė',
    age: 45,
    heigth: 1.48,
    weight: 45,
    sex: 'female',
  },
  {
    name: 'Aistis',
    surname: 'Aisčius',
    age: 25,
    heigth: 1.88,
    weight: 75,
    sex: 'male',
  },
  {
    name: 'Tomas',
    surname: 'Tominas',
    age: 35,
    heigth: 1.75,
    weight: 65,
    sex: 'male',
  },
  {
    name: 'Jonė',
    surname: 'Jonaitienė',
    age: 55,
    heigth: 1.72,
    weight: 98,
    sex: 'female',
  },
  {
    name: 'Dalia',
    surname: 'Dalytė',
    age: 32,
    heigth: 1.80,
    weight: 55,
    sex: 'female',
  }
];
console.groupCollapsed('PIRMA DALIS');

console.groupCollapsed('Task2.forEach');
//task2 .foreach
//- Atspausdinti kiekvieną elementą
peopleArray.forEach(person => console.log(person));
//- Atspausdinti kiekvieno elemento pilną vardą
peopleArray.forEach(person => console.log(`${person.name} ${person.surname}`));
//- Atspausdinti kiekvieno elemento kūno masės indeksą
peopleArray.forEach(person => console.log(person.weight / (person.heigth ** 2)));
console.groupEnd();

console.groupCollapsed('Task3.filter');
//task3 .filter
// - kurių vardas ilgesnis nei 6 simboliai
const longerThan6 = peopleArray.filter(person => person.name.length > 6);
console.log(longerThan6);
// - kurių svoris didesnis nei 80kg
const weightsMoreThan80 = peopleArray.filter(person => person.weight > 80);
console.log(weightsMoreThan80);
// - kurie aukštesni nei 185cm
const higtherThan185 = peopleArray.filter(person => (person.heigth * 100) > 185);
console.log(higtherThan185);
console.groupEnd();

console.groupCollapsed('Task4.map');
//task4 .map 
//ugiai
const heigths = peopleArray.map(person => person.heigth);
console.log(heigths);
//svoriai
const weights = peopleArray.map(person => person.weight);
console.log(weights);
//ugiai,svoriai ir amziai
// function heigthWeightAge(person) {
//   return {
//     heigth: person.heigth,
//     weight: person.weight,
//     age: person.age
//   }
// };
// console.log(peopleArray.map(heigthWeightAge));
const heigthWeightAge = peopleArray.map(({ heigth, weight, age, ...other }) => ({ heigth, weight, age }));
console.log(heigthWeightAge);
//KMI indeksus
const kmi = peopleArray.map(person => person.weight / (person.heigth ** 2));
console.log(kmi);
//KMI indeksus ir amzius
const ageKMI = peopleArray.map(({ age, weight, heigth }) => ({ age, kmi: (weight / (heigth ** 2)) }));
console.log(ageKMI);
console.groupEnd();

console.groupCollapsed('Task5.reduce');
//task5 .reduce
//svoriu vidurki
const avgWeight = peopleArray.reduce(((prevValue, { weight }) => prevValue += weight), 0) / peopleArray.length;
console.log(avgWeight);
//ugiu vidurki
const avgHeigth = peopleArray.reduce(((prevValue, { heigth }) => prevValue += heigth), 0) / peopleArray.length;
console.log(avgHeigth);
console.groupEnd();
console.groupEnd();

//----------------------------2 DALIS----------------------------------
console.group('ANTRA DALIS');
class Person {
  constructor(name, surname, age, heigth, weight, sex) {
    this.name = name
    this.surname = surname
    this.age = age
    this.heigth = heigth
    this.weight = weight
    this.sex = sex
  }

  getBMI() {
    return this.weight / (this.heigth ** 2)
  }

  toString() {
    console.log();
  }
};

const newPeople = [
  new Person('Jonas', 'Jonaitis', 18, 1.90, 85, 'male'),
  new Person('Valdas', 'Valdaitis', 30, 1.65, 55, 'male'),
  new Person('Skaistė', 'Skaistaitė', 23, 1.65, 85, 'female'),
  new Person('Janina', 'Janinienė', 45, 1.48, 45, 'female'),
  new Person('Aistis', 'Aisčius', 25, 1.88, 75, 'male'),
  new Person('Tomas', 'Tominas', 35, 1.75, 65, 'male'),
  new Person('Jonė', 'Jonaitienė', 55, 1.72, 98, 'female'),
  new Person('Dalia', 'Dalytė', 32, 1.80, 55, 'female')
]
console.log(newPeople);
console.groupEnd();
