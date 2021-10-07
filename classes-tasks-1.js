/*
1. Sukurti klasę Automobilis
  - sukurti konstruktorių, su 3 argumentais:
    - marke, modelis, kaina

  - konstruktoriuje aprašyti, jog perduotus argumentus išsaugotume formuojame objekte savybėmis:
    - this.brand
    - this.model
    - this.price
*/
class Automobilis {
  constructor(marke, modelis, kaina) {
    this.brand = marke;
    this.model = modelis;
    this.price = kaina;
  }

  increasePrice(amount) {
    this.price += amount;
  }
};
/*

2. Sukurkite 3 skirtingus objektus pagal klasę Automobilis kintamuosiuose:
  - const car1 = new Automobilis(..., ..., ...);
  - const car2 = new Automobilis(..., ..., ...);
  - const car3 = new Automobilis(..., ..., ...);
*/
const car1 = new Automobilis('Peugeot', '406 Coupe', 3000);
const car2 = new Automobilis('Peugeot', '407', 3400);
const car3 = new Automobilis('Peugeot', '408', 2300);


/*
3. Atsispausdinkite car1, car2 ir car3 kintamuosius. Peržiūrėkite juos konsolėje, panagrinėkite kas yra tie objektai
*/
console.table({
  car1,
  car2,
  car3
})
/*
4. Atspausdinkite visų kintamųjų (kurie rodo į klasės objektus):
  modelius:
    - console.log(car1.model);
    - console.log(car2.model);
    - console.log(car3.model);
  markes:
    - console.log(car1.brand);
    - console.log(car2.???);
    - console.log(???);
  kainas:
    - console.log(???);
    - console.log(???);
    - console.log(???);
*/
console.log('Modeliai:');
console.log(car1.model);
console.log(car2.model);
console.log(car3.model);
console.log('---------');
console.log('Markes:');
console.log(car1.brand);
console.log(car2.brand);
console.log(car3.brand);
console.log('---------');
console.log('Kainos:');
console.log(car1.price);
console.log(car2.price);
console.log(car3.price);
/*
5. Padidinkite Automobilis objektų kainas šimtu.
car1.price = car1.price + 100;
car2.price = ??? + 100;
???
kitas budas:
car1.price=car1.price+100 ir taip su visom ir tokiu atveju nereikia metodo,bet su metodu daryti irgi 
*/
allCars = [car1, car2, car3];
allCars.forEach(car => car.increasePrice(100));

/*

6. Po padidinimo, vėl atsispausdinkite objektus ir pažiūrėkite pakitusias Automobilis objektų savybes.

*/
console.table(allCars);
