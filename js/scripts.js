const input = document.getElementById("input-task");
const category = document.getElementById("category");

const list = document.querySelector(".task-list");
const button = document.getElementById("add-element");
// const remove = document.getElementById("#remove")

console.log(list);
console.log(button);

button.addEventListener("click", function() {
  let option = category.options[category.selectedIndex].value;
  console.log(input.value, option, option.value);

  var textnode = `<li class="item">
  <p>${input.value}</p>
  <div class="remove" onclick="remove(this)">
  <i class="fa fa-trash">usuń</i>
 
  </div>
</li>`;

  var node = document.createElement("LI"); // Create a <li> node
  //   var textnode = input.value; // Create a text node
  node.innerHTML = textnode; // Append the text to <li>
  document.getElementById(option).appendChild(node); // Append <li> to <ul> with id="myList"
});

function remove(link) {
  link.parentNode.parentNode.removeChild(link.parentNode);
}
