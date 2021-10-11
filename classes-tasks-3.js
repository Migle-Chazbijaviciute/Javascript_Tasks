console.groupCollapsed('https://edabit.com/challenge/2FF7RKw9RLwc3EBY9');
{
  class Challenge {
    constructor(id, level) {
      this.id = id
      this.level = level
    }
    get points() {
      const obj = {
        "VE": 5,
        "EA": 10,
        "ME": 20,
        "HA": 40,
        "VH": 80,
        "EX": 120
      }

      for (const propertyName in obj) {
        if (propertyName == this.level) return obj[propertyName];
      }
    }
  }

  class User {
    constructor(name, xp, log) {
      this.name = name
      this.xp = xp
      this.log = log
    }
    newSolvedChallenge(challenge) {
      this.xp += challenge.points;
      this.log.push(challenge.id)
    }
  }

  // 1. Declare the class instances (two users and six challenges)
  const user1 = new User('Madam', 0, []);
  const user2 = new User('Steve', 0, []);
  const challenge1 = new Challenge(1, "VE");
  const challenge2 = new Challenge(2, "EA");
  const challenge3 = new Challenge(3, "ME");
  const challenge4 = new Challenge(4, "HA");
  const challenge5 = new Challenge(5, "VH");
  const challenge6 = new Challenge(6, "EX");
  // 2. Set the challenges solved by the users
  user1.newSolvedChallenge(challenge1);
  user1.newSolvedChallenge(challenge4);
  user1.newSolvedChallenge(challenge6);

  user2.newSolvedChallenge(challenge5);
  user2.newSolvedChallenge(challenge3);
  user2.newSolvedChallenge(challenge2);


  console.log(user1.name) //madam
  console.log(user2.xp)  //110
  console.log(user1.log) //[1,4,6]
  console.log(challenge4.level) //ha
  console.log(challenge3.id) //3
  console.log(challenge1.points) //5

}
console.groupEnd();

console.groupCollapsed('https://edabit.com/challenge/ifDM26p25bqS8EsFu');
{
  class Player {
    #hp
    #maxHp
    #en
    #maxEn

  }
}
console.groupEnd();

