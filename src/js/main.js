import { postClick } from './ajax';
import $ from 'jquery';

var container = document.getElementById('container');
var output = document.getElementById('output');
var modalBackground = document.getElementById('modalBackground');
var modalClose = document.getElementById('modalClose');
var confirmButton = document.getElementById('confirmButton');
var dollarPick = 0;
var categoryPick = "none";


function add(event){
  //console.log(postClick(convertXtoCategory(event.clientX), convertYtoDollars(event.clientY)));
  // console.log(convertYtoDollars(event.clientY))
  // console.log(event.clientY)
  sureCheck();
  dollarPick = (convertYtoDollars(event.clientY));
  categoryPick = (convertXtoCategory(event.clientX));

  output.innerHTML = `$${dollarPick} for ${categoryPick}<br>
                      you will spend $${Math.round(100 * dollarPick * 7) / 100} per week<br>
                      you will spend $${Math.round(100 * dollarPick * 30.5) / 100} per month<br>
                      you will spend $${Math.round(100 * dollarPick * 365.25) / 100} per year<br>
                      if you maintain these spending habits.<br>`;
}

function postData(event){
  console.log(postClick(convertXtoCategory(event.clientX), convertYtoDollars(event.clientY)));
  sureCheck()
}

function convertYtoDollars(yCoord){
  return Math.round((-(yCoord - 376)/4) * 100) / 100
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
  //postClick(categoryPick, dollarPick)
  if($(".modal").hasClass("is-active")){
     $(".modal").removeClass("is-active")

  }else{
    $(".modal").addClass("is-active")
  }

}

container.addEventListener('click', add);
modalClose.addEventListener('click', sureCheck);
modalBackground.addEventListener('click', sureCheck);
confirmButton.addEventListener('click', postData);
