// var myFirstName = "Chris"
// var myLastName = "Lyma"
// var myAge = "31"

// console.log("Hello, " + myFirstName + " " + myLastName + " " + "and i am " + myAge + " years old");

// var myNewList=
//     "<ul>\n" +
//       "<li>I am item 1</li>\n" +
//       "<li>I am item 2</li>\n" +
//       "<li>I am item 3</li>\n" +
//      "</ul>";

// var thisList="my name"
// console.log(thisList);

// var myNewList= "\
//     <ul>\n\
//        <li>I am item 1</li>\n\
//        <li>I am item 2</li>\n\
//        <li>I am item 3</li>\n\
//        <li>I am item 4</li>\n\
//      </ul>";

// console.log(myNewList);

// const myDiv = document.getElementById("myDiv");
// myDiv.innerHTML = myNewList; 

// es6 code Bellow

const myOtherNewList = 
   `<ul>
    <li> I am es6 item 1</li>
    <li> I am es6 item 2</li>
    <li> I am es6 item 3</li>
    <li> I am es6 item 4</li>
    <li> I am es6 item 5</li>
  </ul>`;

myDiv = document.getElementById("myDiv");
myDiv.innerHTML = myOtherNewList;

const first = "Sally";
const last = "Smith";
const age = 52;

console.log(`Hello ${first} ${last}. You are ${age} today.`);

// different way
const fullName = `${first} ${last} matherw`;

console.log(`hello ${fullName}`);

const dateNow = new Date();
console.log(`Today is: ${dateNow.toLocaleString()}`);

console.log(`Result of total ages is ${50+50}`);

const myArray = [1, 2, 3, 4, 5];

// myArray.map((num)=> {
//   console.log(num + 5 );
// }); 

// const newArray = myArray.map((num) => num +5 );
// console.log(newArray)

// console.log(`${myArray.map((num) => `${num +5}`)}`);

// console.log(`${myArray.map((num) => `your result is ${num +5}`)}`);

const pizzaToppings = ["cheese", "mushrooms", "pineapple", "sause"];

const myPizzaArticle = (
  `<article>
      <h1>Pizza Ingredients</h1>
      <ul>
        ${pizzaToppings.map((ingredient) => `<li>${ingredient}</li>`).join("\n        ")}
       </ul>
    </article>`
   );
console.log(myPizzaArticle);

pizzaDiv = document.getElementById("myPizza");

pizzaDiv.innerHTML = myPizzaArticle;


function templateParser(arrayOfStrings, expression1, expression2){
  console.log(`"${arrayOfStrings}", "${expression1}", "${expression2}"`).join("");
}

const person = " Chriss Smith";
const personAge = 21;
const myTempalteLiteral = templateParser `I am ${person}, aged ${personAge}`












