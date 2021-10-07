'use strict';
console.groupCollapsed('1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY');
{
  class Player {
    constructor(name, age, height, weight) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }

    getAge() {
      return `${this.name} is age ${this.age}`;
    }

    getHeight() {
      return `${this.name} is ${this.height} cm`;
    }

    getWeight() {
      return `${this.name} is ${this.weight} kg`;
    }
  }

  const p1 = new Player("David Jones", 25, 175, 75);

  console.log({
    "David Jones is age 25": p1.getAge(),
    "David Jones is 175cm": p1.getHeight(),
    "David Jones weighs 75kg": p1.getWeight(),
  });
}
console.groupEnd();

console.groupCollapsed('2. - https://edabit.com/challenge/yxKoCKemzacK6PECM');
{
  class Calculator {
    constructor(digit1, digit2) {
      this.dig1 = digit1;
      this.dig2 = digit2;
    }
    add(dig1, dig2) {
      return dig1 + dig2;
    }
    subtract(dig1, dig2) {
      return dig1 - dig2;
    }
    multiply(dig1, dig2) {
      return dig1 * dig2;
    }
    divide(dig1, dig2) {
      return dig1 / dig2;
    }
  }
  const calculator = new Calculator(10, 5);
  console.log({
    'add': calculator.add(10, 5),

    'substract': calculator.subtract(10, 5),

    'multiply': calculator.multiply(10, 5),

    'divide': calculator.divide(10, 5)
  });
}
console.groupEnd();

console.groupCollapsed('3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS');
{
  class Employee {
    constructor(firstname, lastname) {
      this.firstname = firstname
      this.lastname = lastname
      this.fullname = firstname + ' ' + lastname
      this.email = (firstname + '.' + lastname + '@company.com').toLowerCase()
    }
    getFirstname(firstname) {
      return firstname
    }

    getFullname(firstname, lastname) {
      return firstname + ' ' + lastname;
    }

    getEmail(firstname, lastname) {
      return (firstname + '.' + lastname + '@company.com').toLowerCase();
    }
  }
  const emp1 = new Employee("John", "Smith");
  const emp2 = new Employee("Mary", "Sue");
  const emp3 = new Employee("Antony", "Walker");

  console.log({
    'fullname': emp1.getFullname("John", "Smith"),
    'email': emp2.getEmail("Mary", "Sue"),
    'name': emp3.getFirstname("Antony", "Walker"),
  })

}
console.groupEnd();

console.groupCollapsed('4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu');
{
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    compareAge(other) {
      if (this.age < other.age) {
        return `${other.name} is older than me`
      } else if (this.age > other.age) {
        return `${other.name} is younger than me`
      } else {
        return `${other.name} is the same age as me`
      }
    }
  }
  const p1 = new Person("Samuel", 24);
  const p2 = new Person("Joel", 36);
  const p3 = new Person("Lily", 24);

  console.log({
    'Samuel 24 compare with Joel 36': p1.compareAge(p2),
    'Joel 36 compare with Samuel 24': p2.compareAge(p1),
    'Samuel 24 compare with Lily 24': p1.compareAge(p3),
  })
}
console.groupEnd();

console.groupCollapsed('5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ');
{
  class Rectangle {
    constructor(sideA, sideB) {
      this.sideA = sideA
      this.sideB = sideB
    }
    getArea() { return this.sideA * this.sideB }
    getPerimeter() { return (this.sideA + this.sideB) * 2 }
  }


  class Circle {
    constructor(r) {
      this.r = r
    }
    getArea() { return (Math.PI * this.r) ** 2 }
    getPerimeter() { return (Math.PI * this.r) * 2 }
  }


  // unquote and use run to test these cases:
  let rect = new Rectangle(2, 4)
  console.log(rect.getArea());
  console.log(rect.getPerimeter());

  let q = new Circle(4);
  console.log(q.getArea());
  console.log(q.getPerimeter());
}
console.groupEnd();

console.groupCollapsed('6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b');
{
  class Name {
    constructor(fname, lname) {
      this.firstname = fname.charAt(0).toUpperCase() + fname.slice(1).toLowerCase() //paemiau pirma raide padariau ja didziaja,tada su slice nuo pirmo indekso atslicinau likusi zodi ir grazinau mazosiomis
      this.lastname = lname.charAt(0).toUpperCase() + lname.slice(1).toLowerCase()
      this.fullname = this.firstname + ' ' + this.lastname//cia reikia rasyti vietoj lname ir fname this.firstname ir this.lastname,nes kitu atveju konsolej grazina nesutvarkytus zodzius
      //edabite this.firstname ir this.lastname,reikejo pakeisti i this.fname ir this,lname,nes kitaip rode undefinied
      this.initials = `${fname[0]}.${lname[0]}`.toUpperCase()
    }

  }
  const a1 = new Name("john", "SMITH")
  console.log(a1.firstname)
  console.log(a1.lastname)
  console.log(a1.fullname)
  console.log(a1.initials)
}
console.groupEnd();

console.groupCollapsed('7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke');
{
  class IceCream {
    constructor(flavor, numSprinkles) {
      this.flavor = flavor
      this.numSprinkles = numSprinkles
    }
  }

  function sweetestIcecream(arr) {
    const flavors = {
      'Plain': 0,
      'Vanilla': 5,
      'ChocolateChip': 5,
      'Strawberry': 10,
      'Chocolate': 10,
    };
    const countValue = arr.map(({ flavor, numSprinkles }) => flavors[flavor] + numSprinkles);
    return Math.max(...countValue);
  };
  const ice1 = new IceCream("Chocolate", 13)         // value of 23
  const ice2 = new IceCream("Vanilla", 0)           // value of 5
  const ice3 = new IceCream("Strawberry", 7)        // value of 17
  const ice4 = new IceCream("Plain", 18)             // value of 18
  const ice5 = new IceCream("ChocolateChip", 3)      // value of 8

  console.log(sweetestIcecream([ice1]));
  console.log(sweetestIcecream([ice2]));
  console.log(sweetestIcecream([ice3]));
  console.log(sweetestIcecream([ice4]));
  console.log(sweetestIcecream([ice5]));

};
console.groupEnd();

console.groupCollapsed('8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi');
{
  class OnesThreesNines {
    constructor(number) {
      this.ones = Math.floor(number / 1); //paimam gauta numeri ir dalinam is vieneto,o math.floor suapvalina iki mazesnio artimiausio skaiciaus,todel suzinom kiek kartu vienetas telpa i gauta numeri pvz.:4,5/1=4,nes pilnai vienetas telpa tik keturis kartus
      this.threes = Math.floor(number / 3);
      this.nines = Math.floor(number / 9);
    }
  }
  const number1 = new OnesThreesNines(5);
  console.log({
    'nines 5/9': number1.nines,
    'ones 5/1': number1.ones,
    'threes 5/3': number1.threes,
  });
}
console.groupEnd();

console.groupCollapsed('9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp');
{

  class User {
    static userCount = 0;

    constructor(username) {
      this.username = username;
      this.userCount = User.userCount++;
    }
  }

  const u1 = new User("johnsmith10");
  const u2 = new User("marysue1989");
  const u3 = new User("milan_rodrick");
  console.log(User.userCount);
  console.log(u1.username);

}
console.groupEnd();

console.groupCollapsed('10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn');
{
  //Tokius budu daryti irgi galima:
  // function Book(title, author) {

  //   this.title = title;
  //   this.author = author;
  //   this.getTitle = function () {
  //     return `Title: ${this.title}`
  //   }
  //   this.getAuthor = function () {
  //     return `Author: ${this.author}`
  //   }
  // }


  class Book {
    constructor(title, author) {
      this.title = title
      this.author = author
    }
    getTitle() {
      return `Title: ${this.title}`
    };
    getAuthor() {
      return `Author: ${this.author}`
    };
  }
  const PP = new Book('Pride and Prejudice', 'Jane Austen');
  const H = new Book('Hamlet', 'William Shakespeare');
  const WP = new Book('War and Peace', 'Leo Tolstoy');

  console.log(PP.title);
  console.log(PP.getTitle());
}
console.groupEnd();

