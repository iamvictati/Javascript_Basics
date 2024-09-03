const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const para = document.createElement("p");
para.classList.add("para"); 
para.textContent = "Hey I'm red!"; 
para.style.color = "red";
container.appendChild(para); 

const h3 = document.createElement("h3"); 
h3.classList.add("h3");
h3.textContent = "I'm a blue h3!"; 
h3.style.color = "blue"; 
container.appendChild(h3);

const div2 = document.createElement("div"); 
div2.classList.add("div2"); 
// div2.textContent = "WTF"; 
div2.setAttribute("style", "background-color: pink; border-style: solid; border-color: black;"); 
const div2h1 = document.createElement("h1"); 
div2h1.textContent = "I'm in a div";
div2.appendChild(div2h1);
const div2p = document.createElement("p"); 
div2p.textContent = "ME TOO!";
div2.appendChild(div2p);
container.appendChild(div2); 
// CREATE A VARIABLE FOR EACH ELEMENT


//METHOD 2 & 3
function alertFunction() {
    alert("YAY! YOU DID IT!");
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", alertFunction); 

/* 
METHOD 2
btn.onclick = () => alert("Hello World!");  
GOOD BUT WITH THIS WE CAN ONLY HAVE ONE ONCLICK PROPERTY  
*/
/* 
METHOD 3
btn.addEventListener("click", () => {
    alert("Hello World!"); 
});  

Now, we maintain separation of concerns, and we also allow multiple event listeners if the need arises. Method 3 is much more flexible and powerful, though it is a bit more complex to set up.
*/


//This gives you insane info:
btn.addEventListener("click", function (e) {
    console.log(e);
});

//This tells you target:
btn.addEventListener("click", function (e) {
    console.log(e.target);
});

//This changes the button to blue once clicked: 
btn.addEventListener("click", function (e) {
    e.target.style.background = "blue";
});




