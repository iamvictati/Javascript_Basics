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
div2.setAttribute("style", "background-color: pink; border-style: solid; border-color: black;"); 

container.appendChild(div2); 



 



/*
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

*/