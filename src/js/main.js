import { postClick } from './ajax';
import $ from 'jquery';

var container = document.getElementById('container');
var output = document.getElementById('output');
var sureButton = document.getElementById('sureButton');
var dollarPick = 0;
var categoryPick = "none";

function add(event){
  //console.log(postClick(convertXtoCategory(event.clientX), convertYtoDollars(event.clientY)));
  // console.log(convertYtoDollars(event.clientY))
  // console.log(event.clientY)
  dollarPick = (convertYtoDollars(event.clientY));
  categoryPick = (convertXtoCategory(event.clientX));

  output.innerHTML = `this purchase is $${dollarPick}<br>
                      you will spend $${Math.round(100 * dollarPick * 7) / 100} per week<br>
                      you will spend $${Math.round(100 * dollarPick * 30.5) / 100} per month<br>
                      you will spend $${Math.round(100 * dollarPick * 365.25) / 100} per year<br>
                      if you maintain these spending habits.<br>`;
}

function convertYtoDollars(yCoord){
  return Math.round((-(yCoord - 400)/4) * 100) / 100
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

function sureCheck(event){
  console.log(event)
  postClick(categoryPick, dollarPick)
}

container.addEventListener('click', add);
sureButton.addEventListener('click', sureCheck);
