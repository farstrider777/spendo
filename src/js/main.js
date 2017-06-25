import { postClick } from './ajax';
import $ from 'jquery';

var container = document.getElementById('container');
var output = document.getElementById('output');

function add(event){
  console.log(postClick(convertXtoCategory(event.clientX), convertYtoDollars(event.clientY)));
  console.log(event)
  console.log(event.clientX)
  console.log(event.clientY)
  output.innerHTML = `this purchase is $${convertYtoDollars(event.clientY)}<br>
                      you will spend $${Math.round(100 * convertYtoDollars(event.clientY) * 7) / 100} per week<br>
                      you will spend $${Math.round(100 * convertYtoDollars(event.clientY) * 30.5) / 100} per month<br>
                      you will spend $${Math.round(100 * convertYtoDollars(event.clientY) * 365.25) / 100} per year<br>
                      if you maintain these spending habits`
}

function convertYtoDollars(yCoord){
  return Math.round(((yCoord - 100) / 6) * 100) / 100
}

function convertXtoCategory(xCoord){
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
