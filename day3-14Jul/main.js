//1
var name = "Ahmed Ali";
var sumOfNameCharacters = 0;
for(var ch in name)
{
    sumOfNameCharacters++;
}
console.log(sumOfNameCharacters);

//2
var sentence = "I am learning JavaScript";
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());

//3
var email = "student@nti.com";
var containAtCharacter = false;
for (var ch of email) {
    if(ch == '@')
        containAtCharacter = true;
}
console.log(containAtCharacter);

//4
var word = "JavaScript";
console.log(word[0]);
console.log(word[word.length - 1]);

//5
var text = "This is a bad day";
console.log(text.replace("bad", "good"));

//6
var phrase = "I love coding";
console.log(phrase.split(" ").join("-"));

//7
var shortParagraph = " nti egypt training ";
console.log(shortParagraph.trim()
                          .toUpperCase()
                          .replace("EGYPT", "CAIRO"));

//8
var stringNumber = "45.8";
console.log(Number(stringNumber));

//9
var num = 7.6;
console.log("Rounded: " + Math.round(num));
console.log("Floor: " + Math.floor(num));
console.log("Ceil: " + Math.ceil(num));

//10
var arrayOfNumbers = [12, 5, 28, 9];
var min = arrayOfNumbers[0], max = arrayOfNumbers[0];
for (var n of arrayOfNumbers) {
    if (n > max)
        max = n;
    if (n < min)
        min = n;
}
console.log(max);
console.log(min);

//11
var randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

//12
var price = 19.4567;
console.log(price.toFixed(2));

//13
var n1 = Math.floor(Math.random() * 50) + 1;
var n2 = Math.floor(Math.random() * 50) + 1;
var n3 = Math.floor(Math.random() * 50) + 1;
var n4 = Math.floor(Math.random() * 50) + 1;
var n5 = Math.floor(Math.random() * 50) + 1;

console.log(n1, n2, n3, n4, n5);
console.log("Largest: " + Math.max(n1, n2, n3, n4, n5));
console.log("Smallest: " + Math.min(n1, n2, n3, n4, n5));
console.log("Average: " + ((n1 + n2 + n3 + n4 + n5) / 5).toFixed(2));

//14
for (var i = 1; i <= 20; i++) {
    console.log(i);
}

//15
for (var i = 1; i <= 15; i += 2) {
    console.log(i);
}

//16
var i = 10; 
while (i >= 1) {
    console.log(i);
    i--;
}

//17
var names = ["Sara", "Omar", "Mona", "Youssef"];

for (var name of names) {
    console.log(name);
}

//18
for (var i = 1; i <= 10; i++) {
    if (i == 7)
        break;

    console.log(i);
}

//19
for (var i = 1; i <= 3; i++) {
    for (var j = 1; j <= 3; j++) {
        console.log(i + " * " + j + " = " + (i * j));
    }
}

//20
for (var i = 1; i <= 30; i++) {
    if (i == 25)
        break;

    if (i % 3 == 0)
        continue;

    console.log(i);
}

//21
var word = "HELLO";

for (var ch of word) {
    console.log(ch);
}

//22
var numbers = [10, 20, 30, 40];
var sum = 0;

for (var num of numbers) {
    sum += num;
}

console.log(sum);

//23
var sentence = "JavaScript is amazing and awesome";
var count = 0;

for (var ch of sentence) {
    if (ch == 'a' || ch == 'A')
        count++;
}

console.log(count);

//24
var grades = [70, 85, 92, 60, 77, 88];

for (var grade of grades) {
    if (grade % 2 == 0)
        console.log(grade);
}

//25
for (var i = 1; i <= 4; i++) {
    var stars = "";

    for (var j = 1; j <= i; j++) {
        stars += "* ";
    }

    console.log(stars);
}

//26
var students = ["ahmed", "sara", "omar", "laila", "hassan"];
var count = 0;

for (var student of students) {
    var upperName = student.toUpperCase();

    if (upperName.startsWith("A") || upperName.startsWith("S")) {
        console.log(upperName);
        count++;
    }
}

console.log("Matched Names: " + count);


