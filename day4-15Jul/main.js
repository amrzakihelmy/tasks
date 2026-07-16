//1
var car = {
    brand: "Mazda",
    model: "Mazda 3",
    year: 2023,
    color: "Red"
};

console.log(car);

//2
// dot notation
console.log(car.brand);
// bracket notation
console.log(car["year"]);

//3
car.color = "black";
car.price = 1200000;
console.log(car);

//4
delete car.year;
console.log(car.year);
// i saw undefined in console because
// we delete it so there is no year key in 
// car object

//5
var student = {
    "student-name": "Sara",
    age: 20
};

console.log(student["student-name"]);

//6
var book = {
    title: "Great Expectations",
    author: {
        firstName: "Charles",
        lastName: "Dickens"
    }
};

console.log(book.author.lastName);

//7
var person = {
    name: "Ali",
    age: 25,
    city: "Cairo"
};

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(person.hasOwnProperty("job"));

//8
var settings = {
    theme: "dark",
    lang: "en"
};

Object.freeze(settings);

settings.theme = "light";
settings.fontSize = 16;

console.log(settings);

//9
var cities = [
    "Cairo",
    "Alexandria",
    "Giza",
    "Dakahlia",
    "Aswan"
];

console.log(cities);
console.log(cities.length);

//10
console.log(cities[0]);
console.log(cities[1]);
console.log(cities[cities.length - 1]);

//11
cities.push("Luxor");
console.log(cities);

cities.unshift("Port Said");
console.log(cities);

//12
cities.pop();
console.log(cities);

cities.shift();
console.log(cities);

//13
var frontendTools = ["HTML", "CSS", "JS", "React"];
console.log(frontendTools.indexOf("JS"));
console.log(frontendTools.includes("Python"));

//14
var studentBackage = ["pen", "book", "bag"];
studentBackage.forEach(function (value){
    console.log(value);
});
studentBackage.forEach(function (value, index){
    console.log("index" + " " + index + ":" + " " + value);
});

//15
var colors = ["red", "green", "blue", "yellow"];
for (var color of colors) {
    if (color == "blue") {
        break;
    }
    console.log(color);
    
}

//16
var letters = ["A", "B", "C"];

letters.push("D");
letters.push("E");

letters.shift();

console.log(letters);
console.log(letters.length);

//17
var fruits = ["apple", "banana", "cherry"];
console.log(fruits.map(function (fruit){
    return fruit.toUpperCase();
}));
console.log(fruits);

//18
var numbers = [10, 55, 30, 80, 45, 90];
console.log(numbers.filter(function (value) {
    return value > 50
}));

//19
var cities = ["Cairo", "Giza", "Alex", "Aswan"];

var city = cities.find(function (city) {
    return city.startsWith("A");
});

var index = cities.findIndex(function (city) {
    return city.startsWith("A");
});

console.log(city);
console.log(index);

//20
var letters = ["a", "b", "c", "d", "e"];

var copy = letters.slice(1, 4);

console.log(copy);
console.log(letters);

//21
var numbers = ["one", "two", "three", "four", "five"];
console.log(numbers.splice(1, 2));
console.log(numbers);

//22
var arr = [40, 100, 1, 5, 25];
var sortedArr = arr.sort(function (a, b) { return a - b; });
console.log(sortedArr);

//23
var array = [16, 21, 17, 19];
var arrSome = array.some(function (value) {
    return value >= 18;
});
console.log(arrSome);

var arrEvery = array.every(function (value) {
    return value >= 18;
});
console.log(arrEvery);

//24
var array = [5, 10, 15, 20];
console.log(array.reduce(function (acc, current){
    return acc + current;
}, 0));

//25
var arrayOfStudents = [
    { name: "Omar",
      grade: 80 },

    { name: "Mona",
      grade: 90 },

    { name: "Ali",
      grade: 70 }
];

for (var obj of arrayOfStudents) {
    console.log(obj.name);
    console.log(obj.grade);
}

//26
var studentsGTOE80 = arrayOfStudents.filter(function (value) {
    return value.grade >= 80;
});
studentsGTOE80.map(function (value) {
    console.log(value.name);
});

//27
var arrayOfProducts = [
    {name: "cheese", 
        price: 128
    },
    {name: "butter", 
        price: 600
    },
    {name: "beans", 
        price: 451
    },
    {name: "katchap", 
        price: 16
    },            
];

var total = arrayOfProducts.reduce(function (acc, current){
    return acc + current.price;
}, 0);
console.log(total);

//28
var frontendTools = ["js", "html", "css", "js", "react", "js"];
var count = 0;
for (var element of frontendTools) {
    if (element == "js") {
        count++;
    }
}
console.log(count);

//29
var classroom = {
    teacher: "Khaled",
    students : [
        "Abdullah", 
        "Yousef",
        "Malek",
        "Abu-Shelil"
    ]
};

console.log(classroom.teacher);
console.log(classroom.students.length);
console.log(classroom.students[classroom.students.length - 1]);

//30
var array = [
    { id: 1, title: "Pen", price: 10 },
    { id: 2, title: "Book", price: 50 },
    { id: 3, title: "Bag", price: 25 }
];

var titles = array.map(function (obj) {
    return obj.title.toUpperCase();
});
console.log(titles);

var specificPrice = array.filter(function (obj) {
    return obj.price < 30;
});
console.log(specificPrice);

var total = array.reduce(function (acc, current){
    return acc + current.price;
}, 0);
console.log(total);

