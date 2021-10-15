
class Car {
    constructor(brand, model, year, color, fuelTypes, price) {//jei cia isdestrukrizuojam,tai mappinant galima perduoti tiesiog objekta,o ne kiekviena savybe atskirai->({brand,model,t.t.,price})
        this.brand = brand
        this.model = model
        this.year = year
        this.color = color
        this.fuelTypes = fuelTypes //[...fuelTypes] butu geresnis variantas,nes mappintumem individualias reiksmes,o ne nuorodos tipo elementa
        this.price = price//eurais
    }

    getFuelType() {
        return this.fuelTypes.join('/')
    }
}

const cars = [
    new Car('opel', 'astra', 2004, 'blue', ['diesel', 'gas'], 500),
    new Car('audi', 'a8', 2015, 'red', ['gasoline'], 7000),
    new Car('audi', 'a6c6', 2017, 'black', ['diesel'], 5000),
    new Car('toyota', 'yaris', 2010, 'white', ['electric', 'gasoline'], 5000),
    new Car('tesla', 'superduper', 2019, 'silver', ['electric'], 45000),
    new Car('kia', 'sorento', 2017, 'grey', ['gasoline'], 9000),
    new Car('audi', 'q7', 2020, 'black', ['gasoline'], 60000),
    new Car('audi', 'q3', 2015, 'white', ['gasoline'], 10000),
];

cars.forEach(car => console.log(`${car.brand} ${car.model} - ${car.getFuelType()}`));

//task5

// const electricCars = cars.forEach(car => car.fuelTypes.filter(fuel => fuel ==='electric'));
// console.log(electricCars);
// const electricCars = [];
// cars.forEach((car, i, arr) => car.fuelTypes.filter((fuel) => (fuel == 'electric' ? electricCars.push(arr[i]) : false)));

//jeigu tik elektrines
// const electricCars = cars.filter(x => x.fuelTypes.includes('electric') && x.fuelTypes.length === 1);
// const electricCars = cars.filter(x => x.fuelTypes.every(t => t === 'electric'));
//const electricCars=cars.filter(x=>x.fuelTypes==='electric');


const electricCars = cars.filter(x => x.fuelTypes.includes('electric'));
console.log(electricCars);

//task6
const gasolineCars = [];
cars.forEach((car, i, arr) => car.fuelTypes.filter((fuel) => (fuel == 'gasoline' ? gasolineCars.push(arr[i]) : false)));
const gasoline2016 = gasolineCars.filter(car => car.year > 2016);
console.log(gasoline2016);

//task7
const audiFrom2012To2016NotDiesel = cars.filter(car =>
    car.brand === 'audi' &&
    car.year > 2012 && car.year < 2016 &&
    !car.fuelTypes.includes('diesel'));
//apacioje variantas kuris atrenka,kad nebutu tik vienas dyzelis,bet gali but kiti
// const audiFrom2012To2016NotDiesel = cars.filter(car => car.brand === 'audi' && car.year > 2012 && car.year < 2016 && car.fuelTypes !== 'diesel');
console.log(audiFrom2012To2016NotDiesel);

//task8
const countAveragePrice = electricCars.reduce(((prev, current) => prev += current.price), 0) / electricCars.length;
console.log(countAveragePrice);

//task9
const totalPrice = gasoline2016.reduce(((prev, current) => prev += current.price), 0);
console.log(totalPrice);

//task10
let eurosToDollers = 1.16;
const newCars = cars.map(car => {
    return {
        brand: car.brand,
        model: car.model,
        price: Math.round(car.price * eurosToDollers),
        fuelType: car.fuelTypes.join(',')
    };
});
// const newCars2 = cars.map(car => ({
//     brand: car.brand,
//     model: car.model,
//     price: Math.round(car.price * 1.16),
//     fuelType: car.fuelTypes.join(',')
// }));
console.log(newCars);
