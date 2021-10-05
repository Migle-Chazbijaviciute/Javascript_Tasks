console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    const drinks = [
        { name: "lemonade", price: 50 },
        { name: "lime", price: 10 }
    ];
    function sortDrinks(a, b) {
        return a.price - b.price
    };

    drinks.sort(sortDrinks);
    console.log(drinks);
}
console.groupEnd();

console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
    function addName(obj, propName, propValue) {
        obj[propName] = propValue;
        return obj;
    }

    console.log(addName({}, "Brutus", 300));
    console.log(addName({ piano: 500 }, "Brutus", 400));
    console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));

}
console.groupEnd();

console.groupCollapsed('3 - https://edabit.com/challenge/48EJWLhF224na8po3');
{
    const relation = {
        '-3': { m: 'great grandfather', f: 'great grandmother' },
        '-2': { m: 'grandfather', f: 'grandmother' },
        '-1': { m: 'father', f: 'mother' },
        0: { m: 'me!', f: 'me!' },
        1: { m: 'son', f: 'daughter' },
        2: { m: 'grandson', f: 'granddaughter' },
        3: { m: 'great grandson', f: 'great granddaughter' },
    };

    function generation(arr, x, y) {
        return arr[x][y];
    }

    console.log(generation(relation, 2, 'f'));
    console.log(generation(relation, -3, 'm'));
    console.log(generation(relation, 0, 'f'));
}
console.groupEnd();

console.groupCollapsed('4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX');
{
    const scores = [
        { tile: "N", score: 1 },
        { tile: "K", score: 5 },
        { tile: "Z", score: 10 },
        { tile: "X", score: 8 },
        { tile: "D", score: 2 },
        { tile: "A", score: 1 },
        { tile: "E", score: 1 }
    ];
    function maximumScore(base, titleScore) {
        return base + titleScore.score;
    }
    console.log(scores.reduce(maximumScore, 0));
}
console.groupEnd();

console.groupCollapsed('5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD');
{

    function calculateDfifference(obj, limit) {
        let sum = 0;
        Object.values(obj).forEach(value => sum += value);
        return sum - limit;
    }
    console.log(calculateDfifference({ skate: 200, painting: 200, shoes: 1 }, 400));
}
console.groupEnd();

console.groupCollapsed('6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM');
{
    // const arr = { shrimp: 15, tots: 12 };
    function toArray(obj) {
        return Object.entries(obj)
    };
    console.log(toArray({ shrimp: 15, tots: 12 }));
    // console.log(Object.entries(arr));
    // for (const [key, value] of Object.entries(arr)) {
    //     console.log(`${key}: ${value}`)
    // };

}
console.groupEnd();

console.groupCollapsed('7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip');
{
    const inkLevelsar = {
        "cyan": 432,
        "magenta": 543,
        "yellow": 777
    };

    function inkLevels(inks) {
        let value = Object.values(inks);
        return Math.min(...value)
    };
    console.log(inkLevels(inkLevelsar));
}

console.groupEnd();

console.groupCollapsed('8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak');
{
    const stolenItems = {
        // tv: 30,
        // skate: 20,
        // stereo: 50,
    };

    function calculateLosses(obj) {
        const valueSum = Object.values(obj).reduce(function (sum, cost) {
            return sum += cost;
        }, 0);
        if (valueSum != 0) {
            return valueSum;
        } else {
            return 'Lucky you!'
        }
    }
    console.log(calculateLosses(stolenItems));
}
console.groupEnd();
