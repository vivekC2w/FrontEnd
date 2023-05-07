/*
    ...SELECTORS...
*/

//1. getElementsByTagName -> HTML collection(Array Like thing)

// let paragraphTags = document.getElementsByTagName("p");

// console.log(paragraphTags); //ReferenceError: document is not defined bcz

//2. getElementById -> Single element

// let paraElement = document.getElementById("para");

// let divId = document.getElementById("div");

// paraElement.style.color = "yellow";

// console.log(paraElement);

//3. getElementsByClass -> HTMLCollection (Array Like)
// let containerEle = document.getElementsByClassName("container");

// console.log(containerEle);

//4. querySelector -> It takes the css selector

// const paragraphQueryele = document.querySelector("div > p");
// console.log(paragraphQueryele);

//---------------Updation---------------------

//1.    innerHtml
// innerHTML: returns the HTML content of an element as a string. It also allows you to replace the HTML
//  content of an element with a new string of HTML. Note that using innerHTML can be a potential security
//   risk as it can execute arbitrary code if the input is not properly sanitized.
// const card = document.getElementById("card");

// console.log("-------card----------");
// console.dir(card);

// card.innerHTML = "Hey I am changed";
// card.innerHTML = `<h1>I am a student</h1>
// <p>lipsem lorem</p>
// `;
//this inner html is security threat as script tag can be used and js can access cookies.
//indexedDB....

//2.    textContent
// returns the text content of an element as a string, with all HTML tags removed. It does not evaluate
// any script tags, nor does it include the text from the elements that are hidden using the CSS display:none property.
//formating will be lost

//3.    innerText
// returns the visible text content of an element, including the text in the child elements of the element that are
// hidden using the CSS display:none property. It does not return any text that is rendered with CSS, such as text
// in an ::after pseudo-element.

// card.innerText = "I am inner Text";
//formating except space will ne saved, new line
// \n => new linw
// space you can use \u00A0, &nbsp
//&nbsp is an html element so it will work with <h1>I am &nbsp a student</h1>
// card.innerText = `&&&&******** <b>is</b>
// efgh
// ijkl                12324
// mnop
// qrst \u00A0 \u00A0 uvwx`;

//style
// card.style.color = "orange";

//1. select the element
const elemen = document.getElementById("names");
console.log("------------------element------------");
console.dir(elemen);

const childrens = elemen.children; //HTML Collection
//forEach will not work with html collection thats why we are converting into Array
const chilArray = Array.from(childrens);
console.log(childrens, "HTML Collection");
console.log(chilArray, "Array"); //children Array

function searchName(name) {
  return chilArray.find((liElement) => {
    return liElement.textContent === name;
  });
}

// Question -> change the last name

// chilArray[chilArray.length - 1].textContent = "Vivek";

//Addition in the DOM.......

// //1. Create element
const liElement = document.createElement("li");
console.log("lielement new ", liElement);

// //2. Edit the element -> edit the name
liElement.innerText = "Utkarsh";

// //3. Attach the new element to the unordered List
const unorderedList = document.getElementById("names");

// //Adding this in the last
// unorderedList.append(liElement);

//Way 2 -> Innerhtml

unorderedList.innerHTML = unorderedList.innerHTML + "<li> Utkarsh </li>";

//Delete or remove element

//1. select the element to be deleted / removed

const listItem = document.querySelector("#names li:nth-child(2)");

listItem.remove();
