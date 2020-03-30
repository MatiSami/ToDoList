const category = document.getElementById("category");
const list = document.querySelector(".task-list");
const button = document.getElementById("add-element");

button.addEventListener("click", function() {
  let option = category.options[category.selectedIndex].value;
  const input = document.getElementById("input-task");


  var textnode = `<li class="item">
  <p>${input.value}</p>
  <div class="remove" onclick="remove(this)">
  <i class="fa fa-trash"></i>
  </div>
  </li>`;

  if (input.value.length > 0) {
    var node = document.createElement("LI");
    node.innerHTML = textnode;
    document.getElementById(option).appendChild(node);
    input.placeholder = "Wpisz zadanie do  wykonania...";
    input.value = "";

    input.classList.remove("input-task--error");
  } else {
    input.classList.add("input-task--error");
    input.placeholder = "Musisz coś wpisać";
  }
});

function remove(link) {
  link.parentNode.parentNode.removeChild(link.parentNode);
}
