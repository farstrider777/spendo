import $ from 'jquery';
const SERVER_URL = 'https://arcane-mountain-37553.herokuapp.com';
var url = `${SERVER_URL}/contacts`;

var info = []

function postClick (xData, yData) {
  console.log('in post click')
   return $.ajax({
      type: "POST",
      url: url,
      dataType: 'json',
      data: {
        name: xData,
        phone_number: yData
      }
  });
}

// Required:
//
// name=[string] phone_number=[string]
//
// Optional:
//
// city=[string] state=[string] photo_url=[string] email=[string]

export {postClick};
