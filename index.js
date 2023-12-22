// Write your code here!
// const element = document.createElement("div");

// document.body.append(element);

// const ul = document.createElement("ul");
// for (let i = 0; i < 3; i++) {
//   const li = document.createElement("li");
//   li.textContent = (i + 1).toString();
//   ul.append(li);
// }

// element.append(ul);

const main = document.getElementById("main");
main.remove()

const newHeader = document.createElement("h1");

newHeader.innerHTML = "YOUR-NAME is the champion";
newHeader.setAttribute("id", "victory")

document.body.appendChild(newHeader)


