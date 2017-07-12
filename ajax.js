document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */
  var requestRoot = document.querySelector('button')
  var requestPingPong = document.querySelector('button.pingpong')
  requestRoot.addEventListener('click',function(){
    $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
    dataType: 'text',
    });
  });

  requestPingPong.addEventListener('click', function(){
    $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/ping',
    method: 'GET',
    dataType: 'text',
  }).done(function(responsedata){

    console.log(responsedata);
    step3456.append(responsedata);
  });

  });


});
