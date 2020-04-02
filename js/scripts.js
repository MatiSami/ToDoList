const category = document.getElementById("category");
const list = document.querySelector(".task-list");
const button = document.getElementById("add-element");



button.addEventListener("click", function() {
  let option = category.options[category.selectedIndex].value;
  const list = document.querySelector(".task-list");
  const input = document.getElementById("input-task");
  let li_elements = list.getElementsByTagName("li").length


  var textnode = `<div class="item">
  <p>${input.value}</p>
  <div class="remove" onclick="remove(this)">
  <i class="fa fa-trash"></i>
  </div>
  </div>`;

  if (input.value.length > 0) {
    // główna wersja 
    var node = document.createElement("LI");
    node.innerHTML = textnode
    document.getElementById(option).appendChild(node);
    input.placeholder = "Wpisz zadanie do  wykonania...";
    input.value = "";

    console.log(li_elements)

    input.classList.remove("input-task--error");
  } else {
    input.classList.add("input-task--error");
    input.placeholder = "Musisz coś wpisać";
  }
});

function remove(link) {
  link.parentNode.parentNode.removeChild(link.parentNode);
}
