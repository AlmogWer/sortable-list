const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

const richestPeople = [
  "Jess Bezos",
  "Elon Musk",
  "Bernard Arnault",
  "Mark Zuckerberg",
  "Bill Gates",
  "Larry Page",
  "Sergey Brin",
  "Larry Ellison",
  "Warren Buffett",
  "Steve Ballmer",
];

//Store listitems
const listItems = [];

let dragStartIndex;

//Insert list items into DOM
function createList() {
  [...richestPeople]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((person, index) => {
      const listItem = document.createElement("li");

      listItem.setAttribute("data-index", index);
      listItem.innerHTML = `
    <span class="number">${index + 1}</span>
    <div class="draggable" draggable="true">
    <p class="person-name">${person}</p>
    <i class="fas fa-grip-lines"></i>
    </div>
    `;
      listItems.push(listItem);
      draggable_list.appendChild(listItem);
    });
}

createList();
