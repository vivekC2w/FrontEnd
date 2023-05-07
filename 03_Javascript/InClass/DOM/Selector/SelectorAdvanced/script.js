//1. innerHtml
//2. append -> it take the element and add it to the last

//-----------------Insertion Ways-----------------

//1. append -> it take the ele and add it to the last

const body = document.body;
console.dir(body);

//creation of tag

const headingTag1 = document.createElement("h1");
headingTag1.textContent = "Selector Adv Topic - ";

body.append(headingTag1);

const headingTag2 = document.createElement("h2");
headingTag2.textContent = "Selector Sub Topic - ";

body.append(headingTag2);

//2. Prepend -> inserting the ele inthe first position
const headingTag3 = document.createElement("h2");
headingTag3.textContent = "Append At the start ";
headingTag3.style.color = "red";

// body.prepend(headingTag3);

// const unorderedList = document.getElementById("names");

// const newMember = document.createElement("li");
// newMember.textContent = "Avinash";

// unorderedList.prepend(newMember);

//3. before -> inserts the elements before selected elemets.

// const unorderedList = document.getElementById("names");

// const heading = document.createElement("h1");
// heading.textContent = "Heres the list of all Engineers";

// unorderedList.before(heading);

//4. after -> inserts after the selected elements

// const unorderedList = document.getElementById("names");

// const heading = document.createElement("h1");
// heading.textContent = "This is the end of Engineers List";

// unorderedList.after(heading);

//-----------------document.write--------------

//this will take all of your html and try to replace all of it

//------------------Insertion Keys-----------------
//Insertion (insertAdjacentHtml) new methods -----------
const unorderedList = document.getElementById("names");

unorderedList.insertAdjacentHTML("afterbegin", "<li>Akash</li>");
unorderedList.insertAdjacentHTML("beforeend", "<li>Akash</li>");
// after Begin→> will act as prepend.

// before End->will act as append
// 1. before Begin
// 2. before End
// 3. after Begin
// 4. after End.
