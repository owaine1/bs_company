// AIzaSyCvv0YXd1w_XI9wnAFiUsZ9VRgV-eKefgQ
function initMap() {
  var uluru = {
    lat: 22.284208,
    lng: 114.155059
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}
$(document).ready(setup);

function setup() {
  console.log('Inside setup');
  $('#send').click(sendData);
}

function sendData() {
  console.log('Inside sendData');
  var name = $('#name').val();
  var email = $('#email').val();
  var comments = $('#comments').val();
  console.log('data:' + name + ', ' + email + ', ' + comments);
var contact = {
  name: name,
  email: email,
  comments: comments
};
console.log(contact);
$.post('results.php', contact).done(success).fail(oops);
}

function success(data){
  console.log('Inside success');
  console.log(data);

}
function oops(data){
  console.log('Inside oops');
  console.log(data);

}
