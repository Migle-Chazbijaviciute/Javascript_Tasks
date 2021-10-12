
class Car {
    constructor(brand, model, year, color, fuelTypes, price) {
        this.brand = brand
        this.model = model
        this.year = year
        this.color = color
        this.fuelTypes = fuelTypes
        this.price = price
    }

    getFuelType(car) {
        return car.fuelTypes
    }
}

const cars = [
    new Car('opel', 'astra', '2004', 'blue', 'diesel', 500),
    new Car('audi', 'a8', '2015', 'red', 'gasoline', 7000),
    new Car('audi', 'a6c6', '2017', 'black', 'diesel', 5000),
    new Car('toyota', 'yaris', '2010', 'white', 'electric', 5000),
    new Car('tesla', 'superduper', '2019', 'silver', 'electric', 45000),
    new Car('kia', 'sorento', '2017', 'grey', 'gasoline', 9000),
    new Car('audi', 'q7', '2020', 'black', 'hybrid', 60000),
    new Car('audi', 'q3', '2015', 'white', 'gasoline', 10000),
];

cars.forEach(car => console.log(`${car.brand} ${car.model} - ${car.fuelTypes}`));

//task5
const electricCars = cars.filter(car => car.fuelTypes === 'electric');
console.log(electricCars);

//task6
const gasoline2016 = cars.filter(car => car.year > 2016 && car.fuelTypes === 'gasoline');
console.log(gasoline2016);

//task7
const audiFrom2012To2016NotDiesel = cars.filter(car => car.brand === 'audi' && car.year > 2012 && car.year < 2016 && car.fuelTypes !== 'diesel');
console.log(audiFrom2012To2016NotDiesel);

//task8
const countAveragePrice = electricCars.reduce(((prev, current) => prev += current.price), 0) / electricCars.length;
console.log(countAveragePrice);

//task9
const totalPrice = gasoline2016.reduce(((prev, current) => prev += current.price), 0);
console.log(totalPrice);
