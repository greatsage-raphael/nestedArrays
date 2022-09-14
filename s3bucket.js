//nested for loop that loops through the array of objects and pushes the name of the person to an array

const people = [
    {
        name: "John",
        favoriteFood: "Pizza",
        calories: 168
    },
    {
        name: "Mary",
        favoriteFood: "Tacos",
        calories: 226
    },
    {
        name: "Alex",
        favoriteFood: "Chicken",
        calories: 239
    },
    {
        name: "Steve",
        favoriteFood: "Fish",
        calories: 106
    },
    {
        name: "Paul",
        favoriteFood: "Burgers",
        calories: 300
    }
];

const favs = [];

for (let i = 0; i < people.length; i++) {
    for (let key in people[i]) {
        if (key === "favoriteFood") {
            favs.push(people[i].name);
        }
    }
}

console.log(favs);

//Language: javascript
//Path: index.js
//nested array of objects with the name of the person and their favorite food
// 
// 
// 
// 
//nested for loop that loops through the array of objects and pushes the name of the person to an array
// 
const people2 = [
    {
        name: "John",
        favoriteFood: "Pizza",
        calories: 168
    },
    {
        name: "Mary",
        favoriteFood: "Tacos",
        calories: 226
    },
    {
        name: "Alex",
        favoriteFood: "Chicken",
        calories: 239
    },
    {
        name: "Steve",
        favoriteFood: "Fish",
        calories: 106
    },
    {
        name: "Paul",
        favoriteFood: "Burgers",
        calories: 300
    }
];

const favs2 = [];

for (let i = 0; i < people2.length; i++) {
        //if the value of the favoriteFood property matches the string
        if (people2[i].calories < 200) {
            favs2.push(people2[i].name)
        }
    }

    console.log(favs2);

