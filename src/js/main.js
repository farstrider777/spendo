import $ from "jquery";

var fred = document.getElementById("container")

function add(event){
  console.log(event)
  console.log(event.clientX)
  console.log(event.clientY)
}

fred.addEventListener('click', add);
