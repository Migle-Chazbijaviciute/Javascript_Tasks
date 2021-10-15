//---------------------1 DALIS-------------------------------------
const peopleArray = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    age: 13,
    heigth: 1.50,
    weight: 95,
    sex: 'male',
  },
  {
    name: 'Valdas',
    surname: 'Valdaitis',
    age: 30,
    heigth: 1.95,
    weight: 55,
    sex: 'male',
  },
  {
    name: 'Skaistė',
    surname: 'Skaistaitė',
    age: 19,
    heigth: 1.65,
    weight: 85,
    sex: 'female',
  },
  {
    name: 'Janina',
    surname: 'Janinienė',
    age: 75,
    heigth: 1.48,
    weight: 95,
    sex: 'female',
  },
  {
    name: 'Aistis',
    surname: 'Aisčius',
    age: 85,
    heigth: 1.48,
    weight: 115,
    sex: 'male',
  },
  {
    name: 'Tomas',
    surname: 'Tominas',
    age: 35,
    heigth: 1.75,
    weight: 45,
    sex: 'male',
  },
  {
    name: 'Jonė',
    surname: 'Jonaitė',
    age: 12,
    heigth: 1.40,
    weight: 85,
    sex: 'female',
  },
  {
    name: 'Dalia',
    surname: 'Dalytė',
    age: 72,
    heigth: 1.65,
    weight: 95,
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
peopleArray.forEach(person => console.log(Math.round(10 * person.weight / (person.heigth ** 2)) / 10));
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
const heigthWeightAge = peopleArray.map(({ heigth, weight, age }) => ({ heigth, weight, age }));
console.log(heigthWeightAge);
//KMI indeksus
const kmi = peopleArray.map(person => Math.round(10 * person.weight / (person.heigth ** 2)) / 10);
console.log(kmi);
//KMI indeksus ir amzius
const ageKMI = peopleArray.map(({ age, weight, heigth }) => ({ age, kmi: Math.round(10 * weight / (heigth ** 2)) / 10 }));
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
  constructor({ name, surname, age, heigth, weight, sex }) {
    this.name = name,
      this.surname = surname,
      this.age = age,
      this.heigth = heigth,
      this.weight = weight,
      this.sex = sex
  }

  getBMI = () => {
    return Math.round(10 * this.weight / (this.heigth ** 2)) / 10
  }

  toString = () => {
    const { name, surname, ...rest } = this;
    return Object.entries(rest)
      .filter(([_, propVal]) => typeof propVal !== 'function')
      .reduce((propString, [name, val]) => propString + `\n\t${name}: ${val}`, `${name} ${surname}:`);
  }
};
//task0 sukuriu nauja masyva newpeople:
const newPeople = peopleArray.map(x => new Person(x));
console.table(newPeople);
//visiems kmi apskaiciuoja
newPeople.forEach(p => console.log(p.getBMI()));
//spausdina kiekviena kaip stringa
newPeople.forEach(p => console.log(p.toString()));

//task1
const woman20WeightMoreThan70 = newPeople.filter(p => p.sex === 'female' && p.age < 20 && p.weight > 70);
console.log(woman20WeightMoreThan70);

//task2 vyrai >25m; KMI<18,5
const man25KMILessThan = newPeople.filter(p => p.sex === 'male' && p.age > 25 && p.getBMI() < 18.5);
console.log(man25KMILessThan);

//task3 kids=age<18; KMI>30
const obeseKids = newPeople.filter(p => p.age < 18 && p.getBMI() > 30);
console.log(obeseKids);

//task4 pensijinis amzius bus 62m 
const pens = newPeople.filter(p => p.age > 62 && p.getBMI() > 30);
console.log(pens);

//task5 KMI>18.5 arba didesnis uz 25 NEPATENKA i reziu [18.5;25]
const toLittleOrToMuch = newPeople.filter(p => p.getBMI() < 18.5 || p.getBMI() > 25);
console.log(toLittleOrToMuch);

console.groupEnd();
