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
    #hp;
    #maxHp;
    #en;
    #maxEn;

    constructor(name, health, energy, armor) {
      this.armor = armor;
      this.name = name;

      this.hp = health;
      this.#maxHp = health;
      this.#maxEn = energy;
      this.en = energy;
    }
    get hp() { return this.#hp };

    set hp(newHealth) {
      if (newHealth < 0) {
        this.#hp = 0
      } else if (newHealth >= this.#maxHp) {
        this.#hp = this.#maxHp;
      } else {
        this.#hp = newHealth;
      }
    }

    get en() { return this.#en };

    set en(newEnergy) {
      if (newEnergy < 0) {
        this.#en = 0;
      } else if (newEnergy > this.#maxEn) {
        this.#en = this.#maxEn;
      } else {
        this.#en = newEnergy;
      }
    }

    get hpPerc() {
      return Number((100 * this.#hp / this.#maxHp).toFixed(2))
    };

    learnSkill(skill, { damage, desc, penetration, cost, heal }) {
      this[skill] = (enemy) => {
        if (this.#en < cost) {
          return `${this.name} attempted to use ${skill}, but didn't have enough energy!`
        }

        this.en -= cost;

        const actualArmor = enemy.armor - penetration;
        const damageDone = Math.round(100 * damage * ((100 - actualArmor) / 100)) / 100;

        enemy.hp -= damageDone;

        let notHealed = this.#hp;
        this.hp += heal;
        const healedAmount = this.hp - notHealed;
        return `${this.name} used ${skill}, ${desc}, against ${enemy.name}, doing ${damageDone} damage!` +
          (
            healedAmount > 0
              ? ` ${this.name} healed for ${healedAmount} health!`
              : ''
          ) +
          (
            enemy.hp <= damageDone
              ? ` ${enemy.name} died. `
              : ` ${enemy.name} is at ${enemy.hpPerc}% health.`
          )
      }
    }
  }
  const alice = new Player("Alice", 110, 50, 10)
  const bob = new Player("Bob", 100, 60, 20)

  alice.learnSkill("fireball", {
    damage: 23,
    penetration: 1.2,
    heal: 5,
    cost: 15,
    desc: "a firey magical attack"
  })

  console.log(alice.fireball(bob))
  // Alice used fireball, a firey magical attack, against Bob, doing
  // 18.68 damage! Alice healed for 5 health! Bob is at 81.32% health.

  bob.learnSkill("superbeam", {
    damage: 200,
    penetration: 50,
    heal: 50,
    cost: 75,
    desc: "an overpowered attack, pls nerf"
  })

  console.log(bob.superbeam(alice))
  // Bob attempted to use superbeam, but didn't have enough energy!
}
console.groupEnd();

// learnSkill(skillName, { damage, desc, penetration, cost, heal }) 
  // damage: the raw damage done (assuming 0 effective armor),
  // desc: the desc of the attack (for humans to read),
  // penetration: Armor penetration amount (see "Armor" below),
  // cost: Cost, in energy points,
  // heal: Optional heal value (some skills heal the caster on cast!)
