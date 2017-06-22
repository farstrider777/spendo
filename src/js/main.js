console.log("main is online")
var fred = document.getElementById("container")
console.log(fred)

function add(event){
  console.log(event)
  console.log(event.clientX)
  console.log(event.clientY)
}

fred.addEventListener('click', add);
