import { postClick } from './ajax';

var container = document.getElementById("container")

function add(event){
  console.log(postClick(convertXtoDollars(event.clientX), convertYtoDollars(event.clientY)));
  console.log(event)
  console.log(event.clientX)
  console.log(event.clientY)
}

function convertYtoDollars(yCoord){
  return "$" + Math.round(((yCoord - 100) / 6) * 100) / 100
}

function convertXtoDollars(xCoord){
  if (xCoord < 82){
    return "Clothes"
  }
  if (xCoord < 130){
    return "Eating_Out"
  }
  if (xCoord < 181){
    return "Entertainment"
  }
  if (xCoord < 236){
    return "Gas"
  }
  if (xCoord < 291){
    return "Personal Care"
  }
  if (xCoord < 346){
    return "Other"
  }

}

container.addEventListener('click', add);
