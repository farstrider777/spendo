import { postClick } from './ajax';

var container = document.getElementById("container")

function add(event){
  console.log(postClick(event.clientX, event.clientY));
  console.log(event)
  console.log(event.clientX)
  console.log(event.clientY)
}

container.addEventListener('click', add);
