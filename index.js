//nested array of objects with the name of the person and their favorite food

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

//function that takes in an array of objects and a string
//the function should return the name of the person who's favorite food matches the string

function favoriteFood(arr, str) {
    //loop through the array of objects
    for (let i = 0; i < arr.length; i++) {
        //if the value of the favoriteFood property matches the string
        if (arr[i].favoriteFood === str) {
            //return the value of the name property
            return arr[i].name;
        }
    }
}

//call the function and pass in the array of objects and a string
const fav = favoriteFood(people, "Fish");

console.log(fav);

//Language: javascript
//Path: index.js
//nested array of objects with the name of the person and their favorite food



